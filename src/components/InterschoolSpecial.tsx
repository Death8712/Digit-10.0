import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Lock, Unlock, Globe, Zap, Cpu, ExternalLink, Bot, Video } from "lucide-react";
import { cn } from "../lib/utils";
import EventModal from "./EventModal";
import { EventItem } from "../data/events";

const interschoolEvents: Record<string, EventItem> = {
  digithon: {
    title: "DigiThon",
    description: "Programming on Python and MySQL",
    mode: "Online",
    classGroup: "Class 9 to 12",
    software: "Python & MySQL",
    icon: Cpu,
    size: "col-span-1",
    about: "The aim of DigiThon is to find a real world problem that is worthwhile to solve in groups of 2 students. Participants are encouraged to visit local businesses to identify real problems (such as automated GST invoice generation) and build an application using Python for structure/logic/UI and MySQL for data manipulation.",
    venue: "Online",
    image: "/digi-thon.png",
    eventHead: "Sheza Khan",
    eventHeadNumber: "+91 9968882786",
    teacherInCharge: "Ms. Urvashi Singhal",
    teacherInChargeNumber: "+91 9818893193",
    teamSize: "1 team per school (2 participants per team)",
    themes: ["MySQL and Python Programming"],
    judgementCriteria: [
      "Problem Understanding",
      "Python Coding",
      "Solution Design",
      "Impact & Insight",
      "Originality and Creativity"
    ],
    requirements: "Guidelines:\n• Number of teams per school: 1 | Participants per team: 2\n• Theme: MySQL and Python Programming\n• Students are encouraged to visit local businesses and ask about real-world challenges (e.g. automating GST invoice generation from raw transaction data).\n• Students write a Python program that handles the structure, logic, and user interface.\n• MySQL will be used for data manipulation.\n• Use a wide variety of Python libraries to create user-friendly applications (games, school software, accessibility apps, or mobile apps).\n• Must use free, legitimate open-source software.\n• Plagiarized, copied, or inappropriate/harmful content will lead to disqualification.\n• The use of AI is strictly prohibited.\n• E-certificates will be given to the top three winning teams.\n\nSubmission:\n1. Submit the written Python program.\n2. Submit a short write-up (maximum 500 words) explaining the problem, solution design, and bibliography.\n3. Include a demo video or screen recording (maximum 3 minutes) of the working app.\n4. Upload links/files through the designated online portal before the deadline: 17th August 2026."
  },
  digiai: {
    title: "DigiAI",
    description: "Build the \"Second Brain\" for Real Life",
    mode: "Online",
    classGroup: "Class 9 to 12",
    software: "Python / AI Frameworks / Open Source",
    icon: Bot,
    size: "col-span-1",
    about: "Build an original AI powered MVP (Minimum Viable Product) that helps students schedule their tasks, take decisions, protect their privacy and help them think clearly. Your MVP must feature a system that takes fragmented inputs, applies an AI reasoning layer (pattern detection, modeling, or decision support), and produces a useful output a human operator can act on.",
    venue: "Online",
    image: "/Digi-AI.png",
    eventHead: "Sheza Khan",
    eventHeadNumber: "+91 9968882786",
    teacherInCharge: "Ms. Urvashi Singhal",
    teacherInChargeNumber: "+91 9818893193",
    teamSize: "1 team per school (2 participants per team)",
    themes: ["Computational Thinking and Artificial Intelligence"],
    judgementCriteria: [
      "Problem Understanding",
      "AI Reasoning",
      "Solution Design",
      "Impact & Insight",
      "Responsible AI"
    ],
    requirements: "Guidelines:\n• Number of teams per school: 1 | Participants per team: 2\n• Theme: Computational Thinking and Artificial Intelligence\n• Build an original AI powered MVP that helps students schedule tasks, make decisions, protect privacy, and think clearly.\n• MVP must feature a system taking fragmented inputs, applying an AI reasoning layer (pattern detection, modeling, or decision support), and producing actionable output.\n• AI tools may be used for brainstorming, prototyping, and development, but the core idea, logic, and integration must be your team's original work.\n• Disclose all AI tools used in your submission.\n• Judging rewards reasoning and design thinking over technical resources. Open-source/free tools are encouraged.\n• Solutions should not function only as surveillance tools or remove human agency from final decisions.\n• Plagiarized, copied, or inappropriate/harmful content will lead to disqualification.\n• E-certificates will be given to the top three winning teams.\n\nSubmission:\n1. Submit a working prototype (MVP).\n2. Submit a short write-up (maximum 500 words) explaining the problem, how the AI works, and how privacy and harm were addressed.\n3. Include a demo video or screen recording (maximum 3 minutes) of the working prototype.\n4. Upload prototype links/files through the designated online portal before the deadline: 17th August 2026."
  },
  digiframes: {
    title: "DigiFrames",
    description: "Identify. Innovate. Impact.",
    mode: "Online",
    classGroup: "Class 6-8",
    software: "Video Editing Tools",
    icon: Video,
    size: "col-span-1",
    about: "Think like a changemaker and use AI and technology to solve a real problem in your local community. Observe, innovate, and present your idea through a 2–3 minute video that demonstrates how technology can create a positive impact.",
    venue: "Online",
    image: "/Digi-Frames.png",
    eventHead: "Aaradhya Yadav",
    eventHeadNumber: "+91 9818400124",
    teacherInCharge: "Ms. Deepti Chopra",
    teacherInChargeNumber: "+91 8860189198",
    teamSize: "1 team per school (up to 2 students)",
    themes: ["Identify. Innovate. Impact."],
    judgementCriteria: [
      "Understanding of the Community Problem",
      "Innovation and Creativity",
      "Application of Technology",
      "Practicality and Feasibility",
      "Research and Evidence",
      "Presentation and Communication",
      "Ethical and Social Impact"
    ],
    requirements: "Objectives:\n• Inspire students to identify real-world community challenges and propose practical solutions.\n• Develop problem-solving and design thinking skills.\n• Encourage responsible, ethical, and creative use of AI and technology.\n• Foster research, innovation, communication, and teamwork.\n\nEligibility:\n• Open to Classes VI–VIII.\n• Participation in teams of up to 2 students.\n• Only one entry per team is permitted.\n\nRules & Requirements:\n• Submit a 2–3 minute video presenting an innovative Technology or AI-based solution to a local community problem.\n• The presentation should clearly address:\n  ○ Problem Statement – Identify and describe the community issue.\n  ○ Proposed Solution – Present the technology or AI-based solution.\n  ○ Working Mechanism – Explain how the solution functions.\n  ○ Target Beneficiaries – Identify who will benefit from the solution.\n  ○ Community Impact – Describe the expected outcomes and benefits.\n• The solution should be innovative, practical, and relevant to the chosen problem.\n• Narration or subtitles must be in English.\n• AI tools may be used for research, animation, or visualization. However, the idea, explanation, and voiceover must be the team's own.\n• Videos may include interviews, photographs, sketches, models, demonstrations, or animations (optional).\n• A working prototype or coding is NOT required.\n• The video must be submitted in MP4 format, landscape orientation, with clear audio and visuals.\n• All work must be original and created specifically for this competition.\n\nGrounds for Disqualification:\n• Video exceeds or falls short of the prescribed duration.\n• Fully AI-generated submissions without original student contribution.\n• False claims, fabricated evidence, or misrepresentation of research.\n• Multiple submissions from the same team or participant.\n• Failure to comply with the competition rules or submission requirements."
  },
  digiscratch: {
    title: "DigiScratch",
    description: "Math O Mania (Class 5)",
    mode: "Online",
    classGroup: "Class 5",
    software: "Scratch",
    icon: ExternalLink,
    size: "col-span-1",
    about: "'Math O Mania' is an engaging inter-school Scratch coding competition designed for Class V students to explore Mathematics through creativity, humour, and coding. Participants will develop an interactive Scratch project that explains a mathematical concept using entertaining elements such as jokes, memes, humorous animations, or storytelling, making learning both enjoyable and meaningful.",
    venue: "Online",
    image: "/Digi-Scratch.png",
    eventHead: "Navya Ahuja (Student Event Head)",
    eventHeadNumber: "+91 7827651124",
    teacherInCharge: "Ms. Garima Mehra (Teacher In-charge)",
    teacherInChargeNumber: "+91 8527886150 (3:00 PM to 5:00 PM)",
    teamSize: "1 participant per school",
    themes: ["Math Humour ('Math O Mania')"],
    judgementCriteria: [
      "Creativity and Humour: Originality, engagement, and effective use of humour.",
      "Programming Skills: Appropriate use of Scratch features, coding logic, and interactivity.",
      "Clarity of Communication: Ability to explain the mathematical concept in a simple, engaging manner.",
      "Understanding of Mathematical Concepts: Accuracy, relevance, and depth of content presented."
    ],
    requirements: "Guidelines:\n• Mode: Online | Team Size: 1 participant per school | Platform: Scratch\n• Theme: Math Humour ('Math O Mania')\n• Develop an interactive Scratch project that explains a mathematical concept using entertaining elements like jokes, memes, humorous animations, or storytelling.\n• For queries, contact Event In-charge between 3:00 p.m. to 5:00 p.m. (Ms. Garima Mehra: 8527886150, Ms. Navya Ahuja: 7827651124).\n\nSubmission Requirements:\n1. Submit Scratch project file (.sb3) and Scratch project sharing link by the name: Schoolname_Event name.\n2. Submission Deadline: 18th August 2026."
  }
};

