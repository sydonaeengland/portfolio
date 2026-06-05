import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

import dlrsjam1 from '../assets/dlrsjam-1.JPG';
import dlrsjam3 from '../assets/dlrsjam-3.JPG';
import dlrsjam4 from '../assets/dlrsjam-4.JPG';
import dlrsjam5 from '../assets/dlrsjam-5.JPG';
import dlrsjam6 from '../assets/dlrsjam-6.JPG';
import dlrsjam7 from '../assets/dlrsjam-7.JPG';
import dlrsjam8 from '../assets/dlrsjam-8.JPG';
import clicksafe1 from '../assets/clicksafe-1.jpg';
import clicksafe2 from '../assets/clicksafe-2.jpg';
import clicksafe3 from '../assets/clicksafe-3.jpg';
import learnwidmi1 from '../assets/learnwidmi-1.jpg';
import learnwidmi2 from '../assets/learnwidmi-2.jpg';
import learnwidmi3 from '../assets/learnwidmi-3.jpg';
import care1 from '../assets/care-1.jpg';
import care2 from '../assets/care-2.png';
import care3 from '../assets/care-3.png';

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
const ICON_MAP = {
  React:      `${DI}/react/react-original.svg`,
  Python:     `${DI}/python/python-original.svg`,
  Flask:      `${DI}/flask/flask-original.svg`,
  PostgreSQL: `${DI}/postgresql/postgresql-original.svg`,
  Java:       `${DI}/java/java-original.svg`,
  Figma:      `${DI}/figma/figma-original.svg`,
  MySQL:      `${DI}/mysql/mysql-original.svg`,
};

const PROJECTS = [
  {
    num: '01', name: 'DLRSJAM', tag: 'Capstone · COMP3901 · Full-Stack PWA',
    role: 'Full-Stack Developer', year: '2026', color: '#5B3CF5', accent: '#B8AAFF',
    fullName: "Driver's Licence Renewal System of Jamaica",
    short: "A full prototype PWA that takes Jamaica's driver's licence renewal from a manual, queue-dependent process to a secure guided digital workflow with AI identity verification.",
    desc: "DLRSJAM addresses a real gap in Jamaica's public services: there is no official way to renew a driver's licence digitally. The system guides applicants through a structured workflow covering document submission, biometric identity verification, payment, and officer review — all without leaving home. Three separate portals serve applicants, processing officers, and supervisors, each with scoped access and a full audit trail.",
    detail: [
      'AI-powered identity verification combining document analysis, liveness detection, and face matching.',
      'Role-based portals for applicants, officers, and supervisors with server-enforced access control.',
      'Automated workload distribution assigns applications to the officer with the lowest active case count.',
      'Secure payment processing with application fees calculated server-side by licence type.',
      'Digital licence generated and available for download immediately on approval.',
    ],
    stack: ['React', 'Python', 'Flask', 'PostgreSQL', 'MediaPipe', 'Stripe'], screenshots: [dlrsjam1, dlrsjam3, dlrsjam4, dlrsjam5, dlrsjam6, dlrsjam7, dlrsjam8],
  },
  {
    num: '02', name: 'ClickSafe', tag: '1st Place, UWI AI for Good Hackathon 2026',
    role: 'Lead Developer', year: '2026', color: '#22C55E', accent: '#86EFAC',
    fullName: 'AI-Powered Phishing Detection Platform',
    short: 'Real-time phishing detection built for everyday users. Scan links, emails, or screenshots and know instantly whether to click. Won 1st place in 24 hours.',
    desc: "Most phishing protection is built for security professionals. ClickSafe was built for everyone else. Students, everyday users, and anyone who receives suspicious links or emails can paste, scan, or upload and get a clear, plain-language answer on whether something is safe — no technical knowledge required.",
    detail: [
      'Scans links, email text, and uploaded screenshots through a single unified pipeline.',
      'Connects to Gmail and Outlook so users can scan their actual inbox without leaving the app.',
      'AI assesses multiple threat signals and returns a risk score with a plain-language explanation.',
      'Results show what was flagged, why it was flagged, and what to do next.',
      'Built and submitted in under 24 hours, awarded 1st place for real-world impact.',
    ],
    stack: ['Lovable', 'Supabase', 'OpenRouter', 'TypeScript'], screenshots: [clicksafe1, clicksafe2, clicksafe3],
  },
  {
    num: '03', name: 'LearnWidMi', tag: 'Top 10 + Educational Impact Award, Intellibus x JDF 2026',
    role: 'Frontend Developer & Product Co-designer', year: '2026', color: '#F59E0B', accent: '#FCD34D',
    fullName: 'AI Learning Platform for Jamaican Students',
    short: 'AI-powered learning that meets Jamaican students where they are — in the language they actually speak. Top 10 and Educational Impact Award winner.',
    desc: "Jamaica's education system teaches in Standard English, but most students communicate in Patois every day. That gap quietly blocks understanding. LearnWidMi removes it by delivering curriculum content in both languages, so students can grasp concepts in the language that feels natural before bridging to formal English.",
    detail: [
      'Curriculum explanations available in both Standard English and Jamaican Patois.',
      'AI-generated whiteboard videos that break down concepts visually, step by step.',
      'Built-in AI study assistant that gives personalised tips based on progress.',
      'Gamified progress system that rewards consistency and learning milestones.',
      'Practice tools including flashcards, quizzes, mock exams, and past papers.',
    ],
    stack: ['React', 'Supabase', 'ElevenLabs', 'OpenRouter'], screenshots: [learnwidmi1, learnwidmi2, learnwidmi3],
  },
  {
    num: '04', name: 'MRC School System', tag: 'Software Engineering · COMP2140',
    role: 'Lead Developer', year: '2024', color: '#0EA5E9', accent: '#7DD3FC',
    fullName: 'MRC Family School Management System',
    short: 'A Java desktop system that replaced entirely paper-based school administration with a structured, role-based management tool built for teachers and administrators.',
    desc: 'MRC Family School had no digital system. Every student record, class assignment, attendance log, and grade was managed by hand. This desktop application centralised all of that into one structured system with separate access levels for teachers and administrators, built around a clean repository architecture that keeps each module independent.',
    detail: [
      'Role-based access: teachers manage classes, attendance and grades; admins manage everything.',
      'Six interconnected modules covering students, classes, attendance, grades, staff, and reporting.',
      'Automated grade averaging and performance analytics across students and subjects.',
      'All staff actions are logged for accountability and compliance.',
      'Designed to run offline without internet dependency.',
    ],
    stack: ['Java', 'MySQL', 'OOP'], screenshots: [],
  },
  {
    num: '05', name: 'CareLink', tag: 'UI/UX Design · INFO3170',
    role: 'Lead Designer', year: '2025', color: '#EC4899', accent: '#F9A8D4',
    fullName: 'Remote Elder Care Connection App',
    short: 'A UI/UX design project addressing a real gap: no platform in Jamaica combines verified care services, elderly-accessible design, and real-time family visibility in one place.',
    desc: 'CareLink is a mobile app concept designed for INFO3170. Many Jamaicans living overseas rely on informal WhatsApp coordination to arrange care for elderly relatives at home — no tracking, no verification, no safety net. CareLink was designed to replace that with a trusted, accessible platform built specifically around the needs of elderly users and the families watching from abroad.',
    detail: [
      'Designed for elderly users: large fonts, voice assistance, one-tap confirmations, and plain-language prompts throughout.',
      'Verified provider network with photo identification visible to families before anyone arrives at the home.',
      'Real-time tracking and photo confirmation of every completed delivery or visit.',
      'Emergency alert that simultaneously notifies the family abroad, the assigned caregiver, and local responders.',
      'SMS and offline fallback for rural areas with unreliable internet or power.',
    ],
    stack: ['Figma', 'UI/UX'], screenshots: [care1, care2, care3], portrait: true,
  },
];

