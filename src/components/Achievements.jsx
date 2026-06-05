import { useState } from 'react';
import { motion } from 'framer-motion';

import imgClickSafe  from '../assets/award-clicksafe.jpg';
import imgLearnWidMi from '../assets/award-learnwidmi.jpg';
import imgHonour2024 from '../assets/award-honour-2024.jpg';
import imgHonour2025 from '../assets/award-honour-2025.jpeg';

const AWARDS = [
  {
    year: '2026', tag: '1st Place',
    name: 'UWI AI for Good Hackathon',
    sub:  'ClickSafe',
    detail: 'Placed first out of university-wide teams with ClickSafe, a real-time AI phishing detection platform built in 24 hours.',
    img: imgClickSafe, imgPos: 'center center',
  },
  {
    year: '2026', tag: 'Top 10 · Educational Impact',
    name: 'Intellibus × JDF Hackathon',
    sub:  'LearnWidMi',
    detail: 'Finished top 10 and received the Educational Impact Award for LearnWidMi, an adaptive learning platform with Jamaican Creole support.',
    img: imgLearnWidMi, imgPos: 'center top',
  },
  {
    year: '2025', tag: 'Honour Society',
    name: 'Computing Honour Society',
    sub:  'UWI Mona — Year 2 Sem 2 & Year 3 Sem 1',
    detail: 'Inducted in recognition of consistent academic excellence across two consecutive semesters.',
    img: imgHonour2025, imgPos: 'center center',
  },
  {
    year: '2024', tag: 'Honour Society · Inaugural Cohort',
    name: 'Computing Honour Society',
    sub:  'UWI Mona — Year 2 Sem 1',
    detail: 'Selected as part of the inaugural cohort recognising top-performing students in the Department of Computing.',
    img: imgHonour2024, imgPos: 'center center',
  },
  {
    year: '2023', tag: 'Commendation',
    name: 'Academic Commendation',
    sub:  'UWI Mona — Year 1 Semester 1',
    detail: 'Received a formal commendation for outstanding academic performance in the first semester of the BSc Computer Science programme.',
    img: null,
  },
];

const VISIBLE = 2;

export default function Awards() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? AWARDS : AWARDS.slice(0, VISIBLE);

  return (
    <section className="section bg-dark section-angled-both" id="awards">
      <div className="section-inner">

        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-label">Recognition</span>
        </div>
        <h2 className="section-heading">Awards &amp; Honours</h2>

        <div className="aw-list">
          {visible.map((a, i) => (
            <motion.div
              key={i}
              className="aw-entry"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <span className="aw-index">0{i + 1}</span>

              <div className="aw-entry-img">
                {a.img
                  ? <img src={a.img} alt={a.name} style={{ objectPosition: a.imgPos || 'center' }} />
                  : <div className="aw-entry-img-empty"><span>{a.year}</span></div>
                }
              </div>

              <div className="aw-entry-text">
                <div className="aw-entry-meta">
                  <span className="aw-entry-year">{a.year}</span>
                  <span className="aw-entry-tag">{a.tag}</span>
                </div>
                <p className="aw-entry-name">{a.name}</p>
                <p className="aw-entry-sub">{a.sub}</p>
                <p className="aw-entry-detail">{a.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="aw-view-more"
          onClick={() => setShowAll(v => !v)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {showAll ? 'Show less' : `View ${AWARDS.length - VISIBLE} more awards`}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.button>

      </div>
    </section>
  );
}