export default function InterschoolSpecial() {
  const [selectedEvent, setSelectedEvent] = useState<{event: EventItem, accent: string} | null>(null);
  const [unlockStatus, setUnlockStatus] = useState<"locked" | "unlocking" | "unlocked">("locked");

  const handleUnlock = () => {
    if (unlockStatus !== "locked") return;
    setUnlockStatus("unlocking");
    setTimeout(() => {
      setUnlockStatus("unlocked");
    }, 1500); // 1.5s decryption animation
  };

  return (
    <section id="interschool" className="py-20 relative z-10 w-full overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {unlockStatus !== "unlocked" ? (
          <motion.div 
            key="locked-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center cursor-pointer group relative z-30"
            onClick={handleUnlock}
          >
            {/* Decryption Effect Background */}
            {unlockStatus === "unlocking" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 4] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none"
              />
            )}

            <div className="relative w-40 h-40 flex items-center justify-center mb-8">
              {/* Outer scanning rings */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: unlockStatus === "unlocking" ? 1 : 10, repeat: Infinity, ease: "linear" }}
                className={cn(
                  "absolute inset-0 rounded-full border-2",
                  unlockStatus === "unlocking" ? "border-neon-cyan/80 border-dashed" : "border-neon-cyan/20 border-t-neon-cyan/80"
                )} 
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: unlockStatus === "unlocking" ? 1.5 : 15, repeat: Infinity, ease: "linear" }}
                className={cn(
                  "absolute inset-4 rounded-full border-2",
                  unlockStatus === "unlocking" ? "border-neon-magenta/80 border-dotted" : "border-neon-magenta/20 border-b-neon-magenta/80"
                )}
              />
              
              {/* Center Lock Button */}
              <motion.div 
                animate={unlockStatus === "unlocking" ? { scale: [1, 1.2, 0.8], opacity: [1, 0.8, 0] } : { scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={cn(
                  "relative z-10 flex items-center justify-center w-24 h-24 bg-[#050505] rounded-full border transition-all duration-500",
                  unlockStatus === "unlocking" ? "border-neon-cyan shadow-[0_0_50px_rgba(0,255,255,0.8)]" : "border-white/10 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                )}
              >
                 <AnimatePresence mode="wait">
                   {unlockStatus === "locked" ? (
                     <motion.div key="lock" exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }}>
                       <Lock className="w-10 h-10 text-white/50 group-hover:text-neon-cyan transition-colors" />
                     </motion.div>
                   ) : (
                     <motion.div key="unlock" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1.2 }} transition={{ duration: 0.4, type: "spring" }}>
                       <Unlock className="w-12 h-12 text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                     </motion.div>
                   )}
                 </AnimatePresence>
              </motion.div>
            </div>
            
            <motion.div 
              animate={unlockStatus === "unlocking" ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
              className="text-neon-cyan font-mono text-lg tracking-[0.3em] uppercase group-hover:text-white transition-colors"
            >
              {unlockStatus === "locked" ? "Click to Decrypt" : "Decrypting..."}
            </motion.div>
            <motion.div 
              animate={unlockStatus === "unlocking" ? { opacity: 0 } : { opacity: 1 }}
              className="text-white/40 font-sans text-sm mt-3 uppercase tracking-wider"
            >
              Classified Inter-School Events
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="unlocked-state"
            initial={{ opacity: 0, scale: 0.9, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto px-4 relative z-20"
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

        )}
      </AnimatePresence>
      <EventModal 
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent?.event || interschoolEvents.digithon}
        categoryAccent={selectedEvent?.accent || "text-neon-cyan"}
      />
    </section>
  );
}
