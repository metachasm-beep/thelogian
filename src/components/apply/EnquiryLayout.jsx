import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare } from 'lucide-react';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwyAYIpd7PVCPsPcMeGAWudk9of93p4v4sUMU8yka2gih9OfLjnZUMZhRY31X3zjDIfyw/exec';

const contactMethods = [
  { icon: Mail,    label: 'Email',          value: 'abtsindia@yahoo.in',    href: 'mailto:abtsindia@yahoo.in' },
  { icon: Mail,    label: 'Director Email', value: 'pmangte@yahoo.co.in',   href: 'mailto:pmangte@yahoo.co.in' },
  { icon: Phone,   label: 'WhatsApp',       value: '+91-9599513372',        href: 'https://wa.me/919599513372' },
  { icon: Phone,   label: 'Phone',          value: '+91-8851503372',        href: 'tel:+918851503372' },
];

export default function EnquiryLayout() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  };

  const isValid = form.name.trim() && form.email.includes('@') && form.message.trim().length > 10;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      setTouched({ name: true, email: true, phone: true, message: true });
      return;
    }
    setStatus('loading');
    try {
      const params = new URLSearchParams({
        Name: form.name,
        Email: form.email,
        Phone: form.phone,
        Message: form.message,
        Timestamp: new Date().toLocaleString()
      });
      await fetch(`${WEBHOOK_URL}?${params.toString()}`, { method: 'GET', mode: 'no-cors' });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <div className="mb-20">
        <h2
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8"
          style={{ fontFamily: 'var(--font-headings)' }}
        >
          Online Enquiry
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
          Have a question about our programs, fees, or admissions? Send us a message and we'll respond promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-200">

        {/* Left — Form */}
        <div className="lg:col-span-3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <CheckCircle className="w-20 h-20 text-green-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: 'var(--font-headings)' }}>
                Message Sent!
              </h3>
              <p className="text-slate-500 font-medium max-w-sm leading-relaxed mb-8">
                Thank you for reaching out. Bishop Dr. Paogin Mangte or a member of the ABTS team will reply to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-sky-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Name */}
              <div className="group">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  <User className="w-3.5 h-3.5" /> Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Pastor John Samuel"
                  className={`w-full bg-transparent border-b-2 pb-3 text-lg font-semibold text-slate-900 placeholder:text-slate-300 focus:outline-none transition-colors ${touched.name && !form.name.trim() ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'}`}
                />
                {touched.name && !form.name.trim() && (
                  <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Name is required</p>
                )}
              </div>

              {/* Email */}
              <div className="group">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  <Mail className="w-3.5 h-3.5" /> Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="you@example.com"
                  className={`w-full bg-transparent border-b-2 pb-3 text-lg font-semibold text-slate-900 placeholder:text-slate-300 focus:outline-none transition-colors ${touched.email && !form.email.includes('@') ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'}`}
                />
                {touched.email && !form.email.includes('@') && (
                  <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> A valid email is required</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  <Phone className="w-3.5 h-3.5" /> Phone / WhatsApp <span className="text-slate-400 normal-case font-normal tracking-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full bg-transparent border-b-2 border-slate-200 pb-3 text-lg font-semibold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
                  <MessageSquare className="w-3.5 h-3.5" /> Your Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Tell us about the program you're interested in, your background, or any specific questions you have..."
                  className={`w-full bg-slate-50 border-2 p-4 text-base font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none resize-none transition-colors ${touched.message && form.message.trim().length < 10 ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'}`}
                />
                {touched.message && form.message.trim().length < 10 && (
                  <p className="text-red-500 text-xs mt-2 font-medium flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Please enter a more detailed message</p>
                )}
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-600 text-sm font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please email us directly at abtsindia@yahoo.in.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full justify-center"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right — Contact Info */}
        <div className="lg:col-span-2 bg-slate-900 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3
              className="text-2xl font-black text-white mb-2 tracking-tight"
              style={{ fontFamily: 'var(--font-headings)' }}
            >
              Other Ways to Reach Us
            </h3>
            <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">
              We are available 24 / 7 — anytime.
            </p>

            <div className="space-y-6">
              {contactMethods.map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 group-hover:bg-sky-600 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{c.label}</p>
                      <p className="text-white font-semibold text-sm mt-0.5">{c.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Scripture Footer */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-400 italic text-sm font-medium leading-relaxed mb-3">
              "The goal of our instruction is love."
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-500">1 Timothy 1:5</span>
            <div className="mt-5">
              <p className="text-white font-bold text-sm">Bishop Dr. Paogin Mangte</p>
              <p className="text-slate-500 text-xs mt-0.5">Founder & President, ABTS New Delhi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
