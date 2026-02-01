import { ArrowRight } from 'lucide-react';

// Data for the Timeline Section
const journeyItems = [
  {
    year: "2025",
    title: "MATSYA 7 DELIVERED A STRONG PERFORMANCE",
    desc: "At RoboSub 2025, the team delivered a strong competitive performance with the newly developed Matsya 7, securing 4th place in the semifinals and 6th place in the finals. The results reflected the vehicle’s reliable autonomy, effective mission strategy, and consistent real-world task execution.",
    images: ["/images/gallery/t29.jpg"]
  },
  {
    year: "2024",
    title: "AN EXCELLENT PERFORMANCE",
    desc: "At Robosub 2024, the team delivered one of its strongest performances yet, with a remarkable 4th place finish in the finals, showcasing the AUV's robust real-world task execution, autonomous stability, and mission strategy. Additionally, the team secured 1st place in the Technical Design Report (TDR).",
    images: ["/images/gallery/trs1.jpg"]
  },
  {
    year: "2022 & 2023",
    title: "BEST WILDCARD ENTRY",
    desc: "At Robosub 2022, the team secured 7th place overall and was awarded the Best Wildcard Entry, along with achieving 3rd place in the Video Presentation category for effectively showcasing the design and mission strategy. Building on that success, the team advanced to the finals at Robosub 2023, finishing 10th overall, reflecting consistent global performance and continued technical innovation.",
    images: ["/images/RoboSub/1_3.jpg"]
  },
  {
    year: "2021",
    title: "YOUNG RESEARCHER AWARD BY IEEE OES",
    desc: "Our team received the Young Researcher Award by IEEE OES. In RoboSub, we won prestigious awards in 3 out of the 4 categories. We secured 2nd rank in the Video category, 4th rank for TDR and 6th rank in the Website category in RoboSub 2021.",
    images: ["/images/Blog/IEEE.png"]
  },
  {
    year: "2020",
    title: "JANES FEATURE",
    desc: "Our team ranked overall 7th at RoboSub and 3rd in the Video category. We were featured in Janes, the world's most reputed defence journal. Invited to present a research paper in the prestigious International Conference INEST India 2020, INS Shivaji, Lonavala before the Chief of Navy and International marine specialists.",
    images: ["/images/Blog/Janes.png"]
  },
  {
    year: "2017 & 2019",
    title: "DOMINANCE AT NIOT SAVE",
    desc: "Our team bagged the first position at NIOT SAVE consecutively for 2 years in 2017 & 2019. We were also among the semi-finalists at Robosub 2019.",
    images: ["/images/gallery/t14.png"]
  },
  {
    year: "2017",
    title: "FIRST TEAM TO MAKE 2 AUVS",
    desc: "Our team was among the finalists and ranked 7th at RoboSub 2017. Our team also became the first-ever to take 2 AUVs to one competition.",
    images: ["/images/gallery/wen.jpg"]
  },
  {
    year: "2016",
    title: "RUNNERS UP AT ROBOSUB",
    desc: "From 2015-2020, our team was the best performing Indian AUV team at every RoboSub. Our team was the runner-up at RoboSub 2016, among 46 teams from 9 different countries. We were also the best performing Asian AUV team.",
    images: ["/images/gallery/t2.png"]
  },
  {
    year: "2012",
    title: "MATSYA1",
    desc: "Matsya 1 was the first AUV designed and built by our team with a goal to develop a state of the art AUV. It was the first AUV entered by our team in the Robosub competition. Matsya 1 was the lightest AUV in Robosub 2012.",
    images: ["/images/gallery/a1.png"]
  },
  {
    year: "2011",
    title: "INCEPTION",
    desc: "Team AUV-IITB was born in 2011 out of the efforts of a group of highly enthusiastic students who were passionate to explore the field of underwater robotics and autonomous systems.",
    images: ["/images/gallery/a14.jpg"]
  },
];


