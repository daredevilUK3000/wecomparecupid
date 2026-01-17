import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Heart, ThumbsUp, ThumbsDown, MessageSquare, Filter } from 'lucide-react';
import { datingSites } from '@/data/datingSites';
import { Link } from 'react-router-dom';

interface Review {
  id: string;
  siteId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  date: string;
  helpful: number;
  verified: boolean;
}

const mockReviews: Review[] = [
  {
    id: '1',
    siteId: 'tinder',
    userName: 'Sarah M.',
    rating: 4,
    title: 'Great for meeting people quickly',
    content: 'I\'ve been using Tinder for about 6 months and have had a good experience overall. The interface is super easy to use and I\'ve met several interesting people. The free version is quite limited though.',
    pros: ['Easy to use', 'Large user base', 'Quick matches'],
    cons: ['Limited free features', 'Many inactive profiles'],
    date: '2024-01-15',
    helpful: 23,
    verified: true
  },
  {
    id: '2',
    siteId: 'bumble',
    userName: 'Mike R.',
    rating: 5,
    title: 'Love the women-first approach',
    content: 'Bumble has been amazing for me. The fact that women message first creates much better conversations. I met my current girlfriend here after 3 months of using it.',
    pros: ['Quality conversations', 'Less spam', 'Great features'],
    cons: ['Smaller user base in my area'],
    date: '2024-01-12',
    helpful: 45,
    verified: true
  },
  {
    id: '3',
    siteId: 'hinge',
    userName: 'Jessica L.',
    rating: 5,
    title: 'Perfect for serious relationships',
    content: 'If you\'re looking for something serious, Hinge is the way to go. The prompts help start meaningful conversations and I feel like people are more genuine here.',
    pros: ['Relationship-focused', 'Great conversation starters', 'Detailed profiles'],
    cons: ['Limited daily likes', 'Can be overwhelming'],
    date: '2024-01-10',
    helpful: 67,
    verified: true
  },
  {
    id: '4',
    siteId: 'match',
    userName: 'David K.',
    rating: 3,
    title: 'Good but expensive',
    content: 'Match has a lot of serious users which is great, but it\'s quite expensive compared to other options. The interface feels a bit outdated too.',
    pros: ['Serious users', 'Detailed profiles', 'Good matching'],
    cons: ['Expensive', 'Outdated interface', 'Some fake profiles'],
    date: '2024-01-08',
    helpful: 12,
    verified: false
  },
  {
    id: '5',
    siteId: 'eharmony',
    userName: 'Amanda T.',
    rating: 4,
    title: 'Great for marriage-minded people',
    content: 'The compatibility matching really works! I appreciate how thorough the process is. It\'s expensive but worth it if you\'re serious about finding a life partner.',
    pros: ['Scientific matching', 'Marriage-focused', 'High success rate'],
    cons: ['Very expensive', 'Long signup process'],
    date: '2024-01-05',
    helpful: 34,
    verified: true
  }
];

const Reviews = () => {
  const [selectedSite, setSelectedSite] = useState('all');
  const [sortBy, setSortBy] = useState('helpful');
  const [filteredReviews, setFilteredReviews] = useState(mockReviews);

  const handleFilter = () => {
    let filtered = mockReviews;

    if (selectedSite !== 'all') {
      filtered = filtered.filter(review => review.siteId === selectedSite);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'helpful':
          return b.helpful - a.helpful;
        default:
          return 0;
      }
    });

    setFilteredReviews(filtered);
  };

  const getSiteInfo = (siteId: string) => {
    return datingSites.find(site => site.id === siteId);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              We Compare Cupid
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <Link to="/compare" className="text-gray-600 hover:text-pink-500 transition-colors">Compare Sites</Link>
            <Link to="/quiz" className="text-gray-600 hover:text-pink-500 transition-colors">Take Quiz</Link>
            <Link to="/reviews" className="text-pink-500 font-medium">Reviews</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">User Reviews & Ratings</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from real users to help you make the right choice
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Filter Reviews</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Select value={selectedSite} onValueChange={setSelectedSite}>
                <SelectTrigger>
                  <SelectValue placeholder="Select dating site" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sites</SelectItem>
                  {datingSites.map(site => (
                    <SelectItem key={site.id} value={site.id}>
                      {site.logo} {site.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="helpful">Most Helpful</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="date">Most Recent</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={handleFilter}
                className="bg-gradient-to-r from-pink-500 to-purple-600"
              >
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <div className="space-y-6">
          {filteredReviews.map((review) => {
            const siteInfo = getSiteInfo(review.siteId);
            return (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Site Logo */}
                    <div className="text-3xl">{siteInfo?.logo}</div>
                    
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold">{review.title}</h3>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-700 text-xs">
                                Verified User
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{review.userName}</span>
                            <span>•</span>
                            <span>{siteInfo?.name}</span>
                            <span>•</span>
                            <span>{new Date(review.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {renderStars(review.rating)}
                          </div>
                          <div className="text-sm text-gray-600">
                            {review.rating}/5 stars
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {review.content}
                      </p>

                      {/* Pros & Cons */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            Pros
                          </h4>
                          <ul className="space-y-1">
                            {review.pros.map((pro, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-1">
                            <ThumbsDown className="h-4 w-4" />
                            Cons
                          </h4>
                          <ul className="space-y-1">
                            {review.cons.map((con, index) => (
                              <li key={index} className="text-sm text-gray-600">
                                • {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="text-gray-600">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Reply
                          </Button>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-pink-500 to-purple-600"
                        >
                          Visit {siteInfo?.name}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Write Review CTA */}
        <Card className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-6">
              Help others find their perfect dating site by sharing your honest review
            </p>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-lg px-8 py-6">
              Write a Review
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
