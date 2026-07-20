import React from 'react';

const graduationData = [
  {
    year: "2015",
    degrees: [
      {
        name: "Doctor of Philosophy in Theology",
        graduates: ["Dr. Thathang", "Langsun Ngamjathang Mate"]
      },
      {
        name: "Doctor of Ministry (D.Min)",
        graduates: ["Elder R. Gaizon", "Pastor Ramesh Babu Peteti", "Evangelist Joshua Hrang Lian", "Rev. Ravin Wilson"]
      },
      {
        name: "Master of Theology (M.Th)",
        graduates: ["Rev. Huten", "Pastor Kamza Khai", "Bro. Khai Za Kap", "Bro. Kam Sian Tuang"]
      },
      {
        name: "Master of Divinity (M.Div)",
        graduates: ["Thawn Cin Khai", "Thang Sian Muang", "Dim Lun Cing", "Kham Suan Khai"]
      }
    ]
  },
  {
    year: "2013",
    degrees: [
      {
        name: "Doctor of Philosophy in Theology",
        graduates: ["Dr. Langsun Doukhosei Mate (IRS, Income Tax High Commissioner)"]
      },
      {
        name: "Doctor of Divinity (D.D.)",
        graduates: ["Dr. Haisui Daime"]
      },
      {
        name: "Master of Theology (M.Th)",
        graduates: ["Mr. L.N. Mate", "Mr. Tanthubou Panmei", "Mr. Merachao Golmei", "Bro. Leivon Heli Aimol"]
      },
      {
        name: "Bachelor of Divinity",
        graduates: ["Sis. Mathiubamliu Daimei", "Sis. Khan Lian Ting", "Bro. Shangmi Shimray"]
      }
    ]
  }
];

export default function GraduationLayout() {
  return (
    <div className="w-full">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-8" style={{ fontFamily: 'var(--font-headings)' }}>
          Roll of Honor
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          The burden of evangelizing is the responsibility of Christian men and women. We celebrate our graduates who are now serving across India, Burma, Africa, the Middle-East, and North America.
        </p>
      </div>

      <div className="space-y-32">
        {graduationData.map((yearBlock, idx) => (
          <div key={idx} className="relative">
            {/* Year Watermark */}
            <div className="absolute top-0 left-0 -translate-y-1/2 text-[15vw] font-black text-slate-100/50 pointer-events-none select-none z-0 tracking-tighter leading-none">
              {yearBlock.year}
            </div>
            
            <div className="relative z-10 border-t-2 border-slate-900 pt-16">
              <h3 className="text-3xl font-bold tracking-widest uppercase mb-16 text-sky-600 font-mono">
                Class of {yearBlock.year}
              </h3>
              
              <div className="columns-1 md:columns-2 gap-12 space-y-12">
                {yearBlock.degrees.map((deg, dIdx) => (
                  <div key={dIdx} className="break-inside-avoid">
                    <h4 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-200" style={{ fontFamily: 'var(--font-headings)' }}>
                      {deg.name}
                    </h4>
                    <ul className="space-y-3">
                      {deg.graduates.map((grad, gIdx) => (
                        <li key={gIdx} className="flex items-start font-medium text-slate-700">
                          <span className="text-slate-300 mr-3 mt-1.5 font-bold font-mono text-xs">--</span>
                          {grad}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
