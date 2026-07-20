import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Quote } from 'lucide-react';

export default function RichText({ content }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const markdownComponents = {
    img: ({node, ...props}) => {
      let src = props.src;
      if (src && src.startsWith('/')) {
        src = `https://apostolictheologicalseminarynewdelhi.yolasite.com${src}`;
      }
      return (
        <div 
          className="my-10 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 cursor-zoom-in group"
          onClick={() => setSelectedImg(src)}
        >
          <img 
            {...props} 
            src={src}
            className="w-full h-auto object-cover m-0 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
            alt={props.alt || 'ABTS image'}
          />
        </div>
      );
    },
    h1: ({node, ...props}) => <h1 className="text-3xl md:text-5xl font-bold mt-16 mb-8 text-slate-900 tracking-tighter leading-[1.1] pb-6 border-b border-slate-200" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
    h2: ({node, ...props}) => <h2 className="text-2xl md:text-4xl font-bold mt-16 mb-6 text-slate-900 tracking-tight leading-[1.1] pt-8 border-t border-slate-200" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
    h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-bold mt-12 mb-4 text-slate-800 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
    p: ({node, ...props}) => <p className="leading-relaxed mb-8 text-slate-800 font-medium max-w-[65ch] rich-text-p" {...props} />,
    a: ({node, ...props}) => <a className="text-slate-900 font-bold border-b border-slate-900/30 hover:border-slate-900 pb-0.5 transition-colors" {...props} />,
    ul: ({node, ...props}) => <ul className="mb-8 space-y-4 text-slate-800 list-none pl-0 max-w-[65ch]" {...props} />,
    li: ({node, ...props}) => (
      <li className="flex items-start">
        <span className="text-slate-400 mr-4 mt-1.5 font-bold font-mono text-xs">--</span>
        <span className="font-medium text-slate-800 leading-relaxed">{props.children}</span>
      </li>
    ),
    ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-8 space-y-4 text-slate-800 font-medium max-w-[65ch] leading-relaxed" {...props} />,
    blockquote: ({node, ...props}) => (
      <blockquote className="relative my-12 px-8 py-8 border-l-2 border-slate-900 text-slate-900 italic font-medium max-w-[65ch] text-xl leading-relaxed bg-slate-100/50">
        <div className="relative z-10">{props.children}</div>
      </blockquote>
    ),
    table: ({node, ...props}) => (
      <div className="overflow-x-auto my-12 border-y border-slate-200">
        <table className="w-full text-left text-sm text-slate-800" {...props} />
      </div>
    ),
    th: ({node, ...props}) => <th className="py-4 font-bold text-slate-900 border-b border-slate-900 uppercase tracking-widest text-xs" {...props} />,
    td: ({node, ...props}) => <td className="py-4 border-b border-slate-200 font-medium" {...props} />
  };

  return (
    <>
      <div className="prose prose-slate max-w-none [&>.rich-text-p:first-of-type]:text-2xl [&>.rich-text-p:first-of-type]:leading-snug [&>.rich-text-p:first-of-type]:font-medium [&>.rich-text-p:first-of-type]:tracking-tight [&>.rich-text-p:first-of-type]:mb-12">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8" onClick={() => setSelectedImg(null)}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImg} 
              alt="Fullscreen view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
