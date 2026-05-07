import { Github, Youtube, BookOpen, Users, ArrowRight, FileText, Code, Settings, Cpu } from 'lucide-react';

// --- DATA: The Learning Pipeline ---
const learningPhases = [
  {
    step: "01",
    title: "Onboarding Bootcamp",
    desc: "Freshmen are introduced to basic concepts of underwater robotics, Linux, and CAD through curated beginner playlists.",
    icon: <Users className="w-6 h-6 text-cyan-400" />
  },
  {
    step: "02",
    title: "Shadowing",
    desc: "New recruits pair with senior members to observe active development and understand the AUV's architecture.",
    icon: <BookOpen className="w-6 h-6 text-cyan-400" />
  },
  {
    step: "03",
    title: "Core Development",
    desc: "Members are assigned to specific subsystems, contributing directly to GitHub repositories and mechanical designs.",
    icon: <Settings className="w-6 h-6 text-cyan-400" />
  },
  {
    step: "04",
    title: "Legacy Documentation",
    desc: "Before graduating, seniors document their iterations, tuning parameters, and failures to guide the next generation.",
    icon: <FileText className="w-6 h-6 text-cyan-400" />
  }
];

// --- DATA: The Resource Vault ---
const resources = [
  {
    category: "Software & Autonomy",
    icon: <Code className="w-8 h-8 text-blue-400" />,
    items: [
      { name: "ROS 2 Navigation Stack", type: "github", link: "https://github.com/auv-iitb/ros2-nav", label: "Repository" },
      { name: "Computer Vision (YOLO) Guide", type: "youtube", link: "https://youtube.com/playlist", label: "Video Series" },
      { name: "AUV Software Architecture", type: "docs", link: "#", label: "Wiki Page" },
    ]
  },
  {
    category: "Mechanical Design",
    icon: <Settings className="w-8 h-8 text-orange-400" />,
    items: [
      { name: "SolidWorks Masterclass", type: "youtube", link: "https://youtube.com/playlist", label: "Tutorials" },
      { name: "Hull & Pressure Vessel CAD", type: "github", link: "https://github.com/auv-iitb/mech-cad", label: "CAD Files" },
      { name: "Material Selection Guide", type: "docs", link: "#", label: "PDF Guide" },
    ]
  },
  {
    category: "Electrical & Embedded",
    icon: <Cpu className="w-8 h-8 text-green-400" />,
    items: [
      { name: "Custom PCB Designs", type: "github", link: "https://github.com/auv-iitb/electrical-pcb", label: "Schematics" },
      { name: "STM32 Microcontroller Basics", type: "youtube", link: "https://youtube.com/playlist", label: "Video Series" },
      { name: "Power Distribution Architecture", type: "docs", link: "#", label: "Documentation" },
    ]
  }
];

export default function KnowledgeTransfer() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-32 pb-20">
      
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 text-cyan-400 tracking-wide">
          Knowledge Transfer Framework
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          The foundation of AUV-IITB. This framework ensures that years of research, code, and mechanical iterations are seamlessly passed down to the next generation of engineers.
        </p>
      </div>

      {/* --- THE PIPELINE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32 animate-fadeIn">
        <h2 className="text-3xl font-bold uppercase mb-12 text-white border-l-4 border-cyan-400 pl-4">
          The Learning Pipeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPhases.map((phase, idx) => (
            <div key={idx} className="bg-[#162032] border border-gray-800 p-6 rounded-2xl relative group hover:border-cyan-500/50 transition-colors">
              <span className="absolute top-4 right-4 text-5xl font-black text-gray-800 group-hover:text-gray-700 transition-colors z-0">
                {phase.step}
              </span>
              <div className="relative z-10">
                <div className="bg-gray-900 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-gray-700 shadow-lg">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RESOURCES VAULT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold uppercase mb-12 text-white border-l-4 border-cyan-400 pl-4">
          Resource Vault
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((category, idx) => (
            <div key={idx} className="bg-[#162032] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
              
              {/* Category Header */}
              <div className="p-6 border-b border-gray-800 flex items-center gap-4 bg-[#0f1522]">
                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Links List */}
              <div className="p-2">
                {category.items.map((item, itemIdx) => (
                  <a 
                    key={itemIdx} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 hover:bg-[#0B1120] rounded-xl transition-colors group mx-2 my-1"
                  >
                    <div className="flex items-center gap-4">
                      {item.type === 'github' && <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />}
                      {item.type === 'youtube' && <Youtube className="w-5 h-5 text-red-400 group-hover:text-red-500" />}
                      {item.type === 'docs' && <BookOpen className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />}
                      
                      <div>
                        <p className="text-gray-200 font-medium group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.label}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 transform -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}