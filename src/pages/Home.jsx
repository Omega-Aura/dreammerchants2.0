import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative">
      <section className="hero min-h-[70vh] bg-gray-900 flex items-center justify-center text-white text-center">
        <div className="hero-content">
          <h2 className="text-5xl font-bold mb-4">Welcome to Dream Merchants</h2>
          <p className="text-xl mb-8">Business || Management || Entrepreneurship || Finance</p>
          <Link to="/about" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;