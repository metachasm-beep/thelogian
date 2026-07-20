import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import logoImg from '../../assets/LOGO_transparent.png';
import SearchModal from '../ui/SearchModal';

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
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div 
              className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.open(logoImg, '_blank');
              }}
              title="Click to view full logo"
            >
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
              
              if (link.name === 'Admissions') return null; // We'll render Admissions as a primary button

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
            
            {/* Search Trigger */}
            <button 
              onClick={() => setSearchOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${isScrolled || location.pathname !== '/' ? 'border-slate-200 bg-white/50 text-slate-500 hover:bg-slate-100 hover:text-slate-900' : 'border-white/20 bg-black/20 text-white/80 hover:bg-black/40 hover:text-white'}`}
            >
              <Search size={14} />
              <span>Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 rounded bg-black/10 text-[10px] font-mono">⌘K</kbd>
            </button>

            {/* Apply Now Primary Button */}
            <Link
              to="/online-application-form-for-admission"
              className="px-5 py-2 rounded-full bg-brand-accent hover:bg-amber-600 text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              style={{ backgroundColor: 'var(--color-brand-accent, #b45309)' }}
            >
              Apply Now
            </Link>
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
          <button 
            onClick={() => { setSearchOpen(true); setMobileMenuOpen(false); }}
            className="flex items-center justify-between text-base font-bold p-3 rounded-lg text-slate-700 bg-slate-50"
          >
            <span>Search</span>
            <Search size={18} />
          </button>
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

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
