import re

with open("src/components/InterschoolSpecial.tsx", "r") as f:
    content = f.read()

# We need to add useScroll, useTransform to motion/react imports
content = content.replace(
    'import { motion, AnimatePresence } from "motion/react";',
    'import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";'
)
content = content.replace(
    'import { useState } from "react";',
    'import { useState, useRef } from "react";'
)

new_func = """export default function InterschoolSpecial() {
  const [selectedEvent, setSelectedEvent] = useState<{event: EventItem, accent: string} | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 15%"]
  });

  // 0.0 to 0.2: Fade in line and lock
  const lockAndLineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // 0.2 to 0.4: Lock to Unlock transition
  const lockOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
  const unlockOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const unlockScale = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0.8, 1.2, 1]);

  // 0.5 to 0.7: Line separates and opens up
  const leftLineX = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "-100%"]);
  const rightLineX = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "100%"]);
  const lockContainerOpacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);

  // 0.7 to 1.0: Content reveals
  const contentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1]);
  const contentY = useTransform(scrollYProgress, [0.7, 1], [40, 0]);
  const contentPointerEvents = useTransform(scrollYProgress, (v) => v > 0.7 ? "auto" : "none");

  return (
    <section ref={containerRef} id="interschool" className="py-20 relative z-10 w-full overflow-hidden">
      {/* Animation Container placed near the top */}
      <div className="w-full h-32 relative flex items-center justify-center mb-10">
          <motion.div style={{ opacity: lockAndLineOpacity, x: leftLineX }} className="absolute left-0 w-1/2 h-[2px] bg-neon-cyan shadow-[0_0_10px_#0ff]" />
          <motion.div style={{ opacity: lockAndLineOpacity, x: rightLineX }} className="absolute right-0 w-1/2 h-[2px] bg-neon-cyan shadow-[0_0_10px_#0ff]" />
          
          <motion.div style={{ opacity: lockContainerOpacity }} className="absolute z-10 flex items-center justify-center w-24 h-24 bg-[#050505] rounded-full border border-neon-cyan/50 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
             <motion.div style={{ opacity: lockOpacity }} className="absolute">
                <Lock className="w-10 h-10 text-white/50" />
             </motion.div>
             <motion.div style={{ opacity: unlockOpacity, scale: unlockScale }} className="absolute">
                <Unlock className="w-10 h-10 text-neon-cyan drop-shadow-[0_0_10px_#0ff]" />
             </motion.div>
          </motion.div>
      </div>

      <motion.div 
        style={{ opacity: contentOpacity, scale: contentScale, y: contentY, pointerEvents: contentPointerEvents as any }} 
        className="max-w-7xl mx-auto px-4 relative z-20"
      >
        <div className="relative p-[2px] rounded-3xl overflow-hidden group">
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-magenta bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
          
          <div className="bg-cyber-black rounded-3xl p-8 md:p-12 relative z-10 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
            
            <div className="relative z-20 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 text-neon-magenta font-mono text-xs font-bold tracking-widest uppercase mb-6">
                <Zap className="w-3 h-3 fill-neon-magenta" />
                Exclusive Access Granted
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta mb-6">
                INTER-SCHOOL MEGA EVENTS
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed font-sans max-w-2xl mb-12">
                Welcome to the elite tier of DIGIT 10.0. These high-stakes challenges are strictly for top-tier competitors representing their institutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
                {/* Event 1: DigiThon */}
                <div className="p-6 rounded-2xl border border-neon-cyan/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-neon-cyan transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiThon</h3>
                  <p className="text-neon-cyan text-xs font-mono font-semibold uppercase tracking-wider">
                    Programming on Python & MySQL
                  </p>
                  <p className="text-white/60 font-sans text-sm flex-1">
                    Find a real-world problem and build a solution using Python & MySQL. Create open-source software for local businesses or schools.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-neon-cyan">CLASS 9-12</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digithon, accent: "text-neon-cyan"}); }}
                      className="text-white/40 group-hover:text-neon-cyan transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>

                {/* Event 2: DigiAI */}
                <div className="p-6 rounded-2xl border border-purple-400/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-purple-400 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiAI</h3>
                  <p className="text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider">
                    "Second Brain" for Real Life
                  </p>
                  <p className="text-white/60 font-sans text-sm flex-1">
                    Build an original AI-powered MVP with a reasoning layer to help students schedule tasks, make decisions, and protect privacy.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-purple-400">CLASS 9-12</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiai, accent: "text-purple-400"}); }}
                      className="text-white/40 group-hover:text-purple-400 transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>
                
                {/* Event 3: DigiFrames */}
                <div className="p-6 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-yellow-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiFrames</h3>
                  <p className="text-yellow-500 text-xs font-mono font-semibold uppercase tracking-wider">
                    Identify. Innovate. Impact.
                  </p>
                  <p className="text-white/60 font-sans text-sm flex-1">
                    Think like a changemaker and use AI and technology to solve a real problem in your local community through a 2-3 minute video.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-yellow-500">CLASS 6-8</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiframes, accent: "text-yellow-500"}); }}
                      className="text-white/40 group-hover:text-yellow-500 transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>

                {/* Event 4: DigiScratch */}
                <div className="p-6 rounded-2xl border border-neon-magenta/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-neon-magenta transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiScratch</h3>
                  <p className="text-neon-magenta text-xs font-mono font-semibold uppercase tracking-wider">
                    Math O Mania ('Math Humour')
                  </p>
                  <p className="text-white/60 font-sans text-sm flex-1">
                    Explain mathematical concepts using Scratch coding, humor, memes, storytelling, and interactive animations.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-neon-magenta">CLASS 5</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiscratch, accent: "text-neon-magenta"}); }}
                      className="text-white/40 group-hover:text-neon-magenta transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <EventModal 
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent?.event || interschoolEvents.digithon}
        categoryAccent={selectedEvent?.accent || "text-neon-cyan"}
      />
    </section>
  );
}
"""

start_idx = content.find("export default function InterschoolSpecial() {")
end_idx = content.rfind("}") + 1

if start_idx != -1:
    new_content = content[:start_idx] + new_func
    with open("src/components/InterschoolSpecial.tsx", "w") as f:
        f.write(new_content)
else:
    print("Function not found")
