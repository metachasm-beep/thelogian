import React from 'react';
import { Quote } from 'lucide-react';

const doctrines = [
  {
    topic: "ONE TRUE GOD",
    text: "There is one true God. In the Old Testament He revealed Himself by His name GOD ALMIGHTY and the I AM. (Exodus 3:14; 6:3) In the New Testament God presented Himself as a Divine God in a human body. 1 Tim. 3:16, “And without controversy great is the mystery of godliness: “God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory.” “… God was in Christ, reconciling the world unto Himself ….” 2 Cor. 5:19. Col. 2:9, “For in Him dwelleth all the fulness of the Godhead bodily.” “Hear, O Israel: the LORD our God is one LORD:” Deut. 6:4"
  },
  {
    topic: "THE NAME",
    text: "“For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.” Isaiah 9:6 “And she shall bring forth a son, and thou shalt call his name Jesus: for he shall save his people from their sins.” Matthew 1:21 Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.” Acts 4:12"
  },
  {
    topic: "REPENTANCE",
    text: "“Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord;” Acts 3:19 “And that repentance and remission of sins should be preached in his name among all nations, beginning at Jerusalem.” Luke 24:47"
  },
  {
    topic: "WATER BAPTISM",
    text: "“Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.” John 3:5 “Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.” Acts 2:38"
  },
  {
    topic: "HOLY GHOST BAPTISM",
    text: "“For John truly baptized with water; but ye shall be baptized with the Holy Ghost not many days hence.” Acts 1:5 “And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.” Acts 2:4 “Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.” Acts 2:38"
  },
  {
    topic: "THE BIBLE",
    text: "Without a doubt, the original scrolls penned by the Holy Men of God constituted the Word of God. These scrolls were presented to the people to whom they were written for the purpose of helping them to be in the will of God. The present translations in use still teach the holiness of God; that there is only One God; that New Testament salvation is presented to every age in Acts 2:38; that God provides rules and regulations concerning the ministry, laity, sinners, saints, the destitute and the government of His Church on earth."
  }
];

export default function FaithLayout() {
  return (
    <div className="w-full">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter leading-tight mb-8" style={{ fontFamily: 'var(--font-headings)' }}>
          Articles of Faith
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl leading-relaxed">
          The Apostolic Biblical Theological Seminary presents these articles of faith which are devotedly taught in all our literature and theology.
        </p>
      </div>

      <div className="flex flex-col border-t border-slate-900">
        {doctrines.map((doc, idx) => (
          <div key={idx} className="flex flex-col md:flex-row border-b border-slate-200">
            {/* Sticky Left Column */}
            <div className="w-full md:w-1/3 py-8 md:py-12 md:pr-12 md:border-r md:border-slate-200 shrink-0">
              <div className="sticky top-32">
                <span className="text-slate-400 font-mono text-sm tracking-widest block mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight" style={{ fontFamily: 'var(--font-headings)' }}>
                  {doc.topic}
                </h3>
              </div>
            </div>
            
            {/* Flowing Right Column */}
            <div className="w-full md:w-2/3 py-8 md:py-12 md:pl-12">
              <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-medium leading-relaxed">
                {doc.text.split('“').map((part, i) => {
                  if (i === 0) return <p key={i}>{part}</p>;
                  const quoteParts = part.split('”');
                  return (
                    <blockquote key={i} className="relative my-8 px-6 py-6 bg-slate-50 border-l-2 border-sky-500 italic text-slate-800">
                      <Quote className="absolute -top-3 -left-4 w-8 h-8 text-sky-200 bg-white rounded-full p-1 border border-slate-100" />
                      “{quoteParts[0]}”
                      {quoteParts[1] && <span className="block mt-4 not-italic font-bold text-sm text-slate-500 uppercase tracking-widest">{quoteParts[1].trim()}</span>}
                    </blockquote>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
