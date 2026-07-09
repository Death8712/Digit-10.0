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
}

const fullSpeakers: Speaker[] = [
  { name: "Urvashi Singhal", role: "HOD Computer Science & Our Mentor", company: "Digit Crew", initial: "US", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", bio: "A visionary mentor guiding the next generation of tech leaders with over two decades of industry experience." },
  { name: "Ms Nitika Wadhwa", role: "TGT Computer", company: "Digit Crew", initial: "NW", bio: "An inspiring educator fostering technical brilliance in young minds." },
  { name: "Ms Deepti Chopra", role: "TGT Computer", company: "Digit Crew", initial: "DC", bio: "A dedicated mentor shaping the foundational coding skills of students." },
  { name: "Ms Garima Mehra", role: "PRT Computer", company: "Digit Crew", initial: "GM", bio: "A passionate teacher introducing creative tech concepts to beginners." },
  { name: "Rudransh Kandpal", role: "President", company: "Digit Crew", initial: "RK", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800", bio: "A technical innovator who excels at building and maintaining the event’s central digital hub." },
  { name: "Aarav Tuteja", role: "Vice President", company: "Digit Crew", initial: "AT", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800", bio: "An artistic leader who brings creative precision to both visual design and event operations." },
  { name: "Ishika Mittal", role: "Graphic Designer", company: "Digit Crew", initial: "IM", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800", bio: "A versatile director who masterfully balances digital branding, design aesthetics, and event management." },
  { name: "Sheza Khan", role: "Creative Head", company: "Digit Crew", initial: "SK", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800", bio: "A meticulous coordinator who ensures data accuracy and oversees complex coding competitions." },
  { name: "Prajanaya Chandra", role: "Video Director", company: "Digit Crew", initial: "PC", image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=800", bio: "A cinematic expert dedicated to crafting engaging trailers and promotional storytelling." },
  { name: "Granth Shandilya", role: "Video Director", company: "Digit Crew", initial: "GS", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=800", bio: "A creative visionary who specializes in producing high-impact video content and teasers." }
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
        scrub: 1, // Smooth scrubbing
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
        duration: 1
      }, 0);
    });

    // Fade out title
    tl.to(titleRef.current, {
      opacity: 0,
      y: -20,
      ease: 'power2.inOut',
      duration: 0.5
    }, 0);

    // Animate Logo: scale up to 1 and fade in
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      ease: 'power2.inOut',
      duration: 1
    }, 0.2);

    // --- PHASE 2 ---
    // Background glow intensifies
    tl.to(backgroundGlowRef.current, {
      opacity: 1,
      scale: 3,
      ease: 'power2.in',
      duration: 1.5
    }, 1.5);
    
    // Logo zooms past camera and fades out
    tl.to(logoRef.current, {
      scale: 30, // massive zoom
      opacity: 0,
      ease: 'power3.in',
      duration: 1.5
    }, 1.5);
    
    // --- PHASE 3 ---
    // Extract full cards from the center (starting at the center, scaling up to natural pos)
    fullCardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      // Calculate stagger based on distance from center of grid
      const col = index % 5;
      const row = Math.floor(index / 5);
      const dist = Math.sqrt(Math.pow(row - 0.5, 2) + Math.pow(col - 2, 2));
      
      tl.fromTo(card,
        {
          x: () => getDistanceToCenter(card).x,
          y: () => getDistanceToCenter(card).y,
          scale: 0,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'power4.out', // elastic feel
          duration: 1.5,
        },
        2.0 + (dist * 0.1) // Stagger outward from center
      );
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      id="visionaries" 
      className="relative z-10 w-full"
      style={{ height: '500vh' }}
    >
      <div 
        ref={stickyRef} 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-transparent flex flex-col justify-center py-20"
      >


        <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col relative z-10">
          
          <div ref={titleRef} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4 font-['Orbitron',sans-serif]">Visionaries</h2>
            <p className="text-white/40 font-sans">Learn from the pioneers of the digital age.</p>
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
                      className="w-full h-full object-cover mix-blend-screen p-1"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
                      }}
                    />
                  ) : (
                    speaker.initial
                  )}
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{speaker.name}</h3>
                <p className="text-sm text-white/40 mb-4 font-mono">{speaker.role}</p>
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

          {/* 7 Full Cards - Phase 2 Explosion */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-2 md:px-4 flex flex-wrap justify-center gap-2 md:gap-3 pointer-events-none">
            {fullSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                ref={(el) => { fullCardsRef.current[i] = el; }}
                onClick={() => setActiveSpeaker(speaker)}
                style={{ willChange: 'transform, opacity' }}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.5rem)] md:w-[calc(25%-0.75rem)] lg:w-[calc(20%-0.8rem)] bg-cyber-black/80 backdrop-blur-md p-3 md:p-4 rounded-[16px] md:rounded-[20px] border border-neon-cyan/20 text-center shadow-[0_0_15px_rgba(0,255,255,0.1)] pointer-events-auto hover:border-neon-cyan transition-colors cursor-pointer"
              >
                 <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-neon-cyan/10 to-purple-900/40 border border-neon-cyan/30 mx-auto mb-2 md:mb-3 flex items-center justify-center text-lg font-display font-black text-neon-cyan relative shadow-inner overflow-hidden">
                   {speaker.image ? (
                     <img 
                       src={speaker.image} 
                       alt={speaker.name} 
                       className="w-full h-full object-cover mix-blend-screen p-[2px]"
                       onError={(e) => {
                         (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300';
                       }}
                     />
                   ) : (
                     speaker.initial
                   )}
                 </div>
                 <h3 className="text-sm md:text-lg font-bold mb-1 text-white truncate">{speaker.name}</h3>
                 
                 <p className="text-[10px] text-white/40 truncate mt-1">{speaker.role}</p>
              </div>
            ))}
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
              
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-neon-cyan/20 to-purple-900/20">
                {activeSpeaker.image ? (
                  <img
                    src={activeSpeaker.image}
                    alt={activeSpeaker.name}
                    className="object-cover w-full h-full mix-blend-screen opacity-50"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-6xl font-black text-neon-cyan/50 font-display">
                    {activeSpeaker.initial}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent" />
              </div>

              <div className="relative px-8 pt-4 pb-10 -mt-12 text-center md:px-10">
                <h3 className="mb-1 text-3xl font-black text-white font-display">
                  {activeSpeaker.name}
                </h3>
                <p className="mb-6 font-mono text-sm text-neon-cyan">
                  <span className="text-white/40">{activeSpeaker.role}</span>
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
