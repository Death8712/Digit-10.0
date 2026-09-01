import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Mail, Phone, Globe, Trophy, Instagram, Youtube, X } from 'lucide-react';
import Navbar from './components/Navbar';
import { Suspense, lazy } from 'react';
const Hero3D = lazy(() => import('./components/Hero3D'));
const BentoGrid = lazy(() => import('./components/BentoGrid'));
import CustomCursor from './components/CustomCursor';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import { categories, EventItem } from './data/events';
const EventResults = lazy(() => import('./components/EventResults'));
import RegistrationForm from './components/RegistrationForm';
const InterschoolSpecial = lazy(() => import('./components/InterschoolSpecial'));
const Visionaries = lazy(() => import('./components/Visionaries'));
const Gallery = lazy(() => import('./components/Gallery'));
const ContactUs = lazy(() => import('./components/ContactUs'));
import StarryBackground from './components/StarryBackground';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Skip Lenis smooth-scroll on touch/mobile devices for native 60fps scrolling
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || window.innerWidth < 768;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    // Synchronize Lenis with GSAP ScrollTrigger for hitch-free scrubbing
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<{event: EventItem, categoryAccent: string} | null>(null);

  return (
    <div className="relative min-h-screen bg-cyber-black bg-blobs selection:bg-neon-cyan/30">
      <StarryBackground />
      <CustomCursor />
      <Navbar />
      <EventModal 
        isOpen={!!selectedTimelineEvent} 
        onClose={() => setSelectedTimelineEvent(null)} 
        event={selectedTimelineEvent?.event || null}
        categoryAccent={selectedTimelineEvent?.categoryAccent || 'from-neon-cyan/20 to-transparent'}
      />
      
      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-[100dvh] flex items-center pt-32 pb-16 overflow-hidden bg-grid">
        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-ice-blue font-mono text-sm animate-pulse">Initializing 3D Environment...</div>}><Hero3D /></Suspense>
        
        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
          {/* Header Title Block */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start mb-6"
          >
            {/* Date Tag */}
            <div className="border border-neon-cyan px-5 py-2 mb-5 inline-flex items-center justify-center whitespace-nowrap">
              <span className="text-sm md:text-base font-sans font-bold tracking-[0.2em] text-neon-cyan uppercase mt-0.5">
                21ST AUGUST 2026
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-display font-black leading-[0.85] tracking-tighter text-white mb-2 relative whitespace-nowrap">
              DIGIT <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">10.0</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-sans font-bold tracking-[0.6em] text-neon-cyan mb-2 uppercase">
              TECH EVENT
            </h2>
          </motion.div>

          {/* Main Content Grid: Description & Stats on Left, Emblem to the Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col items-start lg:col-span-7 xl:col-span-7"
            >
              {/* Description */}
              <div className="text-ice-blue text-sm md:text-base leading-relaxed mb-8 font-sans max-w-2xl">
                <p className="text-justify">
                  DIGIT began in 2012 with a simple vision: to provide every student with an equal opportunity to explore and participate in technology. Initially organised for Classes IX to XII, the event continued to grow over the years. During the COVID period, DIGIT expanded to include students from III to XII, making technology more accessible across the school. Now, as we celebrate the landmark 10th edition, DIGIT takes another major step by opening its platform to schools across the region. DIGIT 10.0 brings together young innovators to compete, collaborate, showcase their talent, gain knowledge, and connect through a shared passion for technology.
                </p>
              </div>
              
              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-8 mb-8">
                {[
                  { value: "100+", label: "PARTICIPANTS" },
                  { value: "10+", label: "EVENTS" },
                  { value: "12+ HR", label: "DURATION" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-neon-cyan/20 pl-4">
                    <span className="text-3xl font-display font-black text-white">{stat.value}</span>
                    <span className="text-xs font-sans font-bold tracking-[0.1em] text-ice-blue uppercase mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Container */}
              <div className="flex flex-wrap items-center gap-6 relative z-50">
                <a 
                  href="#events"
                  className="px-10 py-4 bg-transparent border border-neon-cyan text-neon-cyan font-sans font-bold uppercase tracking-[0.2em] text-sm hover:bg-neon-cyan hover:text-cyber-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.4),inset_0_0_10px_rgba(0,255,255,0.2)] inline-flex items-center gap-2 group"
                >
                  EXPLORE EVENTS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            {/* Right side Glowing DIGIT Logo Showcase */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex items-center justify-center lg:col-span-5 xl:col-span-5 w-full relative"
            >
              {/* Holographic Glowing Frame Container */}
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px] xl:max-w-[480px] aspect-square flex items-center justify-center group">
                
                {/* Radial Ambient Backlight Aura */}
                <div className="absolute inset-0 rounded-full bg-neon-cyan/25 blur-[90px] animate-pulse pointer-events-none" />
                <div className="absolute inset-6 rounded-full bg-neon-purple/30 blur-[70px] pointer-events-none" />

                {/* Cyber Orbital Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-neon-cyan/40 animate-[spin_30s_linear_infinite] pointer-events-none" />
                <div className="absolute inset-6 rounded-full border-2 border-neon-cyan/25 border-t-neon-cyan/90 border-b-neon-purple/80 animate-[spin_18s_linear_infinite_reverse] pointer-events-none" />
                <div className="absolute inset-14 rounded-full border border-white/15 animate-[spin_40s_linear_infinite] pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_15px_#00F0FF]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_15px_#B026FF]" />
                </div>

                {/* High-Tech HUD Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan pointer-events-none" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan pointer-events-none" />

                {/* Floating Glowing DIGIT Logo */}
                <motion.div 
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-[82%] h-[82%] flex items-center justify-center p-2"
                >
                  <img 
                    src="/digit-logo.png" 
                    alt="DIGIT 10.0 Emblem" 
                    className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(0,240,255,0.95)] drop-shadow-[0_0_50px_rgba(176,38,255,0.6)] group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* HUD Status Badge */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1222]/95 border border-neon-cyan/50 shadow-[0_0_20px_rgba(0,255,255,0.4)] backdrop-blur-md pointer-events-none whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-neon-cyan tracking-widest uppercase">
                    DIGIT 10.0 // OFFICIAL EMBLEM
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* HUD Elements Overlay */}
        <div className="absolute inset-x-0 bottom-0 py-12 px-6 flex justify-between items-end pointer-events-none">
           <div className="flex flex-col gap-2">
             <div className="w-12 h-[1px] bg-neon-cyan/30" />
             <div className="w-8 h-[1px] bg-neon-cyan/30" />
           </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-20 relative z-10 bg-white/[0.02]">
        <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">A Decade of Innovation</h2>
          <p className="text-ice-blue max-w-2xl mx-auto">Explore the evolution of DIGIT from its humble beginnings to the global phenomenon it is today.</p>
        </motion.div>
        <Timeline />
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}}>
            <span className="text-neon-cyan font-black uppercase tracking-widest text-xs mb-4 block">The Main Stage</span>
            <h2 className="text-4xl md:text-6xl font-display font-black">Intra-School Events</h2>
          </motion.div>
          <motion.p initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="max-w-md text-ice-blue font-display font-medium text-sm tracking-widest uppercase leading-relaxed">
            Master the logic. Own the canvas. Claim the throne. High-stakes challenges for those who refuse to play it safe.
          </motion.p>
        </div>
        <Suspense fallback={<div className="py-20 text-center text-ice-blue font-mono text-sm animate-pulse">Loading component...</div>}><BentoGrid /></Suspense>
      </section>

      <Suspense fallback={<div className="py-20 text-center text-ice-blue font-mono text-sm animate-pulse">Loading component...</div>}><InterschoolSpecial /></Suspense>

      {/* Speakers Section */}
      <Suspense fallback={<div className="py-20 text-center text-ice-blue font-mono text-sm animate-pulse">Loading component...</div>}><Visionaries /></Suspense>

      {/* Registration Section */}
      <RegistrationForm />

            {/* Gallery Section */}
      <Suspense fallback={<div className="py-20 text-center text-ice-blue font-mono text-sm animate-pulse">Loading component...</div>}><Gallery /></Suspense>

      {/* Results Section */}
      <Suspense fallback={<div className="py-20 text-center text-ice-blue font-mono text-sm animate-pulse">Loading component...</div>}><EventResults /></Suspense>
      {/* Contact Us Section */}
      <Suspense fallback={<div className="py-20 text-center text-ice-blue font-mono text-sm animate-pulse">Loading component...</div>}><ContactUs /></Suspense>

      {/* School Logo Section */}
      <section className="py-20 relative z-10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-8"
          >
            <h3 className="text-ice-blue font-mono text-sm tracking-widest uppercase">In Association With</h3>
            <a 
              href="http://ahlconinternational.com/public/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <img 
                src="/school-logo.png" 
                alt="Ahlcon International School" 
                className="w-48 md:w-64 lg:w-80 object-contain mix-blend-screen opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />
            </a>
          </motion.div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="py-20 border-t border-[rgba(0,240,255,0.18)] relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-neon-cyan rounded-xl flex items-center justify-center font-display font-black text-cyber-black text-xl">D</div>
                <span className="font-display font-black tracking-tighter text-2xl">DIGIT <span className="text-neon-cyan">10.0</span></span>
              </div>
              <p className="text-ice-blue max-w-sm mb-8 leading-relaxed">
                The premier technology festival pushing the boundaries of human potential and digital innovation since 2012.
              </p>
              <div className="flex gap-4">
                <a href="mailto:aisdigit10@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-ice-blue hover:text-neon-cyan transition-all hover:-translate-y-1 cursor-pointer">
                  <Mail size={18} />
                </a>
                <a href="https://www.instagram.com/digitahlcon10.0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-ice-blue hover:text-neon-cyan transition-all hover:-translate-y-1 cursor-pointer">
                  <Instagram size={18} />
                </a>
                <a href="https://www.youtube.com/@DIGIT10.0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-ice-blue hover:text-neon-cyan transition-all hover:-translate-y-1 cursor-pointer">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
            
            {/* Playful Terminal / Console Section */}
            <div className="col-span-1 md:col-span-2 border border-neon-cyan/20 bg-black/40 p-4 rounded-xl relative overflow-hidden font-mono flex flex-col group">
              <div className="absolute top-0 left-0 w-full h-8 bg-neon-cyan/10 border-b border-neon-cyan/20 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_5px_red]"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80 shadow-[0_0_5px_yellow]"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_5px_green]"></div>
                <span className="text-[10px] text-ice-blue tracking-widest uppercase ml-2 select-none">sys_admin@digit_10.0:~</span>
              </div>
              <div className="pt-10 flex-1 flex flex-col gap-2 text-xs md:text-sm text-neon-cyan/80 select-none">
                <p className="flex items-center gap-2"><span className="text-neon-magenta">{'>'}</span> system_check --all</p>
                <p className="flex items-center gap-2 text-ice-blue ml-4">[OK] Neural network synced.</p>
                <p className="flex items-center gap-2 text-ice-blue ml-4">[OK] Speakers compiled.</p>
                <p className="flex items-center gap-2 text-ice-blue ml-4">[WARN] Coffee reservoir dangerously low.</p>
                <p className="flex items-center gap-2 mt-2"><span className="text-neon-magenta">{'>'}</span> execute command: hype_mode --force</p>
                <p className="flex items-center gap-2 text-neon-cyan mt-auto">
                   <span className="text-neon-magenta animate-pulse">{'>'}</span> <span className="animate-pulse">_</span>
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-[rgba(0,240,255,0.18)]">
            <div className="text-[10px] uppercase tracking-[0.3em] font-black text-ice-blue hover:text-neon-cyan transition-colors cursor-default hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]">
              © 2026 DIGIT 10.0. SIMULATION RUNNING.
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-ice-blue cursor-default hover:text-white transition-colors duration-300">
                <span>INITIALIZED WITH</span>
                <span className="text-neon-magenta animate-pulse drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] mx-1 text-sm">
                  ⚡
                </span>
                <span>AND COFFEE BY DIGIT TEAM</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.4em] font-black text-neon-cyan/80 cursor-default border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group">
                <span className="group-hover:text-white transition-colors duration-300">DESIGNED BY RUDRANSH KANDPAL</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
