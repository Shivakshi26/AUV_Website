import { useState, useRef, useEffect } from 'react';

// --- DATA: Vehicle Details ---
const vehiclesData = [
  {
    id: 1,
    name: "MATSYA 1",
    desc: "Matsya 1 was the very first AUV designed by the team back in 2011, with a goal to develop a state of the art AUV that could localize itself in an underwater environment and complete some predefined real life tasks for the Robosub 2012 competition.",
    sketchfabId: "34685b6af2c54a68962393e8320ba64d",
    tdp:"/images/TDRs/Matsya1.pdf" ,
    specs: [
      { label: "DoF", value: "5 (Roll, Pitch, Yaw, Surge, Heave)" },
      { label: "Weight", value: "20 kgs" },
      { label: "Dimensions", value: "1000mm x 531mm x 337mm" },
      { label: "Endurance", value: "60 Minutes" },
      { label: "Depth Rating", value: "40 feet" },
      { label: "Pressure Vessels", value: "One Hull for Electronics, Batteries and Camera." },
      { label: "Actuation System", value: "Assembly of Five thrusters" },
      { label: "Power", value: "Lithium Polymer Batteries" },
      { label: "Feedback Control", value: "Visual, Inertial, Pressure." },
    ],
    img: "/images/vehicles/M1.png",
    // UNIQUE SUBSYSTEMS FOR MATSYA 1
    subsystems: [
      {
        title: "Mechanical",
        text: "The mechanical architecture of Matsya 1 was founded on the principle of modularity, utilizing a robust pressure hull designed to maintain a watertight environment while surviving the significant hydrostatic pressures of underwater operation. This central hull served as the core housing for all sensitive electronics, while an external mounting framework provided the necessary hardpoints for the vehicle's propulsion system. The team engineered a thruster configuration that enabled four degrees of freedom—surge, heave, pitch, and yaw—giving the AUV the agility required to navigate through complex mission gates. Stability was further refined through careful buoyancy management, ensuring that the vehicle remained passively stable in roll and pitch, which simplified the active control requirements during submerged maneuvers.",
        img: "/images/gallery/mech1.png"
      },
      {
        title: "Electrical",
        text: "The electrical system acted as a sophisticated nervous system, bridging the gap between high-level computation and physical actuation. At its heart was a custom-developed Power Distribution Board (PDB) designed to efficiently step down the voltage from Lithium Polymer battery packs to provide stable power rails for the onboard processing unit and various sensors. This system was built with a high degree of isolation to prevent electromagnetic interference from the high-current thruster lines from affecting the sensitive signal data of the Inertial Measurement Unit (IMU) and pressure sensors. A series of Electronic Speed Controllers (ESCs) translated software-generated PWM signals into precisely timed motor commutations, while a dedicated safety circuit with an external kill switch ensured that the vehicle could be powered down immediately during testing or in the event of a system fault.",
        img: "/images/gallery/l3.png"
      },
      {
        title: "Software",
        text: "The mechanical architecture of Matsya 1 was founded on the principle of modularity, utilizing a robust pressure hull designed to maintain a watertight environment while surviving the significant hydrostatic pressures of underwater operation. This central hull served as the core housing for all sensitive electronics, while an external mounting framework provided the necessary hardpoints for the vehicle's propulsion system. The team engineered a thruster configuration that enabled four degrees of freedom—surge, heave, pitch, and yaw—giving the AUV the agility required to navigate through complex mission gates. Stability was further refined through careful buoyancy management, ensuring that the vehicle remained passively stable in roll and pitch, which simplified the active control requirements during submerged maneuvers.",
        img: "/images/gallery/soft1.png"
      }
    ]
  },
  {
    id: 2,
    name: "MATSYA 2",
    desc: "The second iteration of Matsya is complete and more modular than its predecessor, with separate enclosures for electronics, batteries, cameras, and torpedo shooting actuators. The design aimed to ensure robust waterproofing, ease of assembly, and efficient heat sinking.",
    tdp:"/images/TDRs/Matsya2.pdf" ,
    specs: [
      { label: "DoF", value: "5 (Roll, Pitch, Yaw, Surge, Heave)" },
      { label: "Weight", value: "24 kgs" },
      { label: "Dimensions", value: "930mm x 410mm x 650mm" },
      { label: "Endurance", value: "90 Minutes" },
      { label: "Depth Rating", value: "100 feet" },
      { label: "Pressure Vessels", value: "Separate hulls for Electronics, Batteries, Camera and Hydrophones." },
      { label: "Actuation System", value: "Assembly of Six thrusters, Markers" },
      { label: "Power", value: "Lithium Polymer Batteries" },
      { label: "Feedback Control", value: "Visual, Inertial, Pressure." },
],
    img: "/images/vehicles/M2.png",
    subsystems: [
      {
        title: "Mechanical",
        text: "Matsya 2.0 mechanical design utilized an open-frame structure made of Delrin and Aluminum 6061-T6, which was specifically chosen to provide a rigid yet lightweight architecture that allowed for easy accessibility to all peripherals. The vehicle achieved natural dynamic stability by ensuring the center of mass remained below the center of buoyancy, and it utilized six Seabotix thrusters to enable movement across five degrees of freedom, including the newly integrated sway capability. To facilitate complex mission tasks, the mechanical team also developed specialized actuators such as a pneumatic torpedo system, a solenoid-actuated gripper for object manipulation, and a marker dropper designed to release glass marbles",
        img: "/images/gallery/mech2 (1).png"
      },
      {
        title: "Electrical",
        text: "Matsya 2.0 electrical architecture was built around a centralized Single Board Computer featuring an Intel Core 2 Duo processor that coordinated with several specialized microcontrollers for motion control and power management. Power was supplied by two separate Lithium Polymer batteries to isolate sensitive electronic signals from the high-current noise generated by the motors and pneumatic valves. The system integrated a sophisticated sensor suite, including a VectorNav VN-200 IMU for orientation and an Ultra Short Base Line hydrophone array for acoustic pinger localization, all communicating through a robust inter-board network based on RS232 links.",
        img: "/images/gallery/l4.png"
      },
      {
        title: "Software",
        text: "Matsya 2.0 software system was implemented using the Robot Operating System (ROS) framework, which allowed the team to organize the vehicle's logic into modular layers ranging from low-level firmware to high-level mission planning. Navigation and localization were handled by fusing visual feedback with inertial data to correct for sensor drift, while a Finite State Machine governed transitions between searching for objectives and executing specific tasks. To address the challenges of the underwater environment, the software team developed custom computer vision algorithms using OpenCV to perform real-time image enhancement, contrast stretching, and color-based object detection.",
        img: "/images/gallery/soft2.png"
      }
    ]
  },
  {
    id: 3,
    name: "MATSYA 3",
    desc: "Matsya 3 was the third vehicle built by the team in 2013. Matsya-3 has a modular design and weighs 42 kg. It is highly optimised for strength and buoyancy..",
    tdp:"/images/TDRs/Matsya3.pdf" ,
    specs: [
      { label: "DoF", value: "5 (Roll, Pitch, Yaw, Surge, Heave)" },
      { label: "Weight", value: "44 kgs" },
      { label: "Dimensions", value: "NA" },
      { label: "Endurance", value: "120 Minutes" },
      { label: "Depth Rating", value: "150 feet" },
      { label: "Pressure Vessels", value: "Separate hulls for Electronics, Batteries, IMU and Cameras." },
      { label: "Actuation System", value: "Assembly of Six thrusters, Markers and Torpedos." },
      { label: "Power", value: "Lithium Polymer Batteries" },
      { label: "Feedback Control", value: "Visual, Inertial, Pressure and Acoustic." },
],
    img: "/images/vehicles/M3.png",
    subsystems: [
      {
        title: "Mechanical",
        text: "Matsya 3.0 mechanical design followed the framework of previous generations but introduced significant improvements in modularity and sensor integration. The vehicle, which weighed 42 kg and measured $1150 \times 660 \times 640\text{ mm}$, was built around a central cuboidal aluminum pressure chamber known as the main hull. This hull utilized Al 5051-O for side walls due to its thermal conductivity and Al 6061-T6 for the flange and base plate for added strength. A major innovation for this version was the development of in-house underwater connectors and rotary-shaft switches, which were significantly more cost-effective than commercial alternatives. The exterior featured a Delrin frame supporting an internal aluminum structure, strategically designed to be bottom-heavy for natural stability in the roll and pitch axes. For propulsion, the vehicle used six Seabotix BTD150 brushed thrusters configured to provide control over five degrees of freedom: pitch, yaw, surge, heave, and sway. A centralized pneumatic system powered by a $CO_2$ tank managed the vehicle's actuators, including four grippers with a large gripping area, marker droppers using 3D-printed ABS markers with embedded steel balls, and neutrally buoyant 3D-printed torpedoes.",
        img: "/images//gallery/mech3.png"
      },
      {
        title: "Electrical",
        text: "Matsya 3.0 electrical architecture was designed to be a generic and robust platform capable of integrating advanced sensors like the Doppler Velocity Log (DVL) and an improved Acoustic Localization Unit. The system was powered by three Lithium Polymer batteries: one 5.4Ah battery for thrusters and pneumatics, and two 6.8Ah batteries dedicated to the electronics and acoustic systems, providing an endurance of approximately 1.5 hours. A central electronics unit coordinated with an Intel Core 2 quad-powered Single Board Computer (SBC) to handle power management, control loops, and fail-safe features like water seepage detection in critical vessels. The acoustic localization system was significantly upgraded, employing a five-stage process that included digital gain control, elliptic bandpass filtering, and high-speed processing on a quad-core 1.0 GHz Digital Signal Processor (DSP). For navigation feedback, the vehicle integrated a high-precision 3DM-GX3-25 Attitude Heading Reference System (AHRS), a US381 pressure sensor for depth, and Teledyne RDI’s Explorer DVL for velocity measurements.",
        img: "/images/gallery/l5.png"
      },
      {
        title: "Software",
        text: "Matsya 3.0 software system was built on the Robot Operating System (ROS) framework, utilizing a modular stack of independent nodes that communicated via standardized messages. The architecture was organized into four layers: firmware on microcontrollers, a middle layer for hardware abstraction and IPC, a processing layer for sensor fusion, and an application layer for mission planning and real-time monitoring. Navigation and localization were enhanced by fusing data from the DVL, IMU, and visual feedback to minimize measurement drift and precisely locate the vehicle on a user-defined map. A mission planner governed the vehicle's behavior using a state machine that transitioned between transition, scan, and execution states based on the progress of mission tasks. The vision system, implemented as a $C++$ library using OpenCV, introduced a machine-learning-based object detection module featuring feature vector extractors and classifiers for more robust target identification. To facilitate testing, the team also developed a responsive debug interface using the Qt 5 library and a map interface for visual task scheduling and real-time tracking.",
        img: "/images/gallery/softr3.png"
      }
    ]
  },
  {
    id: 4,
    name: "MATSYA 4",
    desc: "A major leap in cognition and reliability.",
    sketchfabId: "7e5789625a32456aa68a3e61902f1ceb",
    tdp:"/images/TDRs/Matsya4.pdf" ,
    specs: [{ label: "DoF", value: "5 (Sway, Pitch, Yaw, Surge, Heave)" },
      { label: "Weight", value: "41.4 kgs" },
      { label: "Dimensions", value: "1070mm*77omm*550mm" },
      { label: "Endurance", value: "240 Minutes" },
      { label: "Depth Rating", value: "150 feet" },
      { label: "Pressure Vessels", value: "Separate hulls for Electronics, Batteries, IMU, Cameras and DVL." },
      { label: "Actuation System", value: "Assembly of Eight thrusters, Markers, Gripper and Torpedos." },
      { label: "Power", value: "Lithium Polymer Batteries" },
      { label: "Feedback Control", value: "Visual, Inertial, Pressure , DVL and Acoustic." },


],
    img: "https://www.auv-iitb.org/images/vehicles/M4.png",
    subsystems: [
      {
        title: "Mechanical",
        text: "  Matsya 4 uses multiple aluminum and acrylic pressure-resistant hulls to safely house electronics, batteries, cameras, and sensors. These hulls feature O-ring sealing, vacuum impregnation, and intuitive tool-less operation for reliable waterproofing and easy maintenance.The vehicle employs a bottom-heavy, open-frame architecture with precise alignment of the Center of Mass below the Center of Buoyancy, ensuring inherent stability, symmetry, and ease of inspection. Modular sub-assemblies allow individual components to be replaced without disturbing the rest of the system.Matsya 4 has 6 six thruster designed in such way that it balances thrust output, reduces power consumption .Grippers, torpedo launchers, and marker droppers are powered by a centralized CO₂-based pneumatic system regulated to 100 psi, enabling reliable underwater manipulation, precise deployment, and consistent performance in dynamic environments.",
        img: "/images/gallery/m4m.png "
      },
      {
        title: "Electrical",
        text: "Matsya 4 employs a distributed electronic framework centered around a high-performance Single Board Computer (Intel i7) and a BeagleBone Black–based GPIO system, enabling reliable communication, simplified wiring, and easy integration or replacement of subsystems.A dedicated power management system regulates and protects all subsystems with onboard monitoring, fault protection, and multiple voltage rails. Independent motor driver and pneumatic control boards ensure safe, high-power operation of thrusters, grippers, torpedoes, and marker droppers.Precise state estimation, depth measurement, and velocity feedback for stable underwater navigation and control are provided by vehicle integrated cameras, IMU, pressure sensor, and Doppler Velocity Log (DVL) s. Custom acoustic systems with hydrophones, signal conditioning, and DSP enables accurate underwater sound localization via DOA estimation.",
        img: "/images/gallery/l6.png"
      },
      {
        title: "Software",
        text: "Matsya 4’s software is built on the Robot Operating System (ROS), enabling a scalable, modular architecture where perception, navigation, control, and mission planning run as independent nodes with reliable inter-process communicationA dedicated localization framework filters and fuses data from IMU, DVL, pressure sensor, and acoustic systems to provide a unified estimate of position and orientation, forming the basis for navigation and controlThe navigation and mission planner use state-machine–based logic to generate trajectories, execute tasks, and adapt behavior in real time based on sensor feedback and predefined mission objectives .Real-time computer vision is achieved  using OpenCV which enables robust underwater object detection and tracking, while a cascaded control architecture provides precise five-degree-of-freedom motion control for stable and accurate maneuvering. ",
        img: "/images/gallery/soft4.png"
      }
    ]
  },
  {
    id: 5,
    name: "MATSYA 5",
    desc: "Featured a split-hull design for better weight distribution.",
    sketchfabId: "bc4506692fe74c53866ca0cde16b67df",
    tdp:"/images/TDRs/Matsya5.pdf" ,
    specs: [{  label: "DoF", value: "6 (Roll, Pitch, Yaw, Surge,Sway, Heave)"},
      { label: "Weight", value: "47 kgs" },
      { label: "Dimensions", value: "1750mm*780mm*640mm" },
      { label: "Endurance", value: "240 Minutes" },
      { label: "Depth Rating", value: "150 feet" },
      { label: "Pressure Vessels", value: "Separate hulls for Electronics, Batteries, IMU, Cameras and DVL." },
      { label: "Actuation System", value: "Assembly of Eight thrusters, Markers, Gripper and Torpedos." },
      { label: "Power", value: "Lithium Polymer Batteries" },
      { label: "Feedback Control", value: "Visual, Inertial, Pressure , DVL and Acoustic." } ],
    img: "/images/vehicles/M5.png",
    subsystems: [
      {
        title: "Mechanical",
        text: "Matsya 5’s  modular waterproof hulls (battery, camera, sensor, main) use O-ring seals, vacuum impregnation, and removable endcaps for robust waterproofing, maintenance, and heat dissipation, while a lightweight aluminum frame optimizes hydrodynamics/stability via balanced components and 6-DOF thruster control. ANSYS FEM analysis confirms >1.3 safety factors under 50m pressure/thruster loads, with pneumatic grippers, torpedoes, marker droppers for tasks, and a detachable vacuum-formed ABS outer skin reducing drag via press-fit enclosure..",
        img: "/images/gallery/mech5.png"
      },
      {
        title: "Electrical",
        text: "Matsya 5 employs a distributed, fault-tolerant electronics architecture with a high-level SBC, custom backplane main stack, and robust CAN bus for simplified wiring, easy replaceability, and reliable subsystem communication. A dedicated Power and Battery Management System handles multiple voltage rails, SOC monitoring, safe power-up sequences, and hardware/software kill switches for efficient operation. Custom GPIO/motor drivers deliver precise PWM for high-current thrusters and actuators with independent power cycling, while integrated sensors (cameras, IMU, DVL, pressure, seepage ) and a four-hydrophone acoustic system—with custom conditioning/DSP-enable real-time perception, navigation, and underwater localization.",
        img: "/images/gallery/l7.png"
      },
      {
        title: "Software",
        text: "Matsya 5’s ROS-based layered software stack separates firmware, perception, navigation, control, and mission planning into modular nodes for scalability, fault isolation, and easy sensor integration. Robust localization fuses IMU, DVL, pressure, and acoustic data into a unified state belief map for reliable positioning. State-machine mission planning drives task execution (transition, scan, execute) with real-time sensor-based adaptation, while OpenCV vision handles underwater object detection/tracking/classification alongside a 6-DOF thruster-profiling PID controller for precise maneuvering.",
        img: "/images/gallery/soft5.png"
      }
    ]
  },
  {
    id: 6,
    name: "MATSYA 6",
    desc: "Matsya's key upgrades include mechanical electro-mechanical servos replacing pneumatics for reliability, lightweight 3D-printed PLA/TPU mechanisms with soft robotics gripper, and custom waterproof Ethernet; software features a modular ROS/Python stack, refactored codebase, robust TDOA acoustics, and YOLOv8 vision with advanced control; electrical improvements bring a compact 30% smaller 3-PCB stack, GoPro Hero 11 + cDAQ-9171 for sensing, optimized ESC board, and robust CAN/serial comms.",
    sketchfabId: "0886f5da859c4cd0893dcab9a1e50ab9",
    tdp:"/images/TDRs/Matsya6D.pdf" ,
    specs: [ {  label: "DoF", value: "6 (Roll, Pitch, Yaw, Surge,Sway, Heave)"},
      { label: "Weight", value: "37 kgs" },
      { label: "Dimensions", value: "1051mm*442mm*609mm" },
      { label: "Endurance", value: "240 Minutes" },
      { label: "Depth Rating", value: "150 feet" },
      { label: "Pressure Vessels", value: "Separate hulls for Electronics, Batteries, IMU, Cameras and DVL." },
      { label: "Actuation System", value: "Assembly of Eight thrusters, Markers, Gripper and Torpedos." },
      { label: "Power", value: "Lithium Polymer Batteries" },
      { label: "Feedback Control", value: "Visual, Inertial, Pressure , DVL and Acoustic." } ,],
    img: "/images/vehicles/M6.png",
    subsystems: [
      {
        title: "Mechanical",
        text: "Matsya 6 adopts waterproof servo motors and electromechanical actuation over pneumatics for better positional control, repeatability, reliability, and reduced maintenance. Lightweight 3D-printed PLA ,TPU mechanisms (marker-dropper, torpedo launcher, gripper) enable rapid prototyping, weight savings, and iterative testing. Soft robotics gripper uses flexible TPU claws with rigid PLA inserts for compliant handling of irregular objects without force feedback. Custom waterproof Ethernet connector delivers 1 Gbps data reliably and cost-effectively under water.",
        img: "/images/gallery/mech3.jpeg"
      },
      {
        title: "Electrical",
        text: "Matsya's compact modular electrical stack uses a three-PCB setup (power, GPIO, backplane) with a 30% smaller power board to optimize hull space and wiring. Improved sensing features GoPro Hero 11 Mini for higher frame rates/compactness and cDAQ-9171 for faster USB-C data transfer and reliable wiring over older NI-DAQ.  A custom break-out board organizes power, ground, and PWM signals for thrusters, reducing wiring complexity and signal issues. Extensive pool and lab testing ensured stable, reproducible performance leading up to pre-qualification. The electrical subsystem bridges software and mechanics by distributing power and enabling communication between components using serial links and a CAN bus connected to the SBC.",
        img: "/images/gallery/elec6.png"
      },
      {
        title: "Software",
        text: "Matsya 6’s modular ROS/Python software stack separates vision, acoustics, localization, control, and mission planning into independent modules for reliable communication and scalable autonomy, with a refactored clean codebase boosting readability, iteration speed, and library access for image/math processing. Robust acoustics employ Python TDOA with median filtering on hydrophone data for precise pinger localization amid noise, while vision/control upgrades use OpenCV/YOLOv8 for detection, regression tracking, and CEM-matrix thruster scaling for smoother, accurate motion.",
        img: "/images/gallery/soft6.png"
      }
    ]
  },
  {
    id: 7,
    name: "MATSYA 7",
    desc: "The latest variant introduced key improvements in stability, autonomy, and hydrodynamics.",
    sketchfabId:  "7f48be4ae42044d28f48b72fa0505f3d",
    tdp:"/images/TDRs/Matsya7.pdf" ,
    specs: [
      { label: "DoF", value: "6 (Roll, Pitch, Yaw, Surge, Sway, Heave)" },
      { label: "Weight", value: "42 kgs" },
      { label: "Dimensions", value: "900mm x 650mm x 400mm" },
      { label: "Endurance", value: "180 Minutes" },
      { label: "Depth Rating", value: "180 feet" },
      { label: "Pressure Vessels", value: "Monohull design, housing on board computer,ESCs,Cameras, Acoustic Data, Acquisition Unit" },
      { label: "Actuation System", value: "Assembly of eight thrusters, Electromechanical Marker Dropper, Torpedo Shooter, Gripper" },
      { label: "Power", value: "2 Lipo Batteries" },
      { label: "Feedback Control", value: "OakD (sterevision camera),DVL, IMU (Inertial Measurement Unit), Depth Sensor" },
    ],
    img: "https://www.auv-iitb.org/images/vehicles/M7.png",
    subsystems: [
      {
        title: "Mechanical",
        text: "Matsya 7's mechanical design features three aluminum hulls (22kg total, 50m depth rating) including Matsya 6's modular battery hull, with front/bottom camera housings in cylindrical extrusions for easy access without endcap removal. The ANSYS-optimized aluminum frame (2kg per side, supports 140kg with SF 2.5) and hollow carbon fiber handles deliver ergonomic grip and optimal strength-to-weight in a reliable monohull structure validated by static simulations. Actuators use waterproof servos + 3D-printed parts: a twice-compact marker dropper with repositioned servo/blocker and magnetic safety lid to prevent barrel-roll drops; dual adjustable spring-loaded torpedo tubes achieving 2ft water range with neutrally buoyant SF77A torpedoes (Straight Fin, 77% infill ABS); and a gear-coupled dual 4-bar gripper with elliptic-trajectory fingers and rubber pads for compact, secure hold. Rigorous testing included overnight 2.5m pool submersion and in-air pressure tests with epoxied air pump to isolate weld failures..",
        img: "/images/RoboSub/2_2.jpeg"
      },
      {
        title: "Electrical",
        text: "Matsya 7's electrical subsystem swaps Matsya 6's 4-board stack for a compact RPi Pico V2 with USB duplex and custom TinyUSB driver (1000 msg/s), halving assembly via 24 Wetlink penetrators; ESCs mount flush on a cooling plate above leaks. A GenX 4S 16Ah LiPo feeds M4ATX DC-DC to power Ryzen 5 5500 SBC + 8x T200 thrusters, OAK-D, DVL, IMU, and servos. Safety includes ACS712 stall detection, fuses/MOSFETs, and voltage dividers. Debug via SD logs (timestamps), status LEDs, PWM pins, and GUI interface.",
        img: "/images/RoboSub/5_2.jpeg"
      },
      {
        title: "Software",
        text: "Matsya 7's software runs on Python modules for vision, acoustics, localization, navigator, controller, and mission control. In just 3.5 months, we migrated to ROS2 Humble on Ubuntu 22.04 with action-servers for async tasks, real-time feedback, and cancellations. The OAK-D stereovision pipeline upgrades from Matsya 6's unreliable monocular depth, delivering precise results for competitions. Acoustics use four Teledyne RESON TC-4013 hydrophones in a 6cm×6cm array (<60μs time diff for 200μs pings). Localization fuses DVL+IMU via Orocos BFL EKF, slashing drift from 15% to 0.5-2% (20m accuracy).Our GUI cuts bandwidth 90% with 35fps JPEG cams, shows live maps/joystick controls/electrical debug, and shrinks testing from hours to minutes.",
        img: "/images/RoboSub/3_1.png"
      }
    ]
  }
];



