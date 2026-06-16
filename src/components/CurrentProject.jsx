import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PHASES = [
  { label: 'Foundation',     done: true,  active: false },
  { label: 'Core Workflows', done: false, active: true  },
  { label: 'AI Integration', done: false, active: false },
  { label: 'Compliance',     done: false, active: false },
];

const STACK = ['Node.js', 'React', 'MySQL', 'Claude API', 'Railway', 'Vercel'];

export default function CurrentProject() {
  const navigate = useNavigate();

  return (
    <section className="section bg-black section-angled" id="current-work" style={{ padding: '56px var(--gutter)' }}>
      <div className="section-inner">

        <div className="section-eyebrow">
          <div className="section-eyebrow-line" />
          <span className="section-eyebrow-label">Building Now</span>
        </div>

        <motion.h2
          className="section-heading"
          style={{ marginBottom: '0' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Currently in development.
        </motion.h2>

        {/* Rule */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '24px 0' }} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Top row — name + status */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--white)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                PulseOS
              </h3>
              <p style={{
                fontSize: '0.78rem',
                color: 'rgba(248,247,244,0.3)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                AI-Powered Clinic Management · Jamaica · 2026
              </p>
            </div>

            <span style={{
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              border: '1px solid rgba(20,184,166,0.35)',
              color: '#14B8A6',
              borderRadius: '2px',
              flexShrink: 0,
              alignSelf: 'flex-start',
              marginTop: '4px',
            }}>
              In Development
            </span>
          </div>

          {/* Two-col body */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 280px',
            gap: '52px',
            alignItems: 'start',
          }}>
            {/* Left — description + phases */}
            <div>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(248,247,244,0.45)',
                lineHeight: '1.85',
                marginBottom: '32px',
              }}>
                A full-stack clinic management system for private GP practices in Jamaica, with AI triage, clinical notes, and DPA 2020 compliance.
              </p>

              {/* Phase progress */}
              <div style={{ marginBottom: '0' }}>
                <p style={{
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.18)',
                  marginBottom: '14px',
                }}>
                  Build Progress
                </p>
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                  {PHASES.map((p, i) => (
                    <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <div style={{
                        width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                        background: p.done
                          ? '#14B8A6'
                          : p.active
                            ? '#F59E0B'
                            : 'transparent',
                        border: p.done
                          ? 'none'
                          : p.active
                            ? '1px solid #F59E0B'
                            : '1px solid rgba(248,247,244,0.2)',
                      }} />
                      <span style={{
                        fontSize: '0.75rem',
                        color: p.done
                          ? 'rgba(248,247,244,0.55)'
                          : p.active
                            ? '#F59E0B'
                            : 'rgba(248,247,244,0.22)',
                        fontWeight: p.active ? 600 : 400,
                        textDecoration: p.done ? 'line-through' : 'none',
                        textDecorationColor: 'rgba(248,247,244,0.2)',
                      }}>
                        {p.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — stack + CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Stack */}
              <div>
                <p style={{
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,247,244,0.18)',
                  marginBottom: '10px',
                }}>
                  Stack
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {STACK.map(t => (
                    <span key={t} style={{
                      fontSize: '0.7rem',
                      color: 'rgba(248,247,244,0.38)',
                      padding: '3px 10px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => navigate('/projects/pulseos')}
                  className="btn btn-violet"
                  style={{ justifyContent: 'space-between', width: '100%' }}
                >
                  Read case study
                  <ArrowRight size={14} />
                </button>
                <a
                  href="https://github.com/sydonaeengland/PulseOS.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost-white"
                  style={{ justifyContent: 'center' }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginTop: '24px' }} />

      </div>
    </section>
  );
}
