import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Search, ChevronRight, Twitter, Facebook, Instagram, Linkedin, ChevronDown, Menu, X } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Achievements from './Achievements';
import Vehicles from './Vehicles';
import RoboSub from './RoboSub';
import Team25 from './Team25';
import Team24 from './Team24';
import Team23 from './Team23';
import Alumni from './Alumni';
import Gallery from './Gallery';
import Blogs from './Blog';
import SearchWidget from './SearchWidget';
// import { usePageHighlighter } from './usePageHighlighter';

// --- DATA CONFIGURATION ---

const stats = [
  { label: "Team Members", value: 55, suffix: "+" },
  { label: "Lines Of Code", value: 55, suffix: "k+" },
  { label: "Years Of Work", value: 14, suffix: "+" },
  { label: "Vehicles", value: 7, suffix: "" },
];

const fleet = [
  { id: 1, name: "Matsya 1", desc: "Matsya 1 was the very first AUV designed by the team back in 2011, with a goal to develop a state of the art AUV that could localize itself in an underwater environment and complete some predefined real life tasks for the Robosub 2012 competition.", img: "/images/vehicles/M1.png" },
  { id: 2, name: "Matsya 2", desc: "The second iteration of Matsya is complete and more modular than its predecessor, with separate enclosures for electronics, batteries, cameras, and torpedo shooting actuators. The design aimed to ensure robust waterproofing, ease of assembly, and efficient heat sinking.", img: "/images/vehicles/M2.png" },
  { id: 3, name: "Matsya 3", desc: "Matsya 3 was the third vehicle built by the team in 2013. Matsya-3 has a modular design and weighs 42 kg. It is highly optimised for strength and buoyancy.", img: "/images/vehicles/M3.png" },
  { id: 4, name: "Matsya 4", desc: "Matsya 4 is the fourth AUV in the Matsya series. Although it has a similar design philosophy to Matsya 3, it has majorly improved in terms of weight optimization, reliability, endurance, speed, aesthetics, and cognition.", img: "/images/vehicles/M4.png" },
  { id: 5, name: "Matsya 5", desc: "Matsya 5 is the fifth AUV in the Matsya series. To permit easier access to the components of the vehicle, the surface was split into 6 parts, each of which was detachable.", img: "/images/vehicles/M5.png" },
  { id: 6, name: "Matsya 6", desc: "The sixth variant of Matsya saw major design changes to address pressing issues such as heating leading to multiple electrical failures and reducing the size of the vehicle in general for better control.", img: "/images/vehicles/M6.png" },
  { id: 7, name: "Matsya 7", desc: "The latest variant of Matsya introduced key improvements such as the OakD stereo camera for precise depth sensing, a symmetrical thruster layout for easier tuning, a monohull design for better accessibility, and carbon fibre handles for improved handling.", img: "/images/vehicles/M7.png" },
  // { id: 8, name: "Mini Matsya", desc: " ", img: " " },
];

const sponsors = [
  { id: 1, name: "Luxonis", logo: "/images/sponsors/luxonis.png", link: "https://www.luxonis.com/" },
  { id: 2, name: "WaterLinked", logo: "/images/sponsors/waterlinked.png", link: "https://waterlinked.com" },
  { id: 3, name: "L&T", logo: "/images/sponsors/Lnt.png", link: "https://www.larsentoubro.com/" },
  { id: 4, name: "IDC-IITB", logo: "/images/sponsors/idciitb.png", link: "https://idc.iitb.ac.in" },
  { id: 5, name: "ParkerLord", logo: "/images/sponsors/parkerlord.png", link: "https://www.parker.com" },
  { id: 6, name: "NCF Labs", logo: "/images/sponsors/ncf.png", link: "https://ncflabs.com/" },
  { id: 7, name: "Teachmint", logo: "/images/sponsors/teachmintLogo.png", link: "https://www.teachmint.com" },
  { id: 8, name: "DRDO", logo: "/images/sponsors/drdo.png", link: "https://www.drdo.gov.in" },
  { id: 9, name: "IITBombay", logo: "/images/sponsors/iitb.png", link: "https://www.iitb.ac.in" },
  { id: 10, name: "Autodesk", logo: "/images/sponsors/Autodesk.png", link: "https://www.autodesk.com/" },
  { id: 11, name: "Miko", logo: "/images/sponsors/miko3.png", link: "https://www.miko.ai" },
  { id: 12, name: "ANSYS", logo: "/images/sponsors/ansys.png", link: "https://www.ansys.com/" },
  { id: 13, name: "BlueRobotics", logo: "/images/sponsors/bluerobotics.png", link: "https://bluerobotics.com/" },
];

