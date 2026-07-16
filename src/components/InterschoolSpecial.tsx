import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, Unlock, Globe, Zap, Cpu, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";
import EventModal from "./EventModal";
import { EventItem } from "../data/events";

const interschoolEvents: Record<string, EventItem> = {
  digithon: {
    title: "DigiThon",
    description: "Class 9-12",
    mode: "Online",
    classGroup: "Class 9-12",
    software: "-",
    icon: Cpu,
    size: "col-span-1",
    about: "Build an AI-powered tool that helps process complexity, understand tradeoffs, and move from uncertainty to meaningful action — while preserving privacy, minimizing harm, and supporting human judgment.",
    venue: "Online",
    image: "/digi-thon.png",
    eventHead: "Sheza Khan",
    eventHeadNumber: "+91 9968882786",
    teamSize: "Team / Individual",
    themes: ["Computational Thinking and Artificial Intelligence"],
    objectives: ["Build an original AI-powered MVP that helps process complexity and make better decisions.", "Understand a complex situation, decide or plan a real next step, and do so safely."],
    requirements: "Guidelines\nBuild an original AI-powered MVP that helps students, early professionals, or creators process complexity and make better decisions, and turn ideas into action.\nYour MVP must help the user understand a complex situation, decide or plan a real next step, and do so safely.\nAI tools may be used for brainstorming, prototyping, and development, but the core idea, logic, and integration must be your team's original work.\nFully AI-generated submissions with no original design or reasoning are not allowed.\nPlagiarized, copied, or inappropriate/harmful content will lead to disqualification.\nSolutions should not function only as surveillance tools or remove the human from the final decision.\nSubmit a short write-up (maximum 500 words) explaining the problem, how the AI works, and how privacy and harm were addressed.\nInclude a demo video or screen recording (maximum 3 minutes) of the working prototype.\nSubmission: Upload the prototype link/files through the designated online submission portal before the deadline."
  },
  digiscratch: {
    title: "DigiScratch",
    description: "Class 3-5",
    mode: "Online",
    classGroup: "Class 3-5",
    software: "Scratch",
    icon: ExternalLink,
    size: "col-span-1",
    about: "Unleash your creativity with block-based programming. Design interactive stories, games, and animations using Scratch.",
    venue: "Online",
    image: "/digi-scratch.png",
    eventHead: "Navya Ahuja", eventHeadNumber: "+91 7827651124",
    teamSize: "Individual / Team of 2",
    themes: ["Interactive Storytelling", "Game Design"],
    objectives: ["Develop logical thinking using block-based coding.", "Express creativity through interactive media."],
    requirements: "Guidelines\nParticipants must use Scratch to build their project.\nThe project must align with the provided themes.\nProjects will be judged on creativity, logic, and visual appeal.\nSubmit the Scratch project link or .sb3 file."
  },
  digiinterschool: {
    title: "DigiInterSchool",
    description: "Class 6-8",
    mode: "Offline",
    classGroup: "Class 6-8",
    software: "-",
    icon: Globe,
    size: "col-span-1",
    about: "The grand tech symposium where schools clash for the ultimate technology championship trophy. Showcase your tech prowess across multiple disciplines.",
    venue: "Main Auditorium",
    image: "/digi-interschool.png",
    eventHead: "Aaradhya Yadav", eventHeadNumber: "+91 9818400124",
    teamSize: "School Delegation",
    themes: ["Technology Symposium", "Inter-School Championship"],
    objectives: ["Foster inter-school collaboration and competition.", "Celebrate technological innovation among young minds."],
    requirements: "Guidelines\nEach school can send a designated delegation.\nParticipants will compete in various on-the-spot tech challenges.\nThe school with the highest overall points will be awarded the Championship Trophy."
  }
};

