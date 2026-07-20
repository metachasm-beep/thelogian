import React, { useEffect, useRef } from 'react';
import { useLocation, Link, NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronRight } from 'lucide-react';
import SubpageHero from '../components/ui/SubpageHero';
import abtsData from '../data/abts_content_clean.json';

gsap.registerPlugin(ScrollTrigger);

// Metadata for Subpages
const subpageMetadata = {
  '/online-application-form-for-admission': { title: 'Apply Online', category: 'Admissions' },
  '/online-enquiry': { title: 'Online Enquiry', category: 'Admissions' },
  '/frequently-asked-questions': { title: 'Frequently Asked Questions', category: 'Admissions' },
  '/academic': { title: 'Academic Programs', category: 'Academics' },
  '/list-of-graduation': { title: 'List of Graduation', category: 'Academics' },
  '/prominent-doctorate-recipients-of-abts': { title: 'Prominent Doctorate Recipients', category: 'Academics' },
  '/objectives': { title: 'Our Objectives', category: 'About Us' },
  '/doctrinal-statement-of-faith': { title: 'Statement of Faith', category: 'About Us' },
  '/abts-ministries': { title: 'Our Ministries', category: 'About Us' },
  '/abts-indo-burma-border-area-ministries-pictures': { title: 'Gallery & Pictures', category: 'About Us' },
  '/news': { title: 'Latest News', category: 'About Us' },
  '/contact-us': { title: 'Contact Us', category: 'Contact' },
  '/prayer-request': { title: 'Prayer Request', category: 'Contact' },
  '/testimonials': { title: 'Testimonials', category: 'Contact' }
};

export default function Subpage() {
  const location = useLocation();
  const path = location.pathname;
  const content = abtsData[path] || "Content not found.";
  const meta = subpageMetadata[path] || { title: 'Page', category: 'General' };
  
  const contentRef = useRef(null);

  useEffect(() => {
    // Reset scroll when navigating to new subpage
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    });

    return () => ctx.revert();
  }, [path]);

  // Find sibling links for the sidebar
  const sidebarLinks = Object.entries(subpageMetadata)
    .filter(([_, m]) => m.category === meta.category)
    .map(([p, m]) => ({ path: p, title: m.title }));

  return (
    <div className="bg-slate-50 min-h-screen">
      <SubpageHero title={meta.title} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="sticky top-32 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {meta.category}
              </h3>
              <nav className="space-y-2">
                {sidebarLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-sm font-semibold ${
                        isActive 
                          ? 'bg-sky-50 text-sky-700 shadow-sm border border-sky-100' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    {link.title}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to="/online-application-form-for-admission" className="block w-full text-center px-4 py-3 bg-sky-700 text-white text-sm font-bold rounded-xl shadow-md shadow-sky-700/20 hover:bg-sky-800 transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div 
              ref={contentRef}
              className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 md:p-16 min-h-[600px]"
            >
              <div className="prose prose-slate prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: ({node, ...props}) => {
                      let src = props.src;
                      if (src && src.startsWith('/')) {
                        src = `https://apostolictheologicalseminarynewdelhi.yolasite.com${src}`;
                      }
                      return (
                        <div className="my-10 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                          <img 
                            {...props} 
                            src={src}
                            className="w-full h-auto object-cover m-0" 
                            alt={props.alt || 'ABTS image'}
                          />
                        </div>
                      );
                    },
                    h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 tracking-tight pb-4 border-b border-slate-100" style={{ fontFamily: 'Poppins, sans-serif' }} {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-slate-800 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }} {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-slate-700 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }} {...props} />,
                    p: ({node, ...props}) => <p className="leading-relaxed mb-6 text-slate-600 font-medium" {...props} />,
                    a: ({node, ...props}) => <a className="text-sky-600 hover:text-sky-800 font-bold decoration-sky-200 underline-offset-4 transition-colors" {...props} />,
                    ul: ({node, ...props}) => <ul className="mb-6 space-y-3 text-slate-600 list-none pl-0" {...props} />,
                    li: ({node, ...props}) => (
                      <li className="flex items-start">
                        <span className="text-sky-500 mr-3 mt-1.5 font-bold">•</span>
                        <span className="font-medium text-slate-600">{props.children}</span>
                      </li>
                    ),
                    ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-600 font-medium" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <blockquote className="relative my-8 px-8 py-6 bg-sky-50 rounded-2xl border border-sky-100 text-slate-700 italic font-medium shadow-inner">
                        <Quote className="absolute top-4 left-4 w-12 h-12 text-sky-200/50 rotate-180 -z-0" />
                        <div className="relative z-10">{props.children}</div>
                      </blockquote>
                    ),
                    table: ({node, ...props}) => (
                      <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
                        <table className="w-full text-left text-sm text-slate-600" {...props} />
                      </div>
                    ),
                    th: ({node, ...props}) => <th className="bg-slate-50 px-6 py-4 font-semibold text-slate-900 border-b border-slate-200" {...props} />,
                    td: ({node, ...props}) => <td className="px-6 py-4 border-b border-slate-100" {...props} />
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
