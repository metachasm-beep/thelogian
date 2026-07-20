import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const timeline = [
  {
    year: "CURRENT",
    title: "Admissions Open 2024-2025",
    desc: "We are introducing more majors in both M.Th and Ph.D degree programs, such as Pastoral Theology & Care, Missiology, Christian Counseling, and Oneness Apostolic Theology.",
    highlight: true,
    link: "/online-application-form-for-admission"
  },
  {
    year: "2015",
    title: "Ninth Graduation Exercise",
    desc: "Celebrating our Doctorate of Divinity, Master of Theology, and Bachelor recipients. Special Christian Character Awards were given to outstanding residential students.",
    highlight: false
  },
  {
    year: "2013",
    title: "Seventh Graduation Exercise",
    desc: "Dr. Langsun Doukhosei Mate, IRS (Income Tax High Commissioner) received his Ph.D in Theology. Dozens of students graduated via our external correspondence programs across South Asia.",
    highlight: false
  }
];

export default function NewsLayout() {
  return (
    <div className="w-full">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-6" style={{ fontFamily: 'var(--font-headings)' }}>
          Latest News & Updates
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed">
          The latest announcements, graduation exercises, and academic developments from ABTS.
        </p>
      </div>

      <div className="relative border-l border-slate-300 ml-4 md:ml-8 pl-8 md:pl-16 py-8">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative mb-20 last:mb-0 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[37px] md:-left-[69px] w-4 h-4 rounded-full border-4 border-slate-50 mt-1.5 transition-colors ${item.highlight ? 'bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.5)]' : 'bg-slate-300 group-hover:bg-slate-400'}`}></div>
            
            <span className={`font-mono text-sm tracking-widest font-bold mb-4 block ${item.highlight ? 'text-sky-600' : 'text-slate-400'}`}>
              {item.year}
            </span>
            
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-headings)' }}>
              {item.title}
            </h3>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-8">
              {item.desc}
            </p>

            {item.link && (
              <Link to={item.link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-sky-600 hover:text-sky-700 transition-colors group/link">
                Apply Now 
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