export default function Vehicles() {
  const [activeId, setActiveId] = useState(7); // M7 is default
  const activeVehicle = vehiclesData.find(v => v.id === activeId) || vehiclesData[6];

  // Refs to access DOM elements directly
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // --- SMOOTH CENTERING ANIMATION ---
  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 750; // Match the CSS transition duration (700ms) + buffer

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const item = itemsRef.current[activeId - 1];
      const container = containerRef.current;

      if (item && container) {
        // Calculate the center position:
        // Item's Left Position + Half its Width - Half the Screen Width
        const centerPos = item.offsetLeft + (item.offsetWidth / 2) - (container.offsetWidth / 2);

        // Apply scroll immediately for this frame
        container.scrollLeft = centerPos;
      }

      // Continue the loop if we haven't reached the duration
      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animateScroll);

    // Cleanup function to stop animation if component unmounts or ID changes
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeId]);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-24 pb-20 overflow-x-hidden">

      {/* --- 1. FULL SCREEN CAROUSEL --- */}
      <section className="w-full mb-16 relative">
        <div
          ref={containerRef}
          className="flex gap-4 py-8 overflow-x-auto overflow-y-hidden px-[50vw] scrollbar-hide"
          style={{ scrollBehavior: 'auto' }} 
        >
          {vehiclesData.map((v, index) => (
            <div
              key={v.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              onClick={() => setActiveId(v.id)}
              className={`flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] border-2
                ${activeId === v.id
                  ? 'w-[85vw] h-[60vh] md:h-[80vh] opacity-100 scale-100 z-10 shadow-[0_0_40px_rgba(34,211,238,0.4)] border-cyan-400'
                  : 'w-[25vw] md:w-[15vw] h-[40vh] md:h-[60vh] opacity-50 scale-90 z-0 hover:opacity-100 border-transparent my-auto'}`}
            >
              <img
                src={v.img}
                alt={v.name}
                className={`absolute inset-0 w-full h-full object-cover`}
              />
              <div className={`absolute inset-0 transition-colors duration-500 ${activeId === v.id ? 'bg-black/10' : 'bg-black/60'}`}></div>

              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${activeId === v.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-3xl md:text-7xl font-bold uppercase tracking-widest drop-shadow-2xl text-white">
                  {v.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 2. MAIN SPECS & 3D MODEL SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 animate-fadeIn">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-6 text-cyan-400">{activeVehicle.name}</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {activeVehicle.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT COLUMN: Specifications Table */}
          <div className="w-full bg-white text-black rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
            <div className="grid grid-cols-3 bg-cyan-400 text-black font-bold text-lg p-4">
              <div className="col-span-1 border-r border-blue-400 pl-2">Specifications</div>
              <div className="col-span-2 pl-4">Vehicle Details</div>
            </div>
            <div className="divide-y divide-gray-300">
              {activeVehicle.specs ? activeVehicle.specs.map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                  <div className="col-span-1 p-3 md:p-4 font-bold border-r border-gray-300 flex items-center bg-gray-100 text-sm md:text-base">
                    {row.label}
                  </div>
                  <div className="col-span-2 p-3 md:p-4 flex items-center text-sm md:text-base">
                    {row.value}
                  </div>
                </div>
              )) : <div className="p-4 text-center">Specs coming soon...</div>}
            </div>
          </div>

          {/* RIGHT COLUMN: Sketchfab Embed */}
          <div className="flex flex-col gap-6">

  {/* 1. VISUALIZER (Sketchfab or Image Fallback) */}
  <div className="w-full h-[400px] lg:h-[600px] bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl relative">
    {activeVehicle.sketchfabId ? (
      // IF Sketchfab ID exists -> Show Iframe
      <iframe
        title={`${activeVehicle.name} 3D Model`}
        className="w-full h-full"
        src={`https://sketchfab.com/models/${activeVehicle.sketchfabId}/embed?autostart=0&ui_theme=dark`}
        frameBorder="0"
        allow="autoplay; fullscreen; vr"
        allowFullScreen
      ></iframe>
    ) : (
      // ELSE -> Show Static Image
      <div className="w-full h-full relative group">
        <img 
          src={activeVehicle.img} 
          alt={activeVehicle.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <p className="text-gray-400 text-sm font-mono">3D Model Unavailable • Showing Image Reference</p>
        </div>
      </div>
    )}
  </div>

  {/* 2. TDP PDF DOWNLOAD BOX */}
  {activeVehicle.tdp && (
    <a 
      href={activeVehicle.tdp} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center justify-between bg-gray-800/50 hover:bg-gray-800 border border-gray-600 hover:border-cyan-400 rounded-xl p-5 transition-all duration-300 cursor-pointer shadow-lg"
    >
      <div className="flex items-center gap-5">
        {/* PDF Icon */}
        <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-500">
            <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
          </svg>
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            Technical Design Paper
          </span>
          <span className="text-sm text-gray-400 group-hover:text-gray-300">
            Click to view official documentation (PDF)
          </span>
        </div>
      </div>

      {/* Arrow Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  )}

</div>
        </div>
      </section>

      {/* --- 3. SUBSYSTEMS (Dynamic per Vehicle) --- */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {/* We now map over activeVehicle.subsystems instead of a static array */}
        {activeVehicle.subsystems && activeVehicle.subsystems.map((sys, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            
            <div className="flex-1 space-y-6">
              <h3 className="text-4xl font-bold text-white border-b-4 border-cyan-400 inline-block pb-2">
                {sys.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {sys.text}
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-gray-800 rounded-2xl h-80 w-full flex items-center justify-center border border-gray-700 shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
                
                {/* Fallback visual if no specific image is provided */}
                {sys.img && !sys.img.includes('placeholder') ? (
                   <img src={sys.img} alt={`${activeVehicle.name} ${sys.title}`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                ) : (
                  <span className="relative z-10 text-gray-500 font-bold uppercase tracking-widest text-center px-4">
                    {activeVehicle.name}<br/>{sys.title} View
                  </span>
                )}
              </div>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}