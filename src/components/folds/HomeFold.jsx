import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomeFold({ index }) {
  return (
    <section 
      id={`fold-${index}`}
      className="h-[100dvh] w-full snap-start snap-always relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/assets/abts-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/60 z-10 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-sm font-medium text-white/90 tracking-wide uppercase">Admissions Open 2024-25</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight drop-shadow-sm"
        >
          Apostolic Biblical <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Theological Seminary</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Teach Apostolic Truth. Love Well. Equipping God's Servants for the Church & Kingdom.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors focus:ring-4 focus:ring-white/30 outline-none w-full sm:w-auto shadow-lg shadow-white/10">
            Apply Now
          </button>
          <button className="px-8 py-4 bg-white/10 text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md focus:ring-4 focus:ring-white/10 outline-none w-full sm:w-auto flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-current" />
            Watch Video
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-sm uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
