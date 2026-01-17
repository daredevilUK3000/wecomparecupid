export interface DatingSite {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: 'mainstream' | 'niche' | 'premium' | 'casual' | 'serious';
  pricing: {
    free: boolean;
    premium: string;
    currency: string;
  };
  demographics: {
    ageRange: string;
    genderRatio: string;
    userBase: string;
  };
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  reviewCount: number;
  website: string;
  matchScore?: number;
}

export const datingSites: DatingSite[] = [
  {
    id: 'tinder',
    name: 'Tinder',
    logo: '💕',
    description: 'The world\'s most popular dating app with swipe-based matching',
    category: 'mainstream',
    pricing: {
      free: true,
      premium: '$9.99-29.99/month',
      currency: 'USD'
    },
    demographics: {
      ageRange: '18-35',
      genderRatio: '52% male, 48% female',
      userBase: '75+ million'
    },
    features: [
      'Swipe matching',
      'Super Likes',
      'Boost feature',
      'Passport (location change)',
      'Video chat'
    ],
    pros: [
      'Huge user base',
      'Easy to use',
      'Quick matches',
      'Free version available'
    ],
    cons: [
      'Hookup reputation',
      'Limited profile info',
      'Many inactive profiles'
    ],
    rating: 4.2,
    reviewCount: 2847,
    website: 'https://tinder.com'
  },
  {
    id: 'bumble',
    name: 'Bumble',
    logo: '🐝',
    description: 'Women-first dating app where women make the first move',
    category: 'mainstream',
    pricing: {
      free: true,
      premium: '$12.99-32.99/month',
      currency: 'USD'
    },
    demographics: {
      ageRange: '22-40',
      genderRatio: '46% male, 54% female',
      userBase: '42+ million'
    },
    features: [
      'Women message first',
      'BFF mode (friends)',
      'Bizz mode (networking)',
      'Video calls',
      'Profile verification'
    ],
    pros: [
      'Empowers women',
      'Quality conversations',
      'Multiple modes',
      'Safety features'
    ],
    cons: [
      'Time pressure (24h limit)',
      'Smaller user base',
      'Premium features expensive'
    ],
    rating: 4.1,
    reviewCount: 1923,
    website: 'https://bumble.com'
  },
  {
    id: 'hinge',
    name: 'Hinge',
    logo: '💖',
    description: 'Designed to be deleted - focused on serious relationships',
    category: 'serious',
    pricing: {
      free: true,
      premium: '$19.99-39.99/month',
      currency: 'USD'
    },
    demographics: {
      ageRange: '24-36',
      genderRatio: '49% male, 51% female',
      userBase: '23+ million'
    },
    features: [
      'Detailed profiles',
      'Conversation starters',
      'Most Compatible matches',
      'We Met feedback',
      'Voice prompts'
    ],
    pros: [
      'Relationship-focused',
      'Detailed profiles',
      'Quality matches',
      'Great conversation starters'
    ],
    cons: [
      'Limited daily likes',
      'Smaller user base',
      'Can be overwhelming'
    ],
    rating: 4.3,
    reviewCount: 1654,
    website: 'https://hinge.co'
  },
  {
    id: 'match',
    name: 'Match.com',
    logo: '❤️',
    description: 'The pioneer of online dating with comprehensive matching',
    category: 'serious',
    pricing: {
      free: false,
      premium: '$20.99-45.99/month',
      currency: 'USD'
    },
    demographics: {
      ageRange: '30-55',
      genderRatio: '51% male, 49% female',
      userBase: '30+ million'
    },
    features: [
      'Advanced search filters',
      'Daily matches',
      'Reverse matches',
      'Match events',
      'Background checks'
    ],
    pros: [
      'Serious daters',
      'Comprehensive profiles',
      'Proven track record',
      'Safety features'
    ],
    cons: [
      'Expensive',
      'No free messaging',
      'Older interface',
      'Fake profiles'
    ],
    rating: 3.8,
    reviewCount: 3421,
    website: 'https://match.com'
  },
  {
    id: 'eharmony',
    name: 'eHarmony',
    logo: '💍',
    description: 'Scientific approach to finding long-term relationships',
    category: 'serious',
    pricing: {
      free: false,
      premium: '$35.90-65.90/month',
      currency: 'USD'
    },
    demographics: {
      ageRange: '28-50',
      genderRatio: '48% male, 52% female',
      userBase: '16+ million'
    },
    features: [
      'Compatibility matching',
      '29-dimension personality test',
      'Guided communication',
      'Secure call feature',
      'What If matches'
    ],
    pros: [
      'Marriage-focused',
      'Scientific matching',
      'High success rate',
      'Quality users'
    ],
    cons: [
      'Very expensive',
      'Long signup process',
      'Limited control over matches',
      'Conservative approach'
    ],
    rating: 4.0,
    reviewCount: 2156,
    website: 'https://eharmony.com'
  }
];

export const categories = [
  { id: 'all', name: 'All Sites', count: datingSites.length },
  { id: 'mainstream', name: 'Mainstream', count: datingSites.filter(s => s.category === 'mainstream').length },
  { id: 'serious', name: 'Serious Dating', count: datingSites.filter(s => s.category === 'serious').length },
  { id: 'premium', name: 'Premium', count: datingSites.filter(s => s.category === 'premium').length },
  { id: 'niche', name: 'Niche', count: datingSites.filter(s => s.category === 'niche').length },
  { id: 'casual', name: 'Casual', count: datingSites.filter(s => s.category === 'casual').length }
];
