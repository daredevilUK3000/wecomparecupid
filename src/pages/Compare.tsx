import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Heart, Users, DollarSign, Filter, Search } from 'lucide-react';
import { datingSites, categories } from '@/data/datingSites';
import { Link } from 'react-router-dom';

const Compare = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const [filteredSites, setFilteredSites] = useState(datingSites);

  useEffect(() => {
    let filtered = datingSites;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(site => site.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(site => 
        site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        site.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.pricing.free === b.pricing.free ? 0 : a.pricing.free ? -1 : 1;
        default:
          return 0;
      }
    });

    setFilteredSites(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  const getCategoryColor = (category: string) => {
    const colors = {
      mainstream: 'bg-blue-100 text-blue-700',
      serious: 'bg-purple-100 text-purple-700',
      premium: 'bg-yellow-100 text-yellow-700',
      niche: 'bg-green-100 text-green-700',
      casual: 'bg-orange-100 text-orange-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
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
            <Link to="/compare" className="text-pink-500 font-medium">Compare Sites</Link>
            <Link to="/quiz" className="text-gray-600 hover:text-pink-500 transition-colors">Take Quiz</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-pink-500 transition-colors">Reviews</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Compare Dating Sites</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse and compare all dating platforms to find the perfect match for your needs
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5" />
              <h3 className="text-lg font-semibold">Filter & Search</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search dating sites..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid gap-6">
          {filteredSites.map((site) => (
            <Card key={site.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Site Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{site.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-2xl font-bold">{site.name}</h3>
                          <Badge className={getCategoryColor(site.category)}>
                            {site.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">{site.description}</p>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {site.features.slice(0, 3).map((feature, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {site.features.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{site.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Pros & Cons */}
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h5 className="font-semibold text-green-600 mb-1">Pros:</h5>
                            <ul className="text-gray-600 space-y-1">
                              {site.pros.slice(0, 2).map((pro, index) => (
                                <li key={index}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-red-600 mb-1">Cons:</h5>
                            <ul className="text-gray-600 space-y-1">
                              {site.cons.slice(0, 2).map((con, index) => (
                                <li key={index}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats & Pricing */}
                  <div className="space-y-4">
                    {/* Rating */}
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-2xl font-bold">{site.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">{site.reviewCount} reviews</p>
                    </div>

                    {/* Demographics */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{site.demographics.userBase} users</span>
                      </div>
                      <div className="text-gray-600">
                        Age: {site.demographics.ageRange}
                      </div>
                      <div className="text-gray-600">
                        {site.demographics.genderRatio}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="space-y-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        {site.pricing.free && (
                          <Badge className="bg-green-100 text-green-700">FREE</Badge>
                        )}
                      </div>
                      <div className="text-lg font-semibold">
                        {site.pricing.free ? 'Free to start' : 'Premium only'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {site.pricing.premium}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600">
                        Visit Site
                      </Button>
                      <Link to="/reviews">
                        <Button variant="outline" className="w-full">
                          Read Reviews
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No dating sites match your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
