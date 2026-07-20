import React, { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: "Certificate in Theology",
    duration: "1 Year",
    reqs: "8th Pass or SSLC Pass"
  },
  {
    title: "Diploma in Theology",
    duration: "1-2 Years",
    reqs: "2 years for 8th Pass / 1 year for SSLC Pass"
  },
  {
    title: "Bachelor of Theology",
    duration: "3-4 Years",
    reqs: "3 yrs for 12th Pass / 4 yrs for SSLC Pass (Full time)"
  },
  {
    title: "Bachelor of Divinity (B.D.)",
    duration: "1-2 Years",
    reqs: "1 year for B.Th / 2 years for BA, B.Com, BSc"
  },
  {
    title: "Master of Divinity (M.Div)",
    duration: "2-4 Years",
    reqs: "2 years for B.Th (Full Time) / 3-4 years for BA, B.Sc"
  },
  {
    title: "Master of Theology (M.Th)",
    duration: "1-3 Years",
    reqs: "1 year for M.Div (Full time) / 2 years (Part time)"
  },
  {
    title: "Doctoral Programs (Ph.D / D.Min)",
    duration: "2-5 Years",
    reqs: "M.Th or M.Div with experience and thesis requirement"
  }
];

export default function ProgramsLayout() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="w-full">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-8" style={{ fontFamily: 'var(--font-headings)' }}>
          Academic Programs
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
          Where the Bible is the textbook. We provide biblically grounded, gospel-centered training for those whom God has called to serve the Church.
        </p>
      </div>

      <div className="border-t-2 border-slate-900">
        <div className="hidden md:flex py-4 px-6 text-sm font-bold tracking-widest text-slate-400 uppercase">
          <div className="w-1/2">Degree Program</div>
          <div className="w-1/4">Duration</div>
          <div className="w-1/4">Prerequisite</div>
        </div>
        
        {programs.map((prog, idx) => (
          <div 
            key={idx}
            className="group relative flex flex-col md:flex-row md:items-center py-8 md:py-10 px-0 md:px-6 border-b border-slate-200 hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-default"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Massive Title */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight transition-colors" style={{ fontFamily: 'var(--font-headings)' }}>
                {prog.title}
              </h3>
            </div>
            
            {/* Meta Data */}
            <div className="w-full md:w-1/4 mb-2 md:mb-0">
              <span className="md:hidden text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Duration</span>
              <div className="font-mono text-lg font-bold">
                {prog.duration}
              </div>
            </div>
            
            <div className="w-full md:w-1/4">
              <span className="md:hidden text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Prerequisite</span>
              <div className="text-sm font-medium opacity-70 leading-relaxed pr-8">
                {prog.reqs}
              </div>
            </div>

            {/* Hover Icon */}
            <ArrowDownRight className={`hidden md:block absolute right-6 w-8 h-8 text-sky-400 transition-all duration-300 ${hoveredIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`} />
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-sky-50 border border-sky-100 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'var(--font-headings)' }}>Ready to begin your journey?</h3>
          <p className="text-slate-600 font-medium">Admissions are open for Residential, External, and Internet Correspondence programs.</p>
        </div>
        <Link to="/online-application-form-for-admission" className="shrink-0 px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-sky-600 transition-colors shadow-xl">
          Apply Online
        </Link>
      </div>
    </div>
  );
}
