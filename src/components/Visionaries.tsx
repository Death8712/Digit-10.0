import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Globe, Mail, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import StarryBackground from './StarryBackground';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Speaker {
  name: string;
  role: string;
  company: string;
  initial: string;
  image?: string;
  bio?: string;
  imagePosition?: string;
}

const fullSpeakers: Speaker[] = [
  { name: "Ms Urvashi Singhal", role: "HOD Computer Science", company: "Digit Crew", initial: "US", image: "/Ms Uravshi Singhal.jpg", bio: "Leads the computer science department, guiding the team and mentoring students in technology." },
  { name: "Ms Nitika Wadhwa", role: "TGT Computer", company: "Digit Crew", initial: "NW", image: "/Ms Nitika Wadhwa.jpg", imagePosition: "center top", bio: "Teaches coding foundations to students, making classroom learning technical and engaging." },
  { name: "Ms Deepti Chopra", role: "TGT Computer", company: "Digit Crew", initial: "DC", image: "/Ms Deepti Chopra.png", bio: "Guides students through computing concepts with patience and mentorship, inspiring their interest in technology." },
  { name: "Ms Garima Mehra", role: "PRT Computer", company: "Digit Crew", initial: "GM", image: "/Ms Garima Mehra.png", bio: "Introduces young students to the basics of computers and digital literacy, building their tech skills early." },
  { name: "Rudransh Kandpal", role: "President", company: "Digit Crew", initial: "RK", image: "/Rudransh Kandpal.jpg", bio: "Leads the team, plans strategies, and makes sure everyone works together to achieve our goals." },
  { name: "Ishika Mittal", role: "Vice President", company: "Digit Crew", initial: "IM", image: "/Ishika Mittal.jpg", bio: "Supports the President in managing team operations, solving problems, and keeping the team organized." },
  { name: "Prajanay Chandra", role: "Video Director", company: "Digit Crew", initial: "PC", image: "/Prajanay Chandra.jpg", bio: "Creates and directs videos, making sure our digital content looks great." },
  { name: "Granth Shandilya", role: "Cinematic Visionary", company: "Digit Crew", initial: "GS", image: "/Granth.jpg", bio: "Captures the team's work on camera and turns ideas into amazing visual stories." },
  { name: "Sheza Khan", role: "Content Director", company: "Digit Crew", initial: "SK", image: "/Sheza Khan.jpg", bio: "Manages our content and information, keeping everything well-organized and running smoothly." },
  { name: "Aarav Tuteja", role: "Social Media Manager", company: "Digit Crew", initial: "AT", image: "/Aarav Tuteja.jpg", bio: "Handles our online presence by creating posts and strategies to grow our social media accounts." },
  { name: "Divyansh Rathore", role: "Event Head", company: "Digit Crew", initial: "DR", image: "/Divyansh Rathore.jpg", bio: "Manages event plans and coordinates logistics so everything runs smoothly on the day of the event." },
  { name: "Vivaan Tripathi", role: "Event Head", company: "Digit Crew", initial: "VT", image: "", bio: "Creates challenges and manages the technical parts of the events for the participants." },
  { name: "Hanisha Nagi", role: "Event Head", company: "Digit Crew", initial: "HN", image: "/Hanisha Nagi.jpg", bio: "Brings energy to the team and helps organize great events in a fast-paced environment." },
  { name: "Aaradhya Yadav", role: "Event Head", company: "Digit Crew", initial: "AY", image: "/Aaradhya Yadav.jpg", bio: "Keeps track of details, schedules, and logistics to make sure complex events go as planned." },
  { name: "Navya Ahuja", role: "Event Head", company: "Digit Crew", initial: "NA", image: "/Navya Ahuja.jpg", bio: "Helps plan and organize events with creativity and structure to create memorable experiences." },
  { name: "Ananya Gahlot", role: "Event Head", company: "Digit Crew", initial: "AG", image: "/Ananya Gahlot.jpg", bio: "Coordinates people and resources to turn event ideas into successful live events." }
];

const initialSpeakers = fullSpeakers.slice(0, 4);

