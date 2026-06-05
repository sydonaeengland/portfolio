import { motion } from 'framer-motion';

const BULLETS = [
  'Built and enhanced front-end and back-end components using HTML, CSS, PHP and MySQL.',
  'Collaborated with senior developers to troubleshoot issues, optimise database schemas and implement best practices.',
  'Wrote well-documented code and conducted code reviews to maintain a clean and consistent codebase.',
];

const PROJECTS = [
  { name: 'Aircraft Billing System',       desc: 'Modules for aircraft types, records and manufacturers.' },
  { name: 'Credit Union Website Redesign', desc: 'Rebuilt a responsive website improving usability and visual consistency.' },
];

export default function Experience() {
  return (
    <section className="exp-section section bg-black section-angled" id="experience">
      <div className="section-inner">

        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-label">Experience</span>
        </div>

        {/* header row */}
        <motion.div
          className="exp-header-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="exp-heading">Where I have worked.</h2>
          <p className="exp-sub">
            Two internships at a software development company in Kingston,
            working across production systems with a senior engineering team.
          </p>
        </motion.div>

        {/* entry */}
        <motion.div
          className="exp-entry"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          {/* top: role + dates */}
          <div className="exp-entry-top">
            <div>
              <p className="exp-role">Software Development Intern</p>
              <p className="exp-company-tag">Development Company · Kingston, Jamaica</p>
            </div>
            <div className="exp-dates-stack">
              <span>Jun 2024 – Aug 2024</span>
              <span>Jun 2025 – Aug 2025</span>
            </div>
          </div>

          <div className="exp-rule" />

          {/* bottom: bullets + projects */}
          <div className="exp-entry-body">
            <ul className="exp-bullets">
              {BULLETS.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="exp-projects-col">
              <p className="exp-projects-label">Key Projects</p>
              {PROJECTS.map((p) => (
                <div className="exp-project-item" key={p.name}>
                  <p className="exp-project-name">{p.name}</p>
                  <p className="exp-project-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
