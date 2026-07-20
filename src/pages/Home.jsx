import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import BlurText from '../components/ui/BlurText';
import Footer from '../components/layout/Footer';
import heroBgImg from '../assets/bible-hyperreal-single-intact.jpg';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   DESKTOP: Crossfade-scrub pinned stack
   Unchanged from original implementation.
───────────────────────────────────────────── */
function DesktopHome({ navigate, bentoFeatures }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const folds = gsap.utils.toArray('.fold');
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.folds-wrapper',
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 1,
        }
      });

      gsap.set(folds.slice(1), { autoAlpha: 0 });
      gsap.set(folds[0], { autoAlpha: 1 });

      tl.to(folds[0], { autoAlpha: 0, duration: 1 })
        .to(folds[1], { autoAlpha: 1, duration: 1 }, '<')
        .fromTo('.feature-row', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '<0.5')
        .to({}, { duration: 0.5 })
        .to(folds[1], { autoAlpha: 0, duration: 1 })
        .to(folds[2], { autoAlpha: 1, duration: 1 }, '<')
        .fromTo('.testimonial-content', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 }, '<0.5')
        .to({}, { duration: 0.5 })
        .to(folds[2], { autoAlpha: 0, duration: 1 })
        .to(folds[3], { autoAlpha: 1, duration: 1 }, '<')
        .fromTo('.academic-item', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, stagger: 0.1, duration: 0.5 }, '<0.5')
        .to({}, { duration: 0.5 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="folds-wrapper h-[100dvh] relative overflow-hidden">

      {/* HERO (Fold 1) — z-40 highest so buttons always clickable */}
      <section className="fold absolute inset-0 z-40 flex items-center justify-center pt-20 px-4 bg-black">
        <div className="absolute inset-0 z-0">
          <img src={heroBgImg} alt="ABTS Hero Background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest shadow-sm">
              Empowering Leaders
            </div>
          </div>
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]" style={{ fontFamily: 'var(--font-headings)' }}>
            <BlurText text="Rooted in Scripture." delay={50} animateBy="words" direction="top" className="justify-center drop-shadow-xl" />
            <BlurText text="Equipped for Service." delay={50} animateBy="words" direction="bottom" className="justify-center text-[#b45309] mt-2 drop-shadow-xl" />
          </div>
          <p className="text-lg md:text-2xl text-white/80 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Apostolic Biblical Theological Seminary brings rigorous, world-class theological education directly to you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/online-application-form-for-admission" onClick={() => navigate('/online-application-form-for-admission')} className="group relative px-8 py-4 bg-[#b45309] text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 shadow-xl shadow-black/50">
              <span className="relative z-10">Apply Online</span>
            </Link>
            <Link to="/objectives" onClick={() => navigate('/objectives')} className="px-8 py-4 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-sm font-semibold hover:bg-white/20 transition-all shadow-sm">
              Read Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES (Fold 2) — z-30 */}
      <section className="fold absolute inset-0 z-30 flex flex-col justify-center bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
            <div className="lg:w-1/3 pt-12">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter leading-[1.1]" style={{ fontFamily: 'var(--font-headings)' }}>
                Why Choose ABTS?
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                A sophisticated, rigorous approach to theological education that fits your life and ministry context.
              </p>
            </div>
            <div className="lg:w-2/3 border-t border-slate-200">
              {bentoFeatures.map((feat, idx) => (
                <div key={idx} className="feature-row group py-4 md:py-6 border-b border-slate-200 flex flex-col sm:flex-row gap-4 hover:bg-slate-50 transition-colors px-4 -mx-4 sm:mx-0 sm:px-0">
                  <div className="text-slate-400 font-mono text-sm tracking-widest shrink-0 pt-1">{String(idx + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }}>{feat.title}</h3>
                    <p className="text-base text-slate-600 font-medium leading-relaxed max-w-2xl">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL (Fold 3) — z-20 */}
      <section className="fold absolute inset-0 z-20 px-4 overflow-hidden bg-slate-50 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif font-black text-slate-200 opacity-20 pointer-events-none select-none">"</div>
        <div className="testimonial-content max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-16 h-16 text-sky-400 mx-auto mb-10 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-12" style={{ fontFamily: 'var(--font-headings)' }}>
            "God often shapes His servants within the very contexts where they are already serving. Our programs are designed to complement your ministry."
          </h2>
          <div className="inline-block">
            <div className="font-bold text-slate-900 text-lg uppercase tracking-widest">Dr. C.P. Thomas</div>
            <div className="text-[#b45309] font-medium">Founder &amp; President</div>
          </div>
        </div>
      </section>

      {/* ACADEMICS (Fold 4) — z-10 lowest */}
      <section className="fold absolute inset-0 z-10 bg-slate-950 flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(2,132,199,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-headings)' }}>Programs &amp; Degrees</h2>
          <p className="text-xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto">
            Where the Bible is the textbook. Accredited, rigorous theological degree programs designed for your ministry context.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['B.Th', 'B.Min', 'M.Div', 'M.Th', 'D.Min', 'Ph.D'].map((degree, idx) => (
              <div key={idx} className="academic-item border border-sky-900/50 bg-sky-900/10 backdrop-blur-sm text-sky-400 font-bold font-mono tracking-widest text-2xl md:text-4xl px-8 py-6 rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:bg-sky-900/20 hover:scale-105 transition-all cursor-default">
                {degree}
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/academic" className="text-white uppercase tracking-widest text-sm font-bold border-b border-white pb-1 hover:text-sky-400 hover:border-sky-400 transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE: Scale-Up Reveal
   Each fold sits in normal document flow.
   Entering fold:  scale 0.86 → 1.0 + fade in
   Exiting fold:   scale 1.0  → 1.07 + fade out
   Creates a "press into the page" depth feel.
   No pinning — works perfectly with iOS scroll.
───────────────────────────────────────────── */
function MobileHome({ navigate, bentoFeatures }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.m-fold').forEach((fold) => {
        const inner = fold.querySelector('.m-fold-inner');
        if (!inner) return;

        // ── ENTER: scale up from 0.86 → 1, fade in ──
        gsap.fromTo(inner,
          { scale: 0.86, opacity: 0, transformOrigin: 'center center' },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: fold,
              start: 'top 95%',
              end: 'top 10%',
              scrub: 0.8,
            }
          }
        );

        // ── EXIT: scale up to 1.07, fade away ──
        gsap.fromTo(inner,
          { scale: 1, opacity: 1 },
          {
            scale: 1.07,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: fold,
              start: 'top -5%',
              end: 'top -55%',
              scrub: 0.8,
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>

      {/* ── HERO ── */}
      <section className="m-fold relative h-[100dvh] overflow-hidden bg-black">
        <div className="m-fold-inner absolute inset-0 flex items-center justify-center px-5" style={{ willChange: 'transform, opacity' }}>
          <img src={heroBgImg} alt="ABTS Hero" className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />
          <div className="relative z-10 text-center w-full max-w-sm mx-auto pt-16">
            <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-6">
              Empowering Leaders
            </div>
            <h1 className="text-[2.5rem] font-black text-white tracking-tighter leading-[1.05] mb-5" style={{ fontFamily: 'var(--font-headings)' }}>
              Rooted in<br />
              <span className="text-[#b45309]">Scripture.</span><br />
              Equipped for<br />
              <span className="text-[#b45309]">Service.</span>
            </h1>
            <p className="text-sm text-white/70 font-medium mb-10 leading-relaxed mx-auto max-w-[280px]">
              World-class apostolic theological education — wherever you serve.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-[260px] mx-auto">
              <Link
                to="/online-application-form-for-admission"
                onClick={() => navigate('/online-application-form-for-admission')}
                className="w-full py-4 bg-[#b45309] text-white rounded-full font-bold text-sm tracking-wide shadow-lg text-center"
              >
                Apply Online
              </Link>
              <Link
                to="/objectives"
                onClick={() => navigate('/objectives')}
                className="w-full py-4 rounded-full border border-white/30 text-white bg-white/10 font-semibold text-sm text-center"
              >
                Read Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ABTS ── */}
      <section className="m-fold relative min-h-[100dvh] overflow-hidden bg-white">
        <div className="m-fold-inner absolute inset-0 flex items-center overflow-y-auto" style={{ willChange: 'transform, opacity' }}>
          <div className="w-full px-5 py-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600 mb-4">Why Choose Us</p>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter leading-tight mb-8" style={{ fontFamily: 'var(--font-headings)' }}>
              Why Choose<br />ABTS?
            </h2>
            <div className="divide-y divide-slate-100 border-t border-slate-100">
              {bentoFeatures.map((feat, idx) => (
                <div key={idx} className="py-5 flex items-start gap-4">
                  <span className="text-slate-300 font-mono text-xs shrink-0 mt-1 w-5">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug" style={{ fontFamily: 'var(--font-headings)' }}>{feat.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="m-fold relative h-[100dvh] overflow-hidden bg-slate-900">
        <div className="m-fold-inner absolute inset-0 flex items-center justify-center px-5" style={{ willChange: 'transform, opacity' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.08),transparent_70%)]" />
          <div className="relative z-10 text-center max-w-sm mx-auto">
            <Quote className="w-10 h-10 text-sky-400 mx-auto mb-6 opacity-60" />
            <blockquote className="text-lg font-semibold text-white leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              "God often shapes His servants within the very contexts where they are already serving. Our programs are designed to complement your ministry."
            </blockquote>
            <div>
              <p className="font-black text-white text-sm uppercase tracking-widest">Dr. C.P. Thomas</p>
              <p className="text-[#b45309] text-sm font-medium mt-1">Founder &amp; President</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACADEMICS ── */}
      <section className="m-fold relative min-h-[100dvh] overflow-hidden bg-slate-950">
        <div className="m-fold-inner absolute inset-0 flex items-center justify-center px-5" style={{ willChange: 'transform, opacity' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.18),transparent_60%)] pointer-events-none" />
          <div className="relative z-10 text-center w-full py-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500 mb-4">Academic Programs</p>
            <h2 className="text-3xl font-black text-white tracking-tighter leading-tight mb-4" style={{ fontFamily: 'var(--font-headings)' }}>
              Programs &amp;<br />Degrees
            </h2>
            <p className="text-sm text-slate-400 font-medium mb-10 max-w-[260px] mx-auto leading-relaxed">
              Where the Bible is the textbook. Rigorous, accredited theology for every calling.
            </p>
            <div className="grid grid-cols-3 gap-3 max-w-[280px] mx-auto mb-10">
              {['B.Th', 'B.Min', 'M.Div', 'M.Th', 'D.Min', 'Ph.D'].map((degree, idx) => (
                <div key={idx} className="border border-sky-900/50 bg-sky-900/20 text-sky-400 font-bold font-mono text-sm py-4 rounded-xl text-center">
                  {degree}
                </div>
              ))}
            </div>
            <Link to="/academic" className="inline-block text-white uppercase tracking-widest text-xs font-bold border-b border-white pb-1 hover:text-sky-400 hover:border-sky-400 transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ROOT: renders one layout per breakpoint
───────────────────────────────────────────── */
export default function Home() {
  const navigate = useNavigate();

  const bentoFeatures = [
    { title: 'Academic Excellence', desc: 'Rigorous theological education taught by experienced, world-class faculty.' },
    { title: 'Flexible Education', desc: 'Study at your own pace with continuous enrollment.' },
    { title: 'Holistic Training', desc: 'Developing servant leaders spiritually and practically.' },
    { title: 'Strong Community', desc: 'Interactive support through forums and dedicated mentorship.' },
    { title: 'Practical Application', desc: 'Learning that transforms directly into ministry action.' },
    { title: 'Affordable Pricing', desc: "Cost should never be a barrier to fulfilling God's purpose." }
  ];

  return (
    <div className="bg-slate-50 w-full relative">
      {/* Desktop — hidden on mobile */}
      <div className="hidden md:block">
        <DesktopHome navigate={navigate} bentoFeatures={bentoFeatures} />
      </div>

      {/* Mobile — hidden on desktop */}
      <div className="block md:hidden">
        <MobileHome navigate={navigate} bentoFeatures={bentoFeatures} />
      </div>

      <Footer />
    </div>
  );
}
