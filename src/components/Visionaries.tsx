import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Globe, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Speaker {
  name: string;
  role: string;
  company: string;
  initial: string;
  image?: string;
}

const fullSpeakers: Speaker[] = [
  { name: "Urvashi Singhal", role: "AI Architect", company: "Neuralink", initial: "US" },
  { name: "Rudransh Kandpal", role: "UX Director", company: "Meta", initial: "RK" },
  { name: "Aarav Tuteja", role: "Cyber Security", company: "Palantir", initial: "AT" },
  { name: "Ishika Mittal", role: "Quantum Dev", company: "IBM", initial: "IM" },
  { name: "Sheza Khan", role: "Robotics", company: "Boston Dynamics", initial: "SK" },
  { name: "Prajanay Chandra", role: "FinTech", company: "Stripe", initial: "PC" },
  { name: "Granth Shandilya", role: "AR Designer", company: "Apple", initial: "GS" }
];

const initialSpeakers = fullSpeakers.slice(0, 4);

export default function Visionaries() {
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
    gsap.set(logoRef.current, { opacity: 0, scale: 0.5 });
    gsap.set(backgroundGlowRef.current, { opacity: 0, scale: 0.5 });

    // Helper to calculate the distance from a target's natural position to the logo's center
    const getDistanceToCenter = (target: HTMLElement) => {
      if (!logoRef.current) return { x: 0, y: 0 };
      
      const currentT = target.style.transform;
      target.style.transform = 'none';
      const logoT = logoRef.current.style.transform;
      logoRef.current.style.transform = 'none';

      const lRect = logoRef.current.getBoundingClientRect();
      const tRect = target.getBoundingClientRect();
      
      target.style.transform = currentT;
      logoRef.current.style.transform = logoT;

      return {
        x: (lRect.left + lRect.width / 2) - (tRect.left + tRect.width / 2),
        y: (lRect.top + lRect.height / 2) - (tRect.top + tRect.height / 2)
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
    // Logo zooms past camera and fades out
    tl.to(logoRef.current, {
      scale: 30, // massive zoom
      opacity: 0,
      ease: 'power3.in',
      duration: 1.5
    }, 1.5);
    
    // Background glow intensifies
    tl.to(backgroundGlowRef.current, {
      opacity: 1,
      scale: 3,
      ease: 'power2.in',
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
        className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-cyber-black flex flex-col justify-center py-20"
      >
        {/* Ambient Glow */}
        <div 
          ref={backgroundGlowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-neon-cyan/20 blur-[100px] rounded-full opacity-0 pointer-events-none"
        />

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
                style={{ willChange: 'transform, opacity' }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-[24px] border border-white/5 text-center transition-shadow duration-300 pointer-events-auto shadow-[0_0_15px_rgba(0,0,0,0.5)]"
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
                <p className="text-sm text-neon-cyan/70 mb-4 font-mono">{speaker.role} <span className="text-white/40 block md:inline mt-1 md:mt-0">@ {speaker.company}</span></p>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 flex flex-wrap justify-center gap-4 md:gap-6 pointer-events-none">
            {fullSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                ref={(el) => { fullCardsRef.current[i] = el; }}
                style={{ willChange: 'transform, opacity' }}
                className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.2rem)] bg-cyber-black/80 backdrop-blur-md p-4 md:p-6 rounded-[24px] border border-neon-cyan/20 text-center shadow-[0_0_15px_rgba(0,255,255,0.1)] pointer-events-auto hover:border-neon-cyan transition-colors"
              >
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-neon-cyan/10 to-purple-900/40 border border-neon-cyan/30 mx-auto mb-4 flex items-center justify-center text-xl font-display font-black text-neon-cyan relative shadow-inner">
                   {speaker.initial}
                 </div>
                 <h3 className="text-sm md:text-lg font-bold mb-1 text-white truncate">{speaker.name}</h3>
                 <p className="text-[10px] md:text-xs text-neon-cyan/70 font-mono truncate">{speaker.role}</p>
                 <p className="text-[10px] text-white/40 truncate mt-1">{speaker.company}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
