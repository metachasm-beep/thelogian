import React from 'react';
import ContentFold from '../components/folds/ContentFold';
import abtsData from '../data/abts_content_clean.json';

export default function About() {
  return (
    <div className="pt-8">
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          About ABTS
        </h1>
        <p className="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
          Discover our mission, core beliefs, and the impact our seminary has had on the world.
        </p>
      </div>

      <ContentFold 
        id="objectives"
        title="Our Objectives" 
        content={abtsData['/objectives'] || "Content coming soon."} 
      />
      <ContentFold 
        id="faith"
        title="Doctrinal Statement of Faith" 
        content={abtsData['/doctrinal-statement-of-faith'] || "Content coming soon."} 
      />
      <ContentFold 
        id="testimonials"
        title="Testimonials" 
        content={abtsData['/testimonials'] || "Content coming soon."} 
      />
      <ContentFold 
        id="faq"
        title="Frequently Asked Questions" 
        content={abtsData['/frequently-asked-questions'] || "Content coming soon."} 
      />
    </div>
  );
}
