import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function TerminalLine({ line, delay }) {
  const [typed, setTyped] = useState('');
  const done = typed === line.prompt;

  useEffect(() => {
    let i = 0;
    const start = setTimeout(function tick() {
      setTyped(line.prompt.slice(0, i + 1));
      i++;
      if (i < line.prompt.length) {
        setTimeout(tick, 18);
      }
    }, delay);
    return () => clearTimeout(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="terminal-line">
      <span className="terminal-prompt">{typed}</span>
      {done && (
        <motion.span
          className={`terminal-result${line.tone ? ` tone-${line.tone}` : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.15 }}
        >
          {' '}{line.result}
        </motion.span>
      )}
    </div>
  );
}

export function ProgressLine({ delay, duration = 700, prompt = '> progress', done: doneOverride }) {
  const [typed, setTyped] = useState('');
  const [pct, setPct] = useState(0);
  const done = typed === prompt;

  useEffect(() => {
    let i = 0;
    const start = setTimeout(function tick() {
      setTyped(prompt.slice(0, i + 1));
      i++;
      if (i < prompt.length) setTimeout(tick, 18);
    }, delay);
    return () => clearTimeout(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!done) return;
    const started = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min(1, (now - started) / duration);
      setPct(Math.round(t * (doneOverride ?? 100)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  const filled = Math.round(pct / 10);
  const bar = '#'.repeat(filled) + '.'.repeat(10 - filled);

  return (
    <div className="terminal-line">
      <span className="terminal-prompt">{typed}</span>
      {done && (
        <span className="terminal-result">
          {' '}[{bar}] {pct}%
        </span>
      )}
      {done && pct === (doneOverride ?? 100) && <span className="terminal-cursor" />}
    </div>
  );
}

export default function Terminal({ children, className = '' }) {
  return (
    <div className={`loading-terminal ${className}`.trim()}>
      <div className="terminal-titlebar">
        <span className="terminal-dot dot-red" />
        <span className="terminal-dot dot-yellow" />
        <span className="terminal-dot dot-green" />
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
