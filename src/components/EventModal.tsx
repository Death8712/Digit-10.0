import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Info, Monitor, Phone, User, ClipboardList, Lightbulb, Star, Target } from 'lucide-react';
import { cn } from '../lib/utils';
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
    themes?: string[];
    submissionFormat?: string;
    judgementCriteria?: string[];
    requirements?: string;
    objectives?: string[];
    registrationLink?: string;
  } | null;
  categoryAccent?: string;
}

export default function EventModal({ isOpen, onClose, event, categoryAccent }: EventModalProps) {
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[10px] brightness-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-[32px] p-[1px] shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/40 via-purple-500/20 to-amber-500/10 rounded-[32px] -z-10 pointer-events-none" />
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/10"
            >
              <X size={20} />
            </button>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative bg-[#0a0a0a]/90 h-full flex-1 overflow-y-auto rounded-[31px] p-6 md:p-10 pt-16 md:pt-16 scroll-smooth custom-scrollbar"
            >
              <div className="mb-8 pr-12">
                <h2 className="text-3xl md:text-4xl font-display font-black text-white mb-2 leading-tight">
                  {event.title}
                </h2>
                <div className={cn("font-mono text-sm tracking-widest uppercase", categoryAccent || "text-neon-cyan")}>
                  {event.description}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                  <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Info size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">About the Event</h3>
                    </div>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base font-sans mt-2 whitespace-pre-wrap">
                      {event.about || "Join us for an exciting technology competition where students showcase their innovation, creativity, and technical prowess. Push your limits and discover the digital frontier."}
                    </p>
                    
                    {event.registrationLink && (
                      <div className="mt-6">
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 border bg-white/5 hover:bg-white/10 border-white/10",
                            categoryAccent
                          )}
                        >
                          <Target size={16} />
                          Register Now
                        </a>
                      </div>
                    )}
                  </div>
                  {event.objectives && event.objectives.length > 0 && (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <Target size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Objectives</h3>
                      </div>
                      <ul className="text-white/60 text-sm md:text-base space-y-1">
                        {event.themes.map((theme, idx) => (
                          <li key={idx} className={theme.trim() === 'OR' ? 'list-none text-center font-bold my-1 text-white/40 text-xs' : 'list-disc list-inside'}>{theme}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.requirements && (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <ClipboardList size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Requirements</h3>
                      </div>
                      <div className="text-white/60 text-sm md:text-base whitespace-pre-wrap">{event.requirements}</div>
                    </div>
                  )}
                  {event.themes && event.themes.length > 0 && (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <Lightbulb size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Themes</h3>
                      </div>
                      <ul className="list-disc list-inside text-white/60 text-sm md:text-base space-y-1">
                        {event.themes.map((theme, idx) => (
                          <li key={idx}>{theme}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {event.judgementCriteria && event.judgementCriteria.length > 0 && (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <Star size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Judgement Criteria</h3>
                      </div>
                      <ul className="list-disc list-inside text-white/60 text-sm md:text-base space-y-1">
                        {event.judgementCriteria.map((criteria, idx) => (
                          <li key={idx}>{criteria}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <MapPin size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Venue</h3>
                    </div>
                    <p className="text-white/60 font-medium">
                      {event.venue || "Computer Lab 1"}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Calendar size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Mode</h3>
                    </div>
                    <p className="text-white/60 font-medium text-sm break-words">
                      {event.mode || "Online + Offline"}
                    </p>
                  </div>
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
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Info size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Class</h3>
                    </div>
                    <p className="text-white/60 font-medium">
                      {event.classGroup || "Class 3-12"}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-3 text-white/80">
                      <Monitor size={18} className={categoryAccent} />
                      <h3 className="font-display font-bold uppercase tracking-wider text-sm">Software Used</h3>
                    </div>
                    <p className="text-white/60 font-medium">
                      {event.software || "Not specified"}
                    </p>
                  </div>
                  {event.submissionFormat && (
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center gap-3 mb-3 text-white/80">
                        <Info size={18} className={categoryAccent} />
                        <h3 className="font-display font-bold uppercase tracking-wider text-sm">Format</h3>
                      </div>
                      <p className="text-white/60 font-medium">
                        {event.submissionFormat}
                      </p>
                    </div>
                  )}
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
                {event.image && (
                  <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 bg-white/5 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center p-6 self-start sticky top-4">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-[120px] md:w-[150px] h-auto object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
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
