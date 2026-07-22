import { motion } from "motion/react";
import { Mail, Phone, MapPin, User, Star, Code, Zap } from "lucide-react";
import { cn } from "../lib/utils";


const TEACHERS = [
  {
    name: "Ms. Urvashi Singhal",
    role: "Head of the Event",
    email: "urvashis@ahlconinternational.in",
    phone: "",
    icon: Star,
    accent: "text-amber-400"
  },
  {
    name: "Ms. Nitika Wadhwa",
    role: "In-charge Senior Stage",
    email: "nitikaw@ahlconinternational.in",
    phone: "",
    icon: Zap,
    accent: "text-neon-magenta"
  },
  {
    name: "Ms. Deepti Chopra",
    role: "In-charge Middle Stage",
    email: "deeptic@ahlconinternational.in",
    phone: "",
    icon: Code,
    accent: "text-purple-400"
  },
  {
    name: "Ms. Garima Mehra",
    role: "In-charge Primary Stage",
    email: "garimam@ahlconinternational.in",
    phone: "",
    icon: User,
    accent: "text-emerald-400"
  }
];

const STUDENT_DIRECTORS = [
  {
    name: "Rudransh Kandpal",
    role: "President",
    phone: "9910663253",
    icon: Star,
    accent: "text-neon-cyan"
  },
  {
    name: "Ishika Mittal",
    role: "Vice President",
    phone: "9310527312",
    icon: Zap,
    accent: "text-neon-cyan"
  },
  {
    name: "Sheza Khan",
    role: "Coordinating Director",
    phone: "9968882786",
    icon: Code,
    accent: "text-neon-cyan"
  },
  {
    name: "Aarav Tuteja",
    role: "Media Lead",
    phone: "7271000999",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Granth Shandilya",
    role: "Video Visionary",
    phone: "9958468859",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Prajanay Chandra",
    role: "Video Visionary",
    phone: "8010984447",
    icon: User,
    accent: "text-neon-cyan"
  }
];


const EVENT_HEADS = [
  { name: "Ananya Gahlot", role: "Event Head (DigiMagic, DigiPoster)", phone: "9810743364" },
  { name: "Garima Mehra", role: "Event Head (DigiScratch)", phone: "8527886150" },
  { name: "Navya Ahuja", role: "Event Head (DigiSlides, DigiScratch)", phone: "7827651124" },
  { name: "Hanisha Nagi", role: "Event Head (DigiTales, DigiQuiz)", phone: "9810924894" },
  { name: "Aaradhya Yadav", role: "Event Head (DigiBuild)", phone: "9818400124" },
  { name: "Divyansh Rathore", role: "Event Head (DigiBattles)", phone: "9560802211" },
  { name: "Aditya Pandey", role: "Event Head (DigiMeme)", phone: "9211977792" },
  { name: "Vivaan Tripathi", role: "Event Head (DigiCipher)", phone: "7011309610" },
  { name: "Sheza Khan", role: "Event Head (DigiThon, DigiAI)", phone: "9968882786" }
];

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Communication Link</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-6">
              REACH <span className="text-neon-cyan">OUT</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto font-sans leading-relaxed">
              Initiate contact protocols. Connect with the visionaries and event heads driving DIGIT 10.0.
            </p>
          </motion.div>
        </div>

        <div className="mb-16 space-y-8">
          {/* Teachers Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-display font-black text-white mb-6">TEACHERS IN-CHARGE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEACHERS.map((member, i) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", member.accent)}>
                      <member.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h4>
                      <p className={cn("text-xs font-mono tracking-wider uppercase mb-3 drop-shadow-sm", member.accent)}>{member.role}</p>
                      <a href={member.email ? `mailto:${member.email}` : '#'} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm break-all">
                          <Mail size={14} className="shrink-0" />
                          <span>{member.email}</span>
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* General Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl h-full flex flex-col justify-center"
            >
              <h3 className="text-2xl font-display font-black text-white mb-8">DIGIT HQ</h3>
              
              <div className="space-y-6">
                <a href="mailto:aisdigit10@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">General Inquiries</p>
                    <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">aisdigit10@gmail.com</p>
                  </div>
                </a>
                


                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-medium">AHLCON INTERNATIONAL SCHOOL | MAYUR VIHAR Phase 1</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Team */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-display font-black text-white mb-6">STUDENT DIRECTORS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {STUDENT_DIRECTORS.map((member, i) => (
                  <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all group">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-4">
                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", member.accent)}>
                          <member.icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h4>
                          <p className={cn("text-xs font-mono tracking-wider uppercase drop-shadow-sm", member.accent)}>{member.role}</p>
                        </div>
                      </div>
                      <div className="mt-1">
                        <a href={member.phone !== 'N/A' ? `tel:${member.phone}` : '#'} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm break-all">
                          <Phone size={14} className="shrink-0" />
                          <span className="truncate">{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Event Heads Directory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-display font-black text-white">EVENT HEADS</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neon-cyan/50 to-transparent ml-4 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVENT_HEADS.map((head, i) => (
              <div key={i} className="flex flex-col p-4 rounded-xl border border-white/5 bg-black/40 hover:bg-black/60 hover:border-neon-cyan/30 transition-all group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-sans font-bold text-white group-hover:text-neon-cyan transition-colors">{head.name}</h4>
                    <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">{head.role}</p>
                  </div>
                </div>
                <div className="space-y-2 mt-auto">
                  <a href={head.phone !== 'N/A' ? `tel:${head.phone.replace(/[^0-9+]/g, '')}` : '#'} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-mono">
                    <Phone size={12} className="text-neon-cyan" />
                    <span>{head.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
