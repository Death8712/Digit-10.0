import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Activity } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    desc: "CIRCUIT BOARD ARCHITECTURE V1.2. OVERCLOCK YIELD: 94%",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1622979135225-d2ba860c29da?auto=format&fit=crop&q=80&w=1600",
    desc: "VR HEADSET PROTOTYPE REF: OMEGA. HAPTICS: ONLINE",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
    desc: "CYBER SECURITY PROTOCOL VISUALIZATION. STATUS: SECURE",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600",
    desc: "SERVER RACK ARRAY. TEMPERATURE: 24C. LOAD: 42%",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600",
    desc: "MATRIX DATA STREAM. ENCRYPTION LEVEL: AES-256",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1600",
    desc: "NEURAL LINK CALIBRATION GUI. SYNAPSE SYNC: 99.8%",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
    desc: "GLOBAL NETWORK TOPOLOGY. NODES ACTIVE: 148,092",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1600",
    desc: "FUTURISTIC UI MOCKUP. OPACITY: 40%. BLUR: ACTIVE",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1600",
    desc: "QUANTUM PROCESSOR CORE. COOLING: LIQUID HELIUM",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600",
    desc: "DIGITAL BROCHURE WIREFRAME. GRID SYSTEM: FLUID",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600",
    desc: "DATA VISUALIZATION DASHBOARD. ANOMALIES DETECTED: 0",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1600",
    desc: "BIOMETRIC SCAN IN PROGRESS. MATCH PROBABILITY: 98%",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1600",
    desc: "AI TRAINING MODEL ARCHITECTURE. EPOCH: 450/1000",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    desc: "ROBOTICS LAB DIAGNOSTICS. ACTUATOR RESPONSE: NOMINAL",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=1600",
    desc: "BLOCKCHAIN LEDGER VISUAL. HASH RATE: 140 EH/S",
  },
];

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1,
    );
  };

  const navItems = ["EVENTS", "SCHEDULE", "VISIONARIES", "GALLERY"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center font-sans tracking-wide">
          {/* Deep Dark Metal / Holographic Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-cyber-black pointer-events-none"
          >
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            {/* Holographic Glowing Nodes */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-[100%] blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-magenta/5 rounded-[100%] blur-[120px] mix-blend-screen" />
          </motion.div>

          {/* Modal Content - Holographic Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full h-full flex flex-col overflow-hidden"
          >
            {/* Editor-style Top Status Bar */}
            <div className="w-full bg-black/40 border-b border-[rgba(0,240,255,0.18)] py-1.5 px-4 flex justify-center items-center z-[60]">
              <span className="text-[10px] font-mono tracking-[0.4em] text-ice-blue uppercase">
                DIGIT 10.0 Final
              </span>
            </div>

            {/* Perfect Symmetrical Header */}
            <header className="w-full grid grid-cols-3 items-center px-4 md:px-10 py-4 md:py-6 border-b border-[rgba(0,240,255,0.18)] bg-cyber-black/80 md:backdrop-blur-xl z-50">
              {/* Left: Logo */}
              <div className="flex items-center gap-3 md:gap-4 justify-self-start">
                <div className="w-8 h-8 md:w-10 md:h-10 border border-neon-cyan/30 flex items-center justify-center rounded-sm bg-[#0F172A]">
                  <img src="/digit-logo.png" alt="DIGIT" className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-70" />
                </div>
                <h1 className="text-white font-display font-black tracking-widest text-lg md:text-xl uppercase">DIGIT</h1>
              </div>

              {/* Center: Navigation Items */}
              <nav className="hidden lg:flex items-center justify-center gap-12">
                {navItems.map((item) => (
                  <button key={item} onClick={onClose} className="text-ice-blue font-mono text-[10px] tracking-[0.3em] hover:text-neon-cyan transition-colors uppercase">
                    {item}
                  </button>
                ))}
              </nav>

              {/* Right: Actions */}
              <div className="flex items-center gap-3 md:gap-6 justify-self-end">
                <button onClick={onClose} className="hidden sm:block px-5 md:px-6 py-2 bg-neon-cyan text-black font-bold font-mono text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                  REGISTER NOW
                </button>
                <button
                  onClick={onClose}
                  className="p-2 border border-[rgba(0,240,255,0.18)] text-ice-blue hover:text-white hover:border-[rgba(0,240,255,0.18)] transition-colors bg-[#0F172A] md:backdrop-blur-md rounded-sm"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center p-4 md:p-6 gap-6 md:gap-8 z-20 min-h-0">
              
              {/* Curated Hero View */}
              <div className="relative w-full aspect-[21/9] md:aspect-[16/7] perspective-[1200px]">
                {/* Minimal 3D Depth Frame */}
                <div className="absolute inset-[-1px] bg-gradient-to-r from-neon-cyan/40 via-white/5 to-neon-magenta/40 opacity-20 blur-[1px]" />
                
                <div className="relative w-full h-full border border-[rgba(0,240,255,0.18)] bg-cyber-black overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 1.01 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      src={galleryItems[selectedIndex].src}
                      className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                      alt={galleryItems[selectedIndex].desc}
                    />
                  </AnimatePresence>

                  {/* Tech Lines */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-px bg-white/20" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
                  </div>
                  
                  {/* Precise Lower-Left Label */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-black/60 md:backdrop-blur-xl px-4 py-2 border border-[rgba(0,240,255,0.18)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
                    <span className="text-ice-blue font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase">
                      {galleryItems[selectedIndex].desc}
                    </span>
                  </div>
                </div>
              </div>

              {/* Horizontal Row of 5 Identically Sized Thumbnails */}
              <div className="flex items-center justify-center gap-4 w-full overflow-hidden">
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative w-32 md:w-44 aspect-video overflow-hidden border transition-all duration-500 group ${
                      selectedIndex === index
                        ? "border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.15)] scale-105 z-10"
                        : "border-[rgba(0,240,255,0.18)] opacity-30 grayscale hover:opacity-100 hover:grayscale-0 hover:border-[rgba(0,240,255,0.18)]"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.desc}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              {/* Refined Footer & Nav Console */}
              <div className="flex items-center gap-4 md:gap-8 mt-auto shrink-0 bg-black/60 border border-[rgba(0,240,255,0.18)] md:backdrop-blur-md px-6 md:px-8 py-2 md:py-3 shadow-lg rounded-full">
                <button
                  onClick={handlePrev}
                  className="text-ice-blue hover:text-neon-cyan transition-colors"
                >
                  <ChevronLeft size={20} strokeWidth={1} />
                </button>

                <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
                  <span className="text-neon-cyan font-bold">IMAGE {String(selectedIndex + 1).padStart(2, "0")}</span>
                  <span className="text-ice-blue">/</span>
                  <span className="text-ice-blue">{String(galleryItems.length).padStart(2, "0")}</span>
                </div>

                <button
                  onClick={handleNext}
                  className="text-ice-blue hover:text-neon-cyan transition-colors"
                >
                  <ChevronRight size={20} strokeWidth={1} />
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
