import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContentFold({ title, content, id }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up animation for the content block
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id={id}
      ref={containerRef}
      className="w-full relative flex flex-col items-center justify-center py-16 md:py-24 border-b border-slate-200"
    >
      <div className="container mx-auto max-w-4xl px-4 md:px-6 flex-1 flex flex-col relative z-10">
        <div
          ref={contentRef}
          className="prose prose-sm sm:prose-base md:prose-lg prose-slate max-w-none w-full"
        >
          {title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8 md:mb-12 uppercase text-center border-b pb-6 border-slate-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h2>
          )}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200/60">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({node, ...props}) => {
                  let src = props.src;
                  if (src && src.startsWith('/')) {
                    src = `https://apostolictheologicalseminarynewdelhi.yolasite.com${src}`;
                  }
                  return (
                    <img 
                      {...props} 
                      src={src}
                      className="rounded-xl shadow-md mx-auto my-6 md:my-8 max-h-[60vh] object-contain bg-slate-50 w-full" 
                      alt={props.alt || 'ABTS image'}
                    />
                  );
                },
                h1: ({node, ...props}) => <h1 className="text-2xl sm:text-3xl font-semibold mt-8 mb-4 text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }} {...props} />,
                h2: ({node, ...props}) => <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }} {...props} />,
                h3: ({node, ...props}) => <h3 className="text-lg sm:text-xl font-medium mt-6 mb-3 text-slate-700" style={{ fontFamily: 'Poppins, sans-serif' }} {...props} />,
                p: ({node, ...props}) => <p className="leading-relaxed mb-6 text-slate-600" {...props} />,
                a: ({node, ...props}) => <a className="text-sky-700 hover:text-sky-900 underline decoration-sky-300 underline-offset-4 transition-colors font-medium" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-5 sm:pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-5 sm:pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-sky-600 pl-4 sm:pl-6 italic text-slate-700 bg-sky-50/50 py-4 pr-4 rounded-r-lg my-6" {...props} />
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
