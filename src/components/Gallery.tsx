import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ITEMS = [
  { id: 0, title: 'OFFICIAL TRAILER', subtitle: 'DIGIT 9.0', video: '/trailer.mp4' },

  { id: 1, title: 'DIGI MAGIC', subtitle: 'CLASS 3', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'DIGI POSTER', subtitle: 'CLASS 4', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'DIGI SLIDES', subtitle: 'CLASS 5', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'DIGI TALES', subtitle: 'CLASS 6', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'DIGI QUIZ', subtitle: 'CLASS 7', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'DIGI BUILD', subtitle: 'CLASS 8', image: 'https://images.unsplash.com/photo-1451187580459-434902bd0c0e?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: 'DIGI TOTE', subtitle: 'CLASS 9', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'DIGI CT-AI', subtitle: 'CLASS 10', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'DIGI BATTLES', subtitle: 'CLASS 11', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: 'DIGIMEME', subtitle: 'CLASS 12', image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800' },
  { id: 11, title: 'DIGI CIPHER', subtitle: 'CLASS 12', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 12, title: 'INNOVATION', subtitle: 'ALL CLASSES', image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800' }
];

function ParallaxCard({ item, onTrailerEnd }: { item: typeof ITEMS[0], onTrailerEnd?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize coordinates into a small range (e.g., -5% to +5%)
    const x = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const y = ((e.clientY - centerY) / (rect.height / 2)) * 5;
    
    setCoords({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCoords({ x: 0, y: 0 }); }}
      className="relative w-[100vw] h-[60vh] md:h-[80vh] shrink-0 overflow-hidden cursor-pointer group"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] overflow-hidden border-y border-white/10 group-hover:border-white/30 transition-colors duration-500">
        
        {/* Layer B: Background (Deep buffer view, softened) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-200 ease-out will-change-transform"
          style={{
            ...(item.image ? { backgroundImage: `url(${item.image})` } : {}),
            filter: item.video ? 'brightness(0.5)' : 'blur(2px) brightness(0.7)',
            // Move in opposite direction of cursor
            transform: `scale(${isHovered ? 1.05 : 1.02}) translate(${isHovered ? -coords.x : 0}%, ${isHovered ? -coords.y : 0}%)`
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
        </div>

        {/* Layer A: Foreground UI / Sharp elements */}
        <div 
          className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between transition-transform duration-200 ease-out will-change-transform z-10"
          style={{
            // Move in direction of cursor
            transform: `scale(${isHovered ? 1.02 : 1}) translate(${isHovered ? coords.x : 0}%, ${isHovered ? coords.y : 0}%)`
          }}
        >
          {/* Top Interface */}
          <div className="flex justify-between items-start opacity-80">
            <div className="px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">IMG_{item.id.toString().padStart(3, '0')}</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Central Frame Element */}
          <div className="absolute inset-8 border border-white/10 pointer-events-none rounded-xl" />

          {/* Bottom Text */}
          <div>
            <h3 className="font-display font-black text-3xl md:text-5xl lg:text-7xl text-white uppercase tracking-tighter mb-2 drop-shadow-xl">
              {item.title}
            </h3>
            <p className="font-mono text-sm md:text-lg tracking-[0.2em] text-white/70 uppercase">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Additional Lighting / Reflection */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${50 + coords.x * 10}% ${50 + coords.y * 10}%, rgba(255,255,255,0.2) 0%, transparent 60%)`
          }}
        />
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
    <section id="gallery" className="py-24 relative bg-[#050505] overflow-hidden border-t border-white/5 min-h-screen flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-[#050505] to-[#020202] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[100vw] mx-auto relative z-10 w-full flex flex-col">
        <div className="px-6 md:px-12 lg:px-24 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block border border-neon-cyan/50 px-4 py-2 rounded-md bg-neon-cyan/10 backdrop-blur-md mb-6">
              <span className="text-neon-cyan text-[10px] font-mono font-bold tracking-[0.2em] uppercase">SYS.NETWORK // ARCHIVE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight mb-4">
              Event Showcase
            </h2>
            <p className="text-white/60 font-sans max-w-2xl text-sm md:text-base leading-relaxed">
              Explore the digital frontier. A visual archive of our specialized events and challenges.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
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
