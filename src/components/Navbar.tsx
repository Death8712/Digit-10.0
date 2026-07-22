import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ['JOURNEY', 'INTRASCHOOL', 'INTERSCHOOL', 'OUR TEAM', 'RESULTS', 'CONTACT US'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => {
        if (item === 'JOURNEY') return 'legacy';
        if (item === 'INTRASCHOOL') return 'events';
        if (item === 'INTERSCHOOL') return 'interschool';
        if (item === 'OUR TEAM') return 'visionaries';
        if (item === 'CONTACT US') return 'contact';
        return item.toLowerCase();
      });
      
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 py-4 bg-cyber-black/90 border-b border-neon-cyan/20 backdrop-blur-xl"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo and Image */}
        <div 
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer" 
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setActiveSection(''); }}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 border border-neon-cyan/50 flex items-center justify-center rounded-sm bg-neon-cyan/5 shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300 overflow-hidden">
            <img 
              src="/digit-logo.png" 
              alt="Digit Logo" 
              className="w-full h-full object-cover opacity-100 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="font-display font-black tracking-[0.15em] sm:tracking-[0.2em] text-xl sm:text-2xl text-white group-hover:text-neon-cyan transition-colors duration-300">
            DIGIT <span className="text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">10.0</span>
          </span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 shrink-0 ml-4 mr-4">
          {NAV_ITEMS.map((item, index) => {
            const id = item === 'JOURNEY' ? 'legacy' : item === 'INTRASCHOOL' ? 'events' : item === 'INTERSCHOOL' ? 'interschool' : item === 'OUR TEAM' ? 'visionaries' : item === 'CONTACT US' ? 'contact' : item.toLowerCase();
            const isActive = activeSection === id;
            
            return (
              <div key={item} className="flex items-center gap-1.5 xl:gap-2.5 shrink-0">
                <a
                  href={`#${id}`}
                  onClick={() => setActiveSection(id)}
                  className={`relative text-[10px] xl:text-[11px] font-display font-bold tracking-[0.05em] whitespace-nowrap transition-colors duration-200 py-1 ${
                    isActive 
                      ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]' 
                      : 'text-white/70 hover:text-neon-cyan hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.5)]'
                  }`}
                >
                  {item}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-cyan shadow-[0_0_8px_#0ff]" 
                    />
                  )}
                </a>
                {index < NAV_ITEMS.length - 1 && (
                  <span className="text-neon-cyan/25 text-[9px] select-none mx-0.5">/</span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#register" 
            className="relative group px-4 sm:px-6 py-2 sm:py-2.5 bg-neon-cyan border-2 border-neon-cyan text-cyber-black font-black uppercase tracking-[0.12em] text-[10px] sm:text-xs whitespace-nowrap hover:bg-transparent hover:text-neon-cyan transition-all duration-300"
          >
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-cyan group-hover:bg-transparent group-hover:border-t-2 group-hover:border-r-2 group-hover:border-neon-cyan transition-all" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neon-cyan group-hover:bg-transparent group-hover:border-b-2 group-hover:border-l-2 group-hover:border-neon-cyan transition-all" />
            REGISTER NOW
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-neon-cyan border border-white/10 rounded-lg bg-white/5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-cyber-black/95 border-t border-neon-cyan/20 mt-4 pt-4 pb-6 px-4"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const id = item === 'JOURNEY' ? 'legacy' : item === 'INTRASCHOOL' ? 'events' : item === 'INTERSCHOOL' ? 'interschool' : item === 'OUR TEAM' ? 'visionaries' : item === 'CONTACT US' ? 'contact' : item.toLowerCase();
                const isActive = activeSection === id;

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={() => {
                      setActiveSection(id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm font-display font-bold tracking-widest py-2 px-3 rounded-lg border transition-all ${
                      isActive
                        ? 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10'
                        : 'text-white/80 border-transparent hover:text-neon-cyan hover:bg-white/5'
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
