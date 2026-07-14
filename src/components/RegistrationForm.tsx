import { motion } from "motion/react";
import { ExternalLink, Layout } from "lucide-react";
import { cn } from "../lib/utils";

const REGISTRATION_LINKS = [
  {
    category: "Preparatory Stage",
    accent: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/5",
    hoverBg: "hover:bg-amber-400/10",
    events: [
      { name: "DigiMagic", link: "#" },
      { name: "DigiPoster", link: "#" },
      { name: "DigiSlides", link: "#" },
    ]
  },
  {
    category: "Middle Stage",
    accent: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
    hoverBg: "hover:bg-purple-400/10",
    events: [
      { name: "DigiTales", link: "#" },
      { name: "DigiQuiz", link: "#" },
      { name: "DigiBuild", link: "#" },
    ]
  },
  {
    category: "Seniors Stage",
    accent: "text-neon-cyan",
    border: "border-neon-cyan/20",
    bg: "bg-neon-cyan/5",
    hoverBg: "hover:bg-neon-cyan/10",
    events: [
      { name: "DigiTote", link: "https://forms.gle/vpnQUDbj6f48i1hH9" },
      { name: "DigiBattles", link: "https://forms.gle/amXKvuL2Ug6Egs4N6" },
      { name: "DigiMeme", link: "https://forms.gle/8YgKyHoiMQwPruwv5" },
      { name: "DigiCipher", link: "https://forms.gle/VpNCtkyw8L2EeFf37" }
    ]
  },
  {
    category: "Inter School Events",
    accent: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    hoverBg: "hover:bg-emerald-400/10",
    events: [
      { name: "DigiThon", link: "https://forms.gle/yqvhAApcUWGkr3qi6" }
    ]
  }
];

export default function RegistrationForm() {
  return (
    <section id="register" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px]" />
      </div>

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
            <p className="text-white/40 max-w-2xl mx-auto font-sans leading-relaxed">
              Register for your selected event below to join our event of innovators. Clicking the link will direct you to the official registration form.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REGISTRATION_LINKS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "rounded-2xl border backdrop-blur-xl p-8 relative overflow-hidden group",
                category.bg,
                category.border
              )}
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Layout size={20} className={category.accent} />
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-wider">
                    {category.category}
                  </h3>
                </div>
                <div className={cn("w-12 h-1 rounded-full bg-current opacity-50", category.accent)} />
              </div>

              {/* Event Links */}
              <div className="space-y-4">
                {category.events.map((event) => (
                  <a
                    key={event.name}
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/40 transition-all duration-300 group/link",
                      category.hoverBg
                    )}
                  >
                    <span className="font-sans font-medium text-white/90 group-hover/link:text-white transition-colors">
                      {event.name}
                    </span>
                    <ExternalLink 
                      size={16} 
                      className={cn("opacity-50 group-hover/link:opacity-100 transition-opacity", category.accent)} 
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
