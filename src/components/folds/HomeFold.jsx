import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function HomeFold() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-badge', 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.hero-title-1',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo('.hero-title-2',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="h-[100dvh] w-full relative flex flex-col items-center justify-center overflow-hidden -mt-20"
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
        <div className="absolute inset-0 bg-slate-900/70 z-10 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center justify-center mt-10">
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase">Admissions Open 2024-25</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 sm:mb-6 leading-tight drop-shadow-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="hero-title-1 block">Apostolic Biblical</div>
          <div className="hero-title-2 block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-white">Theological Seminary</div>
        </h1>
        
        <p className="hero-desc text-base sm:text-lg md:text-2xl text-slate-200 mb-8 sm:mb-10 max-w-2xl font-light leading-relaxed px-4">
          Teach Apostolic Truth. Love Well. Equipping God's Servants for the Church & Kingdom.
        </p>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto px-4">
          <Link to="/admissions" className="px-8 py-4 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-500 transition-colors focus:ring-4 focus:ring-sky-600/30 outline-none w-full sm:w-auto shadow-lg shadow-sky-900/20">
            Apply Now
          </Link>
          <button className="px-8 py-4 bg-white/10 text-white rounded-full font-medium border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-md focus:ring-4 focus:ring-white/10 outline-none w-full sm:w-auto flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-current" />
            Watch Video
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
