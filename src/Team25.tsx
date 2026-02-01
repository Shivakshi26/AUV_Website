import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

// --- DATA STRUCTURE ---

// 1. LEADERSHIP GROUPS
const facultyAdvisors = [

  {
    name: "Prof. Shashi Ranjan Kumar",
    role: "Faculty Advisor",
    department: "Aerospace Engineering", // Academic Dept
    linkedin: "https://www.linkedin.com/in/shashi-ranjan-kumar-33462916/",
    image: "images/Team/facads/shashi ranjan kumar.png"
  }
];


const supremeCommander = [
  {
    name: "Shubham Tiwari",
    role: "Supreme Commander",
    department: "Aerospace Engineering",
    linkedin: "https://www.linkedin.com/in/shubham-ncf/",
    instagram: "https://www.instagram.com/nobi_iitb/",
    image: "/images/Team/RS2024 Website Photo/Nobi.jpg"
  }
];


const teamLeaders = [
  {
    name: "Anirudh Jangid",
    role: "Team Leader",
    department: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/anirudh-jangid-69a308174/",
    instagram: "https://www.instagram.com/anirudhjangid_07/?hl=en",
    image: "/images/Team/RS2024 Website Photo/Anirudh Jangid.jpg"
  },
  {
    name: "Khushajh Verma",
    role: "Team Leader",
    department: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/khushajh-verma-1b9a79254/",
    instagram: "https://www.instagram.com/v.khushajh?igsh=ZGUzMzM3NWJiOQ%3D%3D",
    image: "/images/Team/RS2024 Website Photo/Khushajh Verma.jpg"
  },
  {
    name: "Sparsh Badjate",
    role: "Team Leader",
    department: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/sparsh-badjate/?originalSubdomain=in",
    instagram: "https://www.instagram.com/sparsh_0070/",
    image: "/images/Team/RS2024 Website Photo/Sparsh Badjate.jpg"
  }
];


const teamAdvisors = [
  {
    name: "Ayush Prasad",
    role: "Team Advisor",
    department: "Mechanical Engineering",
    linkedin: "#",
    instagram: "#",
    image: "/images/Team/RS2024 Website Photo/Ayush Prasad.jpg"
  },
  {
    name: "Anurag Deshpande",
    role: "Team Advisor",
    department: "Mechanical Engineering",
    linkedin: "#",
    instagram: "#",
    image: "/images/Team/RS2024 Website Photo/Anurag Deshpande.jpg"
  },
  {
    name: "Mayank Bajaj",
    role: "Team Advisor",
    department: "Aerospace Engineering",
    linkedin: "#",
    instagram: "#",
    image: "images/Team/freshies/Mayank_bajaj.png"
  },

  {
    name: "Anuj Bangad",
    role: "Team Advisor",
    department: "Energy Science and Engineering",
    linkedin: "#",
    instagram: "#",
    image: "images/Team/freshies/Anuj_Bangad.png"
  },
  {
    name: "Urvi Gupta",
    role: "Team Advisor",
    department: "Computer Science and Engineering",
    linkedin: "#",
    instagram: "#",
    image: "/images/Team/RS2024 Website Photo/Urvi Gupta.jpg"
  },
  {
    name: "Adwai Krishna",
    role: "Team Advisor",
    department: "Computer Science and Engineering",
    linkedin: "#",
    instagram: "#",
    image: "/images/Team/RS2024 Website Photo/Adwai Krishna.jpg"
  },
  {
    name: "Anshu Arora",
    role: "Team Advisor",
    department: "Electrical Engineering",
    linkedin: "#",
    instagram: "#",
    image: "images/Team/photos/anshuelec (updated).png"
  }
];


