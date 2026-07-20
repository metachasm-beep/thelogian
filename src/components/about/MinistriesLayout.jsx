import React from 'react';

const ministries = [
  {
    title: "Gospel Outreach",
    desc: "Proclaiming the saving name of Jesus among unreached people near the Indo-Burma Border area.",
    img: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/Bro%20Mangte-Preached%20%20the%20Name%20Jesus%20among%20people%20at%20Indo%20Burma%20Village...%20Jungle%20before%20baptism%20in%20Jesus%20name.JPG",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Water Baptisms",
    desc: "Baptizing believers in the name of Jesus Christ for the forgiveness of sins, according to Acts 2:38.",
    img: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/Sister%20Nem%20was%20baptized%20in%20Jesu%20name%20at%20Burma%20Border%20river.JPG",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Bible Seminars",
    desc: "Conducting theological seminars at Sajik, Manipur to teach the Apostolic faith and the Oneness of God.",
    img: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/SAM_1101.JPG",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Church Planting",
    desc: "Opening new Apostolic churches (OAPCI) in remote towns like Moreh.",
    img: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/Halleluyah%20in%20Jesus%20name.JPG",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Theological Education",
    desc: "ABTS is committed to saving souls, minds, and bodies through teaching biblical truth.",
    img: "https://apostolictheologicalseminarynewdelhi.yolasite.com/resources/21-dec-2011%20Graduating%20students.JPG",
    span: "md:col-span-1 md:row-span-1"
  }
];

export default function MinistriesLayout() {
  return (
    <div className="w-full">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-6" style={{ fontFamily: 'var(--font-headings)' }}>
          Our Ministries
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
          To run a Bible Institution is not an easy task; it involves finance, manpower, and massive dedication. By faith, we are being led by the Lord to reach South Asia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ministries.map((min, idx) => (
          <div 
            key={idx} 
            className={`group relative overflow-hidden bg-slate-900 min-h-[300px] ${min.span}`}
          >
            <img 
              src={min.img} 
              alt={min.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-sky-400 font-mono text-sm tracking-widest block mb-2 font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3" style={{ fontFamily: 'var(--font-headings)' }}>
                  {min.title}
                </h3>
                <p className="text-slate-300 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {min.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-sky-50 border border-sky-100 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-headings)' }}>Partner With Us</h3>
        <p className="text-slate-700 font-medium max-w-2xl mx-auto mb-6">
          We need your prayers, support, and involvement. Your donation aids us as we preach the Gospel in remote and unreached areas.
        </p>
        <div className="inline-block px-6 py-3 bg-slate-900 text-white font-bold tracking-widest text-sm uppercase">
          Pray For Us
        </div>
      </div>
    </div>
  );
}
