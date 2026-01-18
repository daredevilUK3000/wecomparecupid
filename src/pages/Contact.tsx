import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Mail, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We're here to help you find your perfect dating platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Have a question or suggestion? We'd love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your question or feedback..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-pink-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@kizzicompare.com" className="text-pink-600 hover:text-pink-700">
                        info@kizzicompare.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-pink-500" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">How does the matching algorithm work?</h4>
                    <p className="text-sm text-gray-600">Our algorithm analyzes your preferences, budget, and relationship goals to recommend the best dating sites for you.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Is the service free?</h4>
                    <p className="text-sm text-gray-600">Yes! Our comparison service and quiz are completely free to use.</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">How often is the data updated?</h4>
                    <p className="text-sm text-gray-600">We regularly update our database with the latest information about dating sites and their features.</p>
                  </div>
                  <Link to="/help" className="inline-block">
                    <Button variant="outline" className="mt-4">
                      View Help Center
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
