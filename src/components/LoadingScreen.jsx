import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/face2.jpg';
import Terminal, { TerminalLine, ProgressLine } from './Terminal';

const TERMINAL_LINES = [
  { prompt: '> whoami', result: 'sydonae_england' },
  { prompt: '> status', result: 'building_something_good' },
];

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        >
          <Terminal>
            {TERMINAL_LINES.map((line, i) => (
              <TerminalLine key={line.prompt} line={line} delay={i * 300} />
            ))}
            <ProgressLine delay={TERMINAL_LINES.length * 300} />
          </Terminal>

          <motion.div
            className="loading-photo-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src={heroImg} alt="Sydonae England" className="loading-photo" />
          </motion.div>

          <motion.p
            className="loading-welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
          >
            Portfolio compiled successfully
          </motion.p>

          <motion.div
            className="loading-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.3, ease: 'easeOut' }}
          >
            <span>Sydonae&nbsp;</span>
            <span className="accent-char">England</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
