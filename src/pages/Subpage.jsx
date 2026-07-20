import React from 'react';
import { useLocation } from 'react-router-dom';
import ContentFold from '../components/folds/ContentFold';
import abtsData from '../data/abts_content_clean.json';

// Mapping URL paths back to original keys if necessary, or just using them directly
const titles = {
  '/online-application-form-for-admission': 'Apply Online',
  '/online-enquiry': 'Online Enquiry',
  '/frequently-asked-questions': 'Frequently Asked Questions',
  '/academic': 'Academic Programs',
  '/list-of-graduation': 'List of Graduation',
  '/prominent-doctorate-recipients-of-abts': 'Prominent Doctorate Recipients',
  '/objectives': 'Our Objectives',
  '/doctrinal-statement-of-faith': 'Statement of Faith',
  '/abts-ministries': 'Our Ministries',
  '/abts-indo-burma-border-area-ministries-pictures': 'Gallery & Pictures',
  '/news': 'Latest News',
  '/contact-us': 'Contact Us',
  '/prayer-request': 'Prayer Request',
  '/testimonials': 'Testimonials'
};

export default function Subpage() {
  const location = useLocation();
  const path = location.pathname;
  const content = abtsData[path] || "Content not found.";
  const title = titles[path] || "Page";

  return (
    <div className="pt-24 min-h-screen bg-slate-50 flex flex-col items-center">
      <div className="w-full">
        {/* We reuse ContentFold but wrap it so it behaves like a standalone page */}
        <ContentFold 
          id="subpage-content"
          title={title}
          content={content}
        />
      </div>
    </div>
  );
}
