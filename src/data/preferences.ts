export interface UserPreferences {
  ageRange: [number, number];
  location: string;
  relationshipGoal: 'casual' | 'serious' | 'marriage' | 'friends' | 'any';
  budget: 'free' | 'low' | 'medium' | 'high' | 'any';
  importance: {
    userBase: number; // 1-5 scale
    features: number;
    safety: number;
    matching: number;
    communication: number;
  };
  dealBreakers: string[];
  interests: string[];
}

export const defaultPreferences: UserPreferences = {
  ageRange: [25, 35],
  location: '',
  relationshipGoal: 'any',
  budget: 'any',
  importance: {
    userBase: 3,
    features: 3,
    safety: 4,
    matching: 4,
    communication: 3
  },
  dealBreakers: [],
  interests: []
};

export const relationshipGoals = [
  { id: 'casual', name: 'Casual Dating', description: 'Fun, no-pressure dating' },
  { id: 'serious', name: 'Serious Relationship', description: 'Long-term commitment' },
  { id: 'marriage', name: 'Marriage', description: 'Looking for life partner' },
  { id: 'friends', name: 'Friends', description: 'Platonic connections' },
  { id: 'any', name: 'Open to Anything', description: 'See what happens' }
];

export const budgetOptions = [
  { id: 'free', name: 'Free Only', description: 'No paid features' },
  { id: 'low', name: 'Low ($1-15/month)', description: 'Basic premium features' },
  { id: 'medium', name: 'Medium ($15-30/month)', description: 'Standard premium' },
  { id: 'high', name: 'High ($30+/month)', description: 'Premium experience' },
  { id: 'any', name: 'Any Budget', description: 'Price not important' }
];

export const commonInterests = [
  'Travel', 'Fitness', 'Music', 'Movies', 'Books', 'Cooking', 'Art', 'Sports',
  'Photography', 'Gaming', 'Dancing', 'Hiking', 'Yoga', 'Wine', 'Coffee',
  'Technology', 'Fashion', 'Pets', 'Volunteering', 'Entrepreneurship'
];

export const dealBreakers = [
  'Smoking', 'Drinking', 'No photos', 'Incomplete profiles', 'Long distance',
  'Different religion', 'Different politics', 'Has children', 'Wants children',
  'No college education', 'Unemployed', 'Lives with parents'
];
