import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, User, Users, GraduationCap, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface Speaker {
  name: string;
  role: string;
  category: 'Leadership' | 'Mentors' | 'Student Core';
  company: string;
  initial: string;
  image?: string;
  bio?: string;
  imagePosition?: string;
}

const fullSpeakers: Speaker[] = [
  // --- LEADERSHIP & ORGANISERS ---
  { 
    name: "Dr. Ashok Kumar Pandey", 
    role: "Visionary", 
    category: "Leadership",
    company: "Ahlcon International School", 
    initial: "AP", 
    bio: "Dr. Ashok Kumar Pandey guides the overall vision and direction of Ahlcon International School. He focuses on keeping learning modern and helping the school maintain strong educational standards.", 
    image: "/Dr. Ashok Kumar Pandey.jpg", 
    imagePosition: "center top" 
  },
  { 
    name: "Mr. Sanjay Yadav", 
    role: "Visionary", 
    category: "Leadership",
    company: "Ahlcon International School", 
    initial: "SY", 
    bio: "Mr. Sanjay Yadav manages the day-to-day running of the school and focuses on student growth. He works closely with teachers and students to build a supportive, active learning environment.", 
    image: "/Mr.Sanjay Yadav.jpg" 
  },
  { 
    name: "Mr. Puneet Duggal", 
    role: "Organiser", 
    category: "Leadership",
    company: "Ahlcon International School", 
    initial: "PD", 
    bio: "Mr. Puneet Duggal oversees daily operations and academic discipline across the school. He works behind the scenes to keep things running smoothly and support both staff and students.", 
    image: "/Mr. Puneet Duggal.jpg" 
  },
  { 
    name: "Dr. Ekta Kandhari Ratra", 
    role: "Co-Organiser", 
    category: "Leadership",
    company: "Ahlcon International School", 
    initial: "ER", 
    bio: "Dr. Ekta Kandhari Ratra leads the Senior Stage, guiding students through higher academics and board prep. She helps older students stay focused on their goals and transition smoothly toward university and careers.", 
    image: "/Dr. Ekta Kandhari Ratra.jpg" 
  },
  { 
    name: "Ms. Sunanda S Kumar", 
    role: "Co-Organiser", 
    category: "Leadership",
    company: "Ahlcon International School", 
    initial: "SK", 
    bio: "Ms. Sunanda S Kumar heads the Middle Stage, helping students adapt as their studies become more structured. She balances academics with extracurriculars to keep students curious and engaged.", 
    image: "/Ms.Sunanda S Kumar.jpg", 
    imagePosition: "center top" 
  },
  { 
    name: "Ms. Madhuri Dadhich", 
    role: "Co-Organiser", 
    category: "Leadership",
    company: "Ahlcon International School", 
    initial: "MD", 
    bio: "Ms. Madhuri Dadhich focuses on building strong fundamentals and a comfortable learning space for younger students. She works to help children build confidence and enjoy coming to school every day.", 
    image: "/Ms.Madhuri Dadhich.jpg" 
  },

  // --- FACULTY MENTORS & CONVENORS ---
  { 
    name: "Ms. Urvashi Singhal", 
    role: "Founder & Chief Convenor", 
    category: "Mentors",
    company: "Digit Crew", 
    initial: "US", 
    image: "/Ms Uravshi Singhal.jpg", 
    imagePosition: "center top", 
    bio: "Leads the computer science department, guiding the team and mentoring students in technology." 
  },
  { 
    name: "Ms. Nitika Wadhwa", 
    role: "Mentor", 
    category: "Mentors",
    company: "Digit Crew", 
    initial: "NW", 
    image: "/Ms Nitika Wadhwa.jpg", 
    imagePosition: "center top", 
    bio: "Teaches coding foundations to students, making classroom learning technical and engaging." 
  },
  { 
    name: "Ms. Deepti Chopra", 
    role: "Mentor", 
    category: "Mentors",
    company: "Digit Crew", 
    initial: "DC", 
    image: "/Ms Deepti Chopra.png", 
    bio: "Guides students through computing concepts with patience and mentorship, inspiring their interest in technology." 
  },
  { 
    name: "Ms. Garima Mehra", 
    role: "Mentor", 
    category: "Mentors",
    company: "Digit Crew", 
    initial: "GM", 
    image: "/Ms Garima Mehra.png", 
    bio: "Introduces young students to the basics of computers and digital literacy, building their tech skills early." 
  },

  // --- STUDENT CORE & EVENT HEADS ---
  { 
    name: "Rudransh Kandpal", 
    role: "President", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "RK", 
    image: "/Rudransh Kandpal.jpg", 
    bio: "Leads the team, plans strategies, and makes sure everyone works together to achieve our goals." 
  },
  { 
    name: "Ishika Mittal", 
    role: "Vice President", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "IM", 
    image: "/Ishika Mittal.jpg", 
    bio: "Helps in managing team operations, solving problems, and keeping the team organized." 
  },
  { 
    name: "Sheza Khan", 
    role: "Coordinating Director", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "SK", 
    image: "/Sheza Khan.jpg", 
    bio: "Manages our content and information, keeping everything well-organized and running smoothly." 
  },
  { 
    name: "Aarav Tuteja", 
    role: "Media Lead", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "AT", 
    image: "/Aarav Tuteja.jpg", 
    bio: "Handles our online presence by creating posts and strategies to grow our social media accounts." 
  },
  { 
    name: "Granth Shandilya", 
    role: "Video Visionary", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "GS", 
    image: "/Granth.jpg", 
    bio: "Captures the team's work on camera and turns ideas into amazing visual stories." 
  },
  { 
    name: "Prajanay Chandra", 
    role: "Producer", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "PC", 
    image: "/Prajanay Chandra.jpg", 
    bio: "Creates and directs videos, making sure our digital content looks great." 
  },
  { 
    name: "Divyansh Rathore", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "DR", 
    image: "/Divyansh Rathore.jpg", 
    bio: "Manages event plans and coordinates logistics so everything runs smoothly on the day of the event." 
  },
  { 
    name: "Vivaan Tripathi", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "VT", 
    image: "/Vivaan Tripathi.png", 
    bio: "Creates challenges and manages the technical parts of the events for the participants." 
  },
  { 
    name: "Aditya Pandey", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "AP", 
    image: "/Aaditya Pandey.png", 
    bio: "Event Head of DigiMeme" 
  },
  { 
    name: "Hanisha Nagi", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "HN", 
    image: "/Hanisha Nagi.jpg", 
    bio: "Brings energy to the team and helps organize great events in a fast-paced environment." 
  },
  { 
    name: "Aaradhya Yadav", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "AY", 
    image: "/Aaradhya Yadav.jpg", 
    bio: "Keeps track of details, schedules, and logistics to make sure complex events go as planned." 
  },
  { 
    name: "Navya Ahuja", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "NA", 
    image: "/Navya Ahuja.jpg", 
    bio: "Helps plan and organize events with creativity and structure to create memorable experiences." 
  },
  { 
    name: "Ananya Gahlot", 
    role: "Event Head", 
    category: "Student Core",
    company: "Digit Crew", 
    initial: "AG", 
    image: "/Ananya Gahlot.jpg", 
    bio: "Coordinates people and resources to turn event ideas into successful live events." 
  }
];

