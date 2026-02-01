import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- DATA: Timeline Events (Updated for Horizontal Layout) ---
const timelineData = [
    {
        id: 1,
        date: "Oct-Dec 2024",
        title: "Beginning of Matsya 7",
        desc: <span>The side walls of Matsya 7 were <b>custom-designed</b> and manufactured to ensure <b>optimal hydrodynamics</b> and structural integrity. Matsya 6 successfully returned from Robosub 2024. Camera hull for navigation, structural frames for <b>robust skeleton</b>, base plate and flange to ensure stable mounting were manufactured.</span>,
        images: ["/images/RoboSub/1_1.jpeg", "/images/RoboSub/1_2.jpeg", "/images/RoboSub/1_3.jpg"]
    },
    {
        id: 2,
        date: "Jan-March 2025",
        title: "Underwater Systems Integration",
        desc: <span> <b>Matsya 7</b> underwent significant mechanical, electrical, and waterproofing developments over this period. A precision-manufactured <b>marker dropper</b>, anodized aluminium frames, a welded main hull, new <b>safety kill switches</b>, and an improved waterproof ethernet guard were completed and preliminarily tested. Efforts then focused on durability and sealing, including hull <b>anodization</b>, waterproof testing, rewelding to fix minor imperfections, and vacuum impregnation to enhance <b>long-term reliability</b>. The vehicle later passed progressive waterproof tests up to <b>24 hours</b> and was officially declared waterproof. Alongside this, electrical stack assembly, in-air testing, <b>servo integration</b>, 3D-printed thruster shrouds, pressure and leak testing were completed, and <b>control tuning</b> was initiated.</span>,
        images: ["/images/RoboSub/2_1.jpeg", "/images/RoboSub/2_2.jpeg", "/images/RoboSub/2_3.jpeg"]
    },
    {
        id: 3,
        date: "April-June 2025",
        title: "Vision-Based Task Automation",
        desc: <span>A dataset of over <b>2000 images</b> was collected to support vision-based tasks and AI model training, covering scenarios such as marker dropping into bins, torpedo firing through holes, and detection of white and red poles. High-quality bounding box annotations were developed to enable accurate <b>object localization</b> and robust model performance. The navigation and task pipeline was designed to handle gate passing, pole detection with distance estimation, precise marker dropping into bins, and <b>accurate torpedo firing</b> through designated holes.</span>,
        images: ["/images/RoboSub/3_1.png", "/images/RoboSub/3_2.png", "/images/RoboSub/3_3.jpeg"]
    },
    {
        id: 4,
        date: "July-Sept 2025",
        title: "At Robosub 2025",
        desc: <span>Matsya 7 was successfully shipped to California, USA for <b>Robosub 2025</b>. Planning and cading of Mini Matsya executed. <b>ANSYS simulator</b> was used. The vehicle is designed to operate primarily using cameras and an IMU, making visual feature mapping essential for localization and navigation.</span>,
        images: ["/images/RoboSub/4_1.jpg", "/images/RoboSub/4_2.jpg", "/images/RoboSub/4_3.png"]
    },
    {
        id: 5,
        date: "Oct-Dec 2025",
        title: "Return of Matsya 7, Mini Matsya development",
        desc: <span>Completed winter pool trials for <b>Matsya 7</b>. Initiated <b>Mini Matsya</b>: a compact, 5-DOF vehicle (no pitch) with dual cameras for tasks like barrel rolls and slalom. Features an optimized thruster layout for maneuverability and utilizes laser cutting and <b>CNC machining</b> for robust mechanical simplicity.</span>, images: ["/images/RoboSub/5_1.jpeg", "/images/RoboSub/5_2.jpeg", "/images/RoboSub/5_3.jpeg"]
    }];

