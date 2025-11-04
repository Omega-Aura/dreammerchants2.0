function Events() {
  const upcomingEvents = [
    {
      title: "Stockastic",
      date: "TBA",
      image: "/assets/images/stock.jpg",
      registerLink: "#"
    },
    {
      title: "Cashino!",
      date: "Riviera'26",
      image: "/assets/images/cashino 2.0.jpg",
      registerLink: "https://riviera.vit.ac.in/events/evt_685c6fa234974d9f9d653d973f0b7b7b"
    }
  ];

  const previousEvents = [
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
      title: "Bricks by Bid",
      date: "27th and 28th September 2025",
      image: "/assets/images/bbb.png",
      registerLink: "#"
    },
    {
      title: "Dream Team",
      date: "21st to 23rd October 2025",
      image: "/assets/images/dreamteam.jpg",
      registerLink: "#"
    }
  ];

  return (
    <section className="relative min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Squares Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Upcoming Events Section */}
      <div className="relative z-10 mb-20">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Upcoming Events
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16 rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-medium">{event.date}</p>
                </div>
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
                >
                  Register Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Events Section */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
          Previous Events
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mb-16 rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previousEvents.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200/50 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-200">{event.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;