export default function Visionaries() {
  const [activeSpeaker, setActiveSpeaker] = React.useState<Speaker | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const fullCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const backgroundGlowRef = useRef<HTMLDivElement>(null);
  const gridWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !stickyRef.current || !logoRef.current) return;

    // Set initial logo and glow state
    gsap.set(logoRef.current, { opacity: 0, scale: 0.5, xPercent: -50, yPercent: -50 });
    gsap.set(backgroundGlowRef.current, { opacity: 0, scale: 0.5, xPercent: -50, yPercent: -50 });

    // Helper to calculate the distance from a target's natural position to the logo's center
    const getDistanceToCenter = (target: HTMLElement) => {
      const currentT = target.style.transform;
      target.style.transform = 'none';

      const tRect = target.getBoundingClientRect();
      target.style.transform = currentT;

      return {
        x: window.innerWidth / 2 - (tRect.left + tRect.width / 2),
        y: window.innerHeight / 2 - (tRect.top + tRect.height / 2)
      };
    };

    // Create GSAP Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Tighter scrubbing so it feels less viscous but still smooth
        invalidateOnRefresh: true,
      }
    });

    // --- PHASE 1 ---
    // Intro cards collapse to center
    cardsRef.current.forEach((card) => {
      if (!card) return;
      tl.to(card, {
        x: () => getDistanceToCenter(card).x,
        y: () => getDistanceToCenter(card).y,
        scale: 0.2,
        opacity: 0,
        ease: 'power2.inOut',
        duration: 1,
        force3D: true
      }, 0);
    });

    // Fade out title
    tl.to(titleRef.current, {
      opacity: 0,
      y: -20,
      ease: 'power2.inOut',
      duration: 0.5,
      force3D: true
    }, 0);

    // Animate Logo: scale up to 1 and fade in
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      ease: 'power2.inOut',
      duration: 1,
      force3D: true
    }, 0.2);

    // --- PHASE 2 ---
    // Background glow intensifies
    tl.to(backgroundGlowRef.current, {
      opacity: 1,
      scale: 3,
      ease: 'power2.in',
      duration: 1.5,
      force3D: true
    }, 1.5);
    
    // Logo zooms past camera and fades out
    tl.to(logoRef.current, {
      scale: 30, // massive zoom
      opacity: 0,
      ease: 'power3.in',
      duration: 1.5,
      force3D: true
    }, 1.5);
    
    // --- PHASE 3 ---
    // Extract full cards from the center (starting at the center, scaling up to natural pos)
    fullCardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      // Calculate stagger based on distance from center of grid
      const col = index % 4;
      const row = Math.floor(index / 4);
      const dist = Math.sqrt(Math.pow(row - 0.5, 2) + Math.pow(col - 1.5, 2));
      
      tl.fromTo(card,
        {
          x: () => getDistanceToCenter(card).x,
          y: () => getDistanceToCenter(card).y,
          scale: 0,
          opacity: 0,
          force3D: true
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'power2.out', // smoother, less snappy
          duration: 1.5,
          force3D: true
        },
        2.0 + (dist * 0.1) // Stagger outward from center
      );
    });

    // --- PHASE 4: Grid Auto Scroll ---
    // Smoothly scroll the entire grid upward as the user scrolls down the page
    if (gridWrapperRef.current) {
      tl.to(gridWrapperRef.current, {
        y: () => {
          const wrapperHeight = gridWrapperRef.current?.scrollHeight || 0;
          const containerHeight = gridWrapperRef.current?.parentElement?.clientHeight || 0;
          // Calculate needed scroll distance to show everything (plus some bottom padding)
          const scrollDistance = Math.max(0, wrapperHeight - containerHeight + 80);
          return -scrollDistance;
        },
        ease: 'none', // linear scroll feels more like native scrolling
        duration: 8, // Give plenty of scrolling duration for the increased length
        force3D: true
      }, 3.5); // Starts right when cards finish exploding so it's one seamless motion
    }

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="visionaries" 
      className="relative z-10 w-full"
      style={{ height: '600vh' }}
    >
      <div 
        ref={stickyRef} 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-transparent flex flex-col justify-start py-6 md:py-10"
      >


        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col relative z-10">
          
          <div ref={titleRef} className="mb-4 md:mb-6">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-2 font-['Orbitron',sans-serif]">Our Team</h2>
            <p className="text-white/40 font-sans text-sm md:text-base">Meet the minds behind Digit Crew.</p>
          </div>
          
          {/* 4 Initial Cards - Phase 1 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pointer-events-none">
            {initialSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                ref={(el) => { cardsRef.current[i] = el; }}
                onClick={() => setActiveSpeaker(speaker)}
                style={{ willChange: 'transform, opacity' }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[24px] border border-white/5 text-center transition-shadow duration-300 pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-purple-900 mx-auto mb-6 flex items-center justify-center text-2xl font-display font-black text-white overflow-hidden relative shadow-inner shadow-black/50">
                  {speaker.image ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover" style={{ objectPosition: speaker.imagePosition || 'center' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
                      }}
                    />
                  ) : (
                    speaker.initial
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{speaker.name}</h3>
                <p className="text-sm font-bold text-neon-cyan mb-4 font-mono uppercase tracking-wider drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]">{speaker.role}</p>
                <div className="flex justify-center gap-4 mt-auto">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-cyan hover:bg-neon-cyan/10 transition-colors cursor-pointer border border-white/5">
                    <Globe size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-neon-magenta hover:bg-neon-magenta/10 transition-colors cursor-pointer border border-white/5">
                    <Mail size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ambient Glow */}
          <div 
            ref={backgroundGlowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-neon-cyan/20 blur-[100px] rounded-full opacity-0 pointer-events-none"
          />

          {/* Logo Placeholder - Scales and expands */}
          <div 
            ref={logoRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64 flex items-center justify-center pointer-events-none"
            style={{ willChange: 'transform, opacity' }}
          >
            <img 
              src="/digit-logo.png" 
              alt="Digit Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,242,255,0.8)]" 
            />
          </div>

          {/* 15 Full Cards - Phase 2 Explosion in a highly responsive centered grid */}
          <div className="flex-1 w-full flex items-start justify-center relative min-h-0 overflow-hidden h-[62vh] md:h-[70vh] pt-4">
            <div 
              ref={gridWrapperRef}
              className="w-full max-w-5xl px-2 md:px-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pointer-events-auto relative"
              style={{ willChange: 'transform' }}
            >
              {fullSpeakers.map((speaker, i) => (
                <div
                  key={speaker.name}
                  ref={(el) => { fullCardsRef.current[i] = el; }}
                  onClick={() => setActiveSpeaker(speaker)}
                  style={{ willChange: 'transform, opacity' }}
                  className="bg-cyber-black/80 backdrop-blur-md py-4 px-3 md:py-5 md:px-4 rounded-[20px] md:rounded-[24px] border border-neon-cyan/20 text-center shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:border-neon-cyan transition-colors cursor-pointer w-full flex flex-col justify-center items-center relative overflow-hidden min-h-[150px] md:min-h-[170px]"
                >
                   <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full bg-gradient-to-br from-neon-cyan/10 to-purple-900/40 border border-neon-cyan/30 mx-auto mb-2 md:mb-3 flex items-center justify-center text-lg font-display font-black text-neon-cyan relative shadow-inner overflow-hidden shrink-0">
                     {speaker.image ? (
                       <img 
                         src={speaker.image} 
                         alt={speaker.name} 
                         className="w-full h-full object-cover" style={{ objectPosition: speaker.imagePosition || 'center' }}
                         onError={(e) => {
                           (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
                         }}
                       />
                     ) : (
                       speaker.initial
                     )}
                   </div>
                   <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white truncate max-w-full">{speaker.name}</h3>
                   
                   <p className="text-[9px] sm:text-[11px] font-black text-neon-cyan truncate mt-1 max-w-full tracking-wider uppercase drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]">{speaker.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Modal Popup */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {activeSpeaker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSpeaker(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto custom-scrollbar bg-cyber-black border rounded-3xl border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.15)] flex flex-col"
            >
              <button
                onClick={() => setActiveSpeaker(null)}
                className="absolute z-10 p-2 text-white/50 transition-colors bg-black/50 rounded-full top-4 right-4 hover:text-white hover:bg-black/80 backdrop-blur-md cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-64 md:h-80 bg-cyber-black/40 flex items-center justify-center overflow-hidden">
                {activeSpeaker.image ? (
                  <img
                    src={activeSpeaker.image}
                    alt={activeSpeaker.name}
                    className="object-contain max-h-full max-w-full relative z-10" style={{ objectPosition: activeSpeaker.imagePosition || 'center' }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-6xl font-black text-neon-cyan/50 font-display">
                    {activeSpeaker.initial}
                  </div>
                )}
                {/* Soft, professional, delicate side fades to blend edges without adding hazy coloring over faces */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-cyber-black to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-cyber-black to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-cyber-black to-transparent z-20 pointer-events-none" />
              </div>

              <div className="relative px-8 pt-4 pb-10 text-center md:px-10">
                <h3 className="mb-1 text-3xl font-black text-white font-display">
                  {activeSpeaker.name}
                </h3>
                <p className="mb-6 font-mono text-sm text-neon-cyan">
                  <span className="font-bold uppercase tracking-wider drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]">{activeSpeaker.role}</span>
                </p>
                
                <div className="w-12 h-1 mx-auto mb-6 rounded-full bg-neon-cyan/30" />
                
                <p className="leading-relaxed text-white/70">
                  {activeSpeaker.bio || "No biography available."}
                </p>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
