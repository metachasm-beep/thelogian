import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Academics', path: '/academics' },
    { title: 'Admissions', path: '/admissions' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-sky-700/20">A</span>
              ABTS
            </NavLink>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${
                    isActive ? 'text-sky-700' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
            <NavLink 
              to="/admissions" 
              className="px-5 py-2.5 rounded-full bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 transition-colors shadow-md shadow-sky-700/20"
            >
              Apply Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <NavLink
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-md bg-sky-700 text-white text-base font-medium hover:bg-sky-800"
              >
                Apply Now
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
