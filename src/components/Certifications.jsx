import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="section bg-black section-angled" id="leadership">
      <div className="section-inner">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-label">Community</span>
        </div>
        <h2 className="section-heading">Leadership</h2>

        <div className="leadership-grid">
          <motion.div
            className="leadership-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="leadership-icon-wrap">
              <Users size={18} />
            </div>
            <div className="leadership-role">Publications Chairperson</div>
            <div className="leadership-org">UWI Computing Subcommittee — 2025–Present</div>
            <p className="leadership-desc">
              Leading digital content strategy, designing promotional materials, and managing departmental
              communications to drive student engagement across the Faculty of Science and Technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
