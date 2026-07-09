import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Mail, Phone, Globe, Trophy } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import BentoGrid from './components/BentoGrid';
import Countdown from './components/Countdown';
import CountdownHero from './components/CountdownHero';
import CustomCursor from './components/CustomCursor';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import { categories, EventItem } from './data/events';
import Gallery from './components/Gallery';
import EventResults from './components/EventResults';
import RegistrationForm from './components/RegistrationForm';
import Visionaries from './components/Visionaries';
import StarryBackground from './components/StarryBackground';

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedTimelineEvent, setSelectedTimelineEvent] = useState<{event: EventItem, categoryAccent: string} | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
        <Hero3D />
        
        <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start lg:col-span-7 xl:col-span-8"
          >
            {/* Date Tag */}
            <div className="border border-neon-cyan px-4 py-1.5 mb-6 inline-block">
              <span className="text-sm font-sans font-bold tracking-[0.2em] text-neon-cyan uppercase">
                21 AUGUST 2026
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
            <div className="max-w-full text-white/80 text-sm md:text-base leading-relaxed mb-8 font-sans flex flex-col gap-3">
              <p className="font-bold text-white uppercase tracking-wider">WELCOME TO DIGIT 10.0</p>
              <p>
                AHLCON INTERNATIONAL SCHOOL proudly presents the 10th Edition of DIGIT. Get ready to dive into the energy and innovation of Digit 10.0, our annual tech fest that unites inquisitive minds, creative innovators, and future tech leaders. Whether you're passionate about coding, designing, or exploring the latest technology trends, Digit 10.0 has something exciting for everyone.
              </p>
              <p>
                Join us for a series of engaging events and thrilling competitions :- all crafted to challenge your skills and ignite your creativity. This is your opportunity to showcase your talent, discover new knowledge, and connect with a vibrant community that shares your enthusiasm for technology.
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
                  <span className="text-xs font-sans font-bold tracking-[0.1em] text-white/50 uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Container */}
            <div className="flex flex-wrap items-center gap-8">
              {/* CTA Button */}
              <button className="px-10 py-4 bg-transparent border border-neon-cyan text-neon-cyan font-sans font-bold uppercase tracking-[0.2em] text-sm hover:bg-neon-cyan hover:text-cyber-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.4),inset_0_0_10px_rgba(0,255,255,0.2)]">
                REGISTER NOW
              </button>
              
              {/* Secondary Link */}
              <a href="#events" className="text-white/70 hover:text-white font-sans font-medium text-sm tracking-widest uppercase transition-colors group flex items-center gap-2">
                Explore Events 
                <span className="text-neon-cyan group-hover:translate-x-1 transition-transform">&gt;</span>
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
          <h2 className="text-3xl md:text-5xl font-display font-black mb-12 reveal">T-MINUS to DIGIT</h2>
          <Countdown />
        </div>
      </section>

      {/* Trailer Video Section */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <span className="text-neon-cyan font-black uppercase tracking-widest text-xs mb-4 block">Sneak Peek</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">Official Trailer</h2>
          </div>
          <div className="relative mx-auto aspect-video w-full rounded-[24px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] reveal">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-purple-500/10 mix-blend-overlay pointer-events-none" />
            <video 
              className="w-full h-full object-cover bg-black"
              controls
              preload="none"
              poster="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80"
            >
              <source src="/trailer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="reveal-left">
            <span className="text-neon-cyan font-black uppercase tracking-widest text-xs mb-4 block">The Main Stage</span>
            <h2 className="text-4xl md:text-6xl font-display font-black">Signature Events</h2>
          </div>
          <p className="max-w-md text-white/80 font-display font-medium text-sm tracking-widest uppercase leading-relaxed reveal-right">
            Master the logic. Own the canvas. Claim the throne. High-stakes challenges for those who refuse to play it safe.
          </p>
        </div>
        <BentoGrid />
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 relative z-10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Event Timeline</h2>
            <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass p-8 md:p-12 rounded-[2rem] border-white/5 reveal">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-display font-black">Full Schedule</h3>
                <span className="text-neon-cyan font-black uppercase tracking-widest text-xs">Aug 21, 2026</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { time: "8:30AM - 9:30AM", event: "Opening Ceremony", type: "Main" },
                  { time: "9:30AM - 10:00AM", event: "DigiTote", type: "Class 9-12" },
                  { time: "10:00AM - 12:00PM", event: "DigiMagic", type: "Class 3" },
                  { time: "10:00AM - 12:00PM", event: "DigiPoster", type: "Class 4" },
                  { time: "10:00AM - 12:00PM", event: "DigiSlides", type: "Class 5" },
                  { time: "10:00AM - 12:00PM", event: "DigiTales", type: "Class 6" },
                  { time: "10:00AM - 12:00PM", event: "DigiFilm", type: "Class 7" },
                  { time: "10:00AM - 12:00PM", event: "DigiQuiz", type: "Class 8" },
                  { time: "10:00AM - 10:30AM", event: "DIGICT-AI", type: "Class 9-12" },
                  { time: "10:30AM - 11:30AM", event: "DigiBuild", type: "Class 9-12" },
                  { time: "11:30AM - 12:30PM", event: "DigiBattles Prelims", type: "Class 9-12" },
                  { time: "12:30PM - 1:00PM", event: "DigiBattles Finals", type: "Class 9-12" }
                ].map((item, i) => {
                  const matchingCategory = categories.find(cat => cat.events.some(e => e.title.toLowerCase() === item.event.toLowerCase() || item.event.toLowerCase().includes(e.title.toLowerCase())));
                  const matchingEvent = matchingCategory?.events.find(e => e.title.toLowerCase() === item.event.toLowerCase() || item.event.toLowerCase().includes(e.title.toLowerCase()));
                  const isClickable = !!matchingEvent;

                  return (
                  <div 
                    key={i} 
                    className={`flex gap-2 group ${isClickable ? 'cursor-pointer' : ''}`}
                    onClick={() => {
                      if (matchingEvent && matchingCategory) {
                        setSelectedTimelineEvent({
                          event: matchingEvent,
                          categoryAccent: matchingCategory.accentCode
                        });
                      }
                    }}
                  >
                    <div className="text-white/40 font-mono text-[11px] md:text-sm pt-1 w-36 shrink-0">{item.time}</div>
                    <div className="flex-1 pb-4 border-l border-white/10 pl-6 relative">
                      <div className="absolute top-2 -left-[5px] w-2 h-2 rounded-full bg-white/20 group-hover:bg-neon-cyan transition-colors" />
                      <h4 className="text-lg font-bold mb-1 group-hover:text-neon-cyan transition-colors">{item.event}</h4>
                      <span className="text-[10px] uppercase tracking-widest font-black text-white/20">{item.type}</span>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <Visionaries />

      {/* Legacy Section */}
      <section id="legacy" className="py-20 relative z-10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6">A Decade of Innovation</h2>
          <p className="text-white/40 max-w-2xl mx-auto">Explore the evolution of DIGIT from its humble beginnings to the global phenomenon it is today.</p>
        </div>
        <Timeline />
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Results Section */}
      <EventResults />

      {/* Registration Section */}
      <RegistrationForm />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-neon-cyan rounded-xl flex items-center justify-center font-display font-black text-cyber-black text-xl">D</div>
                <span className="font-display font-black tracking-tighter text-2xl">DIGIT <span className="text-neon-cyan">10.0</span></span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                The premier technology festival pushing the boundaries of human potential and digital innovation since 2012.
              </p>
              <div className="flex gap-4">
                {[Mail, Phone, Globe].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-neon-cyan transition-colors cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Playful Terminal / Console Section */}
            <div className="col-span-1 md:col-span-2 border border-neon-cyan/20 bg-black/40 p-4 rounded-xl relative overflow-hidden font-mono flex flex-col group">
              <div className="absolute top-0 left-0 w-full h-8 bg-neon-cyan/10 border-b border-neon-cyan/20 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_5px_red]"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/80 shadow-[0_0_5px_yellow]"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_5px_green]"></div>
                <span className="text-[10px] text-neon-cyan/50 tracking-widest uppercase ml-2 select-none">sys_admin@digit_10.0:~</span>
              </div>
              <div className="pt-10 flex-1 flex flex-col gap-2 text-xs md:text-sm text-neon-cyan/80 select-none">
                <p className="flex items-center gap-2"><span className="text-neon-magenta">{'>'}</span> system_check --all</p>
                <p className="flex items-center gap-2 text-white/70 ml-4">[OK] Neural network synced.</p>
                <p className="flex items-center gap-2 text-white/70 ml-4">[OK] Speakers compiled.</p>
                <p className="flex items-center gap-2 text-white/70 ml-4">[WARN] Coffee reservoir dangerously low.</p>
                <p className="flex items-center gap-2 mt-2"><span className="text-neon-magenta">{'>'}</span> execute command: hype_mode --force</p>
                <p className="flex items-center gap-2 text-neon-cyan mt-auto">
                   <span className="text-neon-magenta animate-pulse">{'>'}</span> <span className="animate-pulse">_</span>
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 hover:text-neon-cyan transition-colors cursor-default">
              © 2026 DIGIT 10.0. SIMULATION RUNNING.
            </p>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-black text-white/30 cursor-default">
                INITIALIZED WITH <span className="text-neon-magenta animate-pulse">⚡</span> AND COFFEE BY DIGIT TEAM
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 hover:text-neon-cyan transition-colors cursor-default">
                DESIGNED BY RUDRANSH KANDPAL
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
