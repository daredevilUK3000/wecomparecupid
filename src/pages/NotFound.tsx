import { Button } from '@/components/ui/button';
import { Heart, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="mb-8">
          <Heart className="h-24 w-24 text-pink-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
            Looks like this page went on a date and never came back! 
            Let's help you find your way to the right place.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
          <Link to="/compare">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pink-200 text-pink-600 hover:bg-pink-50 text-lg px-8 py-6"
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Dating Sites
            </Button>
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 mb-4">Or try one of these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quiz" className="text-pink-600 hover:text-pink-700 underline">
              Take Quiz
            </Link>
            <Link to="/reviews" className="text-pink-600 hover:text-pink-700 underline">
              Read Reviews
            </Link>
            <Link to="/compare" className="text-pink-600 hover:text-pink-700 underline">
              Compare Sites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
