import { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Using useNavigate for manual control
import { searchData } from './searchData';

export default function SearchWidget() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // 1. FILTER LOGIC
  const filteredResults = searchData.filter((item) => {
    const term = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.keywords.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  });

  // 2. HANDLE CLICK OUTSIDE (Closes dropdown)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // 3. HANDLE NAVIGATION
  const handleSelect = (path: string) => {
    setIsOpen(false);
    setQuery(""); // Clear input
    
    // Check if it's a hash link (e.g., /#contact) on the same page
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      if (window.location.pathname === pathname) {
        // If we are already on the page, just scroll
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Otherwise navigate
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div ref={wrapperRef} className="relative z-50">
      
      {/* INPUT BAR */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full md:w-64 bg-gray-900/80 border border-gray-700 text-gray-200 text-sm rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all placeholder-gray-500 shadow-inner"
        />
        <Search className="absolute left-3.5 text-gray-400 w-4 h-4" />
        
        {/* Close/Clear Button */}
        {query && (
          <button 
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-3 text-gray-400 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* DROPDOWN RESULTS */}
      {isOpen && query.length > 0 && (
        <div className="absolute top-full mt-3 w-full md:w-80 right-0 bg-[#0f172a] border border-gray-700 rounded-xl shadow-2xl overflow-hidden animate-fadeIn ring-1 ring-black/50">
          
          {filteredResults.length > 0 ? (
            <div className="max-h-[60vh] overflow-y-auto py-2">
              <div className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Results
              </div>
              
              {filteredResults.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(result.path)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-800 border-l-2 border-transparent hover:border-cyan-400 transition-all group flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-gray-200 text-sm font-medium group-hover:text-cyan-400">
                      {result.title}
                    </h4>
                    <span className="text-[10px] text-gray-500 bg-black/40 px-2 py-0.5 rounded-full mt-1 inline-block border border-gray-800">
                      {result.category}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500 text-sm">
              No matches found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}