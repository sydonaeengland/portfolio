import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from '../assets/face2.jpg';

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="loading-photo-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <img src={heroImg} alt="Sydonae England" className="loading-photo" />
          </motion.div>

          <motion.p
            className="loading-welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Welcome to my portfolio
          </motion.p>

          <motion.div
            className="loading-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
          >
            <span>Sydonae&nbsp;</span>
            <span className="accent-char">England</span>
          </motion.div>

          <motion.div
            className="loading-bar-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="loading-bar" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
