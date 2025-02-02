import React from 'react';

function Events() {
  const events = [
    {
      title: "TechCraft",
      date: "3rd February 2025",
      image: "/assets/images/techcraft.jpg",
      registerLink: "https://vtop.vit.ac.in/vtop/login"
    },
    {
      title: "Housie!",
      date: "22nd February 2025",
      image: "/assets/images/housie.webp",
      registerLink: "https://riviera.vit.ac.in/events/evt_2b8304237a1c40cebac1ab98fbc1aa2d"
    },
    {
      title: "Cashino!",
      date: "22nd February 2025",
      image: "/assets/images/cashino 2.0.jpg",
      registerLink: "https://riviera.vit.ac.in/events/evt_685c6fa234974d9f9d653d973f0b7b7b"
    }
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">Date: {event.date}</p>
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;