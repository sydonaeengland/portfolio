import { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import LoadingScreen     from './components/LoadingScreen';
import MaintenancePage   from './components/MaintenancePage';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import TechStack         from './components/TechStack';
import About             from './components/About';
import Journey           from './components/Journey';
import Projects          from './components/Projects';
import Achievements      from './components/Achievements';
import Contact           from './components/Contact';
import ProjectsPage      from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage      from './pages/NotFoundPage';


const MAINTENANCE_MODE = false;

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Sydonae England</p>
      <div className="footer-logo">SE<span>.</span></div>
      <p>Designed &amp; Built by Sydonae England</p>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  const isReload = window.history.scrollRestoration === 'auto';
  useEffect(() => {
    if (!sessionStorage.getItem('reloaded_' + pathname)) {
      window.scrollTo(0, 0);
    }
    sessionStorage.removeItem('reloaded_' + pathname);
  }, [pathname]);
  useEffect(() => {
    const onUnload = () => sessionStorage.setItem('reloaded_' + pathname, '1');
    window.addEventListener('beforeunload', onUnload);
    return () => window.removeEventListener('beforeunload', onUnload);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <TechStack />
        <About />
        <Journey />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={goToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  if (MAINTENANCE_MODE) return <MaintenancePage />;

  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [veilOn, setVeilOn] = useState(false);
  const veilTimers = useRef([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    veilTimers.current.forEach(clearTimeout);
    veilTimers.current = [];

    // fade the veil in (covers the whole viewport), swap the theme while
    // hidden behind it, then fade the veil back out — no panel is ever
    // visibly seen changing color.
    setVeilOn(true);
    veilTimers.current.push(setTimeout(() => {
      setTheme(t => t === 'dark' ? 'light' : 'dark');
    }, 110));
    veilTimers.current.push(setTimeout(() => {
      setVeilOn(false);
    }, 130));
  };

  return (
    <>
      <AnimatePresence>
        {!ready && <LoadingScreen onComplete={() => setReady(true)} />}
      </AnimatePresence>

      <motion.div
        className="theme-veil"
        animate={{ opacity: veilOn ? 1 : 0 }}
        transition={{ duration: veilOn ? 0.12 : 0.18, ease: 'easeInOut' }}
      />

      {ready && (
        <HashRouter>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ScrollToTop />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/"                 element={<HomePage />} />
            <Route path="/projects"         element={<ProjectsPage />} />
            <Route path="/projects/:id"     element={<ProjectDetailPage />} />
            <Route path="*"                 element={<NotFoundPage />} />
          </Routes>
          <BackToTop />
        </HashRouter>
      )}
    </>
  );
}
