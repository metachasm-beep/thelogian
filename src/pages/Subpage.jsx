import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getPage, getSiblingLinks } from '../services/ContentService';
import RichText from '../components/ui/RichText';
import AdmissionsForm from '../components/forms/AdmissionsForm';
import PrayerRequestForm from '../components/forms/PrayerRequestForm';
export default function Subpage() {
  const { slug } = useParams();
  const { path, content, meta } = getPage(slug);
  const sidebarLinks = getSiblingLinks(meta.category);

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
            
            {/* Encapsulated RichText Render */}
            <RichText content={content} />

            {/* Conditionally Render Custom Forms */}
            {slug === 'online-application-form-for-admission' && (
              <div className="mt-8">
                <AdmissionsForm />
              </div>
            )}
            
            {slug === 'prayer-request' && (
              <div className="mt-8">
                <PrayerRequestForm />
              </div>
            )}
          </article>
          
        </div>
      </div>
    </div>
  );
}
