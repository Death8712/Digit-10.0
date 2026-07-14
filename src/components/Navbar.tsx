import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const NAV_ITEMS = ['JOURNEY', 'EVENTS', 'OUR TEAM', 'GALLERY', 'RESULTS'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => {
        if (item === 'GALLERY') return 'gallery';
        if (item === 'JOURNEY') return 'legacy';
        if (item === 'OUR TEAM') return 'visionaries';
        return item.toLowerCase();
      });
      
      let current = '';
      // We check from bottom to top to find the most specific section in view
      // Actually top-down with a specific threshold is fine
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is mostly in view
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Also run on mount after a slight delay to allow layout
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-cyber-black border-b border-neon-cyan/20 backdrop-blur-xl"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo and Image */}
        <div 
          className="flex items-center gap-4 group cursor-pointer" 
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection(''); }}
        >
          <div className="relative w-12 h-12 border border-neon-cyan/50 flex items-center justify-center rounded-sm bg-neon-cyan/5 shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300 overflow-hidden">
            <img 
              src="/digit-logo.png" 
              alt="Digit Logo" 
              className="w-full h-full object-cover opacity-100 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-display font-black tracking-[0.2em] text-2xl text-white group-hover:text-neon-cyan transition-colors duration-300">DIGIT <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">10.0</span></span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5">
          {NAV_ITEMS.map((item, index) => {
            const id = item === 'GALLERY' ? 'gallery' : item === 'JOURNEY' ? 'legacy' : item === 'OUR TEAM' ? 'visionaries' : item.toLowerCase();
            const isActive = activeSection === id;
            
            return (
              <div key={item} className="flex items-center gap-3 xl:gap-5">
                <a
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`text-xs xl:text-sm font-bold tracking-[0.1em] transition-all duration-300 transform inline-block hover:scale-125 hover:mx-2 origin-center ${
                    isActive 
                      ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] border-b-2 border-neon-cyan pb-1' 
                      : 'text-white/70 hover:text-neon-cyan hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]'
                  }`}
                >
                  {item}
                </a>
                {index < NAV_ITEMS.length - 1 && (
                  <span className="text-neon-cyan/40 text-[11px] select-none">/</span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Action Button */}
        <a href="#register" className="relative group px-8 py-3 bg-neon-cyan border-2 border-neon-cyan text-cyber-black font-black uppercase tracking-[0.2em] text-xs hover:bg-transparent hover:text-neon-cyan transition-all duration-300">
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-cyan group-hover:bg-transparent group-hover:border-t-2 group-hover:border-r-2 group-hover:border-neon-cyan transition-all" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neon-cyan group-hover:bg-transparent group-hover:border-b-2 group-hover:border-l-2 group-hover:border-neon-cyan transition-all" />
          REGISTER NOW
        </a>
      </div>
    </motion.nav>
  );
}
