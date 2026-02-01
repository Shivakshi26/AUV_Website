import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

// --- DATA STRUCTURE ---

// 1. LEADERSHIP GROUPS
const facultyAdvisors = [
  {
    name: "Prof. Leena Vacchani",
    role: "Faculty Advisor",
    department: "Systems & Control Engineering", // Academic Dept
    linkedin: "https://www.sc.iitb.ac.in/~leena/",
    image: "images/Team/facads/prof_leena.jpg"
  },
  {
    name: "Prof. Shashi Ranjan Kumar",
    role: "Faculty Advisor",
    department: "Aerospace Engineering", // Academic Dept
    linkedin: "https://www.aero.iitb.ac.in/~shashi/",
    image: "images/Team/facads/shashi ranjan kumar.png"
  }
];


const supremeCommander = [
  {
    name: "Shubham Tiwari",
    role: "Supreme Commander",
    department: "Aerospace Engineering",
    linkedin: "https://www.linkedin.com/in/shubham-iitb/?originalSubdomain=in",
    instagram: "https://www.instagram.com/nobi_iitb/",
    image: "https://www.auv-iitb.org/images/Team/RS2024%20Website%20Photo/Nobi.jpg"
  }
];
 


const teamLeaders = [
  {
    name: "Archit Swamy",
 position: "Team Leader", 
branch: "Engineering Physics",
role: "Team Leader",
 linkedin: "https://www.linkedin.com/in/archit-swayam-78765a24b/", instagram: "https://www.instagram.com/ar_s_ir",
 image: "/images/Team/RS2024 Website Photo/Archit Swamy.jpg"
  },
  {
    name: "Sameer Mannava",
 role: "Team Leader",
 branch: "Environmental", 
linkedin: "https://www.linkedin.com/in/sameer-mannava-76251b1a0", instagram: "https://www.instagram.com/sameer_mannava/",
 image: "/images/Team/RS2024 Website Photo/SameerMa.png"
  },
  {
    name: "Kaushik Chavali", 
role: "Team Leader", branch: "Mechanical",
 linkedin: "https://www.linkedin.com/in/kaushik-chavali-a66885233/", instagram: "https://www.instagram.com/kaushik_chavali/",
image: "https://www.auv-iitb.org/images/Team/Kaushik.png"
  },
];


const teamAdvisors = [
  {
    name: "Anuj Bangad",
    role: "Team Advisor",
    department: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/anuj-bangad-5b9146252/",
    instagram: "https://www.instagram.com/anuj_pos/",
    image: "https://www.auv-iitb.org/images/Team/freshies/Anuj_Bangad.png"
  },
  {
    name: "Anurag Deshpande",
    role: "Team Advisor",
    department: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/anurag-deshpande-98833a226/",
    instagram: "https://www.facebook.com/anurag_deshpande",
    image: "https://www.auv-iitb.org/images/Team/RS2024%20Website%20Photo/Anurag%20Deshpande.jpg"
  },
  {
    name: "Mayank Bajaj",
    role: "Team Advisor",
    department: "Aerospace Engineering",
    linkedin: "https://www.linkedin.com/in/mayank-bajaj-867631223/",
    instagram: "https://www.instagram.com/mayankb1105/",
    image: "https://www.auv-iitb.org/images/Team/freshies/Mayank_bajaj.png"
  },
{name: "Yashas Salian", role: "Team Advisor", branch: "#", linkedin: "https://www.linkedin.com/in/yashas-salian-b26a22222/", instagram: "https://www.instagram.com/earlylife_crysis/", image: "/images/Team/RS2024 Website Photo/Yashas Salian.jpg"},
{name: "Archit Gupta", role: "Team Advisor", branch: "#", linkedin: "https://www.linkedin.com/in/archit-gupta20/", instagram: "https://www.instagram.com/gupta_archit/", image: "/images/Team/RS2024 Website Photo/Archit Gupta.jpg"},
{name: "Shumail Malik", role: "Team Advisor", branch: "General", linkedin: "https://www.linkedin.com/in/shumail-malik-039a86222/", instagram: "https://www.instagram.com/mohd_shumail_i/", image: "/images/Team/RS2024 Website Photo/Shumail Malik.jpg"},
];


