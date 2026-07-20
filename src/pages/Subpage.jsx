import React from 'react';
import { useLocation, Link, NavLink, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronRight, Quote } from 'lucide-react';
import abtsData from '../data/abts_content_clean.json';

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
  '/news': { title: 'Latest News', category: 'About Us' },
  '/contact-us': { title: 'Contact Us', category: 'Contact' },
  '/prayer-request': { title: 'Prayer Request', category: 'Contact' },
  '/testimonials': { title: 'Testimonials', category: 'Contact' }
};

export default function Subpage() {
  const { slug } = useParams();
  const path = `/${slug}`;
  const content = abtsData[path] || "Content not found or coming soon.";
  const meta = subpageMetadata[path] || { title: slug.replace(/-/g, ' '), category: 'General' };

  // Find sibling links for the sidebar
  const sidebarLinks = Object.entries(subpageMetadata)
    .filter(([_, m]) => m.category === meta.category)
    .map(([p, m]) => ({ path: p, title: m.title }));

  return (
    <div className="bg-slate-50 bg-tactile-noise min-h-screen pb-24">
      {/* Subpage Hero (Tactile Material Depth) */}
      <div className="relative pt-32 pb-24 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(2,132,199,0.15),rgba(255,255,255,0))] overflow-hidden border-b border-slate-900/50 shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-sky-900/30 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-headings)' }}>
            {meta.title}
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 lg:sticky lg:top-24 shrink-0">
            <div className="bg-white rounded-2xl p-6 cardstock-elevation">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6" style={{ fontFamily: 'var(--font-headings)' }}>
                {meta.category}
              </h3>
              <nav className="flex flex-col space-y-1">
                {sidebarLinks.map((link, idx) => {
                  const isActive = path === link.path;
                  return (
                    <Link 
                      key={idx} 
                      to={link.path}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive 
                          ? 'bg-[#1e3a8a] text-white shadow-md shadow-[#1e3a8a]/20' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{link.title}</span>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 text-[#b45309]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="w-full max-w-3xl rounded-3xl p-8 md:p-12 lg:p-16 cardstock-elevation relative min-h-[600px]">
            
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-slate-500 mb-8 md:mb-12 font-medium">
              <Link to="/" className="hover:text-sky-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
              <span className="text-slate-900">{meta.title}</span>
            </div>
            
            {/* Markdown Content */}
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
                  h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 tracking-tight pb-4 border-b border-slate-100" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-slate-800 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-slate-700 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
                  p: ({node, ...props}) => <p className="leading-relaxed mb-6 text-slate-600 font-medium" {...props} />,
                  a: ({node, ...props}) => <a className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 font-bold decoration-[#1e3a8a]/30 underline-offset-4 transition-colors" {...props} />,
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
          </article>
          
        </div>
      </div>
    </div>
  );
}
