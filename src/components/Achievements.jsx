import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Award as AwardIcon, ChevronRight, ChevronDown } from 'lucide-react';

import imgClickSafe  from '../assets/award-clicksafe.jpg';
import imgLearnWidMi from '../assets/award-learnwidmi.jpg';
import imgHonour2024 from '../assets/award-honour-2024.jpg';
import imgHonour2025 from '../assets/award-honour-2025.jpeg';

const AWARDS = [
  {
    year: '2026', tag: '1st Place',
    name: 'UWI AI for Good Hackathon',
    sub:  'ClickSafe',
    detail: 'Placed first out of university-wide teams with ClickSafe, a real-time AI phishing detection platform built in 7 hours.',
    img: imgClickSafe, imgPos: 'center 22%',
    accent: '#7B5EF8', icon: Trophy,
  },
  {
    year: '2026', tag: 'Top 10 · Educational Impact',
    name: 'Intellibus × JDF Hackathon',
    sub:  'LearnWidMi · Team RunCode',
    detail: 'LearnWidMi delivers AI-generated visual explanations in both Standard English and Jamaican Creole, so students can learn in whichever version actually clicks. Competing as Team RunCode, we landed a Top 10 finish and the Educational Impact Award, with UWI\'s Faculty of Science and Technology featuring the project as a standout.',
    link: 'https://www.mona.uwi.edu/fst/celebrating-excellence-innovation-and-technology',
    linkLabel: 'Read the UWI feature',
    img: imgLearnWidMi, imgPos: 'center top',
    accent: '#B8AAFF', icon: Medal,
  },
  {
    year: '2025', tag: 'Honour Society',
    name: 'Computing Honour Society',
    sub:  'UWI Mona, Year 2 Sem 2 & Year 3 Sem 1',
    detail: 'Inducted in recognition of consistent academic excellence across two consecutive semesters.',
    img: imgHonour2025, imgPos: 'center 18%',
    accent: '#7B5EF8', icon: AwardIcon,
  },
  {
    year: '2024', tag: 'Inaugural Cohort',
    name: 'Computing Honour Society',
    sub:  'UWI Mona, Year 2 Sem 1',
    detail: 'Selected as part of the inaugural cohort recognising top-performing students in the Department of Computing.',
    img: imgHonour2024, imgPos: 'center 15%',
    accent: '#B8AAFF', icon: AwardIcon,
  },
  {
    year: '2023', tag: 'Commendation',
    name: 'Academic Commendation',
    sub:  'UWI Mona, Year 1 Semester 1',
    detail: 'Received a formal commendation for outstanding academic performance in the first semester of the BSc Computer Science programme.',
    img: null,
    accent: '#7B5EF8', icon: AwardIcon,
  },
];

function AwardRow({ award, active, onSelect, index }) {
  const Icon = award.icon;
  return (
    <motion.button
      className={`aw-row${active ? ' aw-row-active' : ''}`}
      style={{ '--row-accent': award.accent }}
      onClick={onSelect}
      onMouseEnter={onSelect}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="aw-row-year">{award.year}</span>
      <span className="aw-row-icon"><Icon size={15} /></span>
      <span className="aw-row-main">
        <span className="aw-row-name">{award.name}</span>
        <span className="aw-row-sub">{award.tag} · {award.sub}</span>
      </span>
      <span className="aw-row-arrow"><ChevronRight size={18} /></span>
    </motion.button>
  );
}

function AwardAccordionItem({ award, open, onToggle, index }) {
  const Icon = award.icon;
  return (
    <div className={`aw-acc-item${open ? ' aw-acc-item-open' : ''}`} style={{ '--row-accent': award.accent }}>
      <motion.button
        className="aw-acc-trigger"
        onClick={onToggle}
        aria-expanded={open}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="aw-row-year">{award.year}</span>
        <span className="aw-row-icon"><Icon size={15} /></span>
        <span className="aw-row-main">
          <span className="aw-row-name">{award.name}</span>
          <span className="aw-row-sub">{award.tag} · {award.sub}</span>
        </span>
        <ChevronDown className="aw-acc-chevron" size={18} />
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="aw-acc-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {award.img && (
              <div className="aw-acc-img">
                <img src={award.img} alt={award.name} style={{ objectPosition: award.imgPos || 'center' }} />
              </div>
            )}
            <div className="aw-acc-body">
              <p className="aw-preview-detail">{award.detail}</p>
              {award.link && (
                <a className="aw-panel-link" href={award.link} target="_blank" rel="noopener noreferrer">
                  {award.linkLabel || 'Read more'} <ChevronRight size={13} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Awards() {
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState(0);
  const award = AWARDS[active];
  const Icon = award.icon;

  // preload every award photo up front so switching between them is instant
  // instead of re-fetching/flickering each time the preview swaps.
  useEffect(() => {
    AWARDS.forEach(a => {
      if (a.img) { const preload = new Image(); preload.src = a.img; }
    });
  }, []);

  return (
    <section className="section bg-dark section-angled-both" id="awards">
      <div className="section-inner">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Recognition</span>
          </div>
          <h2 className="section-heading">Awards &amp; Honours</h2>
        </motion.div>

        <div className="aw-split-layout">

          {/* left: image + short writeup preview */}
          <div className="aw-preview-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="aw-preview"
                style={{ '--clip-accent': award.accent }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {award.img ? (
                  <div className="aw-panel-preview-img">
                    <img src={award.img} alt={award.name} style={{ objectPosition: award.imgPos || 'center' }} />
                  </div>
                ) : (
                  <div className="aw-panel-preview-img aw-panel-preview-empty">
                    <Icon size={40} />
                  </div>
                )}
                <div className="aw-preview-body">
                  <div className="aw-preview-body-top">
                    <span className="aw-preview-year">{award.year}</span>
                    <h3 className="aw-preview-name">{award.name}</h3>
                    <p className="aw-preview-sub">{award.sub}</p>
                    <p className="aw-preview-detail">{award.detail}</p>
                  </div>
                  <div className="aw-preview-footer">
                    {award.link ? (
                      <a className="aw-panel-link" href={award.link} target="_blank" rel="noopener noreferrer">
                        {award.linkLabel || 'Read more'} <ChevronRight size={13} />
                      </a>
                    ) : <span />}
                    <span className="aw-preview-index">{String(AWARDS.indexOf(award) + 1).padStart(2, '0')} / {String(AWARDS.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* right: editorial list */}
          <div className="aw-rail-list">
            {AWARDS.map((a, i) => (
              <AwardRow key={i} award={a} index={i} active={i === active} onSelect={() => setActive(i)} />
            ))}
          </div>

        </div>

        {/* mobile: accordion */}
        <div className="aw-accordion">
          {AWARDS.map((a, i) => (
            <AwardAccordionItem
              key={i}
              award={a}
              index={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
