import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Terminal, { TerminalLine } from '../components/Terminal';

const LINES = [
  { prompt: '> whoami', result: 'sydonae_england' },
  { prompt: '> route', result: 'not_found', tone: 'error' },
  { prompt: '> error', result: '404: page does not exist', tone: 'error' },
];

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <Terminal>
        {LINES.map((line, i) => (
          <TerminalLine key={line.prompt} line={line} delay={i * 300} />
        ))}
      </Terminal>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.35 }}
      >
        This page doesn't exist
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.35 }}
      >
        Whatever you were looking for isn't here. Let's get you back.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.35 }}
      >
        <Link to="/" className="notfound-home">Back to home</Link>
      </motion.div>
    </div>
  );
}
