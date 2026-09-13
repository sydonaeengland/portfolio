import { motion } from 'framer-motion';
import Terminal, { TerminalLine, ProgressLine } from './Terminal';

const LINES = [
  { prompt: '> whoami', result: 'sydonae_england' },
  { prompt: '> status', result: 'under_maintenance', tone: 'warn' },
  { prompt: '> eta', result: 'soon™' },
];

export default function MaintenancePage() {
  return (
    <div className="maintenance-page">
      <Terminal>
        {LINES.map((line, i) => (
          <TerminalLine key={line.prompt} line={line} delay={i * 300} />
        ))}
        <ProgressLine delay={LINES.length * 300} duration={1400} done={62} />
      </Terminal>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.35 }}
      >
        Website revamp in progress
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.35 }}
      >
        I'm currently rebuilding parts of this site. Check back soon.
      </motion.p>

      <motion.a
        href="mailto:sydonaeengland@gmail.com"
        className="maintenance-contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.35 }}
      >
        sydonaeengland@gmail.com
      </motion.a>
    </div>
  );
}