// 2. SUBDIVISIONS (Grouped by Year Batches)
const subdivisions = {
  Software: [
    [ // 3rd Year Batch
      { name: "Manit Jhajharia", role: "Software Head", department: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/manit-jhajharia-85b6682a8/", instagram: "#", image: "/images/Team/RS2024 Website Photo/Manit Jhajharia.jpg" },
      { name: "Divyanshu Gupta", role: "Software Head", department: "Engineering Sciences (Computer Engineering)", linkedin: "https://www.linkedin.com/in/divyanshu-gupta-2bb9b9284/", instagram: "https://www.instagram.com/divyanshu0311/?hl=en", image: "/images/Team/RS2024 Website Photo/Divyanshu Gupta.jpg" },
    ],
    [ // 2nd Year Batch
      { name: "Denver Zuzarte", role: "Software Developer", department: "Engineering Physics", linkedin: "https://www.linkedin.com/in/denver-zuzarte-b3a9b42a8/", instagram: "#", image: "/images/Team/Freshers24/Denver.png" },
      { name: "Dhruv Savot", role: "Software Developer", department: "Environmental Science and Engineering", linkedin: "https://www.linkedin.com/in/dhruv-savot-0b7739313/", instagram: "https://www.instagram.com/dhruv_savot_01/?hl=en", image: "/images/Team/Freshers24/DhruvS.png" },
      { name: "Pratham Chollera", role: "Software Developer", department: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/pratham-chollera", instagram: "https://www.instagram.com/the.pratham.cholera/", image: "/images/Team/Freshers24/PrathamC.png" },
      { name: "Nilkrishna", role: "Software Developer", department: "Computer Science and Engineering", linkedin: "https://www.linkedin.com/in/nilkrishna-gajare-520051268/", instagram: "https://www.instagram.com/nilkrishna.gajare/?hl=en", image: "/images/Team/Freshers24/Nilkrishna.png" },
      { name: "Kiara Thapar", role: "Software Developer", department: "Civil Engineering", linkedin: "https://www.linkedin.com/in/kiara-thapar-83940a318/", instagram: "#", image: "/images/Team/Freshers24/KiaraT.png" },
    ],
    [ // 1st Year Batch
      { name: "Ananya Garg", role: "Software Trainee", department: "Economics", linkedin: "https://www.linkedin.com/in/ananya-garg-b998aa2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/anan_ya24078/", image: "/images/Team/Freshers25/AnanyaGarg.png" },
      { name: "Avadhoot Kulkarni", role: "Software Trainee", department: "Industrial Engineering and Operations Research", linkedin: "https://docs.google.com/forms/d/e/1FAIpQLSeRKeF5M1uTy4j8C-HdB6Qf6leP8i2WlYnv-EcTUG3YOIJBSQ/viewform?usp=header", instagram: "#", image: "/images/Team/Freshers25/AvadhootKulakarni.png" },
      { name: "Shur Singh Rathore", role: "Software Trainee", department: "Mechanical Engineering", linkedin: "https://docs.google.com/forms/d/e/1FAIpQLSeRKeF5M1uTy4j8C-HdB6Qf6leP8i2WlYnv-EcTUG3YOIJBSQ/viewform?usp=header", instagram: "#", image: "/images/Team/Freshers25/ShurRathore.png" },
      { name: "Siddhant Tadepalli", role: "Software Trainee", department: "Chemical Engineering", linkedin: "https://www.linkedin.com/in/siddhanth-tadepalli-708980377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/siddhanth.t1007/", image: "/images/Team/Freshers25/SiddhanthTadepalli.png" },
      { name: "Tvisha Vibhu Malige", role: "Software Trainee", department: "Mechanical Engineering", linkedin: "#", instagram: "#", image: "/images/Team/Freshers25/TvishaMalige.png" },
      { name: "Vedant Bhat", role: "Software Trainee", department: "Electrical Engineering", linkedin: "#", instagram: "#", image: "/images/Team/Freshers25/VedantBhat.jpeg" },
    ]
  ],
  Electrical: [
    [ // 3
      { name: "Aniket Gupta", role: "Subdivision Head", department: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/aniket-gupta-252113308/", instagram: "https://www.instagram.com/aniket.__.gupta/?hl=en", image: "/images/Team/RS2024 Website Photo/Aniket Gupta.jpg" },
      { name: "Jigar Mehta", role: "Subdivision Head", department: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/jigar-mehta-667988280/", instagram: "https://www.instagram.com/mehta6583/?hl=en", image: "/images/Team/RS2024 Website Photo/Jigar Mehta.jpg" },
      { 
        name: "Shresth Keshari", 
        role: "Industrial Collab Head", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/shresth-keshari-626b2a267/", 
        instagram: "https://www.instagram.com/social.lonewolf/?hl=en", 
        image: "/images/RS2024 Website Photo/Shresth Keshari.jpg" 
      },
      { 
        name: "Shlok Rathi", 
        role: "Operations Head", 
        department: "Metallurgical Engineering and Materials Science", 
        linkedin: "https://www.linkedin.com/in/shlok-rathi-b16a912a6/", 
        instagram: "https://www.instagram.com/rathi_shlok/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Shlok Rathi.jpg" 
      },
    ],
    [ // 2
      { name: "Aayush Shah", role: "Electrical Designer ", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/aayush-shah-8211b3343/", instagram: "https://www.instagram.com/aayush.0703/?hl=en", image: "/images/Team/Freshers24/AayushS.png" },
      { name: "Ankush", role: "Electrical Designer", department: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/ankush-05350b212/", instagram: "https://www.instagram.com/anku2005sh/", image: "/images/Team/Freshers24/Ankush.png" },
    ],
    [ // 1
      { name: "Aditi Nimbolkar", role: "Electrical Trainee", department: "Engineering Physics", linkedin: "#", instagram: "https://www.instagram.com/aditi.nimbolkar/", image: "/images/Team/Freshers25/AditiNimbolkar.png" },
      { name: "Arya Mahajan", role: "Electrical Trainee", department: "Civil Engineering", linkedin: "https://www.linkedin.com/in/arya-mahajan-308078377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "#", image: "/images/Team/Freshers25/AryaMahajan.png" },
      { name: "Harith Syam", role: "Electrical Trainee", department: "Electrical Engineering", linkedin: "#", instagram: "https://www.instagram.com/harith.syam?igsh=MTgwYnd2MWhxMTVrcw==" , image: "/images/Team/Freshers25/HarithSyam.png"},
      { name: "Mantra Nimesh Shah", role: "Electrical Trainee", department: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/mantra-shah-ab557a378/", instagram: "https://www.instagram.com/mantra_shah/" , image: "/images/Team/Freshers25/MantraNimeshShah.png"},
    ]
  ],
  Mechanical: [
    [ // 3
      { name: "Anuj Patel", role: "Subdivision Head", department: "Metallurgical Engineering and Materials Science", linkedin: "https://www.linkedin.com/in/anuj-patel-679550297/", instagram: "https://www.instagram.com/anujpatel0808/?hl=en", image: "/images/Team/RS2024 Website Photo/Anuj Patel.jpg" },
      { name: "Divya Mehta", role: "Subdivision Head", department: "Aerospace Engineering", linkedin: "https://www.linkedin.com/in/divya-mehta-4a7b73288/", instagram: "https://www.instagram.com/divyamehta_007/?hl=en", image: "/images/Team/RS2024 Website Photo/Divya Mehta.jpg" },
    ],
    [ // 2
      { name: "Aaditya Patnaik Koppara", role: "Mechanical Designer", department: "	Civil Engineering", linkedin: "https://www.linkedin.com/in/aaditya-patnaik-223977317/", instagram: "https://www.instagram.com/aaditya_patnaik_42/?hl=en", image: "/images/Team/Freshers24/AadityaP.png" },
      { name: "Abbas Husain", role: "Mechanical Designer", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/abbas-husain-0a029a320/", instagram: "https://www.instagram.com/abbashusain6561/?hl=en", image: "/images/Team/Freshers24/AbbasH.png" },
      { name: "Shivansh Gupta", role: "Mechanical Designer", department: "Aerospace Engineering", linkedin: "https://www.linkedin.com/in/shivanshgupta981234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/shivanshgupta_5/?hl=en", image: "/images/Team/Freshers24/ShivanshG.png" },
      { name: "Guna Preetham Pydisetti", role: "Mechanical Designer", department: "Engineering Physics", linkedin: "https://www.linkedin.com/in/guna-preetham-pydisetti-212473318/", instagram: "https://www.instagram.com/pgpreetham_10/?hl=en", image: "/images/Team/Freshers24/Preetham.png" },
    ],
    [ // 1
      { name: "Jai Seth", role: "Mechanical Trainee", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/jai-sheth-03411a370?utm_source=share_via&utm_content=profile&utm_medium=member_ios", instagram: "https://www.instagram.com/_jaisheth/", image: "/images/Team/Freshers25/JaiSheth.png" },
      { name: "Jainam Rampuria", role: "Mechanical Trainee", department: "Mechanical Engineering", linkedin: "#", instagram: "https://www.instagram.com/jainam_51/", image: "/images/Team/Freshers25/JainamRampuria.png" },
      { name: "Sahil Lade", role: "Mechanical Trainee", department: "Mechanical Engineering", linkedin: "#", instagram: "https://www.instagram.com/sahil_s_lade/", image: "/images/Team/Freshers25/SahilLade.png" },
      { name: "Soumya Bajaj", role: "Mechanical Trainee", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/soumya-bajaj-0b44a236a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/soumya_bajaj20?igsh=MW9yMWkya21hbDQ3dQ%3D%3D", image: "/images/Team/Freshers25/SoumyaBajaj.png" },
      { name: "Tarun Kodavali", role: "Mechanical Trainee", department: "Aerospace Engineering", linkedin: "#", instagram: "#", image: "/images/Team/Freshers25/TarunKodavali.png" },
    ]
  ],
  Business: [
    [ // 3
      { name: "Anuj Patel", role: "Business Representative", department: "Metallurgical Engineering and Materials Science", linkedin: "https://www.linkedin.com/in/anuj-patel-679550297/", instagram: "https://www.instagram.com/anujpatel0808/?hl=en", image: "/images/Team/RS2024 Website Photo/Anuj Patel.jpg" },
    ],
    [ // 2
      { name: "Saket Vispute", role: "Business Executive", department: "Chemical Engineering", linkedin: "https://www.linkedin.com/in/saket-vispute-83176831b/", instagram: "https://www.instagram.com/saket_vispute/?hl=en", image: "/images/Team/Freshers24/SaketV.png" },
      { name: "Shivakshi Gupta", role: "Business Executive", department: "Industrial Engineering and Operations Research", linkedin: "https://www.linkedin.com/in/shivakshi-gupta-7b70562a2/", instagram: "https://www.instagram.com/_._shivakshi/?hl=en", image: "/images/Team/Freshers24/ShivakshiG.png" },
      { name: "Mridhula Vishwanath", role: "Business Executive", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/mridhula-vishwanath-489315336/", instagram: "https://www.instagram.com/mridhulavishwanath/?hl=en", image: "/images/Team/Freshers24/MridhulaV.png" },
      { name: "Udit Jangir", role: "Business Executive", department: "Economics", linkedin: "https://www.linkedin.com/in/udit-jangir-4a0ba4314/", instagram: "https://www.instagram.com/jangir.udit/", image: "/images/Freshers24/Udit.jpeg" },
      { name: "Diva Agrawal", role: "Business Executive", department: "Energy Science and Engineering", linkedin: "https://www.linkedin.com/in/diva-agrawal-087426265/", instagram: "https://www.instagram.com/divaagrawall/", image: "/images/Freshers24/Diva.jpeg" },
    ],
    [ // 1
      { name: "Prajakta Ajay Tengale", role: "business Trainee", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/prajakta-tengale-039649376/", instagram: "#", image: "/images/Team/Freshers25/PrajaktaAjayTengale.png" },
      { name: "Sanmukh Sonawane", role: "business Trainee", department: "Mechanical Engineering", linkedin: "https://www.linkedin.com/in/sanmukh-sonawane-2623a2395/", instagram: "https://www.instagram.com/sanmukhsonawane/", image: "/images/Team/Freshers25/SanmukhSonawane.png" },
      { name: "Pratyush Thakur", role: "business Trainee", department: "Chemistry", linkedin: "https://www.linkedin.com/in/pratyush-thakur-a53640377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/pratyush_thakur29?igsh=b3Z6bjBlN3Z3bXJy", image: "/images/Team/Freshers25/PratyushThakur.png" },
    ]
  ]
};



// --- HELPER COMPONENT: MEMBER CARD ---
// Updated to show Role first, then Academic Department below it
// import { Linkedin, Instagram } from 'lucide-react';

const MemberCard = ({ member }: { member: any }) => (
  <div className="group relative rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-[#162032] w-[260px] flex flex-col transition-transform duration-300 hover:-translate-y-2 mx-auto">

    {/* Image Section */}
    <div className="relative w-full h-[260px] flex-shrink-0 overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Social Icons (Floating at bottom of image) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
        
        {/* Instagram Icon (Visible instead of Gmail) */}
        <a
          href={member.instagram || "#"}
          target="_blank"
          rel="noopener noreferrer"
          // Using Instagram Brand Color (Pink/Purple) for better visibility, or revert to #4294ff if you prefer Blue
          className="bg-[#E1306C] p-2 rounded-full text-white hover:bg-white hover:text-[#E1306C] transition-colors duration-300 shadow-md flex items-center justify-center"
          title="Instagram"
        >
          <Instagram size={18} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href={member.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077b5] p-2 rounded-full text-white hover:bg-white hover:text-[#0077b5] transition-colors duration-300 shadow-md flex items-center justify-center"
          title="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>

    {/* Info Section - Auto height to prevent text cutting */}
    <div className="p-4 text-center bg-[#162032] border-t border-gray-800 flex flex-col justify-center h-auto min-h-[100px]">
      
      {/* Name - Allows wrapping */}
      <h3 className="font-bold text-white text-xl mb-2 leading-tight">
        {member.name}
      </h3>

      {/* Role - Allows wrapping */}
      <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-2 leading-snug">
        {member.role}
      </p>

      {/* Department - Allows wrapping */}
      <p className="text-cyan-400 text-xs font-semibold leading-relaxed">
        {member.department}
      </p>
    </div>
  </div>
);

// export default MemberCard;

export default function Team() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-28 pb-20">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-cyan-400 tracking-wide">Our Team</h1>
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

          {/* Render Each Batch */}
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