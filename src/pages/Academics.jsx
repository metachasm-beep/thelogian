import React from 'react';
import ContentFold from '../components/folds/ContentFold';
import abtsData from '../data/abts_content_clean.json';

export default function Academics() {
  return (
    <div className="pt-8">
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Academics
        </h1>
        <p className="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
          Equipping leaders through rigorous theological education and practical ministry training.
        </p>
      </div>

      <ContentFold 
        id="academic-programs"
        title="Academic Programs" 
        content={abtsData['/academic'] || "Content coming soon."} 
      />
      <ContentFold 
        id="graduation"
        title="List of Graduation" 
        content={abtsData['/list-of-graduation'] || "Content coming soon."} 
      />
      <ContentFold 
        id="prominent-recipients"
        title="Prominent Doctorate Recipients" 
        content={abtsData['/prominent-doctorate-recipients-of-abts'] || "Content coming soon."} 
      />
    </div>
  );
}
