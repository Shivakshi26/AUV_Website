import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

// --- DATA STRUCTURE ---

// 1. LEADERSHIP GROUPS
const facultyAdvisors = [
  { name: "Prof. Leena Vacchani", role: "Faculty Advisor", image: "/images/team24/member1.jpg" },
  { name: "Prof. Shashi Ranjan Kumar", role: "Faculty Advisor", image: "/images/team24/member1.jpg" }
];

const supremeCommander = [
  { name: "Shubham Tiwari", role: "Supreme Commander", image: "/images/team24/member2.jpg" }
];

const teamLeaders = [
  { name: "Archit Swamy", role: "Team Leader", image: "/images/team24/member3.jpg" },
  { name: "Kaushik Chavali", role: "Team Leader", image: "/images/team24/member4.jpg" },
  { name: "Sameer Mannava", role: "Team Leader", image: "/images/team24/member1.jpg" }
];

const teamAdvisors = [
  { name: "Anuj Bangad", role: "Team Advisor", image: "/images/team24/member2.jpg" },
  { name: "Anurag Deshpande", role: "Team Advisor", image: "/images/team24/member3.jpg" },
  { name: "Mayank Bajaj", role: "Team Advisor", image: "/images/team24/member4.jpg" }
];

// 2. SUBDIVISIONS (Grouped by Year Batches)
const subdivisions = {
  Software: [
    [ // 3rd Year Batch
      { name: "Soft Lead", role: "Software Head", image: "/images/team24/member1.jpg" },
      { name: "Senior Dev", role: "Software Eng", image: "/images/team24/member2.jpg" },
      { name: "Senior Dev", role: "Software Eng", image: "/images/team24/member3.jpg" },
      { name: "Senior Dev", role: "Software Eng", image: "/images/team24/member4.jpg" },
    ],
    [ // 2nd Year Batch
      { name: "Junior Dev", role: "Software Eng", image: "/images/team24/member1.jpg" },
      { name: "Junior Dev", role: "Software Eng", image: "/images/team24/member2.jpg" },
      { name: "Junior Dev", role: "Software Eng", image: "/images/team24/member3.jpg" },
    ],
    [ // 1st Year Batch
      { name: "Fresher", role: "Software Trainee", image: "/images/team24/member1.jpg" },
      { name: "Fresher", role: "Software Trainee", image: "/images/team24/member2.jpg" },
    ]
  ],
  Electrical: [
    [
      { name: "Elec Lead", role: "Elec Head", image: "/images/team24/member3.jpg" },
      { name: "Senior Eng", role: "Elec Eng", image: "/images/team24/member4.jpg" },
    ],
    [
      { name: "Junior Eng", role: "Elec Eng", image: "/images/team24/member1.jpg" },
      { name: "Junior Eng", role: "Elec Eng", image: "/images/team24/member2.jpg" },
    ]
  ],
  Mechanical: [
    [
      { name: "Mech Lead", role: "Mech Head", image: "/images/team24/member2.jpg" },
      { name: "Senior Mech", role: "Mech Eng", image: "/images/team24/member3.jpg" },
      { name: "Senior Mech", role: "Mech Eng", image: "/images/team24/member4.jpg" },
    ],
    [
      { name: "Junior Mech", role: "Mech Eng", image: "/images/team24/member1.jpg" },
    ]
  ],
  Business: [
    [
      { name: "Biz Lead", role: "Business Head", image: "/images/team24/member4.jpg" },
      { name: "Manager", role: "Operations", image: "/images/team24/member1.jpg" },
    ],
    [
      { name: "Junior Mgr", role: "Marketing", image: "/images/team24/member2.jpg" },
      { name: "Junior Mgr", role: "Finance", image: "/images/team24/member3.jpg" },
    ]
  ]
};

// --- HELPER COMPONENT: MEMBER CARD ---
const MemberCard = ({ member }: { member: any }) => (
  <div className="group relative rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-[#162032] w-[260px] h-[340px] transition-transform duration-300 hover:-translate-y-2 mx-auto">
    
    {/* Image */}
    <div className="w-full h-full">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    {/* Info Bar (Bottom Gradient) */}
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-12 text-center">
      <h3 className="font-bold text-white text-lg">{member.name}</h3>
      <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
    </div>

    {/* Hover Overlay (Socials) */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-6">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
        <a href="#" className="p-3 bg-white text-[#0077b5] rounded-full hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
          <Linkedin size={24} />
        </a>
      </div>
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
        <a href="#" className="p-3 bg-white text-red-500 rounded-full hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
          <Mail size={24} />
        </a>
      </div>
    </div>
  </div>
);

export default function Team() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-28 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-cyan-400 tracking-wide">Team 2023-24</h1>
        <p className="text-gray-400 text-lg">
          Let's meet the people who add the word team to this wonderful tech-team.
        </p>
      </div>

      {/* --- LEADERSHIP HIERARCHY --- */}
      <div className="max-w-7xl mx-auto px-6 mb-32 space-y-20">
        
        {/* 1. Faculty Advisors */}
        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Faculty Advisors</h2>
          <div className="flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
            {facultyAdvisors.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* 2. Supreme Commander */}
        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Supreme Commander of The Naval Fleet</h2>
          <div className="flex justify-center">
            {supremeCommander.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* 3. Team Leaders */}
        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Team Leaders</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {teamLeaders.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* 4. Team Advisors */}
        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Team Advisors</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {teamAdvisors.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </section>

      </div>

      {/* --- SUBDIVISIONS --- */}
      {Object.entries(subdivisions).map(([subName, batches], index) => (
        <section key={index} className="max-w-7xl mx-auto px-6 mb-32">
          
          {/* Subdivision Title */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gray-700"></div>
            <h2 className="text-4xl font-bold uppercase text-cyan-400 tracking-wider px-4">
              {subName}
            </h2>
            <div className="h-px flex-1 bg-gray-700"></div>
          </div>

          {/* Render Each Batch (Year Group) with a gap between them */}
          {/* UPDATED: Uses Flexbox justify-center to ensure every row is perfectly centered */}
          <div className="space-y-16">
            {batches.map((batch, batchIdx) => (
              <div key={batchIdx} className="flex flex-wrap justify-center gap-8">
                {batch.map((member, memberIdx) => (
                  <MemberCard key={memberIdx} member={member} />
                ))}
              </div>
            ))}
          </div>

        </section>
      ))}

    </div>
  );
}