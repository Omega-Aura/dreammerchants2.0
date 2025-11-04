import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/assets/images/logo.jpg" 
                alt="Dream Merchants Logo" 
                className="h-16 w-auto my-2 group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Link 
              to="/about" 
              className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">About Us</span>
              <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              to="/events" 
              className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">Events</span>
              <span className="absolute inset-0 bg-purple-50 dark:bg-purple-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            <Link 
              to="/team" 
              className="relative px-4 py-2 text-gray-700 dark:text-gray-200 font-medium hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 group"
            >
              <span className="relative z-10">Our Team</span>
              <span className="absolute inset-0 bg-pink-50 dark:bg-pink-900/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            <DarkModeToggle />
            <Link 
              to="/contact" 
              className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}export default Navbar;