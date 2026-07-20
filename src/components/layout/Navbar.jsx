import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    {
      title: 'Admissions',
      items: [
        { title: 'Apply Online', path: '/online-application-form-for-admission' },
        { title: 'Online Enquiry', path: '/online-enquiry' },
        { title: 'FAQ', path: '/frequently-asked-questions' }
      ]
    },
    {
      title: 'Academics',
      items: [
        { title: 'Academic Programs', path: '/academic' },
        { title: 'List of Graduation', path: '/list-of-graduation' },
        { title: 'Prominent Recipients', path: '/prominent-doctorate-recipients-of-abts' }
      ]
    },
    {
      title: 'About Us',
      items: [
        { title: 'Our Objectives', path: '/objectives' },
        { title: 'Statement of Faith', path: '/doctrinal-statement-of-faith' },
        { title: 'Ministries', path: '/abts-ministries' },
        { title: 'Gallery', path: '/abts-indo-burma-border-area-ministries-pictures' },
        { title: 'News', path: '/news' }
      ]
    },
    {
      title: 'Contact',
      items: [
        { title: 'Contact Us', path: '/contact-us' },
        { title: 'Prayer Request', path: '/prayer-request' },
        { title: 'Testimonials', path: '/testimonials' }
      ]
    }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-sky-700/20">A</span>
              ABTS
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 relative">
            {navLinks.map((link, idx) => (
              <div 
                key={idx} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors py-8">
                  {link.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Content */}
                <div 
                  className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden transition-all duration-200 origin-top-left ${activeDropdown === idx ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                >
                  <div className="py-2">
                    {link.items.map(item => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className={({ isActive }) => 
                          `block px-5 py-3 text-sm font-medium transition-colors ${
                            isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`
                        }
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link 
              to="/online-application-form-for-admission" 
              className="px-6 py-2.5 rounded-full bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 transition-colors shadow-md shadow-sky-700/20 ml-2"
            >
              Apply Now
            </Link>
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
      <div className={`md:hidden bg-white border-b border-slate-200 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link, idx) => (
            <div key={idx} className="border-b border-slate-100 last:border-0 pb-2 mb-2">
              <div className="px-3 py-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                {link.title}
              </div>
              <div className="space-y-1">
                {link.items.map(item => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `block px-3 py-2 rounded-md text-base font-medium ${
                        isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <Link
              to="/online-application-form-for-admission"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl bg-sky-700 text-white text-base font-medium hover:bg-sky-800"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
