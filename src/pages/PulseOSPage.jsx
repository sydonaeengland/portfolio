import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ACCENT = '#B8AAFF';
const VIOLET = '#5B3CF5';

const S = {
  label: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: ACCENT,
    display: 'block',
    marginBottom: '14px',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
    letterSpacing: '-0.02em',
    color: '#F8F7F4',
    lineHeight: 1.15,
    marginBottom: '20px',
  },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'rgba(248,247,244,0.55)',
    lineHeight: '1.85',
  },
  rule: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '64px',
    marginTop: '64px',
  },
  colHead: {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '1rem',
    color: 'rgba(248,247,244,0.9)',
    marginBottom: '8px',
  },
};

const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);

const GH_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

/* floating medical icons for hero decoration */
const MED_ICONS = [
  { d: 'M22 12h-4l-3 9L9 3l-3 9H2', label: 'pulse', x: '78%', y: '18%', size: 28, delay: 0 },
  { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'shield', x: '85%', y: '55%', size: 24, delay: 0.4 },
  { d: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M12 12h.01M12 16h.01', label: 'clipboard', x: '72%', y: '72%', size: 22, delay: 0.8 },
  { d: 'M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3', label: 'stethoscope', x: '90%', y: '30%', size: 20, delay: 1.2 },
  { d: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17', label: 'pill', x: '76%', y: '42%', size: 18, delay: 0.6 },
];

const STEP_ICONS = [
  'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2',
  'M9 12h6m-3-3v6M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z',
  'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
];

const FEATURE_ICONS = [
  'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
  'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
  'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18',
  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3',
  'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
];

const ARCH_ICONS = [
  'M4 6h16M4 10h16M4 14h16M4 18h16',
  'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
  'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
];

function Pill({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500,
      color: 'rgba(248,247,244,0.6)',
      padding: '6px 14px',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '4px',
      display: 'inline-block',
      background: 'rgba(255,255,255,0.03)',
    }}>{children}</span>
  );
}

function Dot({ status }) {
  const color = status === 'complete' ? '#22C55E' : status === 'active' ? '#F59E0B' : 'rgba(255,255,255,0.15)';
  return (
    <span style={{
      display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', flexShrink: 0,
      background: status === 'upcoming' ? 'transparent' : color,
      border: `2px solid ${color}`,
      marginTop: '5px',
    }} aria-hidden="true" />
  );
}

const GUTTER = 'clamp(24px, 5vw, 80px)';

