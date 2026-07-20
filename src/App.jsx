import React, { useState, useEffect, useRef } from 'react';
import HomeFold from './components/folds/HomeFold';
import ContentFold from './components/folds/ContentFold';
import NavigationDots from './components/NavigationDots';
import abtsData from './data/abts_content_clean.json';

// Define the order and titles of the folds
const FOLD_CONFIG = [
  { id: 'home', path: '/', title: 'Home', component: HomeFold },
  { id: 'objectives', path: '/objectives', title: 'Objectives' },
  { id: 'testimonials', path: '/testimonials', title: 'Testimonials' },
  { id: 'faith', path: '/doctrinal-statement-of-faith', title: 'Doctrinal Statement' },
  { id: 'academic', path: '/academic', title: 'Academic' },
  { id: 'graduation', path: '/list-of-graduation', title: 'Graduation List' },
  { id: 'recipients', path: '/prominent-doctorate-recipients-of-abts', title: 'Prominent Recipients' },
  { id: 'news', path: '/news', title: 'News' },
  { id: 'prayer', path: '/prayer-request', title: 'Prayer Request' },
  { id: 'ministries', path: '/abts-ministries', title: 'Ministries' },
  { id: 'pictures', path: '/abts-indo-burma-border-area-ministries-pictures', title: 'Gallery' },
  { id: 'faq', path: '/frequently-asked-questions', title: 'FAQ' },
  { id: 'apply', path: '/online-application-form-for-admission', title: 'Apply Online' },
  { id: 'enquiry', path: '/online-enquiry', title: 'Online Enquiry' },
  { id: 'contact', path: '/contact-us', title: 'Contact Us' }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // Calculate which fold is currently most visible
      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Add half window height to trigger change when passing middle
      const index = Math.round(scrollPosition / windowHeight);
      
      if (index !== activeIndex && index >= 0 && index < FOLD_CONFIG.length) {
        setActiveIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <main 
      ref={containerRef}
      className="h-[100dvh] w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory bg-slate-900 scroll-smooth font-sans text-slate-900"
      style={{ scrollBehavior: 'smooth' }}
    >
      <NavigationDots folds={FOLD_CONFIG} activeIndex={activeIndex} />
      
      {FOLD_CONFIG.map((fold, idx) => {
        // If it has a custom component, render it
        if (fold.component) {
          const CustomComponent = fold.component;
          return <CustomComponent key={fold.id} index={idx} />;
        }
        
        // Otherwise, render the generic ContentFold
        const content = abtsData[fold.path] || `Content for ${fold.title} is coming soon.`;
        return (
          <ContentFold 
            key={fold.id} 
            index={idx} 
            title={fold.title} 
            content={content} 
          />
        );
      })}
    </main>
  );
}
