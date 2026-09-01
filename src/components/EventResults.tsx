import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Trophy, Gamepad2, Clapperboard, MonitorPlay, Brush, ImageIcon, Lightbulb, ShoppingBag, Bug, Video, Bot, UserCheck, Calendar, Clock, MapPin, Sparkles, AlertCircle, Shirt } from 'lucide-react';
import { cn } from '../lib/utils';

// Data for Results & Preliminary Qualifiers
const RESULTS_DATA = [
  // --- INTRA-SCHOOL: PREPARATORY STAGE ---
  {
    id: 'digimagic-2026',
    eventName: 'DigiMagic',
    category: 'Intra-School: Preparatory Stage',
    genre: 'Creative',
    icon: Brush,
    image: '/digi-magic.png',
    preliminaryQualifiers: [
      { name: 'Avyaan Jain', grade: 'Class 3 E', status: 'Qualifier' },
      { name: 'Vidhi Chopra', grade: 'Class 3 A', status: 'Qualifier' },
      { name: 'Avyay Sharma', grade: 'Class 3 D', status: 'Qualifier' },
      { name: 'Akshra Jha', grade: 'Class 3 C', status: 'Qualifier' },
      { name: 'Vyom', grade: 'Class 3 A', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'Akshara Jha', grade: 'Class III-C' },
      { position: '2ND', name: 'Avyaan Jain', grade: 'Class III-E' },
      { position: '3RD', name: 'Vyom Aggarwal', grade: 'Class III-A' },
    ]
  },
  {
    id: 'digiposter-2026',
    eventName: 'DigiPoster',
    category: 'Intra-School: Preparatory Stage',
    genre: 'Design',
    icon: ImageIcon,
    image: '/digi-poster.png',
    preliminaryQualifiers: [
      { name: 'Manisha Kandpal', grade: 'Class 4 D', status: 'Qualifier' },
      { name: 'Agrim Agrahari', grade: 'Class 4 D', status: 'Qualifier' },
      { name: 'Athrav Sethi', grade: 'Class 4 C', status: 'Qualifier' },
      { name: 'Savneet Kaur', grade: 'Class 4 D', status: 'Qualifier' },
      { name: 'Nayra Jha', grade: 'Class 4 B', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'Savneet Kaur', grade: 'Class IV-D' },
      { position: '2ND', name: 'Nayra Jha', grade: 'Class IV-B' },
      { position: '3RD', name: 'Atharv Sethi', grade: 'Class IV-C' },
    ]
  },
  {
    id: 'digislides-2026',
    eventName: 'DigiSlides',
    category: 'Intra-School: Preparatory Stage',
    genre: 'Presentation',
    icon: MonitorPlay,
    image: '/digi-slides.png',
    preliminaryQualifiers: [
      { name: 'Anuvrat', grade: 'Class 5 C', status: 'Qualifier' },
      { name: 'Aayra', grade: 'Class 5 D', status: 'Qualifier' },
      { name: 'Anvika', grade: 'Class 5 A', status: 'Qualifier' },
      { name: 'Shourya', grade: 'Class 5 C', status: 'Qualifier' },
      { name: 'Tiana Gupta', grade: 'Class 5 B', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'Shaurya Bansal', grade: 'Class V-C' },
      { position: '2ND', name: 'Aayra Kapoor', grade: 'Class V-D' },
      { position: '3RD', name: 'Anvika Caroli', grade: 'Class V-A' },
    ]
  },

  // --- INTRA-SCHOOL: MIDDLE STAGE ---
  {
    id: 'digitales-2026',
    eventName: 'DigiTales',
    category: 'Intra-School: Middle Stage',
    genre: 'Storytelling',
    icon: Clapperboard,
    image: '/digi-tales.png',
    preliminaryQualifiers: [
      { name: 'Prajesh Rastogi', grade: 'Class 6 D', status: 'Qualifier' },
      { name: 'Purvanshi Arora', grade: 'Class 6 F', status: 'Qualifier' },
      { name: 'Aashvi Singhal', grade: 'Class 6 E', status: 'Qualifier' },
      { name: 'Ishaan Agarwal', grade: 'Class 6 B', status: 'Qualifier' },
      { name: 'Kavyaanshi', grade: 'Class 6 D', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'Purvanshi Arora', grade: 'Class VI-F' },
      { position: '2ND', name: 'Prajesh Rastogi', grade: 'Class VI-D' },
      { position: '3RD', name: 'Aashvi Singhal', grade: 'Class VI-E' },
    ]
  },
  {
    id: 'digiquiz-2026',
    eventName: 'DigiQuiz',
    category: 'Intra-School: Middle Stage',
    genre: 'Knowledge',
    icon: Lightbulb,
    image: '/digi-quiz.png',
    winners: [
      { position: '1ST', name: 'Aviana Jain', grade: 'Class VII-D' },
      { position: '2ND', name: 'Aayra Jain', grade: 'Class VII-E' },
      { position: '3RD', name: 'Akshat Sharma', grade: 'Class VII-D' },
    ]
  },
  {
    id: 'digibuild-2026',
    eventName: 'DigiBuild',
    category: 'Intra-School: Middle Stage',
    genre: 'Technical',
    icon: Bot,
    image: '/digi-build.png',
    winners: [
      { position: '1ST', name: 'Gurpertaap Singh & Mihit Jindal', grade: 'Class VIII-C' },
      { position: '2ND', name: 'Naira Arora & Ishani Saini', grade: 'Class VIII-C' },
      { position: '3RD', name: 'Dhairya Baheti & Rayyan Malik', grade: 'Class VIII-A' },
    ]
  },

  // --- INTRA-SCHOOL: SENIOR STAGE ---
  {
    id: 'digitote-2026',
    eventName: 'DigiTote',
    category: 'Intra-School: Senior Stage',
    genre: 'Design',
    icon: ShoppingBag,
    image: '/digi-tote.png',
    winners: [
      { position: '1ST', name: 'Vanshika Anand & Siddhi Garg', grade: 'Class X-C' },
      { position: '2ND', name: 'Sagrika Kashyap (X-E) & Kanishka Kashyap (XI-A)', grade: 'Class X-E & XI-A' },
      { position: '3RD (TIE)', name: 'Anushka Jha & Priyanshi Ranot', grade: 'Class X-B' },
      { position: '3RD (TIE)', name: 'Eeshvi Sudan & Himadri Singh', grade: 'Class IX-F' },
    ]
  },
  {
    id: 'digibattles-2026',
    eventName: 'DigiBattles',
    category: 'Intra-School: Senior Stage',
    genre: 'Gaming',
    icon: Gamepad2,
    image: '/digi-battles.png',
    winners: [
      { position: '1ST', name: 'Adhiraaj Sharma (XII-E), Samaksh Jain (XII-E), Sahej Singh Sodhi (XII-E) & Savir Gupta (XII-E)', grade: 'Class XII-E' },
      { position: '2ND', name: 'Tanmay Goswami (XI-F), Aanand Bhooshan (XI-A), Shayan Imam (XI-E) & Lakshay Mittal (XI-E)', grade: 'Class XI-F, XI-A & XI-E' },
      { position: '3RD', name: 'Antrix Panwar (XII-D), Vihaan Pandey (XII-D), Vansh Arora (XII-E), Aarav Sharma (XII-E) & Syon Sharma (XII-D)', grade: 'Class XII-D & XII-E' },
    ]
  },
  {
    id: 'digicipher-2026',
    eventName: 'DigiCipher',
    category: 'Intra-School: Senior Stage',
    genre: 'Cryptography',
    icon: Bug,
    image: '/digi-cipher.png',
    winners: [
      { position: '1ST', name: 'Aarav Modi', grade: 'Class X-F' },
      { position: '2ND', name: 'Nysa Jaiswal', grade: 'Class IX-A' },
      { position: '3RD', name: 'Arham Jain', grade: 'Class IX-B' },
    ]
  },
  {
    id: 'digimeme-2026',
    eventName: 'DigiMeme',
    category: 'Intra-School: Senior Stage',
    genre: 'Meme',
    icon: ImageIcon,
    image: '/digi-meme.png',
    preliminaryQualifiers: [
      { name: 'Divyanshi Chaudhary & Neha Garg', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Hargun Singh & Anmol Saini', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Tanmay & Medhansh', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Yashaswi Sahay & Anandi Singh', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Arshia Mehta & Anushka Jha', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Aadhya Raina & Jaanvi', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Labdhi Jain & Palchin Singhal', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Hirak Jain & Rudra Singh', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'Rishabh Raina & Idhant Sharma', grade: 'Class 9-12', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'Anandi Singh (IX-C) & Yashaswi Sahay (IX-E)', grade: 'Class IX-C & IX-E' },
      { position: '2ND', name: 'Rishabh Raina (XII-C) & Idhant Sharma (XII-F)', grade: 'Class XII-C & XII-F' },
      { position: '3RD', name: 'Tanmay & Medhansh', grade: 'Class X-F' },
    ]
  },

  // --- INTER-SCHOOL EVENTS ---
  {
    id: 'digiscratch-2026',
    eventName: 'DigiScratch',
    category: 'Inter School Events',
    genre: 'Creative',
    icon: Bot,
    image: '/Digi-Scratch.png',
    winners: [
      { position: '1ST', name: 'Springdales Public School', grade: 'Inter-School Winner' },
      { position: '2ND', name: 'Darbari Lal DAV Model School', grade: 'Inter-School 1st Runner-Up' },
      { position: '3RD', name: 'Veda Vyasa DAV Public School', grade: 'Inter-School 2nd Runner-Up' },
    ]
  },
  {
    id: 'digiframes-2026',
    eventName: 'DigiFrames',
    category: 'Inter School Events',
    genre: 'Creative',
    icon: Video,
    image: '/Digi-Frames.png',
    winners: [
      { position: '1ST', name: 'East Point School', grade: 'Inter-School Winner' },
      { position: '2ND', name: 'Carmel Convent School', grade: 'Inter-School 1st Runner-Up' },
      { position: '3RD', name: 'Mayoor School', grade: 'Inter-School 2nd Runner-Up' },
    ]
  },
  {
    id: 'digithon-2026',
    eventName: 'DigiThon',
    category: 'Inter School Events',
    genre: 'Technical',
    icon: Bot,
    image: '/digi-thon.png',
    winners: [
      { position: '1ST', name: 'Ryan International School, Mayur Vihar', grade: 'Inter-School Winner' },
      { position: '2ND', name: 'The Indian School', grade: 'Inter-School 1st Runner-Up' },
      { position: '3RD', name: 'ASN Senior Secondary School, Mayur Vihar', grade: 'Inter-School 2nd Runner-Up' },
    ]
  },
  {
    id: 'digiai-2026',
    eventName: 'DigiAI',
    category: 'Inter School Events',
    genre: 'Creative',
    icon: Bot,
    image: '/Digi-AI.png',
    winners: [
      { position: '1ST', name: 'DAV Public School, Gurugram', grade: 'Inter-School Winner' },
      { position: '2ND', name: 'Ryan International School, Mayur Vihar', grade: 'Inter-School 1st Runner-Up' },
      { position: '3RD', name: 'Lotus Valley International School, Noida', grade: 'Inter-School 2nd Runner-Up' },
    ]
  },
];

const CATEGORIES = ['All', 'Intra-School: Preparatory Stage', 'Intra-School: Middle Stage', 'Intra-School: Senior Stage', 'Inter School Events'];
const GENRES = ['All', 'Creative', 'Design', 'Technical', 'Storytelling', 'Knowledge', 'Gaming', 'Cryptography', 'Meme', 'Presentation'];

export default function EventResults() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredResults = useMemo(() => {
    return RESULTS_DATA.filter((item) => {
      const matchesSearch = item.eventName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.winners.some(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                   w.grade.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            (item.preliminaryQualifiers && item.preliminaryQualifiers.some(q => q.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                                                                 q.grade.toLowerCase().includes(searchQuery.toLowerCase())));
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesGenre = selectedGenre === 'All' || item.genre.toLowerCase() === selectedGenre.toLowerCase();
      
      return matchesSearch && matchesCategory && matchesGenre;
    });
  }, [searchQuery, selectedCategory, selectedGenre]);

  return (
    <section id="results" className="py-20 relative bg-cyber-black overflow-hidden z-10 border-t border-[rgba(0,240,255,0.18)]">
      {/* Cyber Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Glow ambient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan font-mono font-bold text-xs uppercase tracking-[0.3em] mb-4 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
            <Sparkles size={14} className="text-neon-cyan animate-pulse" />
            <span>Official Announcement</span>
          </div>
          <h2 
            className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest text-white mb-6"
            style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}
          >
            DIGIT 10.0 <span className="text-neon-cyan">WINNERS</span>
          </h2>
          <p className="text-slate-300 font-sans max-w-2xl mx-auto text-base">
            Heartiest congratulations to all champions and qualifiers! Your creativity, dedication, and competitive spirit have made DIGIT 10.0 truly remarkable.
          </p>
        </div>

        {/* IMPORTANT INSTRUCTIONS BANNER FOR ALL WINNERS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative overflow-hidden rounded-2xl md:rounded-3xl border-2 border-amber-400/50 bg-gradient-to-br from-[#0c1a2e]/90 via-[#071322]/95 to-[#160c24]/90 p-6 md:p-8 shadow-[0_0_35px_rgba(251,191,36,0.18)]"
        >
          {/* Top accent light */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-amber-400/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <span className="text-amber-400 font-mono font-bold text-xs uppercase tracking-widest block mb-1">
                  🚨 Mandatory Directive
                </span>
                <h3 className="font-display font-black text-xl md:text-2xl text-white tracking-wide">
                  IMPORTANT INSTRUCTIONS FOR ALL WINNERS
                </h3>
                <p className="text-slate-300 text-sm md:text-base mt-1">
                  All winners are requested to report to the <strong className="text-amber-300">School Auditorium on 2nd September at 8:00 AM</strong> in <strong className="text-amber-300">School Grey Uniform</strong>.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono font-bold text-xs uppercase tracking-widest">
              <span>⚠️ REPORT ON TIME</span>
            </div>
          </div>

          {/* Quick Detail Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cyber-black/60 border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Date</span>
                <span className="text-xs font-bold font-sans text-white">2nd September 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cyber-black/60 border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Reporting Time</span>
                <span className="text-xs font-bold font-sans text-white">8:00 AM Sharp</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cyber-black/60 border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Venue</span>
                <span className="text-xs font-bold font-sans text-white">School Auditorium</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cyber-black/60 border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                <Shirt size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Dress Code</span>
                <span className="text-xs font-bold font-sans text-white">School Grey Uniform</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between items-center bg-[#0F172A] p-4 rounded-2xl border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
          <div className="relative w-full md:flex-grow md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-cyan/70 group-focus-within:text-neon-cyan transition-colors" />
            <input 
              type="text" 
              placeholder="Search event, school, or winner name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cyber-black/50 border border-neon-cyan/30 rounded-xl py-3 pl-12 pr-4 text-white font-sans focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <div className="relative w-full sm:w-64 flex items-center gap-3">
              <Filter className="w-5 h-5 text-neon-cyan/70 shrink-0" />
              <div className="relative w-full">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none bg-cyber-black/50 border border-neon-cyan/30 rounded-xl py-3 px-4 text-white font-sans focus:outline-none focus:border-neon-cyan transition-all cursor-pointer text-xs md:text-sm"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat} className="bg-cyber-black text-white">{cat}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-neon-cyan/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredResults.map((result) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={result.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/[0.03] border border-neon-cyan/30 rounded-2xl p-6 group hover:border-neon-cyan hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Glowing edge effect on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div>
                    {/* Event Image */}
                    {result.image && (
                      <div className="h-32 -mx-6 -mt-6 mb-6 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-transparent to-transparent z-10 opacity-80" />
                        <img src={result.image} alt={result.eventName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                      </div>
                    )}
                    
                    {/* Event Header */}
                    <div className="flex items-center justify-between mb-6 border-b border-neon-cyan/20 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan group-hover:scale-110 group-hover:bg-neon-cyan/20 transition-all">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-white uppercase tracking-wider text-lg group-hover:text-neon-cyan transition-colors">{result.eventName}</h3>
                          <p className="text-xs font-mono text-neon-cyan/70 uppercase tracking-widest">{result.category} • {result.genre}</p>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 1: Preliminary Round Qualifiers (if any) */}
                    {result.preliminaryQualifiers && result.preliminaryQualifiers.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-neon-cyan/20">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-neon-cyan uppercase tracking-wider">
                            <UserCheck size={14} className="text-neon-cyan shrink-0" />
                            <span>Preliminary Round Qualifiers</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 tracking-widest uppercase">
                            {result.preliminaryQualifiers.length} Qualified
                          </span>
                        </div>

                        <div className="space-y-2">
                          {result.preliminaryQualifiers.map((qualifier, qIdx) => (
                            <div 
                              key={qIdx} 
                              className="flex items-center justify-between p-2.5 rounded-xl bg-cyber-black/40 border border-neon-cyan/15 hover:border-neon-cyan/40 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                <span className="w-5 h-5 rounded-md bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                                  {qIdx + 1}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <h4 className="font-sans font-semibold text-sm text-slate-100 break-words leading-snug">
                                    {qualifier.name}
                                  </h4>
                                  {qualifier.grade && (
                                    <p className="font-mono text-[11px] text-slate-400 mt-0.5">{qualifier.grade}</p>
                                  )}
                                </div>
                              </div>
                              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 shrink-0 ml-2">
                                {qualifier.status || 'Qualifier'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION 2: Final Round Winners */}
                    <div>
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-400/20">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                          <Trophy size={14} className="text-amber-400 shrink-0" />
                          <span>Podium Champions</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/30 tracking-widest uppercase">
                          Official
                        </span>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        {result.winners.map((winner, index) => {
                          const isFirst = winner.position.startsWith('1');
                          const isSecond = winner.position.startsWith('2');
                          return (
                            <div key={index} className="flex flex-col relative p-3 rounded-xl bg-cyber-black/50 border border-[rgba(0,240,255,0.18)] group-hover:border-neon-cyan/30 transition-colors">
                              <div className="flex items-center justify-between mb-1">
                                <span className={cn(
                                  "font-display font-black text-xs tracking-widest px-2 py-0.5 rounded",
                                  isFirst ? "bg-amber-400/20 text-amber-400 border border-amber-400/40 shadow-[0_0_10px_rgba(251,191,36,0.5)]" :
                                  isSecond ? "bg-slate-300/20 text-slate-300 border border-slate-300/40" :
                                  "bg-orange-600/20 text-orange-400 border border-orange-600/40"
                                )}>
                                  {winner.position}
                                </span>
                                {isFirst && <Trophy size={14} className="text-amber-400 shrink-0 animate-pulse" />}
                              </div>
                              <h4 className="font-sans font-bold text-white text-sm break-words leading-snug">{winner.name}</h4>
                              <p className="font-mono text-xs text-neon-cyan/70 mt-0.5">{winner.grade}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredResults.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-neon-cyan/50 flex items-center justify-center mx-auto mb-4 animate-[spin_4s_linear_infinite]">
                <Search className="w-6 h-6 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-2">NO RECORDS FOUND</h3>
              <p className="text-slate-400 font-mono">Archive search null. Adjust your parameters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

