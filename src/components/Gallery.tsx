import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PARTNERS = [
  {
    name: 'Tech Innovators',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=300',
    description: 'Leading the way in digital solutions and future tech.'
  },
  {
    name: 'Global Networks',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300',
    description: 'Connecting communities through advanced infrastructure.'
  },
  {
    name: 'Cyber Dynamics',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300',
    description: 'Securing next-generation digital ecosystems.'
  },
  {
    name: 'Future Systems',
    logo: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=300',
    description: 'Building scalable architectures for modern enterprises.'
  },
  {
    name: 'Nexus Cloud',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=300',
    description: 'Providing seamless cloud integration and hosting.'
  },
  {
    name: 'Quantum Logic',
    logo: 'https://images.unsplash.com/photo-1614064641913-6b30fbc0214c?auto=format&fit=crop&q=80&w=300',
    description: 'Advancing research in quantum computing.'
  },
  {
    name: 'AI Ventures',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=300',
    description: 'Pioneering artificial intelligence and machine learning models.'
  },
  {
    name: 'Data Synapse',
    logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=300',
    description: 'Empowering data-driven decisions through analytics.'
  },
  {
    name: 'Meta Core',
    logo: 'https://images.unsplash.com/photo-1614064642646-370162590209?auto=format&fit=crop&q=80&w=300',
    description: 'Building immersive virtual realities and metaverse infrastructure.'
  }
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current || !sectionRef.current) return;
    const cards = gsap.utils.toArray('.partner-card') as HTMLElement[];

    gsap.from(cards, {
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      x: (index, target) => {
        const gridBounds = gridRef.current!.getBoundingClientRect();
        const targetBounds = target.getBoundingClientRect();
        const gridCenterX = gridBounds.left + gridBounds.width / 2;
        const targetCenterX = targetBounds.left + targetBounds.width / 2;
        return gridCenterX - targetCenterX;
      },
      y: (index, target) => {
        const gridBounds = gridRef.current!.getBoundingClientRect();
        const targetBounds = target.getBoundingClientRect();
        const gridCenterY = gridBounds.top + gridBounds.height / 2;
        const targetCenterY = targetBounds.top + targetBounds.height / 2;
        return gridCenterY - targetCenterY;
      },
      rotation: (index) => (index - Math.floor(cards.length / 2)) * 8,
      scale: 0.4,
      opacity: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: "expo.out",
      clearProps: "all"
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="gallery" className="py-24 relative bg-cyber-black overflow-hidden border-t border-white/5 min-h-screen flex flex-col justify-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-[#050505] to-[#020202] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-magenta/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <div className="inline-block border border-neon-cyan/50 px-4 py-2 rounded-md bg-neon-cyan/10 backdrop-blur-md mb-6">
            <span className="text-neon-cyan text-[10px] font-mono font-bold tracking-[0.2em] uppercase">SYS.NETWORK // GALLERY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase tracking-tight mb-4">
            Digit Gallery
          </h2>
          <p className="text-white/60 font-sans max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Ahlcon international presents: Digit Crew
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              className="partner-card group relative h-64 md:h-72 rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] shadow-2xl"
              whileHover={{ scale: 1.05, zIndex: 50 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: PARTNERS.length - index }} // ensure correct stacking order initially
            >
              {/* Partner Logo/Image Placeholder */}
              <div className="absolute inset-0 p-8 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 bg-[#0a0a0a]">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-full object-cover rounded-lg filter grayscale opacity-70 transition-all duration-300"
                />
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-neon-cyan/95 to-blue-900/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-sm">
                <h3 className="text-black font-display font-bold text-xl md:text-2xl mb-3 tracking-wide">{partner.name}</h3>
                <p className="text-black/80 font-sans text-sm md:text-base leading-relaxed font-medium">
                  {partner.description}
                </p>
                
                {/* Decorative Tech Corners */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-black/30" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-black/30" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-black/30" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-black/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
