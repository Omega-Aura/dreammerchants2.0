import React from 'react';

function Team() {
  const executiveTeam = [
    {
      name: "Rishabh Arora",
      role: "Chairperson",
      image: "/assets/images/CP.jpg"
    },
    {
      name: "Saksham Agarwal",
      role: "Vice Chairperson",
      image: "/assets/images/VC.jpg"
    },
    {
      name: "Dathri Lekkala",
      role: "Secretary",
      image: "/assets/images/dathri.jpg"
    },
    {
      name: "Krutarth Trivedi",
      role: "Co Secretary",
      image: "/assets/images/krutarth.jpg"
    }
  ];

  const domainHeads = [
    {
      name: "Atharv Dewangan",
      role: "Research Head",
      image: "/assets/images/atharv.jpg"
    },
    {
      name: "Karan Sagpriya",
      role: "Operations Head",
      image: "/assets/images/karan.jpg"
    },
    {
      name: "Namyaa Singh",
      role: "Design Head",
      image: "/assets/images/namyaa.jpg"
    },
    {
      name: "Piyush Tuteja",
      role: "Collab & Training Head",
      image: "/assets/images/piyush.jpg"
    },
    {
      name: "Anushka Tiwari",
      role: "Marketing Head",
      image: "/assets/images/anushka.jpg"
    },
    {
      name: "Manya Wadhwa",
      role: "Content Head",
      image: "/assets/images/manya.jpg"
    },
    {
      name: "Pranav Shankar",
      role: "Creative Head",
      image: "/assets/images/pranav.jpg"
    },
    {
      name: "Rathi Kundariya",
      role: "HR Head",
      image: "/assets/images/rathi.jpg"
    },
    {
      name: "Milinid Madhukar",
      role: "Technical Head",
      image: "/assets/images/milinid.jpg"
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