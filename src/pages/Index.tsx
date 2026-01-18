import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Smart Matching',
      description: 'Our algorithm analyzes your preferences to find the perfect dating sites for you'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Comprehensive Database',
      description: 'Compare 50+ dating platforms with detailed demographics and features'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety First',
      description: 'We prioritize platforms with strong safety features and verification systems'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Save Time & Money',
      description: 'Avoid wasting time on incompatible sites - find your match faster'
    }
  ];

  const stats = [
    { number: '50+', label: 'Dating Sites' },
    { number: '10M+', label: 'Users Helped' },
    { number: '4.8★', label: 'Average Rating' },
    { number: '85%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Kizzi Compare
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <Link to="/compare" className="text-gray-600 hover:text-pink-500 transition-colors">Compare Sites</Link>
            <Link to="/quiz" className="text-gray-600 hover:text-pink-500 transition-colors">Take Quiz</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-pink-500 transition-colors">Reviews</Link>
          </nav>
          <Link to="/quiz">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                  🎯 Find Your Perfect Match Platform
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Stop Wasting Time on
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block">
                    Wrong Dating Sites
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our smart algorithm analyzes 50+ dating platforms to recommend the perfect sites 
                  based on your preferences, budget, and relationship goals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quiz">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6"
                  >
                    Take Free Quiz <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/compare">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-pink-200 text-pink-600 hover:bg-pink-50 text-lg px-8 py-6"
                  >
                    Browse All Sites
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-[500px] bg-gradient-to-br from-pink-200 to-purple-300 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Heart className="h-24 w-24 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Find Your Perfect Match</h3>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Kizzi Compare?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We take the guesswork out of online dating by matching you with the right platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`text-center transition-all duration-300 cursor-pointer ${
                  hoveredFeature === index ? 'shadow-lg scale-105 border-pink-200' : 'hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader>
                  <div className={`mx-auto p-3 rounded-full transition-colors ${
                    hoveredFeature === index 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                      : 'bg-pink-100 text-pink-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to find your perfect dating platform</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Take Our Quiz',
                description: 'Answer questions about your preferences, budget, and relationship goals'
              },
              {
                step: '2',
                title: 'Get Recommendations',
                description: 'Our algorithm analyzes your answers and ranks the best dating sites for you'
              },
              {
                step: '3',
                title: 'Start Dating',
                description: 'Join your recommended sites and start connecting with compatible matches'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-pink-200 to-purple-300 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">{step.step}</div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who found love on the right platform
          </p>
          <Link to="/quiz">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Start Your Journey Now <Heart className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold">Kizzi Compare</span>
              </div>
              <p className="text-gray-400">
                Helping people find love on the right platform since 2024.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/compare" className="hover:text-white transition-colors">Compare Sites</Link></li>
                <li><Link to="/quiz" className="hover:text-white transition-colors">Take Quiz</Link></li>
                <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kizzi Compare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
