import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Heart, Search, HelpCircle, Users, Shield, Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          q: 'How does Kizzi Compare work?',
          a: 'Kizzi Compare analyzes your preferences through our quiz and matches you with the best dating sites. We compare features, pricing, user demographics, and more to give you personalized recommendations.'
        },
        {
          q: 'Is the service really free?',
          a: 'Yes! Our comparison service, quiz, and recommendations are completely free. We may earn commissions if you sign up for dating sites through our links, but this never affects our recommendations.'
        },
        {
          q: 'How accurate are the recommendations?',
          a: 'Our algorithm considers multiple factors including your age range, relationship goals, budget, and preferences. While we strive for accuracy, we recommend trying the top 2-3 recommended sites to find your best match.'
        }
      ]
    },
    {
      title: 'Using the Quiz',
      icon: <Star className="h-5 w-5" />,
      questions: [
        {
          q: 'How long does the quiz take?',
          a: 'The quiz takes about 3-5 minutes to complete. It has 6 steps covering your age range, relationship goals, budget, priorities, interests, and deal breakers.'
        },
        {
          q: 'Can I retake the quiz?',
          a: 'Absolutely! You can retake the quiz anytime to get updated recommendations. Your preferences might change, and we want to give you the most current suggestions.'
        },
        {
          q: 'What if I don\'t like my results?',
          a: 'You can retake the quiz with different answers, or browse all dating sites in our comparison section to explore other options that might interest you.'
        }
      ]
    },
    {
      title: 'Dating Site Information',
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          q: 'How do you choose which dating sites to include?',
          a: 'We include popular, legitimate dating sites with good reputations. We regularly review and update our database to ensure we\'re covering the most relevant platforms.'
        },
        {
          q: 'Are the reviews real?',
          a: 'We collect reviews from verified users when possible. However, always do your own research before joining any dating site.'
        },
        {
          q: 'How often do you update pricing information?',
          a: 'We aim to update pricing and features monthly, but dating sites can change their pricing anytime. Always check the official site for current pricing.'
        }
      ]
    },
    {
      title: 'Privacy & Safety',
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          q: 'Do you store my quiz answers?',
          a: 'No, we don\'t store your personal quiz answers. The quiz runs in your browser and results are generated locally for your privacy.'
        },
        {
          q: 'Is it safe to click on dating site links?',
          a: 'Yes, all our links go directly to the official dating sites. We never link to suspicious or unverified platforms.'
        },
        {
          q: 'Do you share my information?',
          a: 'We don\'t collect or share personal information. See our Privacy Policy for complete details about data handling.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Kizzi Compare
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <Link to="/compare" className="text-gray-600 hover:text-pink-500 transition-colors">Compare Sites</Link>
            <Link to="/quiz" className="text-gray-600 hover:text-pink-500 transition-colors">Take Quiz</Link>
            <Link to="/reviews" className="text-gray-600 hover:text-pink-500 transition-colors">Reviews</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about using Kizzi Compare
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/quiz">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Take the Quiz</h3>
                  <p className="text-gray-600">Get personalized dating site recommendations</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/compare">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Browse All Sites</h3>
                  <p className="text-gray-600">Compare features and pricing</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/contact">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
                  <p className="text-gray-600">Get help from our team</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8">
            {(searchTerm ? filteredFAQs : faqCategories).map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                    {category.questions.length} question{category.questions.length !== 1 ? 's' : ''}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-medium text-lg mb-2">{faq.q}</h4>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Still Need Help */}
          <Card className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                    Contact Support
                  </Button>
                </Link>
                <a href="mailto:info@kizzicompare.com">
                  <Button variant="outline">
                    Email Us Directly
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Help;
