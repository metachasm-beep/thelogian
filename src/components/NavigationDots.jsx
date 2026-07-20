import React from 'react';

export default function NavigationDots({ folds, activeIndex }) {
  const scrollToFold = (index) => {
    const el = document.getElementById(`fold-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {folds.map((fold, idx) => (
        <button
          key={idx}
          onClick={() => scrollToFold(idx)}
          className="group relative flex items-center justify-end w-8 h-8 outline-none focus:outline-none"
          aria-label={`Scroll to ${fold.title}`}
        >
          <span 
            className={`absolute right-10 whitespace-nowrap px-2 py-1 rounded bg-slate-900 text-white text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${activeIndex === idx ? 'opacity-100' : ''}`}
          >
            {fold.title}
          </span>
          <div 
            className={`rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-3 h-3 bg-blue-500' : 'w-2 h-2 bg-slate-400 group-hover:bg-slate-600 group-hover:scale-150'}`}
          />
        </button>
      ))}
    </div>
  );
}