const CATEGORY_TABS = [
  { id: 'All', label: 'All Crew', icon: Users, count: fullSpeakers.length },
  { id: 'Leadership', label: 'Leadership & Organisers', icon: ShieldCheck, count: 6 },
  { id: 'Mentors', label: 'Faculty Mentors', icon: GraduationCap, count: 4 },
  { id: 'Student Core', label: 'Student Executive & Leads', icon: User, count: 13 },
];

export default function Visionaries() {
  const [activeSpeaker, setActiveSpeaker] = useState<Speaker | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSpeakers = useMemo(() => {
    if (selectedCategory === 'All') return fullSpeakers;
    return fullSpeakers.filter(speaker => speaker.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section 
      id="visionaries" 
      className="relative z-10 w-full py-24 md:py-32 my-10 bg-cyber-black/40 border-y border-[rgba(0,240,255,0.12)] overflow-visible"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan font-mono font-bold text-xs uppercase tracking-[0.3em] mb-4 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
            <Sparkles size={14} className="text-neon-cyan" />
            <span>The Minds Behind DIGIT 10.0</span>
          </div>

          <h2 
            className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest text-white mb-6"
            style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}
          >
            OUR <span className="text-neon-cyan">TEAM</span>
          </h2>

          <p className="text-slate-300 font-sans max-w-2xl mx-auto text-base">
            Meet the visionary leadership, dedicated mentors, and passionate student coordinators shaping the digital future.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-neon-cyan text-cyber-black shadow-[0_0_20px_rgba(0,255,255,0.4)] border border-neon-cyan scale-105"
                      : "bg-[#0B1222]/80 text-slate-300 border border-white/10 hover:border-neon-cyan/40 hover:text-white"
                  )}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-md",
                    isActive ? "bg-cyber-black/20 text-cyber-black" : "bg-white/10 text-neon-cyan"
                  )}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Complete Responsive Cards Grid - No Animation & No Clipping */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.name}
              onClick={() => setActiveSpeaker(speaker)}
              className="bg-[#0B1222] p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl border border-[rgba(0,240,255,0.18)] hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent group-hover:w-full transition-all duration-300" />
              
              <div>
                {/* Photo / Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-neon-cyan/15 to-purple-900/40 border border-neon-cyan/30 mx-auto mb-4 flex items-center justify-center text-2xl font-display font-black text-neon-cyan relative shadow-inner overflow-hidden shrink-0 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      style={{ objectPosition: speaker.imagePosition || 'center' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
                      }}
                    />
                  ) : (
                    speaker.initial
                  )}
                </div>

                {/* Name */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center leading-snug group-hover:text-neon-cyan transition-colors mb-1.5">
                  {speaker.name}
                </h3>
                
                {/* Role */}
                <p className="text-[11px] sm:text-xs font-mono font-bold text-neon-cyan text-center tracking-wider uppercase mb-1">
                  {speaker.role}
                </p>

                {/* Company / Affiliation */}
                <p className="text-[10px] sm:text-[11px] font-sans text-slate-400 text-center leading-tight">
                  {speaker.company}
                </p>
              </div>

              {/* Card Footer prompt */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-center">
                <span className="text-[10px] font-mono text-neon-cyan/60 group-hover:text-neon-cyan uppercase tracking-widest transition-colors flex items-center gap-1">
                  <span>[ VIEW PROFILE ]</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Profile Bio Modal Popup */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeSpeaker && (
            <div
              onClick={() => setActiveSpeaker(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 md:backdrop-blur-md"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent="true"
                className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto custom-scrollbar bg-cyber-black border rounded-3xl border-[rgba(0,240,255,0.25)] shadow-[0_0_40px_rgba(0,255,255,0.2)] flex flex-col"
              >
                <button
                  onClick={() => setActiveSpeaker(null)}
                  className="absolute z-10 p-2 text-ice-blue transition-colors bg-black/60 rounded-full top-4 right-4 hover:text-white hover:bg-black/90 cursor-pointer border border-white/10"
                >
                  <X size={20} />
                </button>
                
                <div className="relative h-64 md:h-80 bg-cyber-black/60 flex items-center justify-center overflow-hidden">
                  {activeSpeaker.image ? (
                    <img
                      src={activeSpeaker.image}
                      alt={activeSpeaker.name}
                      className="object-contain max-h-full max-w-full relative z-10" 
                      style={{ objectPosition: activeSpeaker.imagePosition || 'center' }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-6xl font-black text-neon-cyan font-display">
                      {activeSpeaker.initial}
                    </div>
                  )}
                  {/* Delicate gradient blends on edges */}
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cyber-black to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cyber-black to-transparent z-20 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-cyber-black to-transparent z-20 pointer-events-none" />
                </div>

                <div className="relative px-6 sm:px-8 pt-4 pb-10 text-center md:px-10">
                  <h3 className="mb-1 text-2xl sm:text-3xl font-black text-white font-display">
                    {activeSpeaker.name}
                  </h3>
                  
                  <p className="mb-2 font-mono text-sm text-neon-cyan font-bold uppercase tracking-wider">
                    {activeSpeaker.role}
                  </p>

                  <p className="mb-5 font-sans text-xs text-slate-400">
                    {activeSpeaker.company}
                  </p>
                  
                  <div className="w-12 h-1 mx-auto mb-6 rounded-full bg-neon-cyan/40" />
                  
                  <p className="leading-relaxed text-ice-blue text-sm md:text-base">
                    {activeSpeaker.bio || "Member of the DIGIT 10.0 Crew."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