function ProjectDrawer({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const n = project.screenshots.length;
  const prev = () => setActiveImg(i => (i - 1 + n) % n);
  const next = () => setActiveImg(i => (i + 1) % n);

  // keyboard navigation
  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') { if (lightbox) setLightbox(false); else onClose(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, n]);

  return (
    <motion.div
      className="proj-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className="proj-modal"
        initial={{ opacity: 0, scale: 0.97, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <button className="proj-modal-close" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        <div className={`proj-modal-layout${project.screenshots.length === 0 ? ' proj-modal-layout-noimg' : ''}`}>

          {/* LEFT: gallery */}
          <div className="proj-modal-gallery-col">

            {/* landscape: full image, no crop */}
            {!project.portrait && project.screenshots.length > 0 && (
              <div className="proj-modal-gallery-main" style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.color}18 0%, #0C0C0E 80%)` }}>
                <img
                  key={activeImg}
                  src={project.screenshots[activeImg]}
                  alt={`${project.name} screenshot ${activeImg + 1}`}
                  className="proj-modal-gallery-img"
                  onClick={() => setLightbox(true)}
                />
                {n > 1 && (
                  <>
                    <button className="proj-modal-gallery-arrow proj-modal-gallery-arrow-left" onClick={prev} aria-label="Previous">
                      <ChevronLeft size={16} />
                    </button>
                    <button className="proj-modal-gallery-arrow proj-modal-gallery-arrow-right" onClick={next} aria-label="Next">
                      <ChevronRight size={16} />
                    </button>
                    <span className="proj-modal-gallery-count">{activeImg + 1} / {n}</span>
                  </>
                )}
                <button className="proj-modal-expand" onClick={() => setLightbox(true)} aria-label="Expand image">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </button>
              </div>
            )}

            {/* landscape: no screenshots */}
            {!project.portrait && project.screenshots.length === 0 && (
              <div className="proj-modal-gallery-main" style={{ background: `radial-gradient(ellipse at 50% 50%, ${project.color}18 0%, #0C0C0E 80%)` }}>
                <span className="proj-modal-ghost" style={{ color: `${project.color}20` }}>{project.name}</span>
              </div>
            )}

            {/* portrait: single screen viewer with arrows */}
            {project.portrait && project.screenshots.length > 0 && (
              <div className="proj-modal-portrait-viewer" style={{ background: `radial-gradient(ellipse at 50% 80%, ${project.color}18 0%, #0C0C0E 70%)` }}>
                <div className="proj-modal-portrait-single" style={{ position: 'relative' }}>
                  <img
                    key={activeImg}
                    src={project.screenshots[activeImg]}
                    alt={`${project.name} screen ${activeImg + 1}`}
                    className="proj-modal-portrait-img"
                    onClick={() => setLightbox(true)}
                    style={{ cursor: 'zoom-in' }}
                  />
                  <button className="proj-modal-expand proj-modal-expand-portrait" onClick={() => setLightbox(true)} aria-label="Expand image">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                  </button>
                </div>
                {project.screenshots.length > 1 && (
                  <div className="proj-modal-portrait-nav">
                    <button
                      onClick={() => setActiveImg(i => (i - 1 + project.screenshots.length) % project.screenshots.length)}
                      className="proj-modal-portrait-arrow"
                      style={{ color: project.color }}
                      aria-label="Previous screen"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="proj-modal-portrait-count" style={{ color: project.color }}>
                      {activeImg + 1} / {project.screenshots.length}
                    </span>
                    <button
                      onClick={() => setActiveImg(i => (i + 1) % project.screenshots.length)}
                      className="proj-modal-portrait-arrow"
                      style={{ color: project.color }}
                      aria-label="Next screen"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* landscape thumbnails */}
            {!project.portrait && project.screenshots.length > 1 && (
              <div className="proj-modal-thumbs">
                {project.screenshots.map((src, i) => (
                  <button
                    key={i}
                    className="proj-modal-thumb"
                    onClick={() => setActiveImg(i)}
                    style={{
                      border: `2px solid ${i === activeImg ? project.color : 'rgba(255,255,255,0.08)'}`,
                      opacity: i === activeImg ? 1 : 0.4,
                    }}
                    aria-label={`Screenshot ${i + 1}`}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}

            {/* meta */}
            <div className="proj-modal-meta">
              {[
                { label: 'Role',     val: project.role },
                { label: 'Year',     val: project.year },
                { label: 'Category', val: project.tag  },
              ].map(m => (
                <div key={m.label} className="proj-modal-meta-item">
                  <span className="proj-drawer-meta-label">{m.label}</span>
                  <span className="proj-drawer-meta-val">{m.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="proj-modal-content-col">
            <p className="proj-modal-num" style={{ color: project.accent }}>{project.num}</p>
            <h2 className="proj-modal-name">{project.name}</h2>
            <p className="proj-modal-fullname">{project.fullName}</p>

            <p className="proj-modal-section-label">About</p>
            <p className="proj-modal-desc">{project.desc}</p>

            <p className="proj-modal-section-label">Key Features</p>
            <ul className="proj-modal-features">
              {project.detail.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p className="proj-modal-section-label">Tech Stack</p>
            <div className="proj-drawer-stack">
              {project.stack.map(t => (
                <span key={t} className="proj-stack-chip">
                  {ICON_MAP[t] && <img src={ICON_MAP[t]} alt={t} />}{t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="proj-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setLightbox(false)}
            >
              <motion.img
                key={activeImg}
                src={project.screenshots[activeImg]}
                alt={`${project.name} screenshot ${activeImg + 1}`}
                className="proj-lightbox-img"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={e => e.stopPropagation()}
              />
              {n > 1 && (
                <>
                  <button className="proj-lightbox-arrow proj-lightbox-arrow-left" onClick={e => { e.stopPropagation(); prev(); }} aria-label="Previous">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="proj-lightbox-arrow proj-lightbox-arrow-right" onClick={e => { e.stopPropagation(); next(); }} aria-label="Next">
                    <ChevronRight size={20} />
                  </button>
                  <span className="proj-lightbox-count">{activeImg + 1} / {n}</span>
                </>
              )}
              <button className="proj-lightbox-close" onClick={() => setLightbox(false)} aria-label="Close">
                <X size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
}

function CardVisual({ project }) {
  if (project.screenshots.length > 0) {
    return (
      <div className="proj-card-img-inner" style={{ background: '#000' }}>
        <img
          src={project.screenshots[0]}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }
  return (
    <div
      className="proj-card-img-inner"
      style={{ background: `radial-gradient(ellipse at 40% 55%, ${project.color}35 0%, transparent 70%)` }}
    >
      <span className="proj-card-ghost" style={{ color: `${project.color}35` }}>
        {project.name}
      </span>
    </div>
  );
}

export default function Projects() {
  const [active,  setActive]  = useState(null);
  const [current, setCurrent] = useState(0);
  const [dir,     setDir]     = useState(1);
  const n = PROJECTS.length;

  const go = (idx) => {
    setDir(idx > current ? 1 : -1);
    setCurrent((idx + n) % n);
  };
  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  const leftIdx  = (current - 1 + n) % n;
  const rightIdx = (current + 1) % n;
  const featured = PROJECTS[current];
  const leftP    = PROJECTS[leftIdx];
  const rightP   = PROJECTS[rightIdx];

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.94 }),
    center:      { opacity: 1, x: 0,                  scale: 1    },
    exit:  (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.94 }),
  };
  const sideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 30 : -30 }),
    center:      { opacity: 0.5, x: 0 },
    exit:  (d) => ({ opacity: 0, x: d > 0 ? -30 : 30 }),
  };
  const ease = [0.32, 0.72, 0, 1];

  return (
    <>
      <section className="section bg-dark2 section-angled" id="projects">
        <div className="section-inner">

          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            <span className="section-eyebrow-label">Projects</span>
          </div>

          <div className="proj-header-row">
            <div>
              <h2 className="proj-main-heading">Featured Projects</h2>
              <p className="proj-main-sub">
                A selection of projects I have built across web, mobile and desktop.
                Each one was designed and developed by me from start to finish.
              </p>
            </div>
            <div className="proj-carousel-controls">
              <button className="proj-ctrl" onClick={prev} aria-label="Previous"><ChevronLeft size={18} /></button>
              <span className="proj-ctrl-count">{String(current + 1).padStart(2,'0')} / {String(n).padStart(2,'0')}</span>
              <button className="proj-ctrl" onClick={next} aria-label="Next"><ChevronRight size={18} /></button>
            </div>
          </div>

          <div className="proj-carousel">

            {/* left */}
            <AnimatePresence mode="popLayout" custom={dir}>
              <motion.div
                key={`l-${leftIdx}`}
                className="proj-card proj-card-side"
                custom={dir}
                variants={sideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease }}
                onClick={prev}
              >
                <div className="proj-card-img-wrap">
                  <CardVisual project={leftP} />
                </div>
                <div className="proj-card-body">
                  <p className="proj-card-num" style={{ color: leftP.accent }}>{leftP.num}</p>
                  <p className="proj-card-name">{leftP.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* featured center */}
            <AnimatePresence mode="popLayout" custom={dir}>
              <motion.div
                key={`c-${current}`}
                className="proj-card proj-card-featured"
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.42, ease }}
                style={{ borderColor: `${featured.color}45` }}
                onClick={() => setActive(featured)}
              >
                <div className="proj-card-img-wrap proj-card-img-wrap-featured">
                  <CardVisual project={featured} />
                  <span className="proj-card-featured-badge" style={{ background: featured.color }}>Featured</span>
                </div>
                <div className="proj-card-body proj-card-body-featured">
                  <div>
                    <p className="proj-card-num" style={{ color: featured.accent }}>{featured.num}</p>
                    <p className="proj-card-name proj-card-name-featured">{featured.name}</p>
                    <p className="proj-card-tag">{featured.tag}</p>
                    <p className="proj-card-short">{featured.short}</p>
                  </div>
                  <div className="proj-card-footer">
                    <div className="proj-card-stack">
                      {featured.stack.map(t => (
                        <span key={t} className="proj-card-chip" style={{ borderColor: `${featured.color}45`, color: featured.accent }}>{t}</span>
                      ))}
                    </div>
                    <span className="proj-card-cta">View Project <ArrowRight size={13} /></span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* right */}
            <AnimatePresence mode="popLayout" custom={dir}>
              <motion.div
                key={`r-${rightIdx}`}
                className="proj-card proj-card-side"
                custom={dir}
                variants={sideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease }}
                onClick={next}
              >
                <div className="proj-card-img-wrap">
                  <CardVisual project={rightP} />
                </div>
                <div className="proj-card-body">
                  <p className="proj-card-num" style={{ color: rightP.accent }}>{rightP.num}</p>
                  <p className="proj-card-name">{rightP.name}</p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* dots */}
          <div className="proj-dots">
            {PROJECTS.map((p, i) => (
              <button
                key={i}
                className={`proj-dot${i === current ? ' active' : ''}`}
                onClick={() => go(i)}
                style={i === current ? { background: featured.color } : {}}
                aria-label={p.name}
              />
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {active && <ProjectDrawer project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}
