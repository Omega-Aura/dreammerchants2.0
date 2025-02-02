import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">Dream Merchants</div>
          <div className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/events" className="text-gray-600 hover:text-gray-900">Events</a>
            <a href="/team" className="text-gray-600 hover:text-gray-900">Team</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;