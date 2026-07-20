import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  "21 DECEMBER 2011, 5TH GRADUATION DAY.jfif",
  "21,December 2011 ATS 5TH GRADUATION DAY.jfif",
  "ABTS  Ninth Graduation Exercise Group Photo- 17th December 2015.jfif",
  "APOSTOLIC BIBLICAL THEOLOGICAL SEMINARY (ABTS) NEW DELHI, INDIA. 2011 GRADUATES STUDENTS.jfif",
  "ATS FOURTH GRADUATION DAY.jfif",
  "Apostolic Biblical Theological Seminary (ABTS) regular graduates students-21 Dec 2011.jfif",
  "Dr Cp. Thomas, Dr Mangte with graduating students-21 December 2011.jfif",
  "Dr Mangte with his doctorate degree students and recipients.jfif",
  "dr mangte award 2014e.jpg"
];

// Clean filename to use as subtitle
const formatTitle = (filename) => {
  return filename
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/ABTS/g, '') // optionally clean up
    .trim();
};

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-slate-50 bg-tactile-noise min-h-screen pb-24">
      {/* Hero */}
      <div className="relative pt-32 pb-24 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(2,132,199,0.15),rgba(255,255,255,0))] overflow-hidden border-b border-slate-900/50 shadow-[inset_0_-1px_0_rgba(255,255,255,0.05)]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-sky-900/30 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-headings)' }}>
            Gallery
          </h1>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid bg-white p-3 rounded-2xl shadow-sm ring-1 ring-slate-900/5 group cursor-pointer transition-all hover:shadow-md hover:ring-sky-500/30"
              onClick={() => setSelectedImg(img)}
            >
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img 
                  src={`/assets/${img}`} 
                  alt={formatTitle(img)} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 px-2 pb-2">
                <h3 className="text-sm font-semibold text-slate-700 leading-tight">
                  {formatTitle(img)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8" onClick={() => setSelectedImg(null)}>
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <img 
              src={`/assets/${selectedImg}`} 
              alt={formatTitle(selectedImg)}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h2 className="text-white text-xl font-bold tracking-wide">
                {formatTitle(selectedImg)}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
