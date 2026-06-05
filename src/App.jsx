import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen  from './components/LoadingScreen';
import Navbar         from './components/Navbar';
import Hero           from './components/Hero';
import TechStack      from './components/TechStack';
import About          from './components/About';
import Journey        from './components/Journey';
import Projects       from './components/Projects';
import Achievements   from './components/Achievements';
import Contact        from './components/Contact';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Sydonae England</p>
      <div className="footer-logo">SE<span>.</span></div>
      <p>Designed &amp; Built by Sydonae England</p>
    </footer>
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
        <>
          <Navbar />
          <main>
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
      )}
    </>
  );
}
