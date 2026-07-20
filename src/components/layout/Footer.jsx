import React from 'react';
import { Link } from 'react-router-dom';
import ABTSLogo from '../ui/ABTSLogo';
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link to="/" className="flex items-center gap-3">
              <ABTSLogo size={36} light={true} />
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-none text-white tracking-widest uppercase" style={{ fontFamily: 'var(--font-headings)' }}>
                  ABTS
                </span>
              </div>
            </Link>
            
            <div className="text-[0.65rem] md:text-xs uppercase tracking-widest flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-slate-500 font-medium">
              <span>New Delhi, India</span>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:paoginmangte78u@gmail.com" className="hover:text-sky-400 transition-colors">paoginmangte78u@gmail.com</a>
              <span className="hidden sm:inline">|</span>
              <span>+91-8851503372</span>
            </div>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-semibold text-slate-400">
            <Link to="/academic" className="hover:text-sky-400 transition-colors">Academics</Link>
            <Link to="/online-application-form-for-admission" className="hover:text-sky-400 transition-colors">Apply</Link>
            <Link to="/objectives" className="hover:text-sky-400 transition-colors">Vision</Link>
            <Link to="/contact-us" className="hover:text-sky-400 transition-colors">Contact</Link>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-900 text-center text-[0.65rem] uppercase tracking-widest text-slate-600">
          &copy; {new Date().getFullYear()} Apostolic Theological Seminary. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