export default function PulseOSPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#0C0C0E', paddingTop: '66px' }}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: `
          radial-gradient(ellipse 70% 80% at 85% 50%, rgba(91,60,245,0.18) 0%, transparent 65%),
          radial-gradient(ellipse 50% 60% at 10% 80%, rgba(184,170,255,0.07) 0%, transparent 60%),
          #0C0C0E
        `,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: `56px ${GUTTER} 64px`,
      }}>

        {/* floating medical icons */}
        {MED_ICONS.map(ic => (
          <motion.div
            key={ic.label}
            style={{
              position: 'absolute', left: ic.x, top: ic.y,
              color: ACCENT, opacity: 0,
              pointerEvents: 'none',
            }}
            animate={{
              opacity: [0.06, 0.14, 0.06],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4 + ic.delay,
              delay: ic.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon d={ic.d} size={ic.size} />
          </motion.div>
        ))}

        <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* back */}
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.82rem',
              color: 'rgba(248,247,244,0.35)', transition: 'color 0.2s', padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,247,244,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,247,244,0.35)')}
          >
            <Icon d="M15 18l-6-6 6-6" size={15} />
            Back to portfolio
          </button>

          {/* two-column hero layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '48px',
            alignItems: 'end',
          }}>
            {/* left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  padding: '4px 12px', border: `1px solid ${ACCENT}55`,
                  color: ACCENT, borderRadius: '3px', background: `${ACCENT}10`,
                }}>Personal Project</span>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  padding: '4px 12px', border: '1px solid rgba(245,158,11,0.4)',
                  color: '#F59E0B', borderRadius: '3px', background: 'rgba(245,158,11,0.08)',
                }}>In Development</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.2)' }}>
                  Health Informatics · Jamaica · 2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(4rem, 9vw, 7.5rem)', letterSpacing: '-0.045em',
                  color: '#F8F7F4', lineHeight: 0.88, marginBottom: '28px',
                }}
              >
                PulseOS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '1.15rem',
                  color: 'rgba(248,247,244,0.62)', lineHeight: '1.72',
                  maxWidth: '600px', marginBottom: '14px',
                }}
              >
                An AI-powered medical office management system designed for private GP clinics in Jamaica.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                  color: 'rgba(248,247,244,0.35)', lineHeight: '1.75',
                  maxWidth: '560px', marginBottom: '36px',
                }}
              >
                A personal project I took on independently — identifying a real gap in Jamaica's private healthcare sector and building a complete clinical system from scratch to address it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}
              >
                {['Node.js', 'Express', 'React', 'MySQL', 'Railway', 'Vercel'].map(t => <Pill key={t}>{t}</Pill>)}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.44 }}
              >
                <a
                  href="https://github.com/sydonaeengland/PulseOS.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
                    color: '#F8F7F4', textDecoration: 'none',
                    padding: '12px 24px',
                    background: VIOLET,
                    borderRadius: '6px',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {GH_ICON}
                  View on GitHub
                </a>
              </motion.div>
            </div>

            {/* right — stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex', flexDirection: 'column', gap: '12px',
                minWidth: '200px',
              }}
            >
              {[
                { icon: 'M4 6h16M4 10h16M4 14h16M4 18h16', value: '17', label: 'Database tables' },
                { icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z', value: '6', label: 'AI features' },
                { icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2', value: '6', label: 'Document types' },
                { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', value: '4', label: 'Build phases' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '16px 20px',
                  display: 'flex', alignItems: 'center', gap: '14px',
                }}>
                  <span style={{ color: ACCENT, flexShrink: 0 }}>
                    <Icon d={stat.icon} size={16} />
                  </span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', color: '#F8F7F4', lineHeight: 1, marginBottom: '2px' }}>{stat.value}</p>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.3)' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BODY
      ══════════════════════════════════════════ */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: `64px 0 100px` }}>

        {/* ── OBSERVATION ── */}
        <section>
          <span style={S.label}>Field Observation</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
            <blockquote style={{
              borderLeft: '3px solid rgba(184,170,255,0.45)',
              paddingLeft: '24px',
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              color: 'rgba(248,247,244,0.72)',
              lineHeight: '1.8',
            }}>
              "The receptionist managed every appointment in a physical diary. Patient records lived in folders. Prescriptions were handwritten. Lab requisitions were filled out by hand, signed, and given to patients to take to the laboratory themselves."
            </blockquote>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={S.body}>
                This is the administrative reality across a significant portion of Jamaica's private healthcare sector. The government's E-Care programme addresses digitisation at a national level, targeting public facilities across a 15-year timeline. Private clinics fall outside that scope entirely.
              </p>
              <p style={{ ...S.body, color: 'rgba(248,247,244,0.75)', fontWeight: 600 }}>
                PulseOS was built to address that gap.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROBLEM STATEMENT ── */}
        <section style={S.rule}>
          <span style={S.label}>Problem Statement</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '40px' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>A general-purpose system is insufficient for the Jamaican clinical context.</h2>
            <p style={S.body}>
              Jamaica has regulatory, operational, and cultural requirements that international medical platforms do not account for. Developing PulseOS required a thorough understanding of the local healthcare landscape prior to any technical implementation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              {
                icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
                title: 'Document Workflow',
                body: 'Jamaican pharmacies and laboratories require a handwritten signature on prescriptions and requisitions. PulseOS generates pre-filled, print-ready clinical documents, reducing documentation time while maintaining legal compliance.',
              },
              {
                icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
                title: 'Data Protection',
                body: "Health data is classified as sensitive personal data under the Jamaica Data Protection Act 2020. Consent capture, an immutable audit log, configurable retention policies, and a breach notification workflow are embedded in the system architecture from the outset.",
              },
              {
                icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
                title: 'Clinical Identification',
                body: "The Medical Council of Jamaica registration number is a legal requirement on all clinical documents. The MCJ number is stored on each doctor's profile and auto-populated on every generated document.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '28px',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}44`; e.currentTarget.style.background = 'rgba(184,170,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: `${ACCENT}15`, border: `1px solid ${ACCENT}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ACCENT, marginBottom: '18px',
                }}>
                  <Icon d={card.icon} size={18} />
                </div>
                <p style={S.colHead}>{card.title}</p>
                <p style={{ ...S.body, fontSize: '0.93rem' }}>{card.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── LANDSCAPE ── */}
        <section style={S.rule}>
          <span style={S.label}>Health Informatics Context</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>Jamaica is at a critical juncture in healthcare digitisation.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <p style={S.body}>
                Approximately 70 percent of all deaths in Jamaica are attributable to non-communicable diseases including diabetes, hypertension, cancer, and cardiovascular disease. This makes efficient record management a clinical priority, not an administrative convenience.
              </p>
              <p style={S.body}>
                In 2024, May Pen Hospital became the first facility in the Caribbean to go live on a national EHR platform under Jamaica's E-Care programme, backed by a USD 50 million IDB loan. The programme targets public facilities only.
              </p>
              <p style={{ ...S.body, color: 'rgba(248,247,244,0.72)' }}>
                PulseOS fills the operational gap for independent private clinics that this rollout has not reached.
              </p>
            </div>
          </div>
        </section>

        {/* ── PATIENT JOURNEY ── */}
        <section style={S.rule}>
          <span style={S.label}>The Patient Journey</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '40px' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>Every stage of the clinical visit, supported by the system.</h2>
            <p style={S.body}>Six integrated modules cover the complete patient encounter, from first contact to receipt, with no paper at any stage.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {[
              { title: 'Registration', body: 'Patients register at the front desk or self-register on a waiting room tablet. Self-registered records are held pending until activated by staff.' },
              { title: 'Appointment Booking', body: 'Receptionist selects patient, doctor, visit type, and time slot. Symptom descriptions are analysed by AI to assign a triage urgency level.' },
              { title: 'Check-in and Vitals', body: 'Patient is checked in on arrival. Nurse records BP, temperature, weight, pulse, and oxygen saturation. Patient appears in the doctor\'s schedule as ready.' },
              { title: 'Consultation', body: 'Doctor writes free-text notes; AI structures them into a clinical record. Body map documents findings. Prescriptions trigger an automatic drug interaction check.' },
              { title: 'Document Generation', body: 'All clinical documents are generated print-ready with clinic logo, doctor name, and MCJ registration number. Doctor signs; patient departs with a complete set.' },
              { title: 'Checkout', body: 'Fee pre-fills from visit type. Insurance claims are recorded from the health card terminal. Patient pays the balance and receives a referenced receipt.' },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                    border: `1px solid ${ACCENT}25`, background: `${ACCENT}10`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: ACCENT,
                  }}>
                    <Icon d={STEP_ICONS[i]} size={15} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(248,247,244,0.2)', letterSpacing: '0.1em' }}>0{i + 1}</span>
                </div>
                <p style={S.colHead}>{step.title}</p>
                <p style={{ ...S.body, fontSize: '0.92rem' }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={S.rule}>
          <span style={S.label}>System Features</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '40px' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>What makes PulseOS different.</h2>
            <p style={S.body}>The features that go beyond a standard clinic system — built specifically for the Jamaican context.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
            {[
              { title: 'Body Map Annotation', body: 'Doctors tap or draw on an interactive SVG body diagram to document injury and condition locations. Each annotation records type, severity, and a clinical description.' },
              { title: 'Drug Interaction Check', body: 'Every prescription is automatically checked against the patient\'s active medications and recorded allergies before it is confirmed.' },
              { title: 'Symptom Triage', body: 'Symptoms submitted at booking are classified as Routine, Priority, or Emergency by AI — visible to all clinical staff from check-in onwards.' },
              { title: 'Document OCR', body: 'Scanned lab results and referral letters are processed by OCR with per-field confidence scores. Low-confidence fields are flagged for manual review.' },
              { title: 'NHF Flagging', body: 'Every prescription and lab order automatically flags items covered by the National Health Fund so patients know what is subsidised before they leave.' },
              { title: 'DPA 2020 Compliance', body: 'Consent capture, an immutable audit log, and configurable retention policies are built into the schema — not added on. Required under Jamaican law.' },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '10px',
                  padding: '20px',
                  transition: 'border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${ACCENT}40`; e.currentTarget.style.background = 'rgba(184,170,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
              >
                <span style={{ color: ACCENT, display: 'block', marginBottom: '12px', opacity: 0.85 }}>
                  <Icon d={FEATURE_ICONS[i]} size={17} />
                </span>
                <p style={{ ...S.colHead, fontSize: '0.88rem', marginBottom: '6px' }}>{f.title}</p>
                <p style={{ ...S.body, fontSize: '0.85rem' }}>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── ARCHITECTURE ── */}
        <section style={S.rule}>
          <span style={S.label}>Architectural Decisions</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '40px' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>The reasoning behind key technical choices.</h2>
            <p style={S.body}>Every major technical decision was made against the specific constraints of the Jamaican clinic environment, not general best practice.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { title: 'Relational Database', body: 'Medical records are inherently relational. Patients have appointments, appointments generate visits, and visits produce prescriptions, orders, and annotations. Referential integrity is enforced at the database level.' },
              { title: 'Progressive Web Application', body: 'A browser-based PWA achieves the installation experience of a native app without a separate codebase. Body map annotation, document generation, and file upload use standard browser APIs.' },
              { title: 'Print and Sign Workflow', body: 'Electronic signatures on clinical documents have uncertain legal standing with Jamaican pharmacies and labs. PulseOS generates pre-filled printed documents for handwritten signature.' },
              { title: 'Compliance by Design', body: 'DPA 2020 compliance is not additive. Consent capture, audit logging, data minimisation, and retention enforcement are built into the schema and enforced at the API layer from day one.' },
              { title: 'Isolated Deployments', body: 'Each clinic runs its own Railway deployment connected to a shared repository. One push updates all instances. Clinic-specific configuration lives in the database.' },
            ].map((d, i, arr) => (
              <div
                key={d.title}
                style={{
                  display: 'grid', gridTemplateColumns: '240px 1fr', gap: '48px',
                  padding: '28px 0',
                  borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  alignItems: 'start',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: ACCENT, flexShrink: 0, marginTop: '2px', opacity: 0.7 }}>
                    <Icon d={ARCH_ICONS[i] || ARCH_ICONS[0]} size={16} />
                  </span>
                  <p style={{ ...S.colHead, marginBottom: 0 }}>{d.title}</p>
                </div>
                <p style={{ ...S.body, fontSize: '0.95rem' }}>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SCHEMA ── */}
        <section style={S.rule}>
          <span style={S.label}>Database Schema</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start', marginBottom: '36px' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>17 tables across 7 modules.</h2>
            <p style={S.body}>
              Foreign key constraints enforced at the database level. An INSERT-only audit log ensures no record can be silently altered or deleted. Schema designed in accordance with the Jamaica Data Protection Act 2020.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Core Clinical', 'Scheduling', 'Investigations', 'Records', 'Checkout', 'Compliance', 'Configuration'].map(group => (
              <span key={group} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em',
                padding: '7px 16px', borderRadius: '6px',
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${ACCENT}30`,
                color: ACCENT,
              }}>{group}</span>
            ))}
          </div>
        </section>

        {/* ── STACK + STATUS side by side ── */}
        <section style={S.rule}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>

            {/* Stack */}
            <div>
              <span style={S.label}>Technology Stack</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { category: 'Backend',    items: ['Node.js', 'Express', 'MySQL', 'JWT'] },
                  { category: 'Frontend',   items: ['React', 'Vite', 'Tailwind CSS'] },
                  { category: 'Deployment', items: ['Railway', 'Vercel'] },
                  { category: 'Testing',    items: ['Postman', 'Jest', 'Cypress'] },
                ].map((g, i, arr) => (
                  <div
                    key={g.category}
                    style={{
                      display: 'grid', gridTemplateColumns: '110px 1fr', gap: '20px',
                      padding: '14px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(248,247,244,0.22)' }}>{g.category}</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {g.items.map(t => <Pill key={t}>{t}</Pill>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <span style={S.label}>Development Status</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { phase: 'Phase 1 — Foundation',           status: 'complete', label: 'Complete',    body: 'Server architecture, database schema, authentication, and patient registration.' },
                  { phase: 'Phase 2 — Core Workflows',        status: 'active',   label: 'In Progress', body: 'Scheduling, role-based portals, vitals, prescriptions, body map, checkout.' },
                  { phase: 'Phase 3 — AI Integration',        status: 'upcoming', label: 'Upcoming',    body: 'Note structuring, drug checks, document OCR, symptom triage.' },
                  { phase: 'Phase 4 — Compliance and Launch', status: 'upcoming', label: 'Upcoming',    body: 'DPA 2020 tooling, reporting, end-to-end tests, production deployment.' },
                ].map((p, i, arr) => {
                  const labelColor = p.status === 'complete' ? '#22C55E' : p.status === 'active' ? '#F59E0B' : 'rgba(255,255,255,0.2)';
                  return (
                    <div key={p.phase} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                        <Dot status={p.status} />
                        {i < arr.length - 1 && <div style={{ width: '1px', flex: 1, background: 'rgba(255,255,255,0.07)', minHeight: '16px', margin: '5px 0' }} />}
                      </div>
                      <div style={{ paddingBottom: i < arr.length - 1 ? '20px' : '0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                          <p style={{ ...S.colHead, marginBottom: 0, fontSize: '0.9rem' }}>{p.phase}</p>
                          <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em',
                            textTransform: 'uppercase', padding: '2px 7px', borderRadius: '3px',
                            border: `1px solid ${labelColor}`, color: labelColor,
                            opacity: p.status === 'upcoming' ? 0.45 : 1,
                          }}>{p.label}</span>
                        </div>
                        <p style={{ ...S.body, fontSize: '0.88rem' }}>{p.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ── FOOTER ── */}
        <div style={{
          marginTop: '72px', paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <a
            href="https://github.com/sydonaeengland/PulseOS.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
              color: '#F8F7F4', textDecoration: 'none',
              padding: '11px 22px',
              background: VIOLET,
              borderRadius: '6px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {GH_ICON}
            View on GitHub
          </a>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'rgba(248,247,244,0.2)' }}>
            Built by Sydonae England · 2026
          </p>
        </div>

      </div>
    </div>
  );
}
