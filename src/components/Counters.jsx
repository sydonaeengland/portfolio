import { useRef, useEffect, useState } from 'react';

const STATS = [
  { value: 2,     label: 'Hackathons',  suffix: '',  decimals: 0 },
  { value: 2,     label: 'Internships',       suffix: '',  decimals: 0 },
  { value: 5,     label: 'Projects Shipped',  suffix: '+', decimals: 0 },
];

function useCountUp(target, decimals, active, duration = 1400) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplay(decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current)));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(decimals > 0 ? target.toFixed(decimals) : String(target));
    };
    requestAnimationFrame(step);
  }, [active, target, decimals, duration]);

  return display;
}

function StatCounter({ value, label, suffix, decimals }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const display = useCountUp(value, decimals, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        flex: '1 1 160px',
        padding: '28px 24px',
        borderTop: '1px solid var(--color-accent)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
        lineHeight: 1,
        color: 'var(--color-text)',
        letterSpacing: '-0.02em',
      }}>
        {display}
        <span style={{ color: 'var(--color-accent)', fontSize: '0.6em' }}>{suffix}</span>
      </p>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--color-muted)',
      }}>
        {label}
      </p>
    </div>
  );
}

export default function Counters() {
  return (
    <section
      aria-label="Key statistics"
      style={{
        background: 'var(--color-card)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-6"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {STATS.map((s, i) => (
          <StatCounter key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