// 2. SUBDIVISIONS (Grouped by Year Batches)
const subdivisions = {
  Software: [
    [ // 3rd Year Batch
      { 
        name: "Dhruvi Modi", 
        role: "Senior Software Architect", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/dhruvi-modi-b908125b7/", 
        instagram: "#", 
        image: "/images/Team/RS2024 Website Photo/Dhruvi Despande.jpg" 
      },
      { 
        name: 'Sparsh Badjate', 
        role: "Senior Software Architect", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/sparsh-badjate/?originalSubdomain=in", 
        instagram: "https://www.instagram.com/sparsh_0070/", 
        image: "/images/Team/RS2024 Website Photo/Sparsh Badjate.jpg" 
      },
      { 
        name: "Urvi Gupta", 
        role: "Senior Software Architect", 
        department: "Computer Science and Engineering", 
        linkedin: "#", 
        instagram: "#", 
        image: "/images/Team/RS2024 Website Photo/Urvi Gupta.jpg" 
      },
      { 
        name: "Adwai Krishna", 
        role: "Senior Software Architect", 
        department: "Computer Science and Engineering", 
        linkedin: "#", 
        instagram: "#", 
        image: "/images/Team/RS2024 Website Photo/Adwai Krishna.jpg" 
      },
    ],
    [ // 2nd Year Batch
      { 
        name: "Manit Jhajharia", 
        role: "Software Developer", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/manit-jhajharia-85b6682a8/", 
        instagram: "#", 
        image: "/images/Team/RS2024 Website Photo/Manit Jhajharia.jpg" 
      },
      { 
        name: "Divyanshu Gupta", 
        role: "Software Developer", 
        department: "Engineering Sciences (Computer Engineering)", 
        linkedin: "https://www.linkedin.com/in/divyanshu-gupta-2bb9b9284/", 
        instagram: "https://www.instagram.com/divyanshu0311/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Divyanshu Gupta.jpg" 
      },
      { 
        name: "Akshika Jain", 
        role: "Software Developer", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/akshika-jain-a4a191308/", 
        instagram: "https://www.instagram.com/akshikahere/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Akshika Jain.jpg" 
      },
      { 
        name: "Khushi Taxak", 
        role: "Software Developer", 
        department: "#", 
        linkedin: "#", 
        instagram: "#", 
        image: "/images/Team/RS2024 Website Photo/Khushi Taxak.jpg" 
      },
      { 
        name: "Jash Dalal", 
        role: "Software Developer", 
        department: "Energy Science and Engineering", 
        linkedin: "#", 
        instagram: "#", 
        image: "/images/Team/RS2024 Website Photo/Jash Dalal.jpg" 
      },
    ],
    [ // 1st Year Batch
      { 
        name: "Pratham Chollera", 
        role: "Software Trainee", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/pratham-chollera", 
        instagram: "https://www.instagram.com/the.pratham.cholera/", 
        image: "/images/Team/Freshers24/PrathamC.png" 
      },
      { 
        name: "Kiara Thapar", 
        role: "Software Trainee", 
        department: "Civil Engineering", 
        linkedin: "https://www.linkedin.com/in/kiara-thapar-83940a318/", 
        instagram: "#", 
        image: "/images/Team/Freshers24/KiaraT.png" 
      },
      { 
        name: "Nilkrishna", 
        role: "Software Trainee", 
        department: "Computer Science and Engineering", 
        linkedin: "https://www.linkedin.com/in/nilkrishna-gajare-520051268/", 
        instagram: "https://www.instagram.com/nilkrishna.gajare/?hl=en", 
        image: "/images/Team/Freshers24/Nilkrishna.png" 
      },
      { 
        name: "Denver Zuzarte", 
        role: "Software Trainee", 
        department: "Engineering Physics", 
        linkedin: "https://www.linkedin.com/in/denver-zuzarte-b3a9b42a8/", 
        instagram: "#", 
        image: "/images/Team/Freshers24/Denver.png" 
      },
      { 
        name: "Dhruv Savot", 
        role: "Software Trainee", 
        department: "Environmental Science and Engineering", 
        linkedin: "https://www.linkedin.com/in/dhruv-savot-0b7739313/", 
        instagram: "https://www.instagram.com/dhruv_savot_01/?hl=en", 
        image: "/images/Team/Freshers24/DhruvS.png" 
      },
    ]
  ],
  Electrical: [
    [ // 3
      { 
        name: "Anshu Arora", 
        role: "Senior Initiative Executive", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/aarhu-arura-039256253/", 
        instagram: "#", 
        image: "images/Team/photos/anshuelec (updated).png" 
      },
      { 
        name: "Anirudh Jangid", 
        role: "Chief Electrical Designer", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/anirudh-jangid-69a308174/", 
        instagram: "https://www.instagram.com/anirudhjangid_07/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Anirudh Jangid.jpg" 
      },
      { 
        name: "Ayush Prasad", 
        role: "Chief Electrical Designer", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/ayush-prasad-bbab77254/", 
        instagram: "https://www.instagram.com/prasadayush_22/", 
        image: "/images/Team/RS2024 Website Photo/Ayush Prasad.jpg" 
      },
    ],
    [ // 2
      { 
        name: "Jigar Mehta", 
        role: "Electrical Designer", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/jigar-mehta-667988280/", 
        instagram: "https://www.instagram.com/mehta6583/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Jigar Mehta.jpg" 
      },
      { 
        name: "Shlok Rathi", 
        role: "Electrical Designer", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/shlok-rathi-b16a912a6/", 
        instagram: "https://www.instagram.com/rathi_shlok/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Shlok Rathi.jpg" 
      },
      { 
        name: "Aniket Gupta", 
        role: "Electrical Designer", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/aniket-gupta-252113308/", 
        instagram: "https://www.instagram.com/aniket.__.gupta/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Aniket Gupta.jpg" 
      },
      { 
        name: "Shresth Keshari", 
        role: "Electrical Designer", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/shresth-keshari-626b2a267/", 
        instagram: "https://www.instagram.com/social.lonewolf/?hl=en", 
        image: "/images/RS2024 Website Photo/Shresth Keshari.jpg" 
      }
    ],
    [ // 1
      { 
        name: "Aayush Shah", 
        role: "Electrical Trainee ", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/aayush-shah-8211b3343/", 
        instagram: "https://www.instagram.com/aayush.0703/?hl=en", 
        image: "/images/Team/Freshers24/AayushS.png" 
      },
      { 
        name: "Ankush", 
        role: "Electrical Trainee", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/ankush-05350b212/", 
        instagram: "https://www.instagram.com/anku2005sh/", 
        image: "/images/Team/Freshers24/Ankush.png" 
      },
      { 
        name: "Rucha Ranade", 
        role: "Electrical Trainee", 
        department: "", 
        linkedin: "https://www.linkedin.com/in/rucha-ranade-6b035531b/", 
        instagram: "https://www.instagram.com/rightnow_ru_chat/", 
        image: "/images/Team/Freshers24/RuchaR.png " 
      },
      { 
        name: "Supriya Mishra", 
        role: "Electrical Trainee", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/supriya-mishra-5a0673325/", 
        instagram: "https://www.instagram.com/supriya_mishra06/", 
        image: "/images/Team/Freshers24/SupriyaA.png" 
      },
      { 
        name: "Kunal Paroda", 
        role: "Electrical Trainee", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/kunal-paroda-126180225", 
        instagram: " #", 
        image: "/images/Team/Freshers24/KunalP.png" 
      },
    ]
  ],
  Mechanical: [
    [ // 3
      { 
        name: "Khushaj Verma", 
        role: "Chief Mechanical Designer", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/khushajh-verma-1b9a79254/", 
        instagram: "https://www.instagram.com/v.khushajh?igsh=ZGUzMzM3NWJiOQ%3D%3D", 
        image: "/images/Team/RS2024 Website Photo/Khushajh Verma.jpg" 
      },
      { 
        name: "Yash Sanjay Sawant", 
        role: "RnD Head", 
        department: "RnD", 
        linkedin: "https://www.linkedin.com/in/yash-sawant-49174b280", 
        instagram: "https://www.instagram.com/yash_yara/", 
        image: "/images/Team/RS2024 Website Photo/Yash Sanjay Sawant.jpg" 
      },
    ],
    [ // 2
      { 
        name: "Anuj Patel", 
        role: "Mechanical Designer", 
        department: "Metallurgical Engineering and Materials Science", 
        linkedin: "https://www.linkedin.com/in/anuj-patel-679550297/", 
        instagram: "https://www.instagram.com/anujpatel0808/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/Anuj Patel.jpg" 
      },
      { 
        name: "Ayush Kumar", 
        role: "Mechanical Designer", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/ayush-kumar-7bb8442a1/", 
        instagram: "https://www.instagram.com/ayush.kumar.5b1/", 
        image: "images/Team/RS2024 Website Photo/Ayush Kumar.jpg" 
      },
      { name: "Divya Mehta", role: "Mechanical Designer", department: "Aerospace Engineering", linkedin: "https://www.linkedin.com/in/divya-mehta-4a7b73288/", instagram: "https://www.instagram.com/divyamehta_007/?hl=en", image: "/images/Team/RS2024 Website Photo/Divya Mehta.jpg" },

      
    ],
    [ // 1
      { 
        name: "Shivansh Gupta", 
        role: "Mechanical Trainee", 
        department: "Aerospace Engineering", 
        linkedin: "https://www.linkedin.com/in/shivanshgupta981234/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
        instagram: "https://www.instagram.com/shivanshgupta_5/?hl=en", 
        image: "/images/Team/Freshers24/ShivanshG.png" 
      },
      { 
        name: "Guna Preetham Pydisetti", 
        role: "Mechanical Trainee", 
        department: "Engineering Physics", 
        linkedin: "https://www.linkedin.com/in/guna-preetham-pydisetti-212473318/", 
        instagram: "https://www.instagram.com/pgpreetham_10/?hl=en", 
        image: "/images/Team/Freshers24/Preetham.png" 
      },
      { 
        name: "Aaditya Patnaik Koppara", 
        role: "Mech ", 
        department: "Civil Engineering", 
        linkedin: "https://www.linkedin.com/in/aaditya-patnaik-223977317/", 
        instagram: "https://www.instagram.com/aaditya_patnaik_42/?hl=en", 
        image: "/images/Team/Freshers24/AadityaP.png" 
      },
      { 
        name: "Abbas Husain", 
        role: "Mechanical Trainee", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/abbas-husain-0a029a320/", 
        instagram: "https://www.instagram.com/abbashusain6561/?hl=en", 
        image: "/images/Team/Freshers24/AbbasH.png" 
      },
      { 
        name: "Shaurya Gupta", 
        role: "Mechanical Trainee", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/shauryaguptaiitb/", 
        instagram: "https://www.instagram.com/shauryag_1210/?hl=en", 
        image: "https://www.auv-iitb.org/images/Team/Freshers24/ShauryaG.png" 
      },
    ]
  ],
  Business: [
    [ // 3
      { 
        name: "Anshu Arora", 
        role: "Senior Initiative Executive", 
        department: "Electrical Engineering", 
        linkedin: "https://www.linkedin.com/in/aarhu-arura-039256253/", 
        instagram: "#", 
        image: "images/Team/photos/anshuelec (updated).png" 
      },
    ],
    [ // 2
      { 
        name: "Jinay Arora", 
        role: "business executive", 
        department: "Chemical Engineering", 
        linkedin: "https://www.linkedin.com/in/jinay-vora-20b7562a4/", 
        instagram: "https://www.instagram.com/jin_ayyy_/?hl=en", 
        image: "/images/Team/RS2024 Website Photo/JinayV.png" 
      },
      { 
        name: "Arush Narayan Srivatsav", 
        role: "Business Executive", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/arush-narayan-srivastava-001/", 
        instagram: "https://www.instagram.com/itz.arushhh/", 
        image: "images/Team/RS2024 Website Photo/Arush Narayan Srivastav.jpg" 
      },
      { 
        name: "Avani Gala", 
        role: "Business Executive", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/avani-gala-ba12b0222/", 
        instagram: "https://www.instagram.com/avani.j950/", 
        image: "images/Team/RS2024 Website Photo/Avani Jain.jpg" 
      },
    ],
    [ // 1
      { 
        name: "Saket Vispute", 
        role: "Business Trainee", 
        department: "Chemical Engineering", 
        linkedin: "https://www.linkedin.com/in/saket-vispute-83176831b/", 
        instagram: "https://www.instagram.com/saket_vispute/?hl=en", 
        image: "/images/Team/Freshers24/SaketV.png" 
      },
      { 
        name: "Shivakshi Gupta", 
        role: "Business Trainee", 
        department: "Industrial Engineering and Operations Research", 
        linkedin: "https://www.linkedin.com/in/shivakshi-gupta-7b70562a2/", 
        instagram: "https://www.instagram.com/_._shivakshi/?hl=en", 
        image: "/images/Team/Freshers24/ShivakshiG.png" 
      },
      { 
        name: "Mridhula Vishwanath", 
        role: "Business Trainee", 
        department: "Mechanical Engineering", 
        linkedin: "https://www.linkedin.com/in/mridhula-vishwanath-489315336/", 
        instagram: "https://www.instagram.com/mridhulavishwanath/?hl=en", 
        image: "/images/Team/Freshers24/MridhulaV.png" 
      },
      { 
        name: "Tanvi Gattani", 
        role: "Business Trainee", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/tanvigattani2005/", 
        instagram: "https://www.instagram.com/tanvig_24/", 
        image: "images/Team/Freshers24/TanviG.png" 
      },
      { 
        name: "Satyadev Suvarth", 
        role: "Business Trainee", 
        department: "#", 
        linkedin: "https://www.linkedin.com/in/satyadev-suvarth-344226302/", 
        instagram: "https://www.instagram.com/satyadev.suvarth/", 
        image: "images/Team/Freshers24/SatyadevS.png" 
      },
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
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-cyan-400 tracking-wide">Team 2024-25</h1>
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