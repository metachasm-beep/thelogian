import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "I now understand the true nature of God. I grew up knowing the religious Jesus... but today I have a knowledge of the true, loving Jesus, that has transformed my life!",
    name: "Pastor Thian Nun Piang",
    credential: "MTh Graduate, 2010",
    location: "Now residing in Florida, USA"
  },
  {
    quote: "After joining ABTS & hearing the teaching on the Word of God, my perspective towards life changed — who I am in Christ. ABTS teaches exactly what is the truth, how to know the truth & why it was said. When I read the Bible now I get lots of revelation.",
    name: "Lalhmingthanga",
    credential: "MRE Student, 2010",
    location: "India"
  },
  {
    quote: "I know where I stand now. I am very secure in Jesus. I am now very real when I speak. That is what ABTS has taught me — God has taught me through ABTS in fact.",
    name: "Evangelist George Rung Lian Thang",
    credential: "BD (ITS) & MTh Graduate, 2011",
    location: "Burma"
  },
  {
    quote: "Each and every course I have taken with ABTS New Delhi impacted me differently, with its teaching being so well planned, so comprehensive, so fruitful, so enlightening, so challenging, so enriching.",
    name: "Bro. Chike Paul Ezigbo",
    credential: "BTh Graduate, 2010",
    location: "South Africa"
  },
  {
    quote: "Before I came to ABTS, I read in the Bible that we are to study to handle God's Word properly. Now, from my studies here, I have confidence to speak God's Word.",
    name: "Bro. Khaitinlen Guite",
    credential: "BD Graduate, 2011",
    location: "Moreh, Manipur"
  },
  {
    quote: "I want to thank you for the quality of learning I experienced in my studies. My biblical knowledge was definitely improved. I found the Doctor of Theology course excellent in every manner — thoroughly based on scripture and very inspirational.",
    name: "Rev. Dr. Van Thawng Lian",
    credential: "ThD Graduate, 2011",
    location: "Senior Pastor, Zotung Christian Fellowship, New Delhi"
  },
  {
    quote: "I want to thank you for the great courses and the wealth of knowledge that I received while enrolled at ABTS New Delhi. All courses from ABTS have equipped me so well for the challenge of preaching the Word of God.",
    name: "Pastor Laldingliana",
    credential: "MTh Graduate, 2011",
    location: "United Pentecostal Church (MZ), New Delhi"
  },
  {
    quote: "I recommend this ABTS New Delhi programs to my friends and colleagues because the program is very helpful to our ministries. We do not get a degree only but also receive spiritual truth and biblical lessons.",
    name: "Bro. Zitlua Sythlo",
    credential: "BD Graduate, 2011",
    location: "Mizoram State, India"
  }
];

const galleryImages = [
  { src: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/SAM_1632.JPG", caption: "ABTS Regular Students, 2011" },
  { src: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/SAM_0992.JPG", caption: "Dr. Paogin Mangte with students in theology classroom" },
  { src: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/IMG_0084.JPG", caption: "Graduation Ceremony" },
  { src: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/Official%20pic%20of%2021%20Dec%202010%20graduating%20class.JPG", caption: "Graduating Class, December 2010" }
];

export default function TestimonialsLayout() {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive(i => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-20">
        <h2
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6"
          style={{ fontFamily: 'var(--font-headings)' }}
        >
          What Our Students Say
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
          Our graduates are now serving across India, Burma, Africa, the Middle-East, and North America. Here are their words.
        </p>
      </div>

      {/* Featured Carousel */}
      <div className="relative bg-slate-900 p-10 md:p-16 mb-6">
        <Quote className="absolute top-8 left-8 w-12 h-12 text-sky-500/30" />

        <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
          <blockquote
            key={active}
            className="text-2xl md:text-3xl text-white font-medium leading-relaxed max-w-4xl mb-12"
            style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
          >
            "{testimonials[active].quote}"
          </blockquote>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white font-bold text-lg">{testimonials[active].name}</p>
              <p className="text-sky-400 font-mono text-sm tracking-widest uppercase mt-1">{testimonials[active].credential}</p>
              <p className="text-slate-400 text-sm mt-1">{testimonials[active].location}</p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4">
              <span className="text-slate-500 font-mono text-sm">
                {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              <button
                onClick={prev}
                className="w-10 h-10 border border-slate-700 hover:border-sky-500 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-slate-700 hover:border-sky-500 hover:bg-sky-500 flex items-center justify-center transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-2 mb-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-sky-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>

      {/* All Testimonials Grid */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }}>
          More Voices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className={`bg-white p-8 cursor-pointer transition-colors duration-300 ${active === idx ? 'bg-sky-50 border-l-2 border-sky-500' : 'hover:bg-slate-50'}`}
            >
              <p className="text-slate-700 font-medium leading-relaxed mb-6 line-clamp-3 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                <p className="text-sky-600 font-mono text-xs tracking-widest uppercase mt-1">{t.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }}>
          Life at ABTS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-square bg-slate-100">
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all duration-300 flex items-end">
                <p className="text-white text-xs font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
