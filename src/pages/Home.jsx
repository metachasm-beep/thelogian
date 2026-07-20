import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeFold from '../components/folds/HomeFold';
import abtsData from '../data/abts_content_clean.json';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const featuresRef = useRef(null);
  const visionRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vision Section Animation
      gsap.fromTo('.vision-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 80%'
          }
        }
      );

      // Features Grid Animation
      gsap.fromTo('.feature-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%'
          }
        }
      );

      // Testimonial Animation
      gsap.fromTo('.testimonial-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
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

  const features = [
    { title: 'Academic Excellence', desc: 'Rigorous theological education taught by experienced faculty.' },
    { title: 'Flexible Education', desc: 'Study at your own pace with continuous enrollment.' },
    { title: 'Holistic Training', desc: 'Developing servant leaders spiritually, theologically, and practically.' },
    { title: 'Strong Community', desc: 'Interactive support through forums and dedicated mentorship.' },
    { title: 'Practical Application', desc: 'Learning that transforms directly into ministry action.' },
    { title: 'Affordable Pricing', desc: 'Cost should never be a barrier to fulfilling God’s purpose.' }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HomeFold />

      {/* 2. Vision / Mission Section */}
      <section ref={visionRef} className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="vision-element text-sm font-bold tracking-widest text-sky-600 uppercase mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Our Purpose
        </h2>
        <h3 className="vision-element text-3xl md:text-5xl font-semibold text-slate-900 mb-8 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Rooted in Scripture, <br />
          <span className="text-slate-400">Equipped for Service.</span>
        </h3>
        <p className="vision-element text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          We bring the seminary education to you. God often shapes His servants within the very contexts where they are already serving. Our programs are designed to complement your ministry, allowing learning to flow naturally into practice.
        </p>
        <div className="vision-element mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/objectives" className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
            Read Our Vision
          </Link>
          <Link to="/doctrinal-statement-of-faith" className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
            Statement of Faith
          </Link>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section ref={featuresRef} className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Choose ABTS?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Credible, flexible, fully online seminary programs designed for the modern minister.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-sky-600 rounded-sm transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section className="py-24 bg-sky-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-800 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Ready to Answer the Call?</h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto font-light">
            Considering seminary training is a significant step, and we’re here to help you navigate it. Begin your journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/online-application-form-for-admission" className="px-8 py-4 bg-white text-sky-900 rounded-full font-bold text-lg hover:bg-sky-50 transition-colors shadow-xl shadow-sky-950/50">
              Begin Your Application
            </Link>
            <Link to="/online-enquiry" className="px-8 py-4 bg-sky-800/50 text-white rounded-full font-semibold border border-sky-700 hover:bg-sky-800 transition-colors">
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Snippet */}
      <section ref={testimonialRef} className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest text-sky-600 uppercase mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Student Voices
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
            What Our Students Say
          </h3>
          <div className="testimonial-card bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 text-left relative shadow-sm">
            <div className="text-6xl text-sky-200 absolute top-8 left-8 font-serif leading-none">"</div>
            <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed relative z-10 mb-8 pl-6 pt-6">
              "ABTS has provided me with the theological depth and practical tools I needed for my ministry in Sikkim. The flexibility of online learning allowed me to study without leaving my community."
            </p>
            <div className="flex items-center gap-4 pl-6">
              <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <div>
                <div className="font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Jesse Isaac Dhakal</div>
                <div className="text-sm text-slate-500">From Sikkim</div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/testimonials" className="text-sky-700 font-semibold hover:text-sky-800 flex items-center justify-center gap-2">
              Read all testimonials
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center text-white text-sm font-bold">A</span>
              ABTS
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Equipping leaders through rigorous theological education and practical ministry training. Rooted in Scripture.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/online-application-form-for-admission" className="hover:text-white transition-colors">Apply Now</Link></li>
              <li><Link to="/academic" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/doctrinal-statement-of-faith" className="hover:text-white transition-colors">Statement of Faith</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li>Office: No 4, Veerapandi, Coimbatore, TN, India, 641019</li>
              <li>Phone: <a href="tel:+916380873580" className="hover:text-white transition-colors">+91 6380873580</a></li>
              <li>Email: <a href="mailto:admissions.online@sibbc.org" className="hover:text-white transition-colors">admissions.online@sibbc.org</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Apostolic Biblical Theological Seminary. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
