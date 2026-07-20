import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';

export default function PrayerRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center max-w-2xl mx-auto my-12">
        <div className="w-20 h-20 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart size={40} className="fill-current" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-headings)' }}>Request Received</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thank you for sharing your prayer request. Our intercessory prayer team at ABTS will be praying for you.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-brand-primary font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 max-w-2xl mx-auto my-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-headings)' }}>Submit a Prayer Request</h2>
        <p className="text-slate-500">"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." (Philippians 4:6)</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Name (Optional)</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="Your Name" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email (Optional)</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" placeholder="your@email.com" />
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="text-sm font-bold text-slate-700">Prayer Request Details <span className="text-red-500">*</span></label>
          <textarea 
            required 
            rows="6" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none" 
            placeholder="How can we pray for you?"
          ></textarea>
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input 
            type="checkbox" 
            id="confidential" 
            className="mt-1 w-4 h-4 text-brand-primary bg-slate-100 border-slate-300 rounded focus:ring-brand-primary"
          />
          <label htmlFor="confidential" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
            Keep this request confidential. (It will only be shared with the pastoral leadership, not the general prayer team.)
          </label>
        </div>

        <div className="pt-6">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full md:w-auto px-8 py-4 bg-brand-primary hover:bg-sky-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            style={{ backgroundColor: 'var(--color-brand-primary, #1e3a8a)' }}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Sending...
              </span>
            ) : (
              <>
                <span>Submit Prayer Request</span>
                <Send size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
