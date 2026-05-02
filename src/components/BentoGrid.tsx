import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Brush, Image as ImageIcon, Presentation, Clapperboard, Video, Eye, Lightbulb, ShoppingBag, Bug, Gamepad2, Bot, LucideIcon } from 'lucide-react';
import React, { MouseEvent, useState } from 'react';
import EventModal from './EventModal';

interface EventItem {
  title: string;
  description: string;
  icon: LucideIcon;
  size: string;
  featured?: boolean;
  isLive?: boolean;
  about?: string;
  venue?: string;
  image?: string;
}

interface Category {
  id: string;
  name: string;
  accentCode: string;
  glowCode: string;
  lineColor: string;
  borderCode: string;
  hoverBgCode: string;
  events: EventItem[];
  gridClass?: string;
}

const categories: Category[] = [
  {
    id: "primary",
    name: "Preparatory Stage (Class 3-5)",
    accentCode: "text-amber-400",
    glowCode: "rgba(251, 191, 36, 0.15)", // Tailwind Amber-400
    lineColor: "from-amber-400",
    borderCode: "border-amber-400",
    hoverBgCode: "bg-gradient-to-br from-amber-400/20 to-amber-500/5",
    gridClass: "md:grid-cols-3",
    events: [
      { title: "Digimagic", description: "Class 3 | Online + Offline", icon: Brush, size: "col-span-1", isLive: true, about: "Students will design vibrant digital posters on Paint 3D, bringing to life the theme of either SDG-3, Good Health and Well-Being or SDG-13, Climate Action. Blending creativity with awareness, this individual event begins with an online preliminary round, ending in an offline finale where the top five participants showcase their ideas and artistic vision.", venue: "Primary Computer Lab- basement", image: "/digi-magic.png" },
      { title: "Digiposter", description: "Class 4 | Online + Offline", icon: ImageIcon, size: "col-span-1", featured: true, about: "Digiposter encourages students to explore their creativity on Canva by designing a poster on either SDG 15, Life on Land or SDG 4, Quality Education. This individual event nurtures design thinking and meaningful expression. It begins with an online preliminary round and culminates in an offline finale, where the top five participants present their ideas with clarity and visual impact.", venue: "Primary Computer Lab- basement", image: "/digi-poster.png" },
      { title: "Digislides", description: "Class 5 | Online + Offline", icon: Presentation, size: "col-span-1", about: "In Digislides, students step into the world of creative expression, creating engaging presentations on Canva. Through SDGs like Clean Water and Sanitation (6) or Life Below Water (14), they combine creativity with awareness. This event builds confidence, storytelling, and digital skills, helping students present important ideas in a clear and visually appealing way.", venue: "Primary Computer Lab- basement", image: "/digi-slides.png" },
    ]
  },
  {
    id: "middle",
    name: "Middle Stage (Class 6-8)",
    accentCode: "text-purple-400",
    glowCode: "rgba(192, 132, 252, 0.15)", // Tailwind Purple-400
    lineColor: "from-purple-400",
    borderCode: "border-purple-400",
    hoverBgCode: "bg-gradient-to-br from-purple-400/20 to-purple-500/5",
    gridClass: "md:grid-cols-2",
    events: [
      { title: "Digitales", description: "Class 6 | Online + Offline", icon: Clapperboard, size: "col-span-1", about: "Digitales is all about storytelling in the digital age. Students share experiences through comic strips, animations, digital art, or puzzles. This event encourages imagination, expression, and innovation, allowing participants to transform their thoughts into engaging digital creations that entertain, inform, and inspire.", venue: "Middle Computer Lab- basement", image: "/digi-tales.png" },
      { title: "DigiQuiz", description: "Class 8 | Online + Offline", icon: Lightbulb, size: "col-span-1", about: "Put your thinking caps on for DigiQuiz! This event tests students’ knowledge of computational thinking and artificial intelligence. Fast-paced and engaging, it challenges participants to think logically, solve problems, and apply concepts, making learning both competitive and fun.", venue: "Middle Computer Lab- basement", image: "/digi-quiz.png" },
    ]
  },
  {
    id: "senior",
    name: "Seniors Stage (Class 9-12)",
    accentCode: "text-neon-cyan",
    glowCode: "rgba(0, 255, 255, 0.12)", // Neon Cyan
    lineColor: "from-neon-cyan",
    borderCode: "border-neon-cyan",
    hoverBgCode: "bg-gradient-to-br from-neon-cyan/20 to-blue-500/5",
    gridClass: "md:grid-cols-2",
    events: [
      { title: "Digi Tote", description: "Class 9-12 | Offline", icon: ShoppingBag, size: "col-span-1", about: "DigiTote combines creativity with sustainability. Students design eco-friendly tote bags inspired by technology, turning everyday items into meaningful expressions. This offline event encourages innovation, environmental awareness, and artistic flair, proving that style and sustainability can go hand in hand.", venue: "Auditorium", image: "/digi-tote.png" },
      { title: "Digi Bug", description: "Class 9-12 | Offline", icon: Bug, size: "col-span-1", about: "DigiBug is a challenge for sharp minds and problem solvers. Participants debug given code, identifying errors and fixing them efficiently. This offline event tests logical thinking, coding skills, and attention to detail, making it perfect for those who enjoy cracking complex problems.", venue: "Senior IT Lab" },
    ]
  },
  {
    id: "grand",
    name: "Blockbuster Events (Class 6-12)",
    accentCode: "text-[#ff003c]",
    glowCode: "rgba(255, 0, 60, 0.15)", // Cyberpunk Red
    lineColor: "from-[#ff003c]",
    borderCode: "border-[#ff003c]",
    hoverBgCode: "bg-gradient-to-br from-[#ff003c]/20 to-orange-500/5",
    gridClass: "md:grid-cols-2",
    events: [
      { title: "Digi Battles", description: "Class 6-12 | Offline", icon: Gamepad2, size: "col-span-1", featured: true, about: "DigiBattles brings teamwork and strategy into the spotlight. Students compete in teams through gaming challenges, testing coordination, communication, and quick decision-making. It’s not just about playing—it’s about strategy, collaboration, and performing under pressure.", venue: "Event Hall", image: "/digi-battles.png" },
      { title: "Digi Arena", description: "Class 6-12 | Offline", icon: Gamepad2, size: "col-span-1", about: "Digi Arena brings teamwork and strategy into the spotlight. Students compete in teams through gaming challenges, testing coordination, communication, and quick decision-making. It’s not just about playing—it’s about strategy, collaboration, and performing under pressure.", venue: "Event Hall" },
    ]
  }
];

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
        "p-8 rounded-xl flex flex-col justify-between group cursor-pointer relative overflow-hidden backdrop-blur-[12px] border bg-white/5 z-20",
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
           <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">SYS.LIVE</span>
           <span className={cn("w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_currentColor]", category.accentCode)} />
        </div>
      )}
      
      {/* Event Content */}
      <div className="relative z-20 flex-col flex h-full" style={{ transform: 'translateZ(20px)' }}>
        <div>
          {/* Top-Left Rounded Icon Container */}
          <div className="text-white w-12 h-12 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
            <event.icon size={24} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-2xl font-display font-bold mb-2 text-white drop-shadow-md">{event.title}</h3>
          
          {/* Specialized Tagline / Description */}
          <p className={cn("font-mono text-xs tracking-widest uppercase mb-6 opacity-90 font-bold", category.accentCode)}>
            &gt; {event.description}
          </p>
        </div>
        
        {/* Learn More Link / CTA */}
        <div className="mt-8 mt-auto">
          <button 
            className={cn("text-xs font-mono font-bold tracking-[0.2em] uppercase flex items-center gap-2 group/btn relative z-20 cursor-pointer drop-shadow-md", category.accentCode)}
          >
            [ INITIATE_SCAN ]
            <span className="w-0 h-[1px] bg-current group-hover/btn:w-8 transition-all duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const [selectedEvent, setSelectedEvent] = useState<{event: EventItem, categoryAccent: string} | null>(null);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 py-20 relative z-40">
        
        {categories.map((category) => (
          <div key={category.id} className="mb-20 last:mb-0">
            
            {/* Section Heading Row */}
            <div className="flex items-center gap-6 mb-8 reveal">
              <h2 className="text-white font-display font-bold uppercase tracking-[0.2em] text-lg lg:text-xl whitespace-nowrap">
                {category.name}
              </h2>
              <div className={cn("h-[1px] flex-1 bg-gradient-to-r opacity-50", category.lineColor, "to-transparent")} />
            </div>

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
