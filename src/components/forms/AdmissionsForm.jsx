import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function AdmissionsForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    program: '',
    previousEducation: '',
    testimony: ''
  });

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwyAYIpd7PVCPsPcMeGAWudk9of93p4v4sUMU8yka2gih9OfLjnZUMZhRY31X3zjDIfyw/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.result === 'success') {
        setSubmitted(true);
      } else {
        throw new Error(result.error || 'Failed to submit application');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred while submitting your application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center max-w-2xl mx-auto my-12">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-headings)' }}>Application Received</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Thank you for applying to the Apostolic Biblical Theological Seminary. Our admissions office will review your application and contact you via email shortly.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-brand-primary font-bold hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 max-w-4xl mx-auto my-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-headings)' }}>Online Application Form</h2>
        <p className="text-slate-500">Fill out the form below to apply for admission to ABTS.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-medium">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Full Name <span className="text-red-500">*</span></label>
            <input 
              required 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" 
              placeholder="John Doe" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Date of Birth <span className="text-red-500">*</span></label>
            <input 
              required 
              type="date" 
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-600" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
            <input 
              required 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" 
              placeholder="john@example.com" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
            <input 
              required 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all" 
              placeholder="+91 XXXXX XXXXX" 
            />
          </div>
        </div>

        <div className="space-y-2 pt-4">
          <label className="text-sm font-bold text-slate-700">Desired Program <span className="text-red-500">*</span></label>
          <select 
            required 
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-slate-700 appearance-none"
          >
            <option value="" disabled>Select a program...</option>
            <option value="c-th">Certificate in Theology (C.Th.)</option>
            <option value="dip-th">Diploma in Theology (Dip.Th.)</option>
            <option value="b-th">Bachelor of Theology (B.Th.)</option>
            <option value="m-div">Master of Divinity (M.Div.)</option>
            <option value="m-th">Master of Theology (M.Th.)</option>
            <option value="d-th">Doctor of Theology (D.Th.)</option>
          </select>
        </div>

        <div className="space-y-2 pt-4">
          <label className="text-sm font-bold text-slate-700">Previous Educational Qualifications</label>
          <textarea 
            name="previousEducation"
            value={formData.previousEducation}
            onChange={handleChange}
            rows="3" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none" 
            placeholder="List your previous degrees, institutions, and year of graduation..."
          ></textarea>
        </div>

        <div className="space-y-2 pt-4">
          <label className="text-sm font-bold text-slate-700">Personal Testimony / Statement of Purpose <span className="text-red-500">*</span></label>
          <textarea 
            required 
            name="testimony"
            value={formData.testimony}
            onChange={handleChange}
            rows="5" 
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none" 
            placeholder="Briefly share your salvation testimony and why you wish to study at ABTS..."
          ></textarea>
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
                Submitting...
              </span>
            ) : (
              <>
                <span>Submit Application</span>
                <Send size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
