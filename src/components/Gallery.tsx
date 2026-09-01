import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type Item = { id: number, title: string, subtitle: string, video?: string, image?: string, youtubeId?: string };
const ITEMS: Item[] = [
  { id: 0, title: 'DIGIT 10.0', subtitle: 'OFFICIAL TRAILER', youtubeId: 'zCkjOAJt1qQ' },
  { id: 1, title: 'INTRASCHOOL SHOWCASE', subtitle: 'INNOVATION AT ITS PEAK', youtubeId: '3UVXuutyNm0' }
];

function ParallaxCard({ item, onTrailerEnd }: { item: Item, onTrailerEnd?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const y = ((e.clientY - centerY) / (rect.height / 2)) * 5;
    
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.setProperty('--card-x', `${x}%`);
        containerRef.current.style.setProperty('--card-y', `${y}%`);
        containerRef.current.style.setProperty('--card-neg-x', `${-x}%`);
        containerRef.current.style.setProperty('--card-neg-y', `${-y}%`);
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (containerRef.current) {
      containerRef.current.style.setProperty('--card-x', '0%');
      containerRef.current.style.setProperty('--card-y', '0%');
      containerRef.current.style.setProperty('--card-neg-x', '0%');
      containerRef.current.style.setProperty('--card-neg-y', '0%');
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[85vw] h-[65vh] md:w-[75vw] md:h-[80vh] mx-2 md:mx-4 shrink-0 overflow-hidden cursor-pointer group rounded-2xl md:rounded-3xl border border-[rgba(0,240,255,0.18)] shadow-2xl"
      style={{
        perspective: '1000px',
        // @ts-expect-error CSS vars
        '--card-x': '0%',
        '--card-y': '0%',
        '--card-neg-x': '0%',
        '--card-neg-y': '0%'
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-cyber-black overflow-hidden group-hover:border-white/30 transition-colors duration-500">
        
        {/* Layer B: Background (Deep buffer view, softened) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-200 ease-out will-change-transform group-hover:scale-105"
          style={{
            ...(item.image ? { backgroundImage: `url(${item.image})` } : {}),
            filter: (item.video || item.youtubeId) ? 'brightness(0.5)' : 'blur(2px) brightness(0.7)',
            transform: 'translate(var(--card-neg-x, 0%), var(--card-neg-y, 0%))'
          }}
        >
          {item.video && (
            <video
              className="w-full h-full object-cover"
              src={item.video}
              autoPlay
              muted
              playsInline
              onEnded={onTrailerEnd}
            />
          )}
          {item.youtubeId && (
            <div className="absolute inset-0 w-full h-full bg-black z-20">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&iv_load_policy=3&modestbranding=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}

        </div>

        {/* Layer A: Foreground UI / Sharp elements */}
        <div 
          className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between transition-transform duration-200 ease-out will-change-transform z-10 pointer-events-none group-hover:scale-[1.02]"
          style={{
            transform: 'translate(var(--card-x, 0%), var(--card-y, 0%))'
          }}
        >
          {/* Central Frame Element */}
          <div className="absolute inset-8 border border-[rgba(0,240,255,0.18)] pointer-events-none rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoSwipe, setAutoSwipe] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoSwipe) {
      interval = setInterval(() => {
        scrollRight();
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoSwipe]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0;
      scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        // At the end, loop back to start
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-cyber-black overflow-hidden border-t border-[rgba(0,240,255,0.18)] min-h-screen flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-cyber-black to-cyber-black pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[100vw] mx-auto relative z-10 w-full flex flex-col">
        <div className="px-6 md:px-12 lg:px-24 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block border border-neon-cyan/50 px-4 py-2 rounded-md bg-neon-cyan/10 md:backdrop-blur-md mb-6">
              <span className="text-neon-cyan text-[10px] font-mono font-bold tracking-[0.2em] uppercase">SYS.NETWORK // ARCHIVE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight mb-4">
              Event Showcase
            </h2>
            <p className="text-ice-blue font-sans max-w-2xl text-sm md:text-base leading-relaxed">
              Explore the digital frontier. A visual archive of our specialized events and challenges.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-[rgba(0,240,255,0.18)] bg-[#0F172A] hover:bg-white/10 flex items-center justify-center text-white md:backdrop-blur-sm transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-[rgba(0,240,255,0.18)] bg-[#0F172A] hover:bg-white/10 flex items-center justify-center text-white md:backdrop-blur-sm transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 [&::-webkit-scrollbar]:hidden items-center py-8 px-4 md:px-12 lg:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ITEMS.map((item) => (
            <div key={item.id} className="snap-center">
              <ParallaxCard item={item} onTrailerEnd={() => setAutoSwipe(true)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
