import React from 'react';
import { motion } from 'motion/react';

const timelineData = [
  {
    year: "2012",
    title: "DIGIT 1.0",
    description: "Where it all began — a courageous debut that planted the seed for a thriving tech community.",
    link: "https://aisdigit.blogspot.com/"
  },
  {
    year: "2014",
    title: "DIGIT 2.0",
    description: "The second chapter proved the first was no fluke — bigger stages, sharper ideas, stronger roots.",
    link: "https://digit14.blogspot.com/"
  },
  {
    year: "2016",
    title: "DIGIT 3.0",
    description: "A turning point — workshops expanded, speakers inspired, and the audience doubled in spirit.",
    link: "https://aisdigit.wixsite.com/digit2016"
  },
  {
    year: "2018",
    title: "DIGIT 4.0",
    description: "Faculty and students joined forces, elevating the fest into a true celebration of school talent.",
    link: "https://ahlcondigit.wixsite.com/2018"
  },
  {
    year: "2020",
    title: "DIGIT 5.0",
    description: "School screens replaced school halls — students adapted brilliantly, keeping the fest alive online.",
    link: "https://ahldigit.wixsite.com/2020"
  },
  {
    year: "2022",
    title: "DIGIT 6.0",
    description: "Back on campus and better than ever — corridors buzzed with demos, competitions, and school spirit.",
    link: "https://ahlintl.wixsite.com/digit"
  },
  {
    year: "2023",
    title: "DIGIT 7.0",
    description: "AI arrived in our classrooms — students showcased projects that amazed teachers and peers alike.",
    link: "https://ahlconintl2023.wixsite.com/digit"
  },
  {
    year: "2024",
    title: "DIGIT 8.0",
    description: "The biggest school turnout yet — every department competed, collaborated, and left a mark on the fest.",
    link: "https://aisdigit8.wixsite.com/home"
  },
  {
    year: "2025",
    title: "DIGIT 9.0",
    description: "With one edition to go, excitement built across the school as a historic milestone drew near.",
    link: "https://aisdigit9.wixsite.com/home"
  },
  {
    year: "2026",
    title: "DIGIT 10.0 10th Anniversary",
    description: "A landmark moment for our school — ten years of student ingenuity, teamwork, and tech excellence, celebrated together.",
    link: ""
  }
];

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 relative">
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/50 to-neon-cyan/0 md:-translate-x-1/2" />
      
      <div className="space-y-12 relative pb-12">
        {timelineData.map((item, index) => (
          <motion.div key={item.year} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8}} viewport={{once: true}} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Center Node / Dot */}
            <div className="absolute left-[20px] md:left-1/2 top-6 md:top-1/2 w-3 h-3 bg-cyber-black border-2 border-neon-cyan rounded-full -translate-x-[5px] md:-translate-x-1/2 md:-translate-y-1/2 group-hover:scale-150 group-hover:bg-neon-cyan transition-all shadow-[0_0_10px_rgba(0,255,255,0.5)] z-10" />
            
            {/* Year / Floating Label */}
            <div className={`w-full md:w-5/12 flex ${index % 2 === 0 ? 'md:justify-start pl-[50px] md:pl-0' : 'md:justify-end pl-[50px] md:pl-0'}`}>
              <div className="relative inline-flex items-center">
                <span className="text-4xl md:text-6xl font-display font-black text-white/5 group-hover:text-neon-cyan/10 transition-colors pointer-events-none select-none">
                  {item.year}
                </span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-xl text-neon-cyan font-bold tracking-[0.2em] opacity-100 uppercase mix-blend-screen whitespace-nowrap">
                   {item.year}
                </span>
              </div>
            </div>

            {/* Content Box */}
            <a 
              href={item.link || "#"}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noopener noreferrer" : undefined}
              className={`w-full md:w-5/12 ml-[50px] md:ml-0 glass p-6 rounded-2xl border-white/5 border group-hover:border-neon-cyan/30 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] block ${!item.link ? "cursor-default" : "cursor-pointer"}`}
            > 
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              {item.link && (
                <div className="mt-4 text-neon-cyan text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  [ VIEW_ARCHIVE ]
                  <span className="w-4 h-[1px] bg-neon-cyan inline-block"></span>
                </div>
              )}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
