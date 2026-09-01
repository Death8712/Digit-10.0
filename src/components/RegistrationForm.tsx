import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layout, X, FileEdit, Monitor } from "lucide-react";
import { cn } from "../lib/utils";

const REGISTRATION_LINKS = [
  {
    category: "Preparatory Stage",
    accent: "text-amber-400",
    border: "border-amber-400/20",
    borderSolid: "border-amber-400",
    bg: "bg-amber-400/5",
    solidBg: "bg-amber-400",
    shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.3)]",
    hoverBg: "hover:bg-amber-400/10",
    events: [
      { name: "DigiMagic", link: "https://docs.google.com/forms/d/e/1FAIpQLSc8EG57o4A2Pw7kOJuPL9gJggOoGHZgBqYmbieBBAfdogFGvg/viewform?usp=header" },
      { name: "DigiPoster", link: "https://docs.google.com/forms/d/e/1FAIpQLSczZFpFJKOMVQr3VOJb6yuyzJYoLjSE_3nQ4BseSftSD_0kEg/viewform?usp=publish-editor" },
      { name: "DigiSlides", link: "https://docs.google.com/forms/d/e/1FAIpQLSc0MgJPoUwAOcSG_UtGBAzvPlr-O7FCDNOJc7YcE3r5vLptTA/viewform?usp=publish-editor" },
    ]
  },
  {
    category: "Middle Stage",
    accent: "text-purple-400",
    border: "border-purple-400/20",
    borderSolid: "border-purple-400",
    bg: "bg-purple-400/5",
    solidBg: "bg-purple-400",
    shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)]",
    hoverBg: "hover:bg-purple-400/10",
    events: [
      { name: "DigiTales", link: "https://forms.gle/N1VUwZehgdyR2jg47" },
      { name: "DigiQuiz", link: "https://forms.gle/SHMUFddF3xkrEJVk8" },
      { name: "DigiBuild", link: "https://forms.gle/vvVwPuHbq6xC383P7", submissionLink: "https://forms.gle/yJ8XXKPEkuB7bwwcA" },
    ]
  },
  {
    category: "Seniors Stage",
    accent: "text-neon-cyan",
    border: "border-neon-cyan/20",
    borderSolid: "border-neon-cyan",
    bg: "bg-neon-cyan/5",
    solidBg: "bg-neon-cyan",
    shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.3)]",
    hoverBg: "hover:bg-neon-cyan/10",
    events: [
      { name: "DigiTote", link: "https://forms.gle/99fGYJK4KrEPu26A7" },
      { name: "DigiBattles", link: "https://forms.gle/DqjJ9N5dAHnQ4Le66" },
      { name: "DigiMeme", link: "https://forms.gle/tK29smSro85PP8Ct9", submissionLink: "https://forms.gle/aek2SmGCkBvxv1LT6" },
      { name: "DigiCipher", link: "https://forms.gle/D32aJLKhFkyd3Lui7" }
    ]
  },
  {
    category: "Inter School Events",
    accent: "text-emerald-400",
    border: "border-emerald-400/20",
    borderSolid: "border-emerald-400",
    bg: "bg-emerald-400/5",
    solidBg: "bg-emerald-400",
    shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)]",
    hoverBg: "hover:bg-emerald-400/10",
    events: [
      { name: "DigiThon", link: "https://forms.gle/XbcUQVdSB3kYenx87", submissionLink: "https://forms.gle/PoVHyc1N4pZ6iiYZA" },
      { name: "DigiAI", link: "https://forms.gle/r6SjjfLxc5CcE96Y7", submissionLink: "https://forms.gle/VbGUhrZG3Es4M3U17" },
      { name: "DigiFrames", link: "https://forms.gle/z6Kosigzztwqxnko9", submissionLink: "https://forms.gle/N3D1etUKEoNqyroC8" },
      { name: "DigiScratch", link: "https://forms.gle/KcSh7RZE77C27NoC8", submissionLink: "https://forms.gle/itMacTVM679vJ3iN7" }
    ]
  }
];

export default function RegistrationForm() {
  const [selectedEvent, setSelectedEvent] = useState<{ name: string; link: string; submissionLink?: string } | null>(null);

  return (

    <section id="register" className="py-24 relative overflow-hidden bg-cyber-black">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_25%_25%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(0,240,255,0.15),transparent_50%)]" />

      

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Deployment Protocol</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-6 italic">
              SECURE YOUR <span className="text-neon-cyan">SLOT</span>
            </h2>
            <p className="text-ice-blue max-w-2xl mx-auto font-sans leading-relaxed">
              Register for your selected event below to join our event of innovators. Clicking the link will direct you to the official registration form.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {REGISTRATION_LINKS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                "rounded-3xl border bg-black/40 md:backdrop-blur-xl p-8 relative overflow-hidden group  transition-all duration-500 flex flex-col",
                category.border,
                category.shadowColor
              )}
            >
              {/* Animated Gradient Background */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                category.solidBg
              )} />
              
              {/* Category Header */}
              <div className="mb-8 relative z-10 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn("p-2 rounded-lg bg-[#0F172A] border border-[rgba(0,240,255,0.18)]", category.accent)}>
                      <Layout size={20} />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider">
                      {category.category}
                    </h3>
                  </div>
                  <div className={cn("h-0.5 w-16 rounded-full opacity-50", category.solidBg)} />
                </div>
                <div className={cn("text-xs font-mono font-bold px-3 py-1 rounded-full border bg-black/50", category.border, category.accent)}>
                  {category.events.length} EVENTS
                </div>
              </div>

              {/* Event Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 mt-auto">
                {category.events.map((event) => (
                  <a
                    key={event.name}
                    href={event.link}
                    target={(event as any).submissionLink ? undefined : "_blank"}
                    rel={(event as any).submissionLink ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if ((event as any).submissionLink) {
                        e.preventDefault();
                        setSelectedEvent(event as any);
                      }
                    }}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] transition-all duration-300 group/link overflow-hidden relative cursor-pointer text-left w-full",
                    )}
                  >
                    <div className={cn("absolute inset-0 w-0 group-hover/link:w-full transition-all duration-500 opacity-10", category.solidBg)} />
                    
                    <span className="font-sans font-bold text-sm text-ice-blue group-hover/link:text-white transition-colors relative z-10 truncate pr-2">
                      {event.name}
                    </span>
                    <div className={cn("w-6 h-6 rounded-full flex items-center justify-center bg-[#0F172A] border border-[rgba(0,240,255,0.18)] group-hover/link:scale-110 transition-transform relative z-10 shrink-0", category.accent)}>
                      <ExternalLink size={12} />
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Decorative Corner Borders */}
              <div className={cn("absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500", category.borderSolid)} />
              <div className={cn("absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500", category.borderSolid)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/60 md:backdrop-blur-[10px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0B132B]/90 md:backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[rgba(0,240,255,0.18)] flex flex-col gap-6"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-ice-blue hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider pr-6">
                {selectedEvent.name}
              </h3>
              
              <div className="flex flex-col gap-4">
                <a
                  href={selectedEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <FileEdit size={20} className="text-neon-cyan" />
                  <span className="font-sans font-bold text-white uppercase tracking-wider text-sm">Registration Form</span>
                </a>
                
                {selectedEvent.submissionLink && (
                  <a
                    href={selectedEvent.submissionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <Monitor size={20} className="text-neon-cyan" />
                    <span className="font-sans font-bold text-white uppercase tracking-wider text-sm">Submission Form</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
