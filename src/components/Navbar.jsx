import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');
  const navigate  = useNavigate();
  const location  = useLocation();
  const isHome    = location.pathname === '/';

  useEffect(() => {
    if (!isHome) { setScrolled(true); return; }
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) { setActive(''); return; }
    const sections = NAV_LINKS
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = '';
      for (const el of sections) {
        if (el.offsetTop <= scrollPos) current = `#${el.id}`;
      }
      setActive(current);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNavClick = (href) => {
    setOpen(false);
    if (isHome) {
      // wait for the mobile menu close animation to finish before scrolling,
      // otherwise the scroll fires mid-transition and looks janky
      setTimeout(() => scrollTo(href), open ? 320 : 0);
    } else {
      navigate('/');
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a
          className="navbar-logo"
          href="#"
          onClick={handleLogoClick}
        >
          Sydonae<span>.</span>
        </a>

        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNavClick(href); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href="mailto:sydonaeengland@gmail.com?subject=Resume%20Request&body=Hi%20Sydonae%2C%20I%20would%20like%20to%20request%20your%20resume."
            className="navbar-hire"
          >
            Request Resume
          </a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.svg
                  key="sun"
                  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </motion.svg>
              ) : (
                <motion.svg
                  key="moon"
                  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
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
