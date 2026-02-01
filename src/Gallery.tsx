import React, { useState } from 'react';

// Define the category names including 'all'
type Category = 'all' | 'matsya' | 'lab' | 'team';

// --- DATA: Placeholder Images ---
// IDs are unique across all categories to prevent conflicts in the 'All' view
const galleryData = {
  matsya: [
    { id: 1, src: "/images/gallery/a1.png", alt: "Loading Error" },
    { id: 2, src: "/images/gallery/a2.png", alt: "Loading Error" },
    { id: 3, src: "/images/gallery/a3.png", alt: "Loading Error" },
    { id: 4, src: "/images/gallery/a4.png", alt: "Loading Error" },
    { id: 5, src: "/images/gallery/a5.png", alt: "Loading Error" },
    { id: 6, src: "/images/gallery/a6.png", alt: "Loading Error" },
    { id: 7, src: "/images/gallery/a7.png", alt: "Loading Error" },
    { id: 8, src: "/images/gallery/a8.png", alt: "Loading Error" },
    { id: 9, src: "/images/gallery/a9.png", alt: "Loading Error" },
    { id: 10, src: "/images/gallery/a10.png", alt: "Loading Error" },
    { id: 11, src: "/images/gallery/a11.png", alt: "Loading Error" },
    { id: 12, src: "/images/gallery/a12.png", alt: "Loading Error" },
    { id: 13, src: "/images/gallery/a13.jpg", alt: "Loading Error" },
    { id: 14, src: "/images/gallery/a15.png", alt: "Loading Error" },
    { id: 15, src: "/images/gallery/a16.jpg", alt: "Loading Error" },
    { id: 16, src: "/images/gallery/a17.jpeg", alt: "Loading Error" },
  ],
  lab: [
    { id: 17, src: "/images/gallery/l2.png", alt: "Loading Error" },
    { id: 18, src: "/images/gallery/l8.png", alt: "Loading Error" },
    { id: 19, src: "/images/gallery/l9.png", alt: "Loading Error" },
    { id: 20, src: "/images/gallery/l10.png", alt: "Loading Error" },
    { id: 21, src: "/images/gallery/l11.png", alt: "Loading Error" },

  ],
  team: [
    { id: 22, src: "/images/gallery/t32.jpeg", alt: "Loading Error" },
    { id: 23, src: "/images/gallery/t31.jpg", alt: "Loading Error" },
    { id: 24, src: "/images/gallery/t30.png", alt: "Loading Error" },
    { id: 25, src: "/images/gallery/t33.jpeg", alt: "Loading Error" },
    { id: 26, src: "/images/gallery/t34.jpeg", alt: "Loading Error" },
    { id: 27, src: "/images/gallery/t35.jpeg", alt: "Loading Error" },
    // { id: 28, src: "/images/gallery/t2324.jpg", alt: "Loading Error" },
    // { id: 29, src: "/images/gallery/l10.png", alt: "Loading Error" },
    // { id: 30, src: "/images/gallery/l11.png", alt: "Loading Error" },
  ],
};

export default function Gallery() {
  // State to track active category (defaults to 'all')
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Helper to determine which images to show
  const displayImages = activeCategory === 'all'
    ? [...galleryData.matsya, ...galleryData.lab, ...galleryData.team]
    : galleryData[activeCategory];

  return (
    <div className="min-h-screen bg-[#0B1120] text-white pt-28 pb-20">

      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 text-white tracking-wide">
          Gallery
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A visual journey through the evolution of our vehicles, the workspace where innovation happens, and the dedicated team behind it all.
        </p>
      </div>

      {/* --- CATEGORY NAVIGATION TABS --- */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 border-b-2 border-gray-800 pb-2 px-4">

          {/* ALL Tab */}
          <button
            onClick={() => setActiveCategory('all')}
            className={`text-xl md:text-3xl font-bold uppercase tracking-wider px-4 py-2 transition-all duration-300 relative outline-none
              ${activeCategory === 'all' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            All
            <span className={`absolute bottom-[-10px] left-0 w-full h-1 bg-cyan-400 rounded-t-full transition-transform duration-300 origin-left
               ${activeCategory === 'all' ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </button>

          {/* MATSYA Tab */}
          <button
            onClick={() => setActiveCategory('matsya')}
            className={`text-xl md:text-3xl font-bold uppercase tracking-wider px-4 py-2 transition-all duration-300 relative outline-none
              ${activeCategory === 'matsya' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Matsya
            <span className={`absolute bottom-[-10px] left-0 w-full h-1 bg-cyan-400 rounded-t-full transition-transform duration-300 origin-left
               ${activeCategory === 'matsya' ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </button>

          {/* LAB Tab */}
          <button
            onClick={() => setActiveCategory('lab')}
            className={`text-xl md:text-3xl font-bold uppercase tracking-wider px-4 py-2 transition-all duration-300 relative outline-none
              ${activeCategory === 'lab' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Lab
            <span className={`absolute bottom-[-10px] left-0 w-full h-1 bg-cyan-400 rounded-t-full transition-transform duration-300 origin-left
               ${activeCategory === 'lab' ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </button>

          {/* TEAM Tab */}
          <button
            onClick={() => setActiveCategory('team')}
            className={`text-xl md:text-3xl font-bold uppercase tracking-wider px-4 py-2 transition-all duration-300 relative outline-none
              ${activeCategory === 'team' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Team
            <span className={`absolute bottom-[-10px] left-0 w-full h-1 bg-cyan-400 rounded-t-full transition-transform duration-300 origin-left
               ${activeCategory === 'team' ? 'scale-x-100' : 'scale-x-0'}`}></span>
          </button>

        </div>
      </div>

      {/* --- IMAGE GRID --- */}
      <section key={activeCategory} className="max-w-7xl mx-auto px-6 animate-fadeIn animate-duration-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {displayImages.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-2xl overflow-hidden bg-[#162032] border border-gray-800 shadow-xl cursor-pointer"
            >
              {/* Placeholder background if image is missing */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-500 opacity-50 z-0">
                <span>Image not found</span>
              </div>

              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 relative z-10"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 z-20"></div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}