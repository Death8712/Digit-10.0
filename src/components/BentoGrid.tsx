import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { cn } from '../lib/utils';
import React, { MouseEvent, useState } from 'react';
import EventModal from './EventModal';
import { categories, Category, EventItem } from '../data/events';

export default function BentoGrid() {
  const [selectedEvent, setSelectedEvent] = useState<{event: EventItem, categoryAccent: string} | null>(null);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-20 relative z-40">
        
        {categories.map((category) => (
          <div key={category.id} className="mb-20 last:mb-0">
            
            {/* Section Heading Row */}
            <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="flex items-center gap-6 mb-8">
              <h2 className="text-white font-display font-bold uppercase tracking-[0.2em] text-lg lg:text-xl whitespace-nowrap">
                {category.name}
              </h2>
              <div className={cn("h-[1px] flex-1 bg-gradient-to-r opacity-50", category.lineColor, "to-transparent")} />
            </motion.div>

            {/* Grid Layout */}
            <div className={cn("grid grid-cols-1 auto-rows-min gap-4 perspective-[1200px]", category.gridClass || "md:grid-cols-4")}>
              {category.events.map((event, index) => (
                <BentoCard 
                  key={event.title} 
                  event={event} 
                  category={category}
                  index={index}
                  onClick={() => setSelectedEvent({ event, categoryAccent: category.accentCode })}
                />
              ))}
            </div>
            
          </div>
        ))}
        
      </div>

      <EventModal 
        isOpen={!!selectedEvent} 
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent?.event || null}
        categoryAccent={selectedEvent?.categoryAccent}
      />
    </>
  );
}

function BentoCard({ event, category, index, onClick }: { event: EventItem, category: Category, index: number, onClick: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ translateZ: 30, rotateX: 2, rotateY: -2, scale: 1.02 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={cn(
        "p-8 rounded-xl flex flex-col justify-between group cursor-pointer relative overflow-hidden bg-[#0F172A]/95 md:bg-[#0F172A]/80 md:backdrop-blur-[12px] border z-20",
        event.size,
        category.borderCode
      )}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Box Inner Glow (Glassmorphism) */}
      <div 
        className={cn(
          "absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 mix-blend-screen",
          category.hoverBgCode
        )}
      />

      {/* Dynamic Cursor Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              ${category.glowCode},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* HUD Scanning Line */}
      <motion.div 
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: index * 0.5 }}
        className={cn(
          "absolute left-0 w-full h-[2px] opacity-20 group-hover:opacity-50 transition-opacity z-30 shadow-lg",
          category.hoverBgCode
        )}
      />

      {/* HUD Flickering effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-10 group-hover:animate-pulse z-10 pointer-events-none mix-blend-screen",
        category.hoverBgCode
      )} />
      
      {/* Tech Corners */}
      <div className={cn("absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 opacity-50 z-20", category.borderCode)} />
      <div className={cn("absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 opacity-50 z-20", category.borderCode)} />

      {/* Live Glowing Dot */}
      {event.isLive && (
        <div className="absolute top-6 right-6 flex items-center gap-2 z-20" style={{ transform: 'translateZ(10px)' }}>
           <span className="text-[10px] font-mono tracking-widest uppercase text-ice-blue">SYS.LIVE</span>
           <span className={cn("w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_currentColor]", category.accentCode)} />
        </div>
      )}
      
      {/* Event Content */}
      <div className="relative z-20 flex-col flex h-full" style={{ transform: 'translateZ(20px)' }}>
        <div>
          {/* Top-Left Rounded Icon Container */}
          <div className="flex justify-between items-start mb-2">
            
          </div>
          
          <h3 className="text-2xl font-display font-bold mb-2 text-white drop-shadow-md">{event.title}</h3>
          
          {/* Specialized Tagline / Description */}
          <p className={cn("font-mono text-xs tracking-widest uppercase mb-6 opacity-90 font-bold", category.accentCode)}>
            &gt; {event.description}
          </p>
        </div>
        
        {/* Learn More Link / CTA */}
        <div className="mt-8 mt-auto flex items-center justify-between">
          <button 
            className={cn("text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn relative z-20 cursor-pointer drop-shadow-md", category.accentCode)}
          >
            [ DETAILS ]
            <span className="w-0 h-[1px] bg-current group-hover/btn:w-8 transition-all duration-300" />
          </button>

          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={cn("text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn2 relative z-30 cursor-pointer drop-shadow-md", category.accentCode)}
            >
              [ REGISTER ]
              <span className="w-0 h-[1px] bg-current group-hover/btn2:w-8 transition-all duration-300" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

