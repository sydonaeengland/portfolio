import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const PROJECTS = [
  {
    id: 'dlrsjam',
    num: '01', name: 'DLRSJAM', tag: 'Full-Stack PWA · Capstone Project',
    categories: ['Python', 'React', 'AI'],
    role: 'Sole Developer', year: '2026', color: '#7B5EF8', accent: '#B8AAFF',
    fullName: "Driver's Licence Renewal System of Jamaica",
    short: "A full prototype PWA that takes Jamaica's driver's licence renewal from a manual, queue-dependent process to a secure guided digital workflow with AI identity verification.",
    desc: "DLRSJAM addresses a real gap in Jamaica's public services: there is no official way to renew a driver's licence digitally. The system guides applicants through a structured workflow covering document submission, biometric identity verification, payment, and officer review, all without leaving home. Three separate portals serve applicants, processing officers, and supervisors, each with scoped access and a full audit trail.",
    detail: [
      'AI-powered identity verification combining document analysis, liveness detection, and face matching.',
      'Role-based portals for applicants, officers, and supervisors with server-enforced access control.',
      'Automated workload distribution assigns applications to the officer with the lowest active case count.',
      'Secure payment processing with application fees calculated server-side by licence type.',
      'Digital licence generated and available for download immediately on approval.',
    ],
    stack: ['React', 'Python', 'Flask', 'PostgreSQL', 'MediaPipe', 'Stripe'], screenshots: [dlrsjam1, dlrsjam3, dlrsjam4, dlrsjam5, dlrsjam6, dlrsjam7, dlrsjam8],
    github: 'https://github.com/sydonaeengland/DLRSJAM',
  },
  {
    id: 'clicksafe',
    num: '02', name: 'ClickSafe', tag: 'AI Security · Hackathon Winner',
    categories: ['React', 'AI'],
    role: 'Lead Developer', year: '2026', color: '#7B5EF8', accent: '#B8AAFF',
    fullName: 'AI-Powered Phishing Detection Platform',
    short: 'Real-time phishing detection built for everyday users. Scan links, emails, or screenshots and know instantly whether to click. Won 1st place in 7 hours.',
    desc: "Most phishing protection is built for security professionals. ClickSafe was built for everyone else. Students, everyday users, and anyone who receives suspicious links or emails can paste, scan, or upload and get a clear, plain-language answer on whether something is safe, no technical knowledge required.",
    detail: [
      'Scans links, email text, and uploaded screenshots through a single unified pipeline.',
      'Connects to Gmail and Outlook so users can scan their actual inbox without leaving the app.',
      'AI assesses multiple threat signals and returns a risk score with a plain-language explanation.',
      'Results show what was flagged, why it was flagged, and what to do next.',
      'Built and submitted in 7 hours, awarded 1st place for real-world impact.',
    ],
    stack: ['TypeScript', 'Supabase'], screenshots: [clicksafe1, clicksafe2, clicksafe3],
    github: 'https://github.com/sydonaeengland/ClickSafe',
  },
  {
    id: 'learnwidmi',
    num: '03', name: 'LearnWidMi', tag: 'EdTech Platform · Award Winner',
    categories: ['React', 'AI'],
    role: 'Full-Stack Developer', year: '2026', color: '#7B5EF8', accent: '#B8AAFF',
    fullName: 'AI Learning Platform for Jamaican Students',
    short: 'AI-powered learning that meets Jamaican students where they are, in the language they actually speak. Top 10 and Educational Impact Award winner.',
    desc: "Jamaica's education system teaches in Standard English, but most students communicate in Patois every day. That gap quietly blocks understanding. LearnWidMi removes it by delivering curriculum content in both languages, so students can grasp concepts in the language that feels natural before bridging to formal English.",
    detail: [
      'Curriculum explanations available in both Standard English and Jamaican Patois.',
      'AI-generated whiteboard videos that break down concepts visually, step by step.',
      'Built-in AI study assistant that gives personalised tips based on progress.',
      'Gamified progress system that rewards consistency and learning milestones.',
      'Practice tools including flashcards, quizzes, mock exams, and past papers.',
    ],
    stack: ['React', 'Supabase', 'ElevenLabs', 'OpenRouter'], screenshots: [learnwidmi1, learnwidmi2, learnwidmi3],
    github: null,
  },
  {
    id: 'mrc',
    num: '04', name: 'MRC School System', tag: 'Desktop Application',
    categories: ['Java'],
    role: 'Lead Developer', year: '2024', color: '#7B5EF8', accent: '#B8AAFF',
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
    github: 'https://github.com/sydonaeengland/MRC-Family-School',
  },
  {
    id: 'care',
    num: '05', name: 'CareLink', tag: 'Mobile App Design',
    categories: [],
    role: 'Lead Designer', year: '2025', color: '#7B5EF8', accent: '#B8AAFF',
    fullName: 'Remote Elder Care Connection App',
    short: 'A UI/UX design project addressing a real gap: no platform in Jamaica combines verified care services, elderly-accessible design, and real-time family visibility in one place.',
    desc: 'CareLink is a mobile app concept designed for INFO3170. Many Jamaicans living overseas rely on informal WhatsApp coordination to arrange care for elderly relatives at home, with no tracking, no verification, and no safety net. CareLink was designed to replace that with a trusted, accessible platform built specifically around the needs of elderly users and the families watching from abroad.',
    detail: [
      'Designed for elderly users: large fonts, voice assistance, one-tap confirmations, and plain-language prompts throughout.',
      'Verified provider network with photo identification visible to families before anyone arrives at the home.',
      'Real-time tracking and photo confirmation of every completed delivery or visit.',
      'Emergency alert that simultaneously notifies the family abroad, the assigned caregiver, and local responders.',
      'SMS and offline fallback for rural areas with unreliable internet or power.',
    ],
    stack: ['Figma', 'UI/UX'], screenshots: [care1, care2, care3], portrait: true,
    github: null,
  },
];

