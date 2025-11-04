function Team() {
  const executiveTeam = [
    {
      name: "Ankit Singh",
      role: "Chairperson",
      image: "/assets/images/Ankit.webp"
    },
    {
      name: "Siddhant",
      role: "Vice Chairperson",
      image: "/assets/images/sid.webp"
    },
    {
      name: "Utkarsh",
      role: "Secretary",
      image: "/assets/images/utkatsh.webp"
    },
    {
      name: "Aritra",
      role: "Co Secretary",
      image: "/assets/images/aritra.webp"
    }
  ];

  const domainHeads = [
    {
      name: "Jai",
      role: "Research Head",
      image: "/assets/images/jai.webp"
    },
    {
      name: "Atharv",
      role: "Operations Head",
      image: "/assets/images/atharv.webp"
    },
    {
      name: "Sanskriti",
      role: "Design Head",
      image: "/assets/images/sans.webp"
    },
    {
      name: "Ananya",
      role: "Training Head",
      image: "/assets/images/ananay.webp"
    },
    {
      name: "Shrishti",
      role: "Marketing Head",
      image: "/assets/images/shristi.webp"
    },
    {
      name: "Ajinkya",
      role: "Editorial Head",
      image: "/assets/images/ajinkya.webp"
    },
    {
      name: "Uditanshu",
      role: "Finance Head",
      image: "/assets/images/udit.webp"
    },
    {
      name: "Prisha",
      role: "Technical Head",
      image: "/assets/images/prisha.webp"
    }
  ];

  return (
    <section className="relative min-h-screen py-16 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
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

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Team
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-20 rounded-full"></div>

        {/* Executive Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Executive Heads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveTeam.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {member.name}
                    </h4>
                    <p className="text-sm font-medium text-gray-600 bg-purple-50 px-3 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Heads */}
        <div>
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Domain Heads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {domainHeads.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="relative w-32 h-32 mx-auto mb-3 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-base mb-1 text-gray-800">
                      {member.name}
                    </h4>
                    <p className="text-xs font-medium text-gray-600 bg-purple-50 px-2 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;