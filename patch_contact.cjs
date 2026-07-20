const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const newCoreTeamCode = `const TEACHERS = [
  {
    name: "Ms. Urvashi Singhal",
    role: "Head of the Event",
    email: "urvashi.singhal@digitcrew.in",
    phone: "",
    icon: Star,
    accent: "text-amber-400"
  },
  {
    name: "Ms. Nitika Wadhwa",
    role: "In-charge Senior Stage",
    email: "nitika.wadhwa@digitcrew.in",
    phone: "",
    icon: Zap,
    accent: "text-neon-magenta"
  },
  {
    name: "Ms. Deepti Chopra",
    role: "In-charge Middle Stage",
    email: "deepti.chopra@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-purple-400"
  },
  {
    name: "Ms. Garima Mehra",
    role: "In-charge Primary Stage",
    email: "garima.mehra@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-emerald-400"
  }
];

const STUDENT_DIRECTORS = [
  {
    name: "Rudransh Kandpal",
    role: "President",
    email: "rudransh.kandpal@digitcrew.in",
    phone: "",
    icon: Star,
    accent: "text-neon-cyan"
  },
  {
    name: "Ishika Mittal",
    role: "Vice President & Event Head (DigiTote)",
    email: "ishika.mittal@digitcrew.in",
    phone: "+91 9310527312",
    icon: Zap,
    accent: "text-neon-cyan"
  },
  {
    name: "Aarav Tuteja",
    role: "Media Manager",
    email: "aarav.tuteja@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Prajanay Chandra",
    role: "Video Visionary",
    email: "prajanay.chandra@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-neon-cyan"
  },
  {
    name: "Granth Shandilya",
    role: "Video Visionary",
    email: "granth.shandilya@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Sheza Khan",
    role: "Director",
    email: "sheza.khan@digitcrew.in",
    phone: "+91 9968882786",
    icon: Code,
    accent: "text-neon-cyan"
  }
];`;

content = content.replace(/const CORE_DIRECTORS = \[[\s\S]*?\];/, newCoreTeamCode);

const oldJSX = `<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* General Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-display font-black text-white mb-8">DIGIT HQ</h3>
            
            <div className="space-y-6">
              <a href="mailto:contact@digitcrew.in" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">General Inquiries</p>
                  <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">contact@digitcrew.in</p>
                </div>
              </a>
              
              <a href="tel:+919999999999" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Direct Line</p>
                  <p className="text-white font-medium group-hover:text-purple-400 transition-colors">+91 99999 99999</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-medium">DIGIT Campus, Cyber City</p>
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
            <h3 className="text-2xl font-display font-black text-white mb-6">CORE DIRECTORS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CORE_DIRECTORS.map((member, i) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", member.accent)}>
                      <member.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h4>
                      <p className={cn("text-xs font-mono tracking-wider uppercase mb-3 drop-shadow-sm", member.accent)}>{member.role}</p>
                      <a href={\`mailto:\${member.email}\`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
                        <Mail size={14} />
                        <span className="truncate">{member.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>`;

const newJSX = `<div className="mb-16 space-y-8">
          {/* Teachers Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-display font-black text-white mb-6">FACULTY IN-CHARGES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TEACHERS.map((member, i) => (
                <div key={i} className="bg-black/40 border border-white/5 rounded-2xl p-5 hover:border-white/20 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", member.accent)}>
                      <member.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-1">{member.name}</h4>
                      <p className={cn("text-xs font-mono tracking-wider uppercase mb-3 drop-shadow-sm", member.accent)}>{member.role}</p>
                      <a href={\`mailto:\${member.email}\`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm break-all">
                        <Mail size={14} className="shrink-0" />
                        <span className="truncate">{member.email}</span>
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
                <a href="mailto:contact@digitcrew.in" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:bg-neon-cyan group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">General Inquiries</p>
                    <p className="text-white font-medium group-hover:text-neon-cyan transition-colors">contact@digitcrew.in</p>
                  </div>
                </a>
                
                <a href="tel:+919999999999" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Direct Line</p>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors">+91 99999 99999</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 transition-all">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-medium">DIGIT Campus, Cyber City</p>
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
                        <a href={\`mailto:\${member.email}\`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm break-all">
                          <Mail size={14} className="shrink-0" />
                          <span className="truncate">{member.email}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>`;

content = content.replace(oldJSX, newJSX);

fs.writeFileSync('src/components/ContactUs.tsx', content);
