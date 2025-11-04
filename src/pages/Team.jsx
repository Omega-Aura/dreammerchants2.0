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
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>

      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center">Executive Head</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executiveTeam.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-center">Domain Head</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domainHeads.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;