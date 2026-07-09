import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Info, Monitor, Phone, User } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    about?: string;
    venue?: string;
    image?: string;
    mode?: string;
    classGroup?: string;
    software?: string;
    eventHead?: string;
    eventHeadNumber?: string;
    teamSize?: string;
  } | null;
  categoryAccent?: string;
}

export default function EventModal({ isOpen, onClose, event, categoryAccent }: EventModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    typeof document !== 'undefined' ? createPortal(
      <AnimatePresence>
        {isOpen && event && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Heavily Blurred Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[10px] brightness-50"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-[32px] p-[1px] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            {/* Linear Gradient Border Wrapper */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/40 via-purple-500/20 to-amber-500/10 rounded-[32px] -z-10 pointer-events-none" />

            {/* Close Button (Fixed) */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/10"
            >
              <X size={20} />
            </button>

            {/* Inner Content Container - Scrollable */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative bg-[#0a0a0a]/90 h-full flex-1 overflow-y-auto rounded-[31px] p-6 md:p-10 pt-16 md:pt-16 scroll-smooth custom-scrollbar"
            >
              
              {/* Event Title & Subtitle */}
              <div className="mb-8 pr-12">
                <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2 leading-tight">
                  {event.title}
                </h2>
                <div className={cn("font-mono text-sm tracking-widest uppercase", categoryAccent || "text-neon-cyan")}>
                  {event.description}
                </div>
              </div>

              {/* Bento-style Layout for Details */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                  
                  {/* About Section */}
                  <div className="col-span-1 md:col-span-2 bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Info size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">About the Event</h3>
                    </div>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base font-sans mt-2">
                      {event.about || "Join us for an exciting technology competition where students showcase their innovation, creativity, and technical prowess. Push your limits and discover the digital frontier."}
                    </p>
                  </div>

                  {/* Venue Section */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <MapPin size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Venue</h3>
                    </div>
                    <p className="text-white/60 font-medium">
                      {event.venue || "Computer Lab 1"}
                    </p>
                  </div>

                  {/* Mode Section */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Calendar size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Mode</h3>
                    </div>
                    <p className="text-white/60 font-medium whitespace-nowrap">
                      {event.mode || "Online + Offline"}
                    </p>
                  </div>
                  
                  {/* Team Size Section */}
                  {event.teamSize && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <User size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Team Size</h3>
                      </div>
                      <p className="text-white/60 font-medium">
                        {event.teamSize}
                      </p>
                    </div>
                  )}

                  {/* Class Section */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Info size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Class</h3>
                    </div>
                    <p className="text-white/60 font-medium">
                      {event.classGroup || "Class 3-12"}
                    </p>
                  </div>

                  {/* Software Section */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Monitor size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Software Used</h3>
                    </div>
                    <p className="text-white/60 font-medium">
                      {event.software || "Not specified"}
                    </p>
                  </div>
                  {/* Event Head Section */}
                  {event.eventHead && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <User size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Event Head</h3>
                      </div>
                      <p className="text-white/60 font-medium">
                        {event.eventHead}
                      </p>
                      {event.eventHeadNumber && (
                        <div className="flex items-center gap-2 mt-2 text-white/50">
                          <Phone size={14} className={categoryAccent} />
                          <span className="font-mono text-sm">{event.eventHeadNumber}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Image Section on the Right */}
                {event.image && (
                  <div className="w-full md:w-5/12 shrink-0 bg-white/5 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-4">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-auto object-contain rounded-xl mix-blend-screen max-h-[500px]" 
                    />
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
    ) : null
  );
}
