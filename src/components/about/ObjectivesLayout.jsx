import React from 'react';

const objectives = [
  {
    title: "Evangelism & Discipleship",
    desc: "To develop men and women who are able to effectively evangelize those who do not know Jesus Christ, and who are prepared to disciple saints through their teaching, counseling and caring."
  },
  {
    title: "Scholarly Resource",
    desc: "To serve as a scholarly resource for the exploration and proclamation of the Oneness apostolic faith."
  },
  {
    title: "Innovative Ministry",
    desc: "To proactively explore the needs of an ever-changing world, working to develop innovative ministries that effectively bridge the gospel into varying cultural contexts."
  }
];

export default function ObjectivesLayout() {
  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-tight mb-6" style={{ fontFamily: 'var(--font-headings)' }}>
          Our Objectives
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
          The Apostolic Biblical Theological Seminary (ABTS) is built upon three foundational pillars designed to equip the next generation of spiritual leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {objectives.map((obj, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white border border-slate-200 p-8 md:p-12 overflow-hidden hover:border-slate-400 transition-colors"
          >
            {/* Massive Monospaced Number */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 text-[12rem] font-bold font-mono text-slate-50 opacity-50 select-none group-hover:text-slate-100 group-hover:scale-110 transition-all duration-500">
              0{idx + 1}
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-headings)' }}>
                {obj.title}
              </h3>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
                {obj.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
