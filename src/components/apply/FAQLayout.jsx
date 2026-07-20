import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: "Is there a time limit to finish the courses?",
    a: "You can finish a degree course at your own pace. However, there is a maximum time limit: Bachelor's degrees (4 years), Master's degrees (3 years), and Doctoral degrees (5 years) from the date of registration. You can also complete your program faster — there is no minimum time limit."
  },
  {
    q: "Do you have a specific time in the year for admission?",
    a: "No. We admit students throughout the year on any working day — 365 days. You can enroll as a correspondence student at any time. Hurry up and send your application!"
  },
  {
    q: "Are there any exams for these courses?",
    a: "Yes, but all exams are through correspondence only — not at any examination centre. You will receive study material and a questionnaire by registered post or email. You write the exams from your own place and send the answers back by post or email. Our faculty members evaluate and grade your answer sheets."
  },
  {
    q: "What is the working language of ABTS New Delhi?",
    a: "Our working language is English only."
  },
  {
    q: "Are the fees reasonable?",
    a: "Our course fees are very reasonable — the most affordable that an institute can offer. We exist to educate, equip, and validate those pursuing a deeper knowledge of the Bible, not to make a profit. We charge a minimum so that even the least financially able person can complete their desired theological study."
  },
  {
    q: "Do you conduct contact classes?",
    a: "No. However, you can contact ABTS New Delhi for all clarifications through telephone or by email. All doubts will be cleared over the phone, by mail, or in person."
  },
  {
    q: "When is the certificate issued?",
    a: "We will send your certificate within a maximum of 30 days of the completion of your studies, signed by our Director, Bishop Dr. Paogin Mangte."
  },
  {
    q: "Are fees refundable?",
    a: "Fees once paid are not refundable."
  },
  {
    q: "What do I need to submit for admission?",
    a: "Along with the filled application form, attach your educational certificate, a few lines about your ministry experience (testimony) in your own language or in English, and affix your passport-size photo on the application form."
  },
  {
    q: "How and when will I receive the curriculum?",
    a: "Within 7 to 10 working days of receiving your fee along with your application, we will send our curriculum to your address."
  },
  {
    q: "How do I pay the fees?",
    a: "National students can pay through online bank transfer, Money Order, Demand Draft, or cheques to our New Delhi ABTS office. International students can send fees through Western Union or MoneyGram in favour of 'Paogin Mangte', then email the secret code to pmangte@yahoo.co.in."
  },
  {
    q: "Is there a Graduation Ceremony?",
    a: "Yes! Students who wish to attend the graduation exercise need to contribute a graduation fee. You can also receive your certificate and transcript by post on completion of your course. On special request, we can organise a ceremony."
  },
  {
    q: "Can I be a Coordinator for ABTS in my city or country?",
    a: "Yes — this privilege is given to ABTS New Delhi students. Many coordinators assist us as volunteers and receive financial compensation from the fees of students they help admit."
  }
];

const highlights = [
  "Lessons and tests by correspondence",
  "Courses can be studied at home",
  "Open to servants of God and all Christians",
  "Open to men and women equally",
  "No denominational barrier",
  "Excellent, practical syllabus",
  "Enrollment at any time of the year"
];

export default function FAQLayout() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="w-full">
      {/* Hero Header */}
      <div className="mb-20">
        <h2
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8"
          style={{ fontFamily: 'var(--font-headings)' }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
          Everything you need to know about our correspondence programs, admissions, and exams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Accordion */}
        <div className="lg:col-span-2">
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left hover:text-sky-700 transition-colors"
                >
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 font-mono text-xs font-bold text-slate-400 mt-1 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug"
                      style={{ fontFamily: 'var(--font-headings)' }}
                    >
                      {faq.q}
                    </span>
                  </div>
                  <span className={`shrink-0 mt-1 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-sky-600 border-sky-600' : 'border-slate-300'}`}>
                    {open === i
                      ? <Minus className="w-3.5 h-3.5 text-white" />
                      : <Plus className="w-3.5 h-3.5 text-slate-500" />
                    }
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open === i ? 'max-h-96 pb-7' : 'max-h-0'}`}>
                  <p className="ml-11 text-lg text-slate-600 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sticky Highlights + CTA */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-8">
            {/* Why ABTS Box */}
            <div className="bg-slate-900 p-8">
              <h3
                className="text-2xl font-black text-white mb-6 tracking-tight"
                style={{ fontFamily: 'var(--font-headings)' }}
              >
                Why Choose ABTS?
              </h3>
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 font-medium text-sm">
                    <span className="text-sky-500 font-black mt-0.5 shrink-0">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="border border-slate-200 p-8">
              <h3
                className="text-xl font-black text-slate-900 mb-3 tracking-tight"
                style={{ fontFamily: 'var(--font-headings)' }}
              >
                Still have questions?
              </h3>
              <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
                Send us a message and our team will get back to you promptly.
              </p>
              <Link
                to="/online-enquiry"
                className="block text-center px-6 py-3 bg-sky-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-sky-700 transition-colors"
              >
                Send an Enquiry
              </Link>
              <Link
                to="/online-application-form-for-admission"
                className="block text-center mt-3 px-6 py-3 border border-slate-200 text-slate-700 font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Contact Quick-info */}
            <div className="text-sm text-slate-500 space-y-1 font-medium">
              <p className="font-bold text-slate-700 text-xs uppercase tracking-widest mb-3">Direct Contact</p>
              <p>📧 abtsindia@yahoo.in</p>
              <p>📞 +91-8851503372 (WhatsApp)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
