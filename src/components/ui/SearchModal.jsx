import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen } from 'lucide-react';
import { searchPages } from '../../services/ContentService';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === 'Enter' && results.length > 0 && results[selectedIndex]) {
        e.preventDefault();
        handleSelect(results[selectedIndex].path);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  useEffect(() => {
    if (query.trim().length > 1) {
      setResults(searchPages(query));
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6 lg:px-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 flex flex-col max-h-[80vh]">
        {/* Search Input */}
        <div className="relative border-b border-slate-100 px-4 py-4 flex items-center gap-3">
          <Search className="text-slate-400" size={20} />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-lg"
            placeholder="Search academics, admissions, doctrine..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto p-2">
          {query.trim().length > 1 && results.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              No results found for "{query}".
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              {results.map((result, idx) => (
                <button
                  key={result.path}
                  onClick={() => handleSelect(result.path)}
                  className={`w-full flex flex-col text-left px-4 py-3 rounded-xl transition-colors ${idx === selectedIndex ? 'bg-sky-50 ring-1 ring-sky-200' : 'hover:bg-slate-50'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={14} className={idx === selectedIndex ? 'text-sky-600' : 'text-slate-400'} />
                    <span className={`font-semibold ${idx === selectedIndex ? 'text-sky-900' : 'text-slate-900'}`}>
                      {result.title}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 ml-auto">
                      {result.category}
                    </span>
                  </div>
                  {result.snippet && (
                    <div className="text-sm text-slate-500 line-clamp-2 pl-6">
                      {result.snippet}
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center flex flex-col items-center text-slate-500 gap-2">
              <Search size={32} className="text-slate-200" />
              <p>Type to search ABTS content...</p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="border-t border-slate-100 px-4 py-3 bg-slate-50 text-xs text-slate-500 flex justify-between">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-sm font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-sm font-mono text-[10px]">↓</kbd> to navigate</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-sm font-mono text-[10px]">↵</kbd> to select</span>
          </div>
          <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 shadow-sm font-mono text-[10px]">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
