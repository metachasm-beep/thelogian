import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Globe2, HeartHandshake, Users, Sparkles, ShieldCheck } from 'lucide-react';
import HomeFold from '../components/folds/HomeFold';
import BlurText from '../components/ui/BlurText';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const visionRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vision Section Details Animation (BlurText handles the title)
      gsap.fromTo('.vision-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 75%'
          }
        }
      );

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
      
      // CTA Animation
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%'
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
      bg: 'bg-sky-900',
      text: 'text-white',
      descText: 'text-sky-100',
      iconColor: 'text-sky-300'
    },
    { 
      title: 'Flexible Education', 
      desc: 'Study at your own pace with continuous enrollment.', 
      icon: Globe2,
      span: 'md:col-span-1 md:row-span-1',
      bg: 'bg-sky-50',
      text: 'text-sky-950',
      descText: 'text-sky-800/70',
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
    <div className="bg-white selection:bg-sky-200 selection:text-sky-900">
      <HomeFold />

      {/* VISION SECTION - Editorial Centered */}
      <section ref={visionRef} className="py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="vision-fade inline-flex items-center justify-center gap-2 mb-8">
          <div className="h-[1px] w-8 bg-sky-600"></div>
          <h2 className="text-sm font-bold tracking-widest text-sky-600 uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Purpose
          </h2>
          <div className="h-[1px] w-8 bg-sky-600"></div>
        </div>
        
        <div className="mb-10 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <BlurText 
            text="Rooted in Scripture."
            delay={50}
            animateBy="words"
            direction="top"
            className="justify-center"
          />
          <BlurText 
            text="Equipped for Service."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="justify-center text-slate-400 mt-2"
          />
        </div>

        <p className="vision-fade text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
          We bring the seminary education to you. God often shapes His servants within the very contexts where they are already serving. Our programs are designed to complement your ministry, allowing learning to flow naturally into practice.
        </p>
        
        <div className="vision-fade mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/objectives" className="group relative px-8 py-4 bg-slate-950 text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-slate-900/20">
            <div className="absolute inset-0 bg-sky-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10">Read Our Vision</span>
          </Link>
          <Link to="/doctrinal-statement-of-faith" className="px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-semibold hover:border-slate-900 hover:text-slate-900 transition-all hover:scale-105">
            Statement of Faith
          </Link>
        </div>
      </section>

      {/* BENTO BOX FEATURES GRID */}
      <section ref={featuresRef} className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose ABTS?
            </h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">
              Credible, flexible, fully online seminary programs designed for the modern minister.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[240px]">
            {bentoFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className={`bento-item rounded-3xl p-8 flex flex-col justify-center items-center text-center transition-transform hover:scale-[1.02] duration-300 shadow-sm border border-black/5 relative overflow-hidden ${feature.span} ${feature.bg} ${feature.text}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  <Icon className={`w-12 h-12 mb-6 ${feature.iconColor}`} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg font-medium leading-relaxed ${feature.descText} max-w-sm`}>
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITORIAL TESTIMONIAL */}
      <section ref={testimonialRef} className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Massive background quote mark for editorial feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif font-black text-slate-50 opacity-50 select-none pointer-events-none leading-none -z-0">
          "
        </div>
        
        <div className="testimonial-content max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-sky-600 uppercase mb-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Student Voices
          </h2>
          
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.3] mb-16 tracking-tight">
            "ABTS has provided me with the theological depth and practical tools I needed for my ministry in Sikkim. The flexibility of online learning allowed me to study without leaving my community."
          </blockquote>
          
          <div className="flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-sky-700 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg shadow-sky-600/30 mb-6">
              J
            </div>
            <div className="font-bold text-xl text-slate-900 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Jesse Isaac Dhakal</div>
            <div className="text-sky-600 font-medium tracking-wide uppercase text-sm mt-1">From Sikkim</div>
          </div>
          
          <div className="mt-16">
            <Link to="/testimonials" className="inline-flex items-center justify-center gap-2 text-slate-500 font-semibold hover:text-sky-600 transition-colors uppercase tracking-widest text-sm pb-1 border-b-2 border-transparent hover:border-sky-600">
              Read all testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section ref={ctaRef} className="py-32 bg-sky-950 text-white relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full blur-[120px] opacity-20 mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[150px] opacity-20 mix-blend-screen"></div>
        </div>

        <div className="cta-content max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Answer <br/> the Call?
          </h2>
          <p className="text-xl md:text-2xl text-sky-200/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Considering seminary training is a significant step. Begin your journey today and prepare for a lifetime of ministry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/online-application-form-for-admission" className="px-10 py-5 bg-white text-sky-950 rounded-full font-bold text-lg hover:bg-sky-50 hover:scale-105 transition-all shadow-xl shadow-black/20">
              Begin Your Application
            </Link>
            <Link to="/online-enquiry" className="px-10 py-5 bg-sky-900/50 text-white rounded-full font-semibold text-lg border border-sky-700/50 hover:bg-sky-800 hover:border-sky-600 transition-all backdrop-blur-sm">
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-6 flex items-center gap-3 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-sky-600/30">A</span>
              ABTS
            </div>
            <p className="text-base leading-relaxed max-w-md">
              Equipping leaders through rigorous theological education and practical ministry training. Rooted in Scripture, ready for service.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/online-application-form-for-admission" className="hover:text-sky-400 transition-colors">Apply Now</Link></li>
              <li><Link to="/academic" className="hover:text-sky-400 transition-colors">Academics</Link></li>
              <li><Link to="/doctrinal-statement-of-faith" className="hover:text-sky-400 transition-colors">Statement of Faith</Link></li>
              <li><Link to="/contact-us" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <span className="text-sky-500 font-bold mt-0.5">•</span>
                <span>No 4, Veerapandi, Coimbatore, TN, India, 641019</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 font-bold mt-0.5">•</span>
                <a href="tel:+916380873580" className="hover:text-sky-400 transition-colors">+91 6380873580</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-500 font-bold mt-0.5">•</span>
                <a href="mailto:admissions.online@sibbc.org" className="hover:text-sky-400 transition-colors">admissions.online@sibbc.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
          <div>&copy; {new Date().getFullYear()} Apostolic Biblical Theological Seminary.</div>
          <div className="flex gap-6">
            <Link to="/frequently-asked-questions" className="hover:text-slate-400 transition-colors">FAQ</Link>
            <Link to="/online-enquiry" className="hover:text-slate-400 transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
