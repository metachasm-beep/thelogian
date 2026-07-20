import React from 'react';
import ContentFold from '../components/folds/ContentFold';
import abtsData from '../data/abts_content_clean.json';

export default function Admissions() {
  return (
    <div className="pt-8">
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Admissions & Contact
        </h1>
        <p className="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
          Join our community of faithful learners or reach out to us with any inquiries.
        </p>
      </div>

      <ContentFold 
        id="apply"
        title="Apply Online" 
        content={abtsData['/online-application-form-for-admission'] || "Content coming soon."} 
      />
      <ContentFold 
        id="enquiry"
        title="Online Enquiry" 
        content={abtsData['/online-enquiry'] || "Content coming soon."} 
      />
      <ContentFold 
        id="prayer"
        title="Prayer Request" 
        content={abtsData['/prayer-request'] || "Content coming soon."} 
      />
      <ContentFold 
        id="contact"
        title="Contact Us" 
        content={abtsData['/contact-us'] || "Content coming soon."} 
      />
    </div>
  );
}
