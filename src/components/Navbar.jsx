import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-[#8650b9] to-[#6a11cb] shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center transform hover:scale-110 transition-transform duration-300">
              <img src="/assets/images/logo.jpg" alt="Dream Merchants Logo" className="h-16 w-auto my-2" />
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/team" className="nav-link">Our Team</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;