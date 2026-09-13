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
  { to: 6,    suffix: '+', label: 'Projects Built', decimals: 0 },
  { to: 2,    suffix: '',  label: 'Hackathons',      decimals: 0 },
  { to: 3.80, suffix: '',  label: 'GPA',             decimals: 2 },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        <div className="about-split">
          <motion.div
            className="about-left-col"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="about-eyebrow">About me</p>
            <h2 className="about-headline">
              Software developer.<br />
              <em>First Class Honours.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about-right-col"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <p className="about-bio">
              I genuinely love building solutions to things. Give me a broken process, a
              slow system, or a gap nobody's bothered to fix, and I'll turn it into
              something people actually enjoy using. That's taken me from digitising
              Jamaica's driver's licence renewal process end to end, to building AI learning
              tools that speak Jamaican Creole, to designing and shipping ideas solo when
              no one else was going to. I care about the whole thing: the code, the design,
              the person on the other end of the screen.
            </p>
            <div className="about-edu-block">
              <span className="about-edu-school">University of the West Indies, Mona</span>
              <span className="about-edu-deg">BSc Computer Science · First Class Honours · GPA 3.80</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
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
