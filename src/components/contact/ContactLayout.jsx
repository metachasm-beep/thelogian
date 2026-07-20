import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactDetails = [
  {
    icon: MapPin,
    label: "Campus Address",
    lines: [
      "A-2/E-2, 1st Floor, Chanakya Place,",
      "40th Feet Road, Opp: C-1, Janakpuri,",
      "Uttam Nagar, New Delhi - 110059, India."
    ]
  },
  {
    icon: MapPin,
    label: "Permanent Mailing Address",
    lines: [
      "C/O Mr. Alun Mangte,",
      "Plot No. 1, Behind Dilli Haat,",
      "Opp: INA Market, West Kidwai Nagar,",
      "New Delhi - 110023, India."
    ]
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    lines: ["+91-9599513372", "+91-8851503372"]
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["abtsindia@yahoo.in", "pmangte@yahoo.co.in"]
  },
  {
    icon: Clock,
    label: "Hours of Operation",
    lines: ["24 / 7 — Anytime"]
  }
];

const quickLinks = [
  { label: "Apply Online", to: "/online-application-form-for-admission" },
  { label: "Submit Prayer Request", to: "/prayer-request" },
  { label: "Academic Programs", to: "/academic" },
  { label: "Online Enquiry", to: "/online-enquiry" }
];

export default function ContactLayout() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full">
      {/* Hero Statement */}
      <div className="mb-24">
        <h2
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8"
          style={{ fontFamily: 'var(--font-headings)' }}
        >
          Get in Touch
        </h2>
        <p className="text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
          Bishop Dr. Paogin Mangte and the ABTS team are available to answer any questions about admissions, theology, or ministry partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-slate-200">
        {/* Left: Contact Cards */}
        <div className="lg:col-span-3 divide-y divide-slate-200">
          {contactDetails.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-start gap-6 p-8 hover:bg-slate-900 transition-colors duration-300 cursor-default"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border border-slate-200 group-hover:border-sky-500 group-hover:bg-sky-500 flex items-center justify-center transition-all duration-300">
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-sky-400 block mb-2 transition-colors">
                    {item.label}
                  </span>
                  {item.lines.map((line, lIdx) => (
                    <p
                      key={lIdx}
                      onClick={() => handleCopy(line, `${idx}-${lIdx}`)}
                      className="text-lg font-semibold text-slate-800 group-hover:text-white transition-colors leading-relaxed cursor-pointer"
                      title="Click to copy"
                    >
                      {copied === `${idx}-${lIdx}` ? (
                        <span className="text-sky-400 text-sm">Copied!</span>
                      ) : line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Quick Actions */}
        <div className="lg:col-span-2 bg-slate-900 p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3
              className="text-3xl font-black text-white tracking-tight mb-2"
              style={{ fontFamily: 'var(--font-headings)' }}
            >
              Quick Links
            </h3>
            <p className="text-slate-400 font-medium mb-10 text-sm leading-relaxed">
              Reach us faster through one of these channels.
            </p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="group/link flex items-center justify-between px-5 py-4 border border-slate-700 hover:border-sky-500 hover:bg-sky-500/10 transition-all duration-300"
                >
                  <span className="text-white font-semibold text-sm uppercase tracking-widest">
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover/link:text-sky-400 group-hover/link:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Founder Sig */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm font-medium italic leading-relaxed mb-4">
              "The goal of our instruction is love."
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-sky-500 block">1 Timothy 1:5</span>
            <div className="mt-4">
              <p className="text-white font-bold">Bishop Dr. Paogin Mangte</p>
              <p className="text-slate-400 text-sm">Founder &amp; President, ABTS &amp; OAPCI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
