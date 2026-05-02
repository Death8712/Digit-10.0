import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import GalleryModal from './GalleryModal';

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="gallery" className="relative min-h-screen flex flex-col justify-center bg-[#050505] overflow-hidden z-10 py-32 font-sans text-white border-t border-white/5">
      {/* Deep Space Background with Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-[#050505] to-[#020202] pointer-events-none" />
      
      {/* Subtle Glowing Nebulas */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-magenta/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-60" />

      {/* Futuristic Ground Grid (Perspective) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden pointer-events-none perspective-[1000px] opacity-40">
        <div className="absolute inset-x-[-50%] bottom-[-50%] h-[200%] w-[200%] rotate-x-60 translate-y-24 bg-[linear-gradient(to_right,#00ffff22_1px,transparent_1px),linear-gradient(to_bottom,#00ffff22_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black_10%,transparent_60%)]" />
      </div>

      {/* Floating Data Packets (Parallax Simulation) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: Math.random() * 0.5 + 0.2, y: "100vh" }}
          animate={{ opacity: [0, 0.8, 0], y: "-100vh" }}
          transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, ease: "linear", delay: Math.random() * -10 }}
          className={`absolute w-1 rounded-full ${i % 2 === 0 ? 'bg-neon-cyan' : 'bg-neon-magenta'} pointer-events-none`}
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 20 + 5}px`,
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#00FFFF' : '#ff00ff'}`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column - AAA Command Center Typography */}
        <div className="flex flex-col space-y-10 reveal-left">
          {/* Badge */}
          <div className="inline-block border border-neon-cyan/50 px-4 py-2 self-start rounded-md bg-neon-cyan/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.2)]">
            <span className="text-neon-cyan text-[10px] font-mono font-bold tracking-[0.2em] uppercase max-sm:text-[8px]">SYS.ARCHIVE // v10.0</span>
          </div>

          {/* Main Title */}
          <div className="relative">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-none tracking-tight uppercase">
              DIGIT<br/>GALLERY
            </h2>
            <div className="absolute top-0 -left-6 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-magenta to-transparent" />
            
            {/* Sub-Title / Hacker text */}
            <h3 className="text-neon-cyan/60 font-mono tracking-[0.3em] uppercase mt-6 text-xs drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
              &gt; INITIALIZING Ahlcon International School_
            </h3>
          </div>

          {/* Body Text */}
          <p className="text-white/70 font-sans max-w-md leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4">
            Accessing archived records. Re-explore the innovation, designs, and creativity of the Digit 10.0 Tech Event through our curated showcase of brochures and presentations.
          </p>

          {/* Stats HUD */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-md">
            <div className="flex flex-col gap-1">
              <div className="text-white font-display text-2xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">01</div>
              <div className="text-neon-cyan text-[8px] md:text-[10px] font-mono tracking-widest uppercase">DATABANK_ID</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-white font-display text-2xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">15</div>
              <div className="text-neon-cyan text-[8px] md:text-[10px] font-mono tracking-widest uppercase">TOTAL_ASSETS</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-white font-display text-2xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">SYS</div>
              <div className="text-neon-cyan text-[8px] md:text-[10px] font-mono tracking-widest uppercase">STATUS_OK</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex pt-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-transparent border border-neon-cyan text-neon-cyan font-bold font-mono uppercase tracking-[0.2em] text-sm hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2),inset_0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] flex items-center gap-3 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
              [ ACCESS_GALLERY ]
              <ArrowRight size={18} className="text-neon-cyan group-hover:text-black" />
            </button>
          </div>
        </div>

        {/* Right Column - 3D Holographic Centerpiece & HUD Cards */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center reveal-right perspective-[1200px]">
          
          {/* Ambient background grid for 3D orb area */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)]" />

          {/* Floating HUD Cards (Glassmorphism + Neon Border) */}
          
          {/* HUD Card 1 */}
          <motion.div 
            whileHover={{ translateZ: 50, rotateX: 5, rotateY: -10, scale: 1.05 }}
            className="absolute top-4 md:top-10 left-0 w-48 md:w-64 p-3 md:p-4 rounded-xl border border-neon-cyan bg-white/5 backdrop-blur-[12px] shadow-[0_0_30px_rgba(0,255,255,0.15),inset_0_0_20px_rgba(0,255,255,0.05)] cursor-pointer group z-30 overflow-hidden"
            onClick={() => setIsModalOpen(true)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* HUD Scanning Line */}
            <motion.div 
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 w-full h-[2px] bg-neon-cyan/50 shadow-[0_0_10px_#00ffff]"
              style={{ zIndex: 40 }}
            />
            
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-3 md:mb-4 relative bg-black/60 border border-white/10">
              <div className="absolute inset-0 bg-neon-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-screen" />
              <img src="/circuit-logo.png" alt="Gallery item" className="w-full h-full object-cover mix-blend-screen opacity-80" onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
              }} />
            </div>
            <div className="px-1 md:px-2 pb-1 md:pb-2 flex flex-col">
              <h4 className="text-white font-display font-bold text-sm md:text-lg mb-1 leading-tight">VISUAL_FEED_01</h4>
              <p className="text-neon-cyan/70 font-mono text-[8px] md:text-xs">DIGIT CORE SYSTEMS</p>
            </div>
            {/* Tech Corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-cyan" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-cyan" />
          </motion.div>

          {/* HUD Card 2 */}
          <motion.div 
            whileHover={{ translateZ: 50, rotateX: -10, rotateY: 10, scale: 1.05 }}
            className="absolute bottom-4 md:bottom-10 right-0 w-56 md:w-72 p-3 md:p-4 rounded-xl border border-neon-magenta bg-white/5 backdrop-blur-[12px] shadow-[0_0_30px_rgba(255,0,255,0.15),inset_0_0_20px_rgba(255,0,255,0.05)] cursor-pointer group z-30 overflow-hidden"
            onClick={() => setIsModalOpen(true)}
            style={{ transformStyle: 'preserve-3d' }}
          >
             {/* HUD Flickering effect */}
             <div className="absolute inset-0 bg-neon-magenta/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse z-10 pointer-events-none" />

            <div className="aspect-square w-full rounded-lg overflow-hidden mb-3 md:mb-4 relative flex items-center justify-center bg-black/60 border border-white/10">
              <div className="absolute inset-0 bg-neon-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-screen" />
              <img src="/circuit-logo.png" alt="Gallery item" className="w-[60%] h-[60%] object-contain mix-blend-screen opacity-60 block mx-auto drop-shadow-[0_0_15px_#ff00ff]" onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
              }} />
            </div>
            <div className="px-1 md:px-2 pb-1 md:pb-2 flex flex-col">
              <h4 className="text-white font-display font-bold text-sm md:text-lg mb-1 leading-tight">VISUAL_FEED_02</h4>
              <p className="text-neon-magenta/70 font-mono text-[8px] md:text-xs">PROTOTYPE ARCHIVES</p>
            </div>
            {/* Tech Corners */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-magenta" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-magenta" />
          </motion.div>

          {/* Centerpiece 3D Holographic Orb */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center z-10" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* Outer Energy Rings */}
            <motion.div 
              animate={{ rotateX: [0, 360], rotateY: [0, 180] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-0 rounded-full border-2 border-neon-cyan/40 bg-neon-cyan/5 shadow-[0_0_40px_rgba(0,255,255,0.3)] mix-blend-screen" 
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div 
              animate={{ rotateY: [0, 360], rotateZ: [0, 360] }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-6 rounded-full border-2 border-neon-magenta/30 bg-neon-magenta/5 shadow-[0_0_30px_rgba(255,0,255,0.2)] mix-blend-screen" 
              style={{ transformStyle: 'preserve-3d' }}
            />
            
            {/* Deep Wireframe Cage */}
            <motion.div 
              animate={{ rotateZ: [360, 0], rotateX: [360, 0] }} 
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-12 border border-white/20 rounded-full dashed-border mix-blend-overlay"
              style={{ transformStyle: 'preserve-3d', borderStyle: 'dashed' }}
            />

            {/* Inner Glowing Core */}
            <motion.div 
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-neon-cyan/50 backdrop-blur-xl bg-black/40 shadow-[inset_0_0_40px_rgba(0,255,255,0.4),0_0_60px_rgba(0,255,255,0.6)] flex items-center justify-center overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-neon-cyan/80 blur-2xl rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white blur-md rounded-full shadow-[0_0_30px_#fff]" />
            </motion.div>

          </div>

        </div>

      </div>

      {/* Footer / Scroll Element */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-neon-cyan/60 text-[10px] font-mono tracking-[0.3em] uppercase">SYS.SCROLL</span>
        <ChevronDown size={14} className="text-neon-cyan animate-bounce opacity-80" />
      </div>

      <GalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

