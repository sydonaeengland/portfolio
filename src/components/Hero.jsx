import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef, useCallback } from 'react';
import heroImg from '../assets/face2.jpg';

const FADE_UP = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay },
});

function IconGitHub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}


function spawnSparkle(container, x, y) {
  const el = document.createElement('span');
  el.className = 'hero-sparkle';
  const size = 3 + Math.random() * 4;
  const angle = Math.random() * 360;
  const dist = 20 + Math.random() * 40;
  const dx = Math.cos((angle * Math.PI) / 180) * dist;
  const dy = Math.sin((angle * Math.PI) / 180) * dist;
  el.style.cssText = `
    left:${x}px; top:${y}px;
    width:${size}px; height:${size}px;
    --dx:${dx}px; --dy:${dy}px;
  `;
  container.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

export default function Hero() {
  const spotRef   = useRef(null);
  const sparkRef  = useRef(null);
  const tickRef   = useRef(0);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (spotRef.current) {
      spotRef.current.style.setProperty('--sx', `${x}px`);
      spotRef.current.style.setProperty('--sy', `${y}px`);
    }

    tickRef.current++;
    if (tickRef.current % 4 === 0 && sparkRef.current) {
      spawnSparkle(sparkRef.current, x, y);
    }
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>

      {/* cursor spotlight — spans full hero including photo */}
      <div ref={spotRef} className="hero-spotlight" aria-hidden="true" />
      {/* sparkle container */}
      <div ref={sparkRef} className="hero-sparkle-layer" aria-hidden="true" />

      {/* ── LEFT: text ── */}
      <div className="hero-content">

        {/* ghost background text */}
        <div className="hero-bg-text" aria-hidden="true">SE.</div>

        {/* Name */}
        <motion.div className="hero-name-block" {...FADE_UP(0.1)}>
          <span className="hero-name">Sydonae</span>
          <span className="hero-name hero-name-last">England</span>
        </motion.div>

        <motion.p className="hero-role" {...FADE_UP(0.22)}>
          Software Developer &nbsp;·&nbsp; Web &amp; Mobile &nbsp;·&nbsp; Full-Stack
        </motion.p>

        <motion.p className="hero-tagline" {...FADE_UP(0.32)}>
          I design and build software that solves real problems — clean architecture, thoughtful interfaces, and code that holds up in production.
        </motion.p>

        <motion.div className="hero-ctas" {...FADE_UP(0.42)}>
          <button className="btn btn-violet" onClick={() => scrollTo('#projects')}>
            See My Work <ArrowRight size={15} />
          </button>
          <button className="btn btn-ghost-white" onClick={() => scrollTo('#contact')}>
            Let's Talk
          </button>
        </motion.div>

        <motion.div className="hero-bottom-bar" {...FADE_UP(0.52)}>
          <div className="hero-socials">
            <a href="https://github.com/sydonaeengland" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
              <IconGitHub />
            </a>
            <a href="https://linkedin.com/in/sydonae-england" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
            <a href="https://instagram.com/thatcompscigirl" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>
          <div className="hero-scroll" onClick={() => scrollTo('#about')}>
            <span>Scroll</span>
            <div className="hero-scroll-arrow">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <path d="M6 0v16M1 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: photo ── */}
      <div className="hero-photo-col">
        <img src={heroImg} alt="Sydonae England" />
      </div>

    </section>
  );
}
