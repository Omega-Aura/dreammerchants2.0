import React from 'react';

function EventCard({ title, date, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default EventCard;