import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

export function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="teaser" className="py-20 relative z-10 bg-cyber-black/80">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-black text-white"
          >
            OFFICIAL <span className="text-neon-cyan">TRAILER</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 mt-4 max-w-2xl mx-auto"
          >
            Get a glimpse into the future of technology and innovation at DIGIT 10.0.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-neon-cyan/20 shadow-[0_0_40px_rgba(0,255,255,0.1)] group bg-black"
        >
          {!isPlaying ? (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              <img 
                src="/digit-logo.png" 
                alt="Trailer Thumbnail" 
                className="absolute inset-0 w-full h-full object-contain opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="relative z-10 w-20 h-20 rounded-full bg-neon-cyan/20 flex items-center justify-center backdrop-blur-sm border border-neon-cyan/50 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-neon-cyan fill-neon-cyan ml-1" />
              </div>
            </div>
          ) : (
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/2-RyoSg1KEk?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
