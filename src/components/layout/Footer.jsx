import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sky-600 text-white flex items-center justify-center rounded-xl shadow-lg">
                <BookOpen size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white" style={{ fontFamily: 'var(--font-headings)' }}>
                  ABTS
                </span>
                <span className="text-[0.65rem] uppercase tracking-widest font-semibold text-sky-400">
                  New Delhi
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Apostolic Biblical Theological Seminary offers rigorous theological education taught by experienced, world-class faculty. Rooted in Scripture, equipped for Service.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm" style={{ fontFamily: 'var(--font-headings)' }}>Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/academic" className="hover:text-sky-400 transition-colors">Academics</Link></li>
              <li><Link to="/online-application-form-for-admission" className="hover:text-sky-400 transition-colors">Apply Online</Link></li>
              <li><Link to="/frequently-asked-questions" className="hover:text-sky-400 transition-colors">FAQs</Link></li>
              <li><Link to="/contact-us" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm" style={{ fontFamily: 'var(--font-headings)' }}>About</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/doctrinal-statement-of-faith" className="hover:text-sky-400 transition-colors">Statement of Faith</Link></li>
              <li><Link to="/objectives" className="hover:text-sky-400 transition-colors">Our Objectives</Link></li>
              <li><Link to="/abts-ministries" className="hover:text-sky-400 transition-colors">Ministries</Link></li>
              <li><Link to="/gallery" className="hover:text-sky-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Apostolic Theological Seminary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
