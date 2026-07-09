import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Trophy, Gamepad2, Clapperboard, MonitorPlay, Brush, ImageIcon, Lightbulb, ShoppingBag, Bug, Video, Bot, Eye } from 'lucide-react';
import { cn } from '../lib/utils';

// Mock Data for Results
const RESULTS_DATA = [
  {
    id: 'digimagic-2025',
    eventName: 'Digi Magic',
    category: 'Preparatory Stage',
    genre: 'Creative',
    icon: Brush,
    image: '/digi-magic.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiposter-2025',
    eventName: 'Digi Poster',
    category: 'Preparatory Stage',
    genre: 'Design',
    icon: ImageIcon,
    image: '/digi-poster.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digislides-2025',
    eventName: 'Digi Slides',
    category: 'Preparatory Stage',
    genre: 'Creative',
    icon: MonitorPlay,
    image: '/digi-slides.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digitales-2025',
    eventName: 'Digi Tales',
    category: 'Middle Stage',
    genre: 'Creative',
    icon: Clapperboard,
    image: '/digi-tales.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digifilm-2025',
    eventName: 'Digi Film',
    category: 'Middle Stage',
    genre: 'Creative',
    icon: Video,
    image: '/digi-tales.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digiquiz-2025',
    eventName: 'Digi Quiz',
    category: 'Middle Stage',
    genre: 'Tech',
    icon: Lightbulb,
    image: '/digi-quiz.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digibuild-2025',
    eventName: 'Digi Build',
    category: 'Middle Stage',
    genre: 'Tech',
    icon: Bot,
    image: '/digi-tales.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digitote-2025',
    eventName: 'Digi Tote',
    category: 'Seniors Stage',
    genre: 'Design',
    icon: ShoppingBag,
    image: '/digi-tote.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digibug-2025',
    eventName: 'DIGICT-AI',
    category: 'Seniors Stage',
    genre: 'Coding',
    icon: Bug,
    image: '/digi-bug.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digireport-2025',
    eventName: 'Digi Report',
    category: 'Seniors Stage',
    genre: 'Creative',
    icon: Eye,
    image: '/digi-tales.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  },
  {
    id: 'digibattles-2025',
    eventName: 'Digi Battles',
    category: 'Blockbuster Events',
    genre: 'Gaming',
    icon: Gamepad2,
    image: '/digi-battles.png',
    winners: [
      { position: '1ST', name: 'No Result', grade: 'TBD' },
      { position: '2ND', name: 'No Result', grade: 'TBD' },
      { position: '3RD', name: 'No Result', grade: 'TBD' },
    ]
  }
];

const CATEGORIES = ['All', 'Preparatory Stage', 'Middle Stage', 'Seniors Stage', 'Blockbuster Events'];
const GENRES = ['All', 'Creative', 'Design', 'Tech', 'Coding', 'Gaming'];

export default function EventResults() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredResults = useMemo(() => {
    return RESULTS_DATA.filter((item) => {
      const matchesSearch = item.eventName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.winners.some(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                   w.grade.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre;
      
      return matchesSearch && matchesCategory && matchesGenre;
    });
  }, [searchQuery, selectedCategory, selectedGenre]);

  return (
    <section id="results" className="py-20 relative bg-cyber-black overflow-hidden z-10 border-t border-white/5">
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
            The mission log. Explore the brilliant minds and top competitors who conquered the digital frontier.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 justify-between items-center bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-neon-cyan/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
          <div className="relative w-full md:flex-grow md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-cyan/70 group-focus-within:text-neon-cyan transition-colors" />
            <input 
              type="text" 
              placeholder="Search event, team, or school..." 
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
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full appearance-none bg-cyber-black/50 border border-neon-cyan/30 rounded-xl py-3 px-4 text-white font-sans focus:outline-none focus:border-neon-cyan transition-all cursor-pointer"
                >
                  {GENRES.map(cat => (
                    <option key={cat} value={cat} className="bg-cyber-black text-white">{cat}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-neon-cyan/70" />
                </div>
              </div>
            </div>

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
            {filteredResults.map((result, idx) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={result.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-neon-cyan/30 rounded-2xl p-6 group hover:border-neon-cyan hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] relative overflow-hidden"
                >
                  {/* Glowing edge effect on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Event Image */}
                  {result.image && (
                    <div className="h-32 -mx-6 -mt-6 mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020813] to-transparent z-10 opacity-90" />
                      <img src={result.image} alt={result.eventName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80 mix-blend-screen" />
                    </div>
                  )}
                  
                  {/* Event Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-neon-cyan/20 pb-4">
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

                  {/* Leaderboard */}
                  <div className="flex flex-col gap-4">
                    {result.winners.map((winner, index) => (
                      <div key={index} className="flex flex-col relative p-3 rounded-xl bg-cyber-black/30 border border-white/5 group-hover:border-neon-cyan/20 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className={cn(
                            "font-display font-black text-sm tracking-widest px-2 py-0.5 rounded",
                            index === 0 ? "bg-amber-400/20 text-amber-400 border border-amber-400/30 shadow-[0_0_8px_rgba(251,191,36,0.5)]" :
                            index === 1 ? "bg-slate-300/20 text-slate-300 border border-slate-300/30" :
                            "bg-orange-600/20 text-orange-500 border border-orange-600/30"
                          )}>
                            {winner.position}
                          </span>
                          {index === 0 && <Trophy size={14} className="text-amber-400 shrink-0" />}
                        </div>
                        <h4 className="font-sans font-bold text-white truncate">{winner.name}</h4>
                        <p className="font-mono text-xs text-slate-400 truncate mt-1">{winner.grade}</p>
                      </div>
                    ))}
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
