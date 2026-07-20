import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/LOGO.png';
import abtsData from '../../data/abts_content_clean.json';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academic' },
  { name: 'Admissions', path: '/online-application-form-for-admission' },
  { name: 'About Us', path: '/objectives' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact-us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
              <img src={logoImg} alt="ABTS Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none ${isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-slate-900 md:text-white'}`} style={{ fontFamily: 'var(--font-headings)' }}>
                ABTS
              </span>
              <span className={`text-[0.65rem] uppercase tracking-widest font-semibold ${isScrolled || location.pathname !== '/' ? 'text-sky-700' : 'text-sky-700 md:text-sky-300'}`}>
                New Delhi
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              const textColor = isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-sky-700' : 'text-slate-200 hover:text-white';
              
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm font-semibold transition-colors ${textColor} ${isActive ? 'text-sky-600 md:text-sky-500' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-base font-bold p-3 rounded-lg ${location.pathname === link.path ? 'bg-sky-50 text-sky-700' : 'text-slate-700'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
