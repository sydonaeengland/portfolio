import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen     from './components/LoadingScreen';
import Navbar            from './components/Navbar';
import Hero              from './components/Hero';
import TechStack         from './components/TechStack';
import About             from './components/About';
import Journey           from './components/Journey';
import Projects          from './components/Projects';
import CurrentProject    from './components/CurrentProject';
import Achievements      from './components/Achievements';
import Contact           from './components/Contact';
import ProjectsPage      from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import PulseOSPage       from './pages/PulseOSPage';

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
      <main>
        <Hero />
        <TechStack />
        <About />
        <Journey />
        <Projects />
        <CurrentProject />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!ready && <LoadingScreen onComplete={() => setReady(true)} />}
      </AnimatePresence>

      {ready && (
        <HashRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/"                 element={<HomePage />} />
            <Route path="/projects"         element={<ProjectsPage />} />
            <Route path="/projects/pulseos" element={<PulseOSPage />} />
            <Route path="/projects/:id"     element={<ProjectDetailPage />} />
          </Routes>
        </HashRouter>
      )}
    </>
  );
}