export default function RoboSub() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
    };

    return (
        <div className="min-h-screen bg-[#0B1120] text-white pt-28 pb-20 overflow-x-hidden">

            {/* --- SECTION 1: INTRODUCTION --- */}
            <section className="relative h-[600px] w-full overflow-hidden mb-32">

                {/* Background Image */}
                <img
                    src="/images/gallery/t30.png" // Replace with your specific team photo
                    alt="RoboSub Team"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Gradient Overlay (Solid black on left, fading to transparent on right) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

                {/* Content Container (Left Aligned) */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="max-w-2xl">

                        {/* Small Logo Label
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold text-xl tracking-wide">
               <span className="text-2xl">⚓</span> <span>robosub</span>
            </div> */}

                        {/* Main Title */}
                        <h1 className="text-6xl md:text-7xl font-extrabold uppercase text-white mb-6 tracking-wide">
                            ROBOSUB
                        </h1>

                        {/* Description Text */}
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Launched in 1997, RoboSub is an international level competition held annually in San Diego. College and high school teams from across the globe build their own Autonomous Underwater Vehicles (AUV) and compete in various categories. The goal of this competition is to further the research in the field of AUVs with the help of the new generation.
                        </p>

                        {/* Link */}
                        <a href="https://robosub.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold underline underline-offset-4 hover:text-cyan-300 transition-colors">
                            Click here to know more
                        </a>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: HIGHLIGHTS VIDEO --- */}
            <section className="max-w-7xl mx-auto px-6 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold uppercase mb-8 border-l-4 border-cyan-400 pl-6">
                            RoboSub 2025 Highlights
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Matsya 7, our vehicle for RoboSub 2025, brings together a refined monohull design, smarter electronics, and enhanced autonomy. With improved accessibility and thermal management, our new hull design enables faster assembly and better component integration. We've transitioned to a single-board RPi Pico stack for streamlined control, real-time power monitoring, and safer actuator operation. A robust carbon fibre frame and custom mounts improve handling and protection. On the software front, the OakD stereo camera powers depth perception and onboard YOLO inference, while our custom GUI accelerates debugging. Matsya 7 is faster, safer, and built to perform.             </p>
                    </div>
                    <div className="relative w-full pt-[56.25%] bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(8,145,178,0.3)] border border-gray-700 group">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/aoJvG2I3SL0?si=FvMHQ8HtG5HYl0Jf"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: HORIZONTAL TIMELINE (Updated) --- */}
            <section className="max-w-6xl mx-auto px-6 pb-20">

                {/* 1. Date Strip Navigation */}
                <div className="flex items-center overflow-x-auto scrollbar-hide whitespace-nowrap gap-8 md:gap-0 md:justify-between border-b border-gray-700 pb-4 mb-12 px-4 md:px-12">
                    {timelineData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`text-sm md:text-lg font-bold transition-all duration-300 flex-shrink-0 ${ // Added flex-shrink-0
                                index === activeIndex
                                    ? 'text-white scale-110 border-b-2 border-white pb-1'
                                    : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {item.date}
                        </button>
                    ))}
                </div>

                {/* 2. Main Slider Card */}
                <div className="relative">

                    {/* Left Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0B1120] rounded-full p-2 hover:scale-110 transition-transform shadow-lg"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white text-[#0B1120] rounded-full p-2 hover:scale-110 transition-transform shadow-lg"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* The Card Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full">

                        {/* 1. Text Content - Now in the first column */}
                        <div className="flex flex-col justify-center z-10 relative">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {timelineData[activeIndex].title}
                            </h3>
                            <div className="h-1 w-20 bg-cyan-400 mb-6"></div>

                            {/* Removed max-w-3xl so text fills the column width */}
                            <div className="text-gray-300 text-lg leading-relaxed">
                                {timelineData[activeIndex].desc}
                            </div>
                        </div>

                        {/* 2. Image Grid - Now in the second column */}
                        <div className="grid grid-cols-3 gap-4 h-64 md:h-80 w-full z-10 relative self-center">

                            {/* Big Image (Index 0) */}
                            <div className="col-span-2 bg-gray-800 rounded-xl overflow-hidden border border-gray-600 shadow-lg">
                                {timelineData[activeIndex].images[0] ? (
                                    <img
                                        src={timelineData[activeIndex].images[0]}
                                        alt="Main Event"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-700/50 flex items-center justify-center">No Image</div>
                                )}
                            </div>

                            {/* Small Images Column (Index 1 & 2) */}
                            <div className="col-span-1 flex flex-col gap-4">
                                {/* Top Small Image */}
                                <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden border border-gray-600 shadow-lg">
                                    {timelineData[activeIndex].images[1] && (
                                        <img
                                            src={timelineData[activeIndex].images[1]}
                                            alt="Detail 1"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>

                                {/* Bottom Small Image */}
                                <div className="flex-1 bg-gray-800 rounded-xl overflow-hidden border border-gray-600 shadow-lg">
                                    {timelineData[activeIndex].images[2] && (
                                        <img
                                            src={timelineData[activeIndex].images[2]}
                                            alt="Detail 2"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}