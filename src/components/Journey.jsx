import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ROLES = [
  {
    role: 'Software Development Intern',
    company: 'St. Andrew, Jamaica',
    dates: 'Jun 2024 – Aug 2024, Jun 2025 – Aug 2025',
    bullets: [
      'Built and maintained full-stack components for enterprise client systems using HTML, CSS, PHP and MySQL.',
      'Collaborated with senior developers on system design, database architecture and debugging across enterprise applications.',
      'Managed and updated websites for clients across education, religious and tourism sectors, handling ongoing content and design updates.',
    ],
    projects: [
      { name: 'Aircraft Billing System for Jamaica', desc: 'Developed and implemented modules for Aircraft Types, Aircraft Records and Manufacturers.' },
      { name: 'Credit Union Website Upgrade', desc: 'Redesigned and implemented a responsive website improving usability and overall user experience.' },
    ],
  },
];

function TimelineNode({ entry, index, open, onToggle }) {
  return (
    <motion.div
      className="exp-node"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className="exp-node-dot-col">
        <span className="exp-node-dot" />
      </div>

      <div className="exp-node-content">
        <button className="exp-node-header" onClick={onToggle} aria-expanded={open}>
          <div>
            <p className="exp-role">{entry.role}</p>
            <p className="exp-company-tag">{entry.company}</p>
          </div>
          <div className="exp-node-header-right">
            <span className="exp-node-date">{entry.dates}</span>
            <ChevronDown size={16} className={`exp-node-chevron${open ? ' open' : ''}`} />
          </div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              className="exp-node-body-wrap"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="exp-entry-body">
                <ul className="exp-bullets">
                  {entry.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="exp-projects-col">
                  <p className="exp-projects-label">Key Projects</p>
                  {entry.projects.map((p) => (
                    <div className="exp-project-item" key={p.name}>
                      <p className="exp-project-name">{p.name}</p>
                      <p className="exp-project-desc">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="exp-section section bg-black section-angled" id="experience">
      <div className="section-inner">

        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-label">Experience</span>
        </div>

        <motion.div
          className="exp-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="exp-heading">Where I have worked.</h2>
          <p className="exp-sub">
            Two summers working across enterprise client systems with a
            senior engineering team.
          </p>
        </motion.div>

        <div className="exp-timeline">
          <div className="exp-timeline-line" />
          {ROLES.map((entry, i) => (
            <TimelineNode
              key={i}
              entry={entry}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
