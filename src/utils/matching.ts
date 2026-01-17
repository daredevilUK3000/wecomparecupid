import { DatingSite } from '../data/datingSites';
import { UserPreferences } from '../data/preferences';

export interface MatchResult extends DatingSite {
  matchScore: number;
  reasons: string[];
  warnings: string[];
}

export function calculateMatchScore(site: DatingSite, preferences: UserPreferences): MatchResult {
  let score = 0;
  const reasons: string[] = [];
  const warnings: string[] = [];
  const maxScore = 100;

  // Relationship goal matching (25 points)
  if (preferences.relationshipGoal === 'any') {
    score += 15;
    reasons.push('Open to any relationship type');
  } else if (preferences.relationshipGoal === 'casual' && ['mainstream', 'casual'].includes(site.category)) {
    score += 25;
    reasons.push('Great for casual dating');
  } else if (preferences.relationshipGoal === 'serious' && ['serious', 'premium'].includes(site.category)) {
    score += 25;
    reasons.push('Focused on serious relationships');
  } else if (preferences.relationshipGoal === 'marriage' && site.category === 'serious') {
    score += 25;
    reasons.push('Marriage-minded users');
  } else {
    score += 10;
    warnings.push('May not align with your relationship goals');
  }

  // Budget matching (20 points)
  if (preferences.budget === 'any') {
    score += 15;
  } else if (preferences.budget === 'free' && site.pricing.free) {
    score += 20;
    reasons.push('Free to use');
  } else if (preferences.budget === 'free' && !site.pricing.free) {
    score += 0;
    warnings.push('No free option available');
  } else {
    const sitePrice = extractPrice(site.pricing.premium);
    const budgetMatch = checkBudgetMatch(sitePrice, preferences.budget);
    if (budgetMatch) {
      score += 20;
      reasons.push('Within your budget');
    } else {
      score += 5;
      warnings.push('May exceed your budget');
    }
  }

  // User base importance (15 points)
  const userBaseSize = extractUserBase(site.demographics.userBase);
  if (preferences.importance.userBase >= 4 && userBaseSize > 30) {
    score += 15;
    reasons.push('Large user base');
  } else if (preferences.importance.userBase <= 2) {
    score += 10;
  } else {
    score += Math.min(15, userBaseSize / 3);
  }

  // Features importance (15 points)
  if (preferences.importance.features >= 4 && site.features.length >= 5) {
    score += 15;
    reasons.push('Feature-rich platform');
  } else if (preferences.importance.features <= 2) {
    score += 10;
  } else {
    score += Math.min(15, site.features.length * 2);
  }

  // Safety importance (10 points)
  if (preferences.importance.safety >= 4) {
    if (site.features.some(f => f.toLowerCase().includes('verification') || f.toLowerCase().includes('background'))) {
      score += 10;
      reasons.push('Strong safety features');
    } else {
      score += 5;
      warnings.push('Limited safety features');
    }
  } else {
    score += 8;
  }

  // Rating bonus (10 points)
  score += Math.min(10, site.rating * 2);

  // Age range compatibility (5 points)
  const siteAgeRange = parseAgeRange(site.demographics.ageRange);
  if (hasAgeOverlap(preferences.ageRange, siteAgeRange)) {
    score += 5;
    reasons.push('Good age range match');
  } else {
    warnings.push('Age range may not align');
  }

  return {
    ...site,
    matchScore: Math.min(maxScore, Math.round(score)),
    reasons,
    warnings
  };
}

function extractPrice(priceString: string): number {
  const match = priceString.match(/\$(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

function checkBudgetMatch(price: number, budget: string): boolean {
  switch (budget) {
    case 'low': return price <= 15;
    case 'medium': return price <= 30;
    case 'high': return price > 30;
    default: return true;
  }
}

function extractUserBase(userBaseString: string): number {
  const match = userBaseString.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

function parseAgeRange(ageRangeString: string): [number, number] {
  const match = ageRangeString.match(/(\d+)-(\d+)/);
  return match ? [parseInt(match[1]), parseInt(match[2])] : [18, 65];
}

function hasAgeOverlap(userRange: [number, number], siteRange: [number, number]): boolean {
  return userRange[0] <= siteRange[1] && userRange[1] >= siteRange[0];
}

export function rankSites(sites: DatingSite[], preferences: UserPreferences): MatchResult[] {
  return sites
    .map(site => calculateMatchScore(site, preferences))
    .sort((a, b) => b.matchScore - a.matchScore);
}