// --- COMPONENTS ---

const AnimatedCounter = ({ end, suffix, duration = 2000 }: { end: number, suffix: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasStarted(true);
        if (elementRef.current) observer.unobserve(elementRef.current);
      }
    }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => { if (elementRef.current) observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      if (progress < duration) {
        setCount(Math.min(end, (progress / duration) * end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{Math.floor(count)}{suffix}</span>;
};

// 1. STANDARD FOOTER (For all pages except Home)
const StandardFooter = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6">AUV-IITB</h3>
            <div className="text-sm leading-relaxed text-gray-400 space-y-1">
              <p>AUV Lab,</p>
              <p>Aerospace Department Basement,</p>
              <p>YP Road, IIT Area, Powai,</p>
              <p>Mumbai, Maharashtra - 400076</p>
            </div>
          </div>
          {/* Phone/Email */}
          <div className="space-y-4 pt-2">
            <div className="text-sm space-y-3">
              <div>
                <p className="font-bold text-white">Phone:</p>
                <p>Anirudh Jangid: +91 78785 92501</p>
                <p>Khushajh Verma: +91 99505 25333</p>
                <p>Sparsh Badjate: +91 70308 80070</p>
              </div>
              <div>
                <p className="font-bold text-white mt-4">Email:</p>
                <a href="mailto:auv.iitb@gmail.com" className="hover:text-cyan-400">auv.iitb@gmail.com</a>
              </div>
            </div>
          </div>
          {/* Links 1 */}
          <div className="flex flex-col space-y-3 text-sm">
            {['Home', 'Vehicles', 'Achievements', 'Robosub'].map((link) => (
              <Link key={link} to={link === 'Home' ? '/' : '#'} className="flex items-center hover:text-cyan-400 group">
                <ChevronRight className="w-4 h-4 mr-2 text-cyan-600 group-hover:text-cyan-400" /> {link}
              </Link>
            ))}
          </div>
          {/* Links 2 */}
          <div className="flex flex-col space-y-3 text-sm">
            {['Team', 'Alumni', 'Gallery', 'Media & Blogs', 'Contact'].map((link) => (
              <a key={link} href="#" className="flex items-center hover:text-cyan-400 group">
                <ChevronRight className="w-4 h-4 mr-2 text-cyan-600 group-hover:text-cyan-400" /> {link}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Designed by AUV-IITB</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// 2. FOOTER MANAGER (Decides which footer to show)
const FooterManager = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    // Show Sponsors Footer for Home Page
    return (
      <footer className="relative bg-blue-950 py-24 overflow-hidden mt-auto">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551244072-5d9171d42105?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-black/80"></div>
        <div className="relative z-10 w-full">
          <div className="relative mb-32 overflow-hidden hover-pause">
            <div className="absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-blue-950 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-blue-950 to-transparent pointer-events-none"></div>
            <div className="animate-marquee flex gap-8 items-center">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <a key={`${sponsor.id}-${index}`} href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                  <div className="w-64 h-32 bg-white/50 rounded-xl flex items-center justify-center p-6 shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-8 text-white">Corporate Support</h3>
            <a 
              href="mailto:auv.iitb@gmail.com"
              className="inline-block bg-black border border-gray-600 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-900 hover:border-cyan-400 transition-all"
            >
              Join Us
            </a>          </div>
        </div>
      </footer>
    );
  }

  // Show Standard Footer for all other pages
  return <StandardFooter />;
};

// --- MAIN CONTENT WRAPPER ---
// We move the main logic here so it can use hooks like useNavigate from the Router in App
function MainContent() {
  const [activeFleetId, setActiveFleetId] = useState<number>(7);
  // usePageHighlighter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- SMART SCROLL LOGIC ---
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Check for Hash on Page Load (or Route Change)
  useEffect(() => {
    if (location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        // Small timeout ensures DOM is fully rendered before scrolling
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // 2. Click Handler for Navbar Links
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If we are already on Home, just scroll
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are elsewhere, navigate to Home with hash
      navigate('/#contact');
    }
    closeMobileMenu();
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white font-sans selection:bg-cyan-500 selection:text-white flex flex-col">

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer" onClick={closeMobileMenu}>
              <img src="/images/logoauv.png" alt="AUV-IITB Logo" className="h-10 md:h-12 w-auto object-contain" />
            </Link>

            {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 text-sm uppercase tracking-wider font-medium text-gray-300">
                <Link to="/" className="hover:text-cyan-400 transition-colors">About Us</Link>
                <Link to="/vehicles" className="hover:text-cyan-400 transition-colors">Vehicles</Link>
                <Link to="/achievements" className="hover:text-cyan-400 transition-colors">Achievements</Link>
                <Link to="/robosub" className="hover:text-cyan-400 transition-colors">RoboSub</Link>

                {/* Desktop Team Dropdown */}
                <div className="relative group">
                  <button className="flex items-center hover:text-cyan-400 transition-colors focus:outline-none py-4">
                    TEAM <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-[#162032] border border-gray-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden">
                    <div className="py-2">
                      <Link to="/team25" className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#0B1120] hover:text-cyan-400">Team 2025-26</Link>
                      <Link to="/team24" className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#0B1120] hover:text-cyan-400">Team 2024-25</Link>
                      <Link to="/alumni" className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#0B1120] hover:text-cyan-400">Alumni</Link>
                    </div>
                  </div>
                </div>
                
                 {/* Desktop Media Dropdown */}
                 <div className="relative group">
                  <button className="flex items-center hover:text-cyan-400 transition-colors focus:outline-none py-4">
                    MEDIA <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute left-0 mt-0 w-48 bg-[#162032] border border-gray-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50 overflow-hidden">
                    <div className="py-2">
                      <Link to="/blogs" className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#0B1120] hover:text-cyan-400">Blogs</Link>
                      <Link to="/gallery" className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#0B1120] hover:text-cyan-400">Gallery</Link>
                    </div>
                  </div>
                </div>
                

                {/* --- UPDATE 1: Contact Link uses new Handler --- */}
                <a href="/#contact" onClick={handleContactClick} className="hover:text-cyan-400 transition-colors">Contact</a>
              <div className="pl-4 border-l border-gray-700">
            <SearchWidget />
          </div>
              </div>

            </div>

            {/* --- MOBILE MENU BUTTON (Visible only on Mobile) --- */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white p-2">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0B1120] border-b border-gray-800 shadow-2xl animate-fadeIn h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 pt-4 pb-8 space-y-2">
              
              {/* Mobile Search */}
              <div className="mb-6 w-full"><SearchWidget /></div>

              <Link to="/" onClick={closeMobileMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">About Us</Link>
              <Link to="/vehicles" onClick={closeMobileMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Vehicles</Link>
              <Link to="/achievements" onClick={closeMobileMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Achievements</Link>
              <Link to="/robosub" onClick={closeMobileMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">RoboSub</Link>

              {/* Mobile Team Dropdown */}
              <div>
                 <button onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'team' ? null : 'team')} className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
                   TEAM <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'team' ? 'rotate-180' : ''}`} />
                 </button>
                 {activeMobileDropdown === 'team' && (
                   <div className="pl-6 space-y-1 bg-gray-900/50 rounded-lg mt-1 mb-2">
                     <Link to="/team25" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-400">Team 2026</Link>
                     <Link to="/team24" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-400">Team 2025</Link>
                     <Link to="/alumni" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-400">Alumni</Link>
                   </div>
                 )}
              </div>

              {/* Mobile Media Dropdown */}
              <div>
                 <button onClick={() => setActiveMobileDropdown(activeMobileDropdown === 'media' ? null : 'media')} className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">
                   MEDIA <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'media' ? 'rotate-180' : ''}`} />
                 </button>
                 {activeMobileDropdown === 'media' && (
                   <div className="pl-6 space-y-1 bg-gray-900/50 rounded-lg mt-1 mb-2">
                     <Link to="/blogs" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-400">Blogs</Link>
                     <Link to="/gallery" onClick={closeMobileMenu} className="block px-3 py-2 text-sm text-gray-400">Gallery</Link>
                   </div>
                 )}
              </div>

              {/* --- UPDATE 2: Mobile Contact Link uses Handler --- */}
              <a href="/#contact" onClick={handleContactClick} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800">Contact</a>
                 <div className="mb-6 w-full flex justify-center">
            <SearchWidget />
        </div>
            </div>
          </div>
        )}
      </nav>

      {/* --- ROUTES --- */ }
      <div className="flex-grow">
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <div className="relative mt-20 h-[500px] w-full overflow-hidden">
                <img src="/images/team24/Team24.JPG" alt="Team" className="w-full h-full object-cover opacity-60" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent h-40"></div>
                <div className="absolute bottom-10 left-4 md:left-20">
                </div>
              </div>

              <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="text-gray-300 text-sm md:text-lg leading-relaxed space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-8 border-l-4 border-cyan-400 pl-6">
                      About Us
                    </h2>
                    <p>
                      AUV-IITB comprises 50+ highly enthusiastic and hard-working technocrats on underwater robotics ranging from freshmen to senior undergraduates and experienced post-graduates spanning various branches of engineering at the Indian Institute of Technology Bombay.
                    </p>
                    <p>
                      We work on Matsya, a series of Autonomous Underwater Vehicles (AUVs) to deliver a research platform in underwater robotics and promote autonomous systems. The team's vision is to develop state-of-the-art AUVs capable of localization, navigation, and performing complex tasks in an underwater environment.
                    </p>
                  </div>
                  <div className="w-full h-[300px] md:h-[400px] bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(8,145,178,0.2)] border border-gray-700 relative group">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Kr68oZ-BFoU?si=geDlS5JOvA23p_3r"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </section>

              <section className="bg-[#0B1120] py-16 border-y border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center justify-center text-center group">
                        <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-gray-300 uppercase tracking-[0.2em]">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-8 border-l-4 border-cyan-400 pl-6">
                  Our AUV Fleet
                </h2>
                <p className="text-gray-400 mb-12 w-full text-lg leading-relaxed">Our team's flagship series of AUVs, the Matsya series, consists of 7 vehicles named Matsya 1 to 7.
                  Matsya 1 was the first AUV developed in 2013, and Matsya 7 is the latest.</p>
                <div className="flex flex-col md:flex-row gap-4 h-[500px] w-full">
                  {fleet.map((item) => (
                    <div key={item.id} onClick={() => setActiveFleetId(item.id)} className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-700 ease-in-out bg-gray-900 border border-gray-800 ${activeFleetId === item.id ? 'flex-[3]' : 'flex-[1] hover:flex-[1.2] grayscale hover:grayscale-0'}`}>
                      <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500" />
                      <div className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/90 to-transparent transition-opacity duration-500 ${activeFleetId === item.id ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                        <h3 className={`font-bold text-white uppercase mb-2 transition-all duration-500 whitespace-nowrap ${activeFleetId === item.id ? 'text-3xl text-cyan-400' : 'text-xl md:-rotate-90'}`}>{item.name}</h3>
                        {activeFleetId === item.id && (<p className="text-gray-300 text-sm md:text-base animate-fadeIn border-l-2 border-cyan-500 pl-4 mt-4">{item.desc}</p>)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* --- UPDATE 3: Added ID to Contact Section --- */}
              <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-white mb-8 border-l-4 border-cyan-400 pl-6">
                  Contact Us
                </h2>
                <div className="flex justify-center gap-12 md:gap-32">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=AUV+Lab+Aerospace+Department+IIT+Bombay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-48 h-32 flex items-center justify-center text-center cursor-pointer"
                  >
                    <MapPin className="w-16 h-16 text-cyan-400 transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-sm font-semibold text-cyan-400">AUV Lab,
    Aerospace Department Basement,
    YP Road, IIT Area, Powai,
    Mumbai, Maharashtra - 400076</span>
                    </div>
                  </a>
                  <div className="group relative w-64 h-32 flex items-center justify-center text-center">
                    <Phone className="w-16 h-16 text-cyan-400 transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-sm font-semibold text-cyan-400">Anirudh Jangid : +91 78785 92501
      Khushajh Verma : +91 99505 25333
      Sparsh Badjate : +91 70308 80070</span>
                    </div>
                  </div>
                  <div className="group relative w-48 h-32 flex items-center justify-center text-center">
                    <Mail className="w-16 h-16 text-cyan-400 transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <span className="text-sm font-semibold text-cyan-400">auv.iitb@gmail.com</span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          } />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/robosub" element={<RoboSub />} />
          <Route path="/team25" element={<Team25 />} />
          <Route path="/team24" element={<Team24 />} />
          <Route path="/team23" element={<Team23 />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>

      {/* --- DYNAMIC FOOTER --- */ }
      <FooterManager />

    </div>
  );
}

// --- APP WRAPPER ---
// Only Router lives here so MainContent can use Router hooks
export default function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}