// Data for R&D Section
const researchItems = [
  {
    title: "Software",
    desc1: "The system employs an Unscented Kalman Filter (UKF) to fuse data from multiple sensors, providing a robust and accurate estimate of the vehicle’s position and orientation. All perception, estimation, and control algorithms run on the NVIDIA Jetson Orin Nano, enabling high-speed performance. Visual orientation is further refined using XFeat, which matches features from the live camera stream with reference object images to improve pose estimation relative to known objects. ",
    desc2: "On the control and navigation side, a long–short PID controller is implemented to achieve faster settling time and higher accuracy across both near and far setpoints, with force interpolation ensuring smooth control over a wide operating range. An in-house SLAM framework is being developed for accurate mapping and trajectory reconstruction, and it is integrated with object detection using YOLO to improve localization relative to detected objects. Together, these components enable precise localization, stable control, and reliable autonomous operation in complex environments.  "
  },
  {
    title: "Mechanical",
    desc1: "To extend mission endurance, we explored larger battery hull designs capable of accommodating 22,000 mAh batteries, upgrading from the earlier 16,000 mAh configuration. In parallel, a more robust torpedo shooter mechanism was developed, supported by iterative design and testing of multiple 3D-printed torpedo variants, where properties such as hydrodynamic geometry, material and its density were optimized for performance. ",
    desc2: "Significant effort was also directed toward improving system sealing and reliability. Trigger latch mechanisms were evaluated to prevent accidental water ingress, and multiple Ethernet connector sealing strategies were investigated to address accidental seepage issues. Additionally, a four-link mechanical gripper arm was designed and developed to enable reliable object manipulation during operations. "
  },
  {
    title: "Electrical",
    desc1: "To improve system reliability and power monitoring, a custom Battery Management System (BMS) is being implemented to provide real-time battery percentage monitoring and battery protection by balancing individual cell voltages. The control architecture is being transitioned from a Raspberry Pi Pico–based setup to an STM32 platform, enabling more deterministic and robust real-time control. ",
  desc2: "In parallel, research is being conducted on underwater communication between M7 and Mini Matsya to support coordinated operations. To achieve finer propulsion control, an in-house Electronic Speed Controller (ESC) is under development for the vehicle thrusters. The power subsystem is further enhanced with USB-C Power Delivery using a dedicated USB PD IC, while a dual Pico configuration is employed to ensure reliable PWM generation and robust sensor communication. "
  },
  {
    title: "Mini Matsya",
    desc1: "The vehicle is designed to operate primarily using cameras and an IMU, making visual feature mapping essential for localization and navigation. A front-facing and a bottom-facing camera are used to support perception and task execution. The vehicle is intended to perform barrel roll, gate, and slalom tasks while operating with five degrees of freedom, intentionally excluding pitch to simplify control. ",
    desc2: " Thruster configuration is optimized to reduce weight and size, with a strong emphasis on mechanical simplicity. The design prioritizes ease of manufacturing and limited, well-defined capabilities, and is fabricated using laser cutting, welding, and CNC machining, building upon the proven Matsya series architecture. "
  }

];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-20">

      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide mb-4">Achievements</h1>
        <div className="h-1 w-32 bg-cyan-400"></div>
        {/* Optional: Add the squiggly line graphic here if you have it as an SVG */}
      </div>

      {/* --- SECTION 1: OUR JOURNEY --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
  <h2 className="text-4xl font-bold text-center mb-16 uppercase">Our Journey</h2>

  <div className="space-y-24">
    {journeyItems.map((item, index) => (
      <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

        {/* Text Side */}
        <div className="flex-1 space-y-4">
          <h3 className="text-xl font-bold text-cyan-400">{item.year}: {item.title}</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            {item.desc}
          </p>
        </div>

        {/* Image Side */}
        <div className="flex-1 grid gap-4 h-64 md:h-80 w-full">
          <div className="bg-gray-800 rounded-xl overflow-hidden row-span-2 relative h-full">
            
            {/* 👇 THIS IS THE FIX 👇 */}
            {item.images && item.images.length > 0 ? (
              <img 
                src={item.images[0]} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              // Fallback if no image exists in the data
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
            
          </div>
        </div>

      </div>
    ))}
  </div>
</section>


      {/* --- SECTION 2: INDUSTRIAL COLLABORATIONS --- */}
      {/* <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase">Industrial Collaborations</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white h-48 rounded-lg flex items-center justify-center p-8 hover:scale-105 transition-transform duration-300 shadow-lg">
              <img src="/logos/lt.png" alt="Partner Logo" className="max-h-full object-contain" />
            </div>
          ))}
        </div>
      </section> */}

      {/* --- SECTION 3: R&D --- */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase">Research & Development</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchItems.map((item, idx) => (
            <div key={idx} className="bg-gray-200 text-gray-900 p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed font-medium">
                {item.desc1}
              </p>
              <br/>
              <p className="text-sm leading-relaxed font-medium">
                {item.desc2}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}