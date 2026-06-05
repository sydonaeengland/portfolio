import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const BADGE_COLORS = {
  Capstone: { bg: 'rgba(0,229,180,0.08)',    border: 'rgba(0,229,180,0.25)',    text: '#00E5B4' },
  Hackathon:{ bg: 'rgba(129,140,248,0.08)',  border: 'rgba(129,140,248,0.25)', text: '#818CF8' },
  Academic: { bg: 'rgba(251,146,60,0.08)',   border: 'rgba(251,146,60,0.25)',  text: '#FB923C' },
  Design:   { bg: 'rgba(201,168,76,0.08)',   border: 'rgba(201,168,76,0.25)',  text: '#C9A84C' },
};

function HeroCard({ project }) {
  const navigate = useNavigate();
  const badge = BADGE_COLORS[project.badge] ?? BADGE_COLORS.Academic;

  return (
    <article
      onClick={() => navigate(`/projects/${project.id}`)}
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        cursor: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '340px',
        marginBottom: '20px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.boxShadow = `0 20px 60px ${project.color}10`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/projects/${project.id}`)}
      aria-label={`View ${project.name} — ${project.subtitle}`}
    >
      {/* Left — content */}
      <div style={{
        padding: '40px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
        borderRight: '1px solid var(--color-border)',
      }}>
        <div>
          {/* Top accent line */}
          <div style={{
            width: '32px', height: '2px',
            background: project.color,
            marginBottom: '20px',
            opacity: 0.8,
          }} aria-hidden="true" />

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '2px',
              background: badge.bg,
              border: `1px solid ${badge.border}`,
              color: badge.text,
            }}>
              {project.badge}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '8px',
          }}>
            {project.name}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            color: 'var(--color-muted)',
            marginBottom: '16px',
          }}>
            {project.subtitle}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'var(--color-muted-light)',
            lineHeight: '1.7',
          }}>
            {project.tagline}
          </p>
        </div>

        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
            {project.stack.slice(0, 5).map(tech => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                border: '1px solid var(--color-border-light)',
                color: 'var(--color-muted)',
                borderRadius: '2px',
              }}>
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-muted)', padding: '4px 4px' }}>
                +{project.stack.length - 5}
              </span>
            )}
          </div>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8rem',
            fontWeight: 500,
            color: project.color,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            Read case study
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 6.5h9M7.5 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Right — screenshot */}
      <div style={{
        background: `linear-gradient(135deg, var(--color-card-alt) 0%, ${project.color}08 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div style={{
          display: 'none',
          position: 'absolute', inset: 0,
          alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px',
          color: project.color, opacity: 0.25,
        }} aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
            Screenshot coming soon
          </span>
        </div>
      </div>
    </article>
  );
}

function GridCard({ project }) {
  const navigate = useNavigate();
  const badge = BADGE_COLORS[project.badge] ?? BADGE_COLORS.Academic;

  return (
    <article
      onClick={() => navigate(`/projects/${project.id}`)}
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        cursor: 'none',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.color}50`;
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 16px 48px ${project.color}0e`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && navigate(`/projects/${project.id}`)}
      aria-label={`View ${project.name} project details`}
    >
      {/* Image */}
      <div style={{ height: '180px', background: 'var(--color-card-alt)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
        }} aria-hidden="true" />
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
        <div style={{
          display: 'none', position: 'absolute', inset: 0,
          alignItems: 'center', justifyContent: 'center',
          background: `linear-gradient(135deg, var(--color-card-alt), ${project.color}08)`,
          color: project.color, opacity: 0.3,
        }} aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
        <span style={{
          position: 'absolute', top: '10px', left: '10px',
          fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          padding: '3px 10px', borderRadius: '2px',
          background: badge.bg, border: `1px solid ${badge.border}`, color: badge.text,
        }}>
          {project.badge}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.35rem',
            color: 'var(--color-text)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '4px',
          }}>
            {project.name}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-muted)', fontWeight: 400 }}>
            {project.subtitle}
          </p>
        </div>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          color: 'var(--color-muted-light)',
          lineHeight: '1.65',
          flex: 1,
        }}>
          {project.tagline}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {project.stack.slice(0, 4).map(tech => (
            <span key={tech} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              padding: '3px 8px', borderRadius: '2px',
              border: '1px solid var(--color-border-light)', color: 'var(--color-muted)',
            }}>
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-muted)', padding: '3px 4px' }}>
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '0.76rem', fontWeight: 500,
          color: project.color, display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '2px',
        }}>
          View project
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6.5 2.5l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [hero, ...rest] = PROJECTS;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '96px' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          to="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '48px',
            fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--color-muted)',
            textDecoration: 'none', transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M12 7.5H3M6.5 4l-3 3.5 3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Back to home
        </Link>

        <p className="section-label mb-4">Projects</p>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(2.8rem, 7vw, 6rem)',
          letterSpacing: '-0.02em',
          color: 'var(--color-text)',
          lineHeight: 0.95,
          marginBottom: '14px',
        }}>
          Things I've Built
        </h1>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.95rem',
          color: 'var(--color-muted)',
          maxWidth: '500px',
          lineHeight: '1.7',
          marginBottom: '60px',
        }}>
          Across hackathons, capstone work, academic projects, and design.
          Click any card to read the full story.
        </p>

        {/* Hero card — first project (DLRSJAM) */}
        <HeroCard project={hero} />

        {/* 2-col grid — rest */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {rest.map(project => (
            <GridCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
