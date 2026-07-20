import React from 'react';
import BlurText from './BlurText';

export default function SubpageHero({ title }) {
  return (
    <div className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-sky-900/30 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-800/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <BlurText 
          text={title}
          delay={50}
          animateBy="words"
          direction="top"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 justify-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
      </div>
    </div>
  );
}
