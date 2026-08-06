import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Mail, Phone, Globe, Trophy, Instagram, Youtube, X } from 'lucide-react';
import Navbar from './components/Navbar';
import { Suspense, lazy } from 'react';
const Hero3D = lazy(() => import('./components/Hero3D'));
const BentoGrid = lazy(() => import('./components/BentoGrid'));
import Countdown from './components/Countdown';
import CountdownHero from './components/CountdownHero';
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

const TypewriterText = ({ text, className = "", delay = 0 }: { text: string, className?: string, delay?: number }) => (
  <motion.span
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { delay, staggerChildren: 0.04 } 
      }
    }}
    className={className}
  >
    {text.split('').map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
        }}
        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<{event: EventItem, categoryAccent: string} | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);


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
        
        <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start lg:col-span-7 xl:col-span-8"
          >
            {/* Date Tag */}
            <div className="border border-neon-cyan px-5 py-2 mb-6 inline-flex items-center justify-center whitespace-nowrap">
              <span className="text-sm md:text-base font-sans font-bold tracking-[0.2em] text-neon-cyan uppercase mt-0.5">
                21ST AUGUST 2026
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-display font-black leading-[0.85] tracking-tighter text-white mb-2 relative whitespace-nowrap">
              DIGIT <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">10.0</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-sans font-bold tracking-[0.6em] text-neon-cyan mb-4 uppercase">
              TECH EVENT
            </h2>
            
            {/* Description */}
            <div className="max-w-xl pr-4 lg:pr-12 text-ice-blue text-sm md:text-base leading-relaxed mb-8 font-sans flex flex-col gap-3">
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
          
          {/* Right side is handled by Hero3D (absolute positioned container) */}
          <div className="hidden lg:block relative h-[500px] pointer-events-none lg:col-span-5 xl:col-span-4">
            {/* This space is visually filled by the absolute Hero3D component */}
            <div className="absolute bottom-0 right-0 w-full h-full border-b border-r border-neon-cyan/20 pointer-events-none">
               <div className="hud-corner -bottom-1 -right-1" />
            </div>
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


      {/* Countdown Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}} className="text-3xl md:text-5xl font-display font-black mb-12">T-MINUS to DIGIT</motion.h2>
          <Countdown />
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
              <TypewriterText text="© 2026 DIGIT 10.0. SIMULATION RUNNING." delay={0.2} />
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-ice-blue cursor-default hover:text-white transition-colors duration-300">
                <TypewriterText text="INITIALIZED WITH " delay={1.4} />
                <motion.span 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2, type: "spring" }}
                  className="text-neon-magenta animate-pulse drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] mx-1 text-sm"
                >
                  ⚡
                </motion.span>
                <TypewriterText text=" AND COFFEE BY DIGIT TEAM" delay={2.4} />
              </div>
              <div className="text-[11px] uppercase tracking-[0.4em] font-black text-neon-cyan/80 cursor-default border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2 rounded-full hover:bg-neon-cyan/10 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group">
                <TypewriterText text="DESIGNED BY RUDRANSH KANDPAL" delay={3.4} className="group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
