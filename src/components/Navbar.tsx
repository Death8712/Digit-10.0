import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-cyber-black border-b border-neon-cyan/20 backdrop-blur-xl"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo and Image */}
        <div className="flex items-center gap-4 group cursor-pointer">
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
        <div className="hidden md:flex items-center gap-12">
          {['EVENTS', 'SCHEDULE', 'VISIONARIES', 'GALLERY', 'RESULTS'].map((item) => (
            <a
              key={item}
              href={item === 'GALLERY' ? '#gallery' : `#${item.toLowerCase()}`}
              className="text-sm font-bold tracking-[0.1em] text-white/70 hover:text-neon-cyan transition-colors"
            >
              {item}
            </a>
          ))}
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
