import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'motion/react';

export default function ContentFold({ title, content, index }) {
  return (
    <section 
      id={`fold-${index}`}
      className="h-[100dvh] w-full snap-start snap-always relative flex flex-col justify-center overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-200"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl px-6 py-24 md:py-32 flex-1 flex flex-col relative z-10 h-full overflow-y-auto custom-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="prose prose-slate prose-lg md:prose-xl max-w-none"
        >
          {title && (
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-12 uppercase text-center border-b pb-6 border-slate-200">
              {title}
            </h2>
          )}
          <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200/60">
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
                      className="rounded-xl shadow-md mx-auto my-8 max-h-[60vh] object-contain bg-slate-100" 
                      alt={props.alt || 'ABTS image'}
                    />
                  );
                },
                h1: ({node, ...props}) => <h1 className="text-3xl font-semibold mt-8 mb-4 text-slate-800" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-800" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-medium mt-6 mb-3 text-slate-700" {...props} />,
                p: ({node, ...props}) => <p className="leading-relaxed mb-6 text-slate-600" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-700 hover:text-blue-900 underline decoration-blue-300 underline-offset-4 transition-colors" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-600 pl-6 italic text-slate-700 bg-blue-50/50 py-4 pr-4 rounded-r-lg my-6" {...props} />
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
