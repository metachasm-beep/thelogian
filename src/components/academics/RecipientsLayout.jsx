import React from 'react';
import { Award } from 'lucide-react';

const recipients = [
  {
    name: "Bishop Dr. Michael A. Adams",
    degree: "Doctor of Ministry (D.Min Honoris Causa)",
    bio: "Current General Secretary for the Apostolic Brotherhood International, USA. Awarded for his unselfish, professional, and prominent contribution in the fields of Oneness Apostolic Christian apologetics, ministry, and evangelism.",
    img: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/ABTS%20ADMISSION%20NOTICE.jpg"
  },
  {
    name: "Rev. Dr. Denis G. Beedie",
    degree: "Doctor of Sacred Theology (STD)",
    bio: "From London, UK. Recognized for his lifelong dedication to biblical scholarship and his extensive pastoral care in the United Kingdom.",
    img: null
  },
  {
    name: "Dr. Langsun Doukhosei Mate",
    degree: "Doctor of Philosophy in Theology (Ph.D)",
    bio: "Income Tax High Commissioner, Kolkata (Govt. of India). Dr. Mate is a testament to the fact that theological depth can be pursued alongside an intense professional career.",
    img: null
  },
  {
    name: "Rev. Isu Jung Karki",
    degree: "Doctor of Divinity (D.D.)",
    bio: "Oneness Pastor from Kathmandu, Nepal. Recognized for his church planting efforts across the Himalayan region.",
    img: null
  }
];

export default function RecipientsLayout() {
  return (
    <div className="w-full">
      <div className="mb-24">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-8" style={{ fontFamily: 'var(--font-headings)' }}>
          Prominent Doctorate Recipients
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
          Here are just a few examples of ways ABTS graduates are spreading God’s Word across India and the World. We recognize outstanding servants of God for their prominent contributions.
        </p>
      </div>

      <div className="space-y-16">
        {recipients.map((rec, idx) => (
          <div key={idx} className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start bg-slate-50 hover:bg-slate-900 transition-colors duration-500 p-8 md:p-12 border border-slate-200 hover:border-slate-900">
            
            {/* Visual Icon / Image */}
            <div className="shrink-0">
              {rec.img ? (
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={rec.img} alt={rec.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-slate-200 group-hover:bg-sky-500 flex items-center justify-center transition-colors duration-500">
                  <Award className="w-10 h-10 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              )}
            </div>
            
            {/* Biography */}
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-white mb-2 transition-colors" style={{ fontFamily: 'var(--font-headings)' }}>
                {rec.name}
              </h3>
              <div className="font-mono text-sm tracking-widest text-sky-600 group-hover:text-sky-400 font-bold uppercase mb-6 transition-colors">
                {rec.degree}
              </div>
              <p className="text-lg md:text-xl text-slate-600 group-hover:text-slate-300 font-medium leading-relaxed max-w-4xl transition-colors">
                {rec.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
