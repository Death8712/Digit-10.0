import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Trophy, Gamepad2, Clapperboard, MonitorPlay, Brush, ImageIcon, Lightbulb, ShoppingBag, Bug, Video, Bot, UserCheck, Award } from 'lucide-react';
import { cn } from '../lib/utils';

// Data for Results & Preliminary Qualifiers
const RESULTS_DATA = [
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digitales-2026',
    eventName: 'DigiTales',
    category: 'Intra-School: Middle Stage',
    genre: 'Storytelling',
    icon: Clapperboard,
    image: '/digi-tales.png',
    preliminaryQualifiers: [
      { name: 'No Result', grade: 'Class 6', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 6', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 6', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiquiz-2026',
    eventName: 'DigiQuiz',
    category: 'Intra-School: Middle Stage',
    genre: 'Knowledge',
    icon: Lightbulb,
    image: '/digi-quiz.png',
    preliminaryQualifiers: [
      { name: 'No Result', grade: 'Class 7', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 7', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 7', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digibuild-2026',
    eventName: 'DigiBuild',
    category: 'Intra-School: Middle Stage',
    genre: 'Technical',
    icon: Bot,
    image: '/digi-build.png',
    preliminaryQualifiers: [
      { name: 'No Result', grade: 'Class 8', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 8', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 8', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digitote-2026',
    eventName: 'DigiTote',
    category: 'Intra-School: Senior Stage',
    genre: 'Design',
    icon: ShoppingBag,
    image: '/digi-tote.png',
    preliminaryQualifiers: [
      { name: 'No Result', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 9-12', status: 'Qualifier' },
      { name: 'No Result', grade: 'Class 9-12', status: 'Qualifier' },
    ],
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiscratch-2026',
    eventName: 'DigiScratch',
    category: 'Inter School Events',
    genre: 'Creative',
    icon: Bot,
    image: '/Digi-Scratch.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
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
      { position: '1ST', name: 'Aarav Modi', grade: '10th F' },
      { position: '2ND', name: 'Nysa Jaiswal', grade: '9th A' },
      { position: '3RD', name: 'Arham Jain', grade: '9th B' },
    ]
  }
];

const CATEGORIES = ['All', 'Intra-School: Preparatory Stage', 'Intra-School: Middle Stage', 'Intra-School: Senior Stage', 'Inter School Events'];
const GENRES = ['All', 'Creative', 'Design', 'Tech', 'Coding', 'Gaming'];

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
      const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre;
      
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
        <div className="text-center mb-16">
          <span className="text-neon-cyan font-black uppercase tracking-[0.3em] text-xs mb-4 block">Digital Archive</span>
          <h2 
            className="text-4xl md:text-6xl font-display font-black uppercase tracking-widest text-white mb-6"
            style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}
          >
            DIGIT 10.0 <span className="text-neon-cyan">RESULTS</span>
          </h2>
          <p className="text-slate-400 font-sans max-w-2xl mx-auto">
            The mission log. Explore preliminary round qualifiers and final round champions who conquered the digital frontier.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 justify-between items-center bg-[#0F172A] md:backdrop-blur-md p-4 rounded-2xl border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
          <div className="relative w-full md:flex-grow md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-cyan/70 group-focus-within:text-neon-cyan transition-colors" />
            <input 
              type="text" 
              placeholder="Search event, qualifier, or winner..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cyber-black/50 border border-neon-cyan/30 rounded-xl py-3 pl-12 pr-4 text-white font-sans focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all"
            />
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <div className="relative w-full sm:w-56 flex items-center gap-3">
              <Filter className="w-5 h-5 text-neon-cyan/70" />
              <div className="relative w-full">
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none bg-cyber-black/50 border border-neon-cyan/30 rounded-xl py-3 px-4 text-white font-sans focus:outline-none focus:border-neon-cyan transition-all cursor-pointer"
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
                  className="bg-white/[0.03] md:backdrop-blur-xl border border-neon-cyan/30 rounded-2xl p-6 group hover:border-neon-cyan hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] relative overflow-hidden flex flex-col justify-between"
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

                    {/* SECTION 1: Preliminary Round Qualifiers */}
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
                          <span>Final Round Winners</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/30 tracking-widest uppercase">
                          Podium
                        </span>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        {result.winners.map((winner, index) => (
                          <div key={index} className="flex flex-col relative p-3 rounded-xl bg-cyber-black/40 border border-[rgba(0,240,255,0.18)] group-hover:border-neon-cyan/20 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                              <span className={cn(
                                "font-display font-black text-xs tracking-widest px-2 py-0.5 rounded",
                                index === 0 ? "bg-amber-400/20 text-amber-400 border border-amber-400/30 shadow-[0_0_8px_rgba(251,191,36,0.5)]" :
                                index === 1 ? "bg-slate-300/20 text-slate-300 border border-slate-300/30" :
                                "bg-orange-600/20 text-orange-500 border border-orange-600/30"
                              )}>
                                {winner.position}
                              </span>
                              {index === 0 && <Trophy size={14} className="text-amber-400 shrink-0" />}
                            </div>
                            <h4 className="font-sans font-bold text-white text-sm truncate">{winner.name}</h4>
                            <p className="font-mono text-xs text-slate-400 truncate mt-0.5">{winner.grade}</p>
                          </div>
                        ))}
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
