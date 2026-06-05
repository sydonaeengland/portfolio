import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Awards',     href: '#awards' },
  { label: 'Contact',    href: '#contact' },
];

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    setTimeout(() => scrollTo(href), open ? 320 : 0);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Logo — full name, not initials */}
        <a
          className="navbar-logo"
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          Sydonae<span>.</span>
        </a>

        {/* Desktop links + hire button */}
        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); scrollTo(href); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:sydonaeengland@gmail.com?subject=Resume%20Request&body=Hi%20Sydonae%2C%20I%20would%20like%20to%20request%20your%20resume."
          className="navbar-hire"
        >
          Request Resume
        </a>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-nav-links">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={e => { e.preventDefault(); handleNavClick(href); }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease: 'easeOut' }}
                >
                  <span className="mobile-nav-num">0{i + 1}</span>
                  {label}
                </motion.a>
              ))}
            </div>
            <div className="mobile-nav-footer">
              <a href="mailto:sydonaeengland@gmail.com" className="mobile-nav-email">
                sydonaeengland@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