export default function InterschoolSpecial() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{event: EventItem, accent: string} | null>(null);

  const handleReveal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsAnimating(false);
    }, 1500); // Wait for unlocking animation
  };

  return (
    <section id="interschool" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              className="flex flex-col items-center justify-center text-center p-12 md:p-24 border border-neon-cyan/20 rounded-3xl bg-black/40 backdrop-blur-md relative overflow-hidden group"
            >
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />
              
              <motion.div
                animate={{
                  boxShadow: isAnimating 
                    ? ["0 0 0px #0ff", "0 0 50px #0ff", "0 0 100px #0ff"] 
                    : "0 0 0px transparent",
                }}
                className="w-24 h-24 rounded-full border border-neon-cyan/30 flex items-center justify-center mb-8 relative"
              >
                {isAnimating ? (
                  <Unlock className="w-10 h-10 text-neon-cyan animate-pulse" />
                ) : (
                  <Lock className="w-10 h-10 text-white/50 group-hover:text-neon-cyan transition-colors" />
                )}
                
                {/* Rotating ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-10px] border border-dashed border-neon-cyan/20 rounded-full"
                />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
                <span className="text-white/30">RESTRICTED </span> 
                <span className={isAnimating ? "text-neon-cyan animate-pulse" : "text-white"}>ACCESS</span>
              </h2>
              
              <p className="text-white/50 font-mono text-sm tracking-widest uppercase mb-10 max-w-md">
                Encrypted payload detected. Authorization required to access the flagship Inter-school Mega Events.
              </p>

              <button
                onClick={handleReveal}
                disabled={isAnimating}
                className="px-8 py-4 bg-neon-cyan/10 border border-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300 font-mono font-bold tracking-widest uppercase flex items-center gap-3 group/btn relative overflow-hidden text-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Glitch effect on hover */}
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:animate-[glitch_0.2s_linear]" />
                {isAnimating ? "DECRYPTING..." : "DECRYPT EVENT"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative p-[2px] rounded-3xl overflow-hidden group"
            >
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
                    {/* Event 1: DigiThon */}
                    <div className="p-6 rounded-2xl border border-neon-cyan/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-neon-cyan transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan mb-2">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white">DigiThon</h3>
                      <p className="text-white/60 font-sans text-sm flex-1">
                        Build an AI-powered tool that helps process complexity, understand tradeoffs, and move from uncertainty to meaningful action — while preserving privacy, minimizing harm, and supporting human judgment.
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
                    
                    {/* Event 2: DigiScratch */}
                    <div className="p-6 rounded-2xl border border-neon-magenta/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-neon-magenta transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-neon-magenta/10 flex items-center justify-center text-neon-magenta mb-2">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white">DigiScratch</h3>
                      <p className="text-white/60 font-sans text-sm flex-1">
                        Unleash your creativity with block-based programming. Design interactive stories, games, and animations.
                      </p>
                      <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                        <span className="text-neon-magenta">CLASS 3-5</span>
                        <button 
                          onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiscratch, accent: "text-neon-magenta"}); }}
                          className="text-white/40 group-hover:text-neon-magenta transition-colors uppercase tracking-[0.2em]"
                        >
                          [ INITIATE ]
                        </button>
                      </div>
                    </div>
                    
                    {/* Event 3: DigiInterSchool */}
                    <div className="p-6 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm flex flex-col gap-4 group hover:border-yellow-500 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-2">
                        <Globe className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white">DigiInterSchool</h3>
                      <p className="text-white/60 font-sans text-sm flex-1">
                        The grand tech symposium where schools clash for the ultimate technology championship trophy.
                      </p>
                      <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                        <span className="text-yellow-500">CLASS 6-8</span>
                        <button 
                          onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiinterschool, accent: "text-yellow-500"}); }}
                          className="text-white/40 group-hover:text-yellow-500 transition-colors uppercase tracking-[0.2em]"
                        >
                          [ INITIATE ]
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <EventModal 
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent?.event || null}
        categoryAccent={selectedEvent?.accent || ""}
      />
    </section>
  );
}
