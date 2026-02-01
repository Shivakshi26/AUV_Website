import React from 'react';
import { Clock } from 'lucide-react';

// --- DATA: Blog Posts ---
const blogsData = [
  {
    id: 1,
    title: "TechConnect Exhibition",
    date: "22 December 2025",
    image: "/images/Blog/TechConnect.jpg",
excerpt: "At Techfest 2025, Team AUV IIT Bombay presented Matsya 7 (RoboSub 2025) to leaders from India’s defence and industry, discussing the role of autonomous underwater systems in real-world maritime operations. These interactions reinforced our focus on building scalable, reliable, and socially impactful underwater technologies."  },
  {
    id: 1,
    title: "WiSE: Women in Science and Engineering",
    date: "May 27, 2025",
    image: "/images/Blog/Wise25.jpg",
    excerpt: "The WiSE program invites 200 high school girls to IIT Bombay's campus for a few days of immersive exposure to cutting-edge technology. As part of this initiative, AUV-IITB had the pleasure of presenting our AUV to these aspiring young scientists, helping to inspire and empower the next generation of female innovators."
  },
  {
    id: 2,
    title: "GRA: Group for Rural Activities",
    date: "March 8, 2025",
    image: "/images/Blog/GRE.jpg",
    excerpt: "Participating in a Rural Immersion Camp in Hiware Bazar, Ahmednagar, we conducted a Technology Awareness Session for 300+ primary school students. The event introduced them to the world of underwater robotics and served as an inspiring platform to spark curiosity about science and engineering in rural India."
  },
  {
    id: 3,
    title: "Autodesk Collaboration",
    date: "November 14, 2024",
    image: "/images/Blog/autocad.jpg",
    excerpt: "We had the pleasure of presenting Matsya 6 to Andrew Anagnost, the CEO of Autodesk. Prior to decommissioning the vehicle, we conducted a study on its handle design using Autodesk's Generative Design tool, successfully optimizing the weight and ergonomics for easier handling."
  },
  {
    id: 4,
    title: "Ansys Executives Visit",
    date: "October 15, 2024", 
    image: "/images/Blog/Ansys.jpg",
    excerpt: "During a visit by ANSYS executives to IIT Bombay, we demonstrated Matsya 7 performing a fully autonomous task in the pool. The session highlighted how advanced simulation tools are applied at the student engineering level, bridging the gap between academic research and industry practice."
  },
  {
    id: 5,
    title: "Miko & PM Delegation",
    date: "July 11, 2024",
    image: "/images/Blog/miko.jpg",
    excerpt: "In a proud moment for the IITB ecosystem, Miko was part of the esteemed 10-member CEO delegation accompanying Hon'ble Prime Minister Narendra Modi on his visit to Austria. This recognition highlights the global impact of robotics and innovation stemming from our community."
  },
  {
    id: 6,
    title: "Ek Bharat Shreshtha Bharat",
    date: "February 20, 2024", // Approximate date based on typical EBSB schedules
    image: "/images/Blog/EBSB.jpg",
    excerpt: "We had the privilege to showcase the incredible world of underwater robotics to a group of young minds from Punjab as part of the Ek Bharat Shreshtha Bharat initiative. Their visit to IITB introduced them to the wonders of AUVs and our very own Matsya 6, leaving them awestruck by the technology."
  },
  {
    id: 7,
    title: "Interaction with School Children",
    date: "January 10, 2024", 
    image: "/images/Blog/Interaction_with_children.jpg",
    excerpt: "Our team hosted a group of enthusiastic schoolchildren for an engaging 2-hour session. We introduced them to AUVs, sparked curiosity about thrusters and propellers, and led a hands-on gripper-building activity. The visit concluded with a lab tour and a live demonstration of Matsya 4."
  },
  {
    id: 8,
    title: "Tech & RnD Expo '22",
    date: "November 05, 2022",
    image: "/images/Blog/TechExpo.jpg",
    excerpt: "AUV-IITB showcased MATSYA 6 (TRL 8) at the Tech & RnD Expo organized by the Institute Technical Council. The two-day event drew students, professors, journalists, and industry leaders, providing a platform to display our latest advancements in underwater autonomy."
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-32 pb-20">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl font-bold uppercase mb-8 text-cyan-400 tracking-wide">
          Blogs
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          This blog section highlights our outreach efforts aimed at growing the underwater robotics community. 
          Through these initiatives, we hope to inspire innovation, encourage learning, and foster collaboration within and beyond campus.
        </p>
      </div>

      {/* --- BLOG GRID --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogsData.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-[#162032] border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:border-gray-600 transition-all duration-300 flex flex-col group"
          >
            
            {/* Image Container */}
            <div className="h-64 overflow-hidden relative">
              {/* Placeholder background in case image is loading */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-500">
                 <span className="sr-only">Image Placeholder</span>
              </div>
              
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-10"
              />
            </div>

            {/* Content Container */}
            <div className="p-8 flex-1 flex flex-col">
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {blog.title}
              </h2>

              {/* Date */}
              <div className="flex items-center text-gray-400 text-sm mb-6">
                <Clock size={16} className="mr-2 text-cyan-500" />
                <span>{blog.date}</span>
              </div>

              {/* Excerpt (Fills remaining space) */}
              <p className="text-gray-300 leading-relaxed flex-1">
                {blog.excerpt}
              </p>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}