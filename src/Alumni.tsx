import  { useRef } from 'react';
import { Linkedin, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// --- DATA: Companies Founded (Top Carousel) ---
const companiesFounded = [
  {
    name: "Teachmint",
    founder: "Mihir Gupta,Anshuman Kumar,Varun Mittal",
    desc: "It simplifies transition into digital education providing various features like automating adminastrative papperwork on single mobile phone providing easy technology to access.  ",
    logo: "/images/Startups/teachmint.svg",
    link: "https://www.teachmint.com/"
  },
  {
    name: "Miko",
    founder: "Sneh R. Vaswani, Chintan Raikar, Prashant Iyengar",
    desc: "Miko is an AI-powered educational company designed for children. Keeping their safety as first priority.",
    logo: "https://www.auv-iitb.org/images/Startups/miko3.jpeg",
    link: "https://miko.ai/?srsltid=AfmBOoob0QymurKVTrl8b1yj6rw_sHrwYdzlsV8vHi4NVxDWu_fmsLdK"
  },
  {
    name: "Samya .AI",
    founder: "Sourabh Chourasia",
    desc: "Samya.AI operates as a revenue growth AI company that brings the power of deep learning, probabilistic machine learning, and reinforcement learning approaches together with the deep domain expertise to help CPG companies recapture revenue growth potential.",
    logo: "https://www.auv-iitb.org/images/Startups/samya.png",
    link: "https://samaya.ai/"
  },
  {
    name: "Mailmodo",
    founder: "Dyevesh Tandani)",
    desc: " Mailmodon is an AI-powered, no-code email marketing platform designed to increase conversions and ROI by enabling users to create and send interactive, app-like AMP (Accelerated Mobile Pages) emails",
    logo: "https://www.auv-iitb.org/images/Startups/mailmodo.png",
    link: "https://www.mailmodo.com/"
  },
  {
    name: "Nurture Labs",
    founder: "Yash Agrawal",
    desc: "Nurture Labs is venture studio that teams up with handful of founders who have clear vision and strong belief on blockchain, AI ",
    logo: "https://www.auv-iitb.org/images/Startups/nurturelabs.png",
    link: "https://nurturelabs.co/"
  },
  {
    name: "Eeki Foods",
    founder: "Amit Kumar",
    desc: "It is an Indian agritech startup that uses loT automation technology to produce high -quality, nutrient -rich  and pesticide- free vegetables through climate control .",
    logo: "https://www.auv-iitb.org/images/Startups/eeki%20foods%202.png",
    link: "https://www.eeki.com/"
  }
];




// --- DATA: Testimonials ---
// const testimonials = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     batch: "Mechanical Lead, Batch of 2021",
//     image: "/images/team24/member1.jpg",
//     quote: "AUV-IITB was the defining experience of my college life. Working on Matsya taught me more about real-world engineering, teamwork, and resilience than any classroom course."
//   },
//   {
//     id: 2,
//     name: "Priya Patel",
//     batch: "Software Lead, Batch of 2022",
//     image: "/images/team24/member3.jpg",
//     quote: "The sheer complexity of building an autonomous vehicle is daunting, but tackling it with this team gave me immense confidence. The skills I gained here directly helped me secure my dream job."
//   },
// ];

// --- COMPONENT: Alumni Card ---
// const AlumniCard = ({ member }: { member: any }) => (
//   <div className="group relative rounded-xl overflow-hidden border border-gray-800 shadow-lg bg-[#162032] w-[260px] h-[340px] transition-transform duration-300 hover:-translate-y-2 mx-auto">
//     <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700">
//       <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//     </div>
//     <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-4 pt-12 text-center">
//       <h3 className="font-bold text-white text-lg">{member.name}</h3>
//       <p className="text-cyan-400 text-sm font-medium mb-1">{member.role}</p>
//       <p className="text-gray-400 text-xs">{member.current}</p>
//     </div>
//     <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//         <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white text-[#0077b5] rounded-full hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
//           <Linkedin size={24} />
//         </a>
//       </div>
//     </div>
//   </div>
// );

// --- COMPONENT: Testimonial Card ---
// const TestimonialCard = ({ data }: { data: any }) => (
//   <div className="bg-[#162032] border border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-start relative hover:border-cyan-900 transition-colors">
//     <Quote className="absolute top-6 right-6 text-cyan-950 w-16 h-16 opacity-50" />
//     <div className="flex-shrink-0 relative">
//       <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 p-1 shadow-lg">
//         <img src={data.image} alt={data.name} className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all" />
//       </div>
//     </div>
//     <div className="relative z-10">
//       <p className="text-gray-300 italic text-lg leading-relaxed mb-6">"{data.quote}"</p>
//       <div>
//         <h4 className="text-xl font-bold text-white uppercase tracking-wider">{data.name}</h4>
//         <span className="text-cyan-400 text-sm font-medium">{data.batch}</span>
//       </div>
//     </div>
//   </div>
// );

// --- MAIN PAGE ---
export default function Alumni() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Carousel Scroll Logic
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; // Width of card + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-28 pb-20">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-4 text-cyan-400 tracking-wide">Our Alumni</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The legacy of AUV-IITB. From founding startups to leading innovation at top tech firms, our alumni continue to make waves.
        </p>
      </div>

      {/* --- SECTION 1: COMPANIES FOUNDED (CAROUSEL) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="flex justify-between items-end mb-8 px-2">
          {/* Carousel Controls */}
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-gray-800 hover:bg-cyan-600 text-white transition-colors border border-gray-700">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-gray-800 hover:bg-cyan-600 text-white transition-colors border border-gray-700">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {companiesFounded.map((company, idx) => (
            <div
              key={idx}
              className="min-w-[320px] md:min-w-[380px] bg-gradient-to-br from-[#162032] to-[#0f1522] border border-gray-800 p-6 rounded-2xl snap-center hover:border-yellow-500/50 transition-colors group flex flex-col justify-between"
            >
              <div>
                {/* Logo Placeholder */}
                <div className="h-32 w-32 mb-6 overflow-hidden rounded-lg bg-white flex items-center justify-center p-2">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    // Fallback text size also increased
                    <span className="text-5xl font-bold text-gray-500 group-hover:text-white">
                      {company.name[0]}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{company.name}</h3>
                <p className="text-sm text-yellow-500 font-medium mb-4">Founder: {company.founder}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {company.desc}
                </p>
              </div>
              <a href={company.link} className="inline-flex items-center text-sm font-bold text-gray-400 hover:text-white transition-colors">
                Visit Website <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* ---TESTIMONIALS --- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16 bg-[#0f172a]/50 rounded-3xl border border-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase text-white mb-4 tracking-wide inline-block border-b-4 border-cyan-400 pb-2">
            Alumni Speak
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Hear about their journey and experiences at the AUV Lab.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testi) => (
            <TestimonialCard key={testi.id} data={testi} />
          ))}
        </div>
      </section> */}

    </div>
  );
}