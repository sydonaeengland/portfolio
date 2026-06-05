import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Counter({ to, suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 50, damping: 18 });
  const display = useTransform(spring, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v) + suffix
  );
  useEffect(() => { if (inView) raw.set(to); }, [inView, to, raw]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const STATS = [
  { to: 6,    suffix: '+', label: 'Years Coding',     decimals: 0 },
  { to: 2,    suffix: '',  label: 'Hackathons', decimals: 0 },
  { to: 5,    suffix: '+', label: 'Projects Shipped', decimals: 0 },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        <div className="about-top-row">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="about-eyebrow">About me</p>
            <h2 className="about-headline">
              Software developer.<br />
              <em>Full arc, every project.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <p className="about-bio">
              I am a final-year Computer Science student at UWI Mona with nine years
              of coding experience. I enjoy thinking through a project from ideation
              and design to the final build. I work across the full stack: web,
              mobile and backend. Whatever the problem needs, I figure it out.
            </p>
            <div className="about-edu-block">
              <span className="about-edu-school">University of the West Indies, Mona</span>
              <span className="about-edu-deg">BSc Computer Science · Expected May 2026</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          {STATS.map((s) => (
            <div className="about-stat" key={s.label}>
              <div className="about-stat-value">
                <Counter to={s.to} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
