import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Quote } from 'lucide-react';

const markdownComponents = {
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
  h1: ({node, ...props}) => <h1 className="text-3xl md:text-5xl font-bold mt-12 mb-6 text-slate-900 tracking-tight leading-[1.1] pb-4 border-b border-slate-100" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
  h2: ({node, ...props}) => <h2 className="text-2xl md:text-4xl font-bold mt-10 mb-4 text-slate-800 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
  h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-slate-800 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-headings)' }} {...props} />,
  p: ({node, ...props}) => <p className="leading-relaxed mb-6 text-slate-600 font-medium max-w-[65ch]" {...props} />,
  a: ({node, ...props}) => <a className="text-[#1e3a8a] hover:text-[#1e3a8a]/80 font-bold border-b border-[#1e3a8a]/30 hover:border-[#1e3a8a] pb-0.5 transition-colors" {...props} />,
  ul: ({node, ...props}) => <ul className="mb-6 space-y-3 text-slate-600 list-none pl-0 max-w-[65ch]" {...props} />,
  li: ({node, ...props}) => (
    <li className="flex items-start">
      <span className="text-[#1e3a8a] mr-3 mt-1.5 font-bold">•</span>
      <span className="font-medium text-slate-600">{props.children}</span>
    </li>
  ),
  ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-slate-600 font-medium max-w-[65ch]" {...props} />,
  blockquote: ({node, ...props}) => (
    <blockquote className="relative my-10 px-8 py-8 bg-slate-50/80 rounded-2xl border border-slate-200 text-slate-700 italic font-medium max-w-[65ch]">
      <Quote className="absolute -top-4 -left-4 w-10 h-10 text-brand-accent/40 bg-white rounded-full p-2 border border-slate-100 shadow-sm" />
      <div className="relative z-10 text-lg leading-relaxed">{props.children}</div>
    </blockquote>
  ),
  table: ({node, ...props}) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-left text-sm text-slate-600" {...props} />
    </div>
  ),
  th: ({node, ...props}) => <th className="bg-slate-50 px-6 py-4 font-semibold text-slate-900 border-b border-slate-200" {...props} />,
  td: ({node, ...props}) => <td className="px-6 py-4 border-b border-slate-100" {...props} />
};

/**
 * A highly encapsulated RichText renderer that parses markdown and maps it
 * to the ABTS theological/academic design system.
 */
export default function RichText({ content }) {
  return (
    <div className="prose prose-slate prose-lg max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
