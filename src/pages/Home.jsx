import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Globe2, HeartHandshake, Users, Sparkles, ShieldCheck, Quote } from 'lucide-react';
import BlurText from '../components/ui/BlurText';
import Footer from '../components/layout/Footer';
import heroBgImg from '../assets/bible-hyperreal-single-intact.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const featuresRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Features Bento Box Animation
      gsap.fromTo('.bento-item',
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1, 
          scale: 1,
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%'
          }
        }
      );

      // Testimonial Animation
      gsap.fromTo('.testimonial-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: 'top 75%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const bentoFeatures = [
    { 
      title: 'Academic Excellence', 
      desc: 'Rigorous theological education taught by experienced, world-class faculty.', 
      icon: GraduationCap,
      span: 'md:col-span-2 md:row-span-2',
      bg: 'bg-[#1e3a8a]',
      text: 'text-white',
      descText: 'text-blue-100',
      iconColor: 'text-[#b45309]'
    },
    { 
      title: 'Flexible Education', 
      desc: 'Study at your own pace with continuous enrollment.', 
      icon: Globe2,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-white',
      text: 'text-slate-900',
      descText: 'text-slate-500',
      iconColor: 'text-sky-500'
    },
    { 
      title: 'Holistic Training', 
      desc: 'Developing servant leaders spiritually and practically.', 
      icon: HeartHandshake,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-white',
      text: 'text-slate-900',
      descText: 'text-slate-500',
      iconColor: 'text-sky-500'
    },
    { 
      title: 'Strong Community', 
      desc: 'Interactive support through forums and dedicated mentorship.', 
      icon: Users,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-white',
      text: 'text-slate-900',
      descText: 'text-slate-500',
      iconColor: 'text-sky-500'
    },
    { 
      title: 'Practical Application', 
      desc: 'Learning that transforms directly into ministry action.', 
      icon: Sparkles,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-slate-900',
      text: 'text-white',
      descText: 'text-slate-300',
      iconColor: 'text-sky-400'
    },
    { 
      title: 'Affordable Pricing', 
      desc: 'Cost should never be a barrier to fulfilling God’s purpose.', 
      icon: ShieldCheck,
      span: 'md:col-span-2 md:row-span-1',
      bg: 'bg-sky-100',
      text: 'text-sky-900',
      descText: 'text-sky-700',
      iconColor: 'text-sky-600'
    }
  ];

  return (
    <div className="bg-slate-50 bg-tactile-noise w-full h-[100dvh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      
      {/* HERO SECTION - CINEMATIC FULL BLEED */}
      <section className="relative h-[100dvh] snap-start flex items-center justify-center pt-20 px-4 overflow-hidden bg-black">
        {/* Full Bleed Image with Parallax Fixed Position */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBgImg} 
            alt="ABTS Hero Background" 
            className="w-full h-[100dvh] object-cover opacity-60 fixed top-0 left-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 fixed top-0 left-0 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] fixed top-0 left-0 pointer-events-none"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
             <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest shadow-sm">
                Empowering Leaders
             </div>
          </div>
          
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-headings)' }}>
            <BlurText 
              text="Rooted in Scripture."
              delay={50}
              animateBy="words"
              direction="top"
              className="justify-center drop-shadow-xl"
            />
            <BlurText 
              text="Equipped for Service."
              delay={50}
              animateBy="words"
              direction="bottom"
              className="justify-center text-[#b45309] mt-2 drop-shadow-xl"
            />
          </div>
          
          <p className="text-lg md:text-2xl text-white/80 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Apostolic Biblical Theological Seminary brings rigorous, world-class theological education directly to you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/online-application-form-for-admission" className="group relative px-8 py-4 bg-[#b45309] text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-black/50">
              <span className="relative z-10">Apply Online</span>
            </Link>
            <Link to="/objectives" className="px-8 py-4 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-sm font-semibold hover:bg-white/20 transition-all shadow-sm">
              Read Our Vision
            </Link>
          </div>
        </div>
      </section>
      
      {/* FEATURES GRID */}
      <section ref={featuresRef} className="h-[100dvh] snap-start py-32 bg-white/95 backdrop-blur-md bg-grid-pattern border-y border-slate-200/50 flex flex-col justify-center relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }}>
              Why Choose ABTS?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A modern approach to theological education that fits your life and ministry context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
            {bentoFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className={`bento-item rounded-3xl p-8 shadow-sm ring-1 ring-slate-900/5 ${feat.span} ${feat.bg} flex flex-col justify-between group overflow-hidden relative`}
                >
                  <div className="relative z-10">
                    <Icon className={`w-10 h-10 mb-6 ${feat.iconColor}`} />
                    <h3 className={`text-2xl font-bold mb-3 ${feat.text}`} style={{ fontFamily: 'var(--font-headings)' }}>
                      {feat.title}
                    </h3>
                  </div>
                  <p className={`text-lg relative z-10 font-medium leading-snug ${feat.descText}`}>
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section ref={testimonialRef} className="h-[100dvh] snap-start py-32 px-4 relative overflow-hidden bg-slate-50 flex items-center justify-center z-10 shadow-2xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif font-black text-slate-200 opacity-20 pointer-events-none select-none">
          "
        </div>
        <div className="testimonial-content max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-16 h-16 text-sky-400 mx-auto mb-10 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-12" style={{ fontFamily: 'var(--font-headings)' }}>
            "God often shapes His servants within the very contexts where they are already serving. Our programs are designed to complement your ministry."
          </h2>
          <div className="inline-block">
            <div className="font-bold text-slate-900 text-lg uppercase tracking-widest">Dr. C.P. Thomas</div>
            <div className="text-[#b45309] font-medium">Founder & President</div>
          </div>
        </div>
      </section>
      
      {/* FOOTER SNAP */}
      <section className="h-[100dvh] snap-start relative flex flex-col justify-end bg-slate-50">
        <Footer />
      </section>
    </div>
  );
}