function ProjectDrawer({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const n = project.screenshots.length;
  const prev = () => setActiveImg(i => (i - 1 + n) % n);
  const next = () => setActiveImg(i => (i + 1) % n);

  useEffect(() => {
    const handler = e => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') { if (lightbox) setLightbox(false); else onClose(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, n]);

  const hasImages = project.screenshots.length > 0;

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
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} project details`}
      >
        <button className="proj-modal-close" onClick={onClose} aria-label="Close">
          <X size={17} />
        </button>

        <div className="proj-modal-scroll">

          {/* HERO: image up top, badge + title overlaid */}
          <div
            className={`proj-modal-hero${project.portrait ? ' proj-modal-hero-portrait' : ''}`}
            style={{ background: `linear-gradient(160deg, ${project.color}22 0%, var(--color-bg) 65%)` }}
          >
            {hasImages ? (
              <img
                key={activeImg}
                src={project.screenshots[activeImg]}
                alt={`${project.name} screenshot ${activeImg + 1}`}
                className="proj-modal-hero-img"
                onClick={() => setLightbox(true)}
              />
            ) : (
              <span className="proj-modal-ghost" style={{ color: `${project.color}22` }}>{project.name}</span>
            )}

            {hasImages && n > 1 && (
              <>
                <button className="proj-modal-gallery-arrow proj-modal-gallery-arrow-left" onClick={prev} aria-label="Previous screenshot">
                  <ChevronLeft size={18} />
                </button>
                <button className="proj-modal-gallery-arrow proj-modal-gallery-arrow-right" onClick={next} aria-label="Next screenshot">
                  <ChevronRight size={18} />
                </button>
                <span className="proj-modal-gallery-count">{activeImg + 1} / {n}</span>
              </>
            )}

            {hasImages && (
              <button className="proj-modal-expand" onClick={() => setLightbox(true)} aria-label="Expand image">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </button>
            )}

            <div className="proj-modal-hero-fade" />
          </div>

          {/* thumbnails */}
          {hasImages && n > 1 && (
            <div className="proj-modal-thumbs">
              {project.screenshots.map((src, i) => (
                <button
                  key={i}
                  className="proj-modal-thumb"
                  onClick={() => setActiveImg(i)}
                  style={{
                    borderColor: i === activeImg ? project.color : 'transparent',
                    opacity: i === activeImg ? 1 : 0.45,
                  }}
                  aria-label={`Screenshot ${i + 1}`}
                  aria-current={i === activeImg}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}

          {/* BODY */}
          <div className="proj-modal-body">

            <div className="proj-modal-heading-row">
              <div>
                <p className="proj-modal-num" style={{ color: project.accent }}>Project {project.num}</p>
                <h2 className="proj-modal-name">{project.name}</h2>
                <p className="proj-modal-fullname">{project.fullName}</p>
              </div>
              {project.github && (
                <a
                  className="proj-modal-github"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: `${project.color}55` }}
                >
                  View Code
                  <ArrowRight size={13} />
                </a>
              )}
            </div>

            {/* meta pills */}
            <div className="proj-modal-pills">
              <span className="proj-modal-pill"><span className="proj-drawer-meta-label">Role</span>{project.role}</span>
              <span className="proj-modal-pill"><span className="proj-drawer-meta-label">Year</span>{project.year}</span>
              <span className="proj-modal-pill"><span className="proj-drawer-meta-label">Category</span>{project.tag}</span>
            </div>

            <div className="proj-modal-columns">
              <div className="proj-modal-col-main">
                <p className="proj-modal-section-label">About</p>
                <p className="proj-modal-desc">{project.desc}</p>

                <p className="proj-modal-section-label">Key Features</p>
                <ul className="proj-modal-features">
                  {project.detail.map((d, i) => (
                    <li key={i} style={{ '--dot-color': project.color }}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="proj-modal-col-side">
                <p className="proj-modal-section-label">Tech Stack</p>
                <div className="proj-drawer-stack">
                  {project.stack.map(t => (
                    <span key={t} className="proj-stack-chip">
                      {ICON_MAP[t] && <img src={ICON_MAP[t]} alt="" />}{t}
                    </span>
                  ))}
                </div>
              </div>
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

function CaseVisual({ project }) {
  if (project.screenshots.length > 0) {
    return <img className="case-img" src={project.screenshots[0]} alt={project.name} />;
  }
  return (
    <div
      className="case-img case-img-ghost"
      style={{ background: `radial-gradient(ellipse at 40% 55%, ${project.color}30 0%, transparent 70%)` }}
    >
      <span className="proj-card-ghost" style={{ color: `${project.color}35` }}>{project.name}</span>
    </div>
  );
}

function CaseStudyRow({ project, onClick, reverse, index }) {
  return (
    <motion.article
      layout
      className={`case-row${reverse ? ' case-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24, transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ '--case-color': project.color }}
    >
      <span className="case-bg-num" aria-hidden="true">{project.num}</span>

      <button className="case-img-col" onClick={onClick} aria-label={`Open ${project.name} case study`}>
        <div className="case-img-wrap">
          <div className="case-img-orbit" aria-hidden="true" />
          <CaseVisual project={project} />
          <div className="case-img-glow" />
        </div>
      </button>

      <div className="case-content-col">
        <span className="case-eyebrow">
          <span className="case-eyebrow-num">{project.num}</span>
          {project.tag}
        </span>
        <h3 className="case-name" onClick={onClick}>{project.name}</h3>
        <p className="case-fullname">{project.fullName}</p>
        <p className="case-role"><span className="case-role-label">Role</span>{project.role}</p>
        <p className="case-short">{project.short}</p>

        <div className="case-stack">
          {project.stack.slice(0, 5).map(t => (
            <span key={t} className="bento-chip" style={{ borderColor: `${project.color}40`, color: project.accent }}>{t}</span>
          ))}
        </div>

        <button className="case-cta" onClick={onClick}>
          <span className="case-cta-text">View Project</span>
          <span className="case-cta-icon"><ArrowRight size={15} /></span>
        </button>
      </div>
    </motion.article>
  );
}

const INITIAL_COUNT = 3;

export default function Projects() {
  const [active, setActive] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const viewMoreRef = useRef(null);

  const openProject = (project) => setActive(project);
  const closeProject = () => setActive(null);

  const filtered = PROJECTS;

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => {
    if (expanded) {
      // Animating the scroll and the row-collapse at the same time makes
      // both look janky since they fight for the same frames. Instead,
      // snap the viewport to the toggle instantly (no animation to race),
      // then let the row collapse animate smoothly on its own.
      const el = viewMoreRef.current;
      if (el) {
        const targetY = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + el.offsetHeight / 2;
        window.scrollTo({ top: targetY, behavior: 'instant' });
      }
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };
  const hasMore = filtered.length > visible.length;

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
              <h2 className="proj-main-heading proj-main-heading-lg">
                Things I've built<br />along the way.
              </h2>
            </div>
            <p className="proj-main-sub proj-main-sub-right">
              A look at what I've shipped, from capstone systems to
              hackathon sprints. Each one taught me something different.
            </p>
          </div>

          {/* case study rows */}
          <motion.div className="case-list" layout>
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((p, i) => (
                <CaseStudyRow
                  key={p.num}
                  project={p}
                  index={i}
                  reverse={i % 2 === 1}
                  onClick={() => openProject(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length > INITIAL_COUNT && (
            <button
              ref={viewMoreRef}
              className={`case-view-more${expanded ? ' case-view-less' : ''}`}
              onClick={toggleExpanded}
            >
              <AnimatePresence mode="wait" initial={false}>
                {expanded ? (
                  <motion.span
                    key="less"
                    className="case-view-more-inner"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                  >
                    Show fewer projects
                    <ArrowRight size={15} className="case-view-less-icon" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="more"
                    className="case-view-more-inner"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    View more projects
                    <span className="case-view-more-count">{filtered.length - visible.length}</span>
                    <ArrowRight size={15} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}

        </div>
      </section>

      <AnimatePresence>
        {active && <ProjectDrawer project={active} onClose={closeProject} />}
      </AnimatePresence>
    </>
  );
}
