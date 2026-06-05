import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

const BADGE_COLORS = {
  Capstone: { bg: 'rgba(0,229,180,0.1)',    border: 'rgba(0,229,180,0.3)',    text: '#00E5B4' },
  Hackathon:{ bg: 'rgba(129,140,248,0.1)',  border: 'rgba(129,140,248,0.3)', text: '#818CF8' },
  Academic: { bg: 'rgba(251,146,60,0.1)',   border: 'rgba(251,146,60,0.3)',  text: '#FB923C' },
  Design:   { bg: 'rgba(201,168,76,0.1)',   border: 'rgba(201,168,76,0.3)',  text: '#C9A84C' },
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Project not found.</p>
        <button onClick={() => navigate('/projects')} style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'none' }}>
          ← Back to projects
        </button>
      </div>
    );
  }

  const badge = BADGE_COLORS[project.badge] ?? BADGE_COLORS.Academic;
  const currentIndex = PROJECTS.findIndex(p => p.id === id);
  const prev = PROJECTS[currentIndex - 1];
  const next = PROJECTS[currentIndex + 1];
  const images = project.gallery || (project.image ? [project.image] : []);
  const [active, setActive] = useState(0);

  useEffect(() => { setActive(0); }, [id]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '96px' }}>
      {/* Accent glow */}
      <div aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: 0.6,
        zIndex: 40,
      }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back */}
        <Link
          to="/projects"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '48px',
            fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--color-muted)',
            textDecoration: 'none', transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          All projects
        </Link>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '5px 14px', borderRadius: 'var(--radius-full)',
              background: badge.bg, border: `1px solid ${badge.border}`, color: badge.text,
            }}>
              {project.badge}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)', fontWeight: 800,
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-0.03em',
            color: 'var(--color-text)', lineHeight: '1', marginBottom: '10px',
          }}>
            {project.name}
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontWeight: 400,
            color: 'var(--color-muted)', marginBottom: '16px',
          }}>
            {project.subtitle}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500,
            color: project.color, lineHeight: '1.5',
          }}>
            {project.tagline}
          </p>
        </div>

        {/* Gallery */}
        <div style={{ marginBottom: '48px' }}>
          {/* Main image */}
          <div style={{
            width: '100%', aspectRatio: '16/9',
            background: `linear-gradient(135deg, var(--color-card-alt), ${project.color}0a)`,
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${project.color}25`,
            overflow: 'hidden', marginBottom: images.length > 1 ? '12px' : '0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {images.length > 0 ? (
              <img
                key={images[active]}
                src={images[active]}
                alt={`${project.name} screenshot ${active + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', color: project.color, opacity: 0.3 }} aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem' }}>Screenshot coming soon</span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '8px' }}>
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    flex: 1, aspectRatio: '16/9', padding: 0, cursor: 'pointer',
                    borderRadius: '8px', overflow: 'hidden',
                    border: `2px solid ${i === active ? project.color : 'transparent'}`,
                    opacity: i === active ? 1 : 0.45,
                    transition: 'opacity 0.2s, border-color 0.2s',
                    background: 'none',
                  }}
                  aria-label={`View screenshot ${i + 1}`}
                >
                  <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Two-col: description + meta */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>

          {/* Description */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem',
              color: 'var(--color-text)', marginBottom: '16px',
            }}>
              About the project
            </h2>
            {project.description.split('\n\n').map((para, i) => (
              <p key={i} style={{
                fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--color-muted)',
                lineHeight: '1.8', marginBottom: '16px', fontWeight: 400,
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div style={{
            background: 'var(--color-card)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)', padding: '28px',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem',
              color: 'var(--color-text)', marginBottom: '20px', letterSpacing: '-0.01em',
            }}>
              Key highlights
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: project.color, flexShrink: 0, marginTop: '7px',
                  }} aria-hidden="true" />
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.85rem',
                    color: 'var(--color-muted-light)', lineHeight: '1.6',
                  }}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem',
              color: 'var(--color-text)', marginBottom: '14px',
            }}>
              Tech stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.stack.map(tech => (
                <span key={tech} style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 500,
                  padding: '6px 16px', borderRadius: 'var(--radius-full)',
                  border: `1px solid ${project.color}35`,
                  color: project.color,
                  background: `${project.color}08`,
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          {project.role && (
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem',
                color: 'var(--color-text)', marginBottom: '10px',
              }}>
                My role
              </h2>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                color: 'var(--color-muted)', lineHeight: '1.7',
              }}>
                {project.role}
              </p>
            </div>
          )}

          {/* GitHub link */}
          <div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 28px', borderRadius: 'var(--radius-full)',
                border: `1px solid ${project.color}50`,
                background: `${project.color}0a`,
                color: project.color,
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.88rem',
                textDecoration: 'none', transition: 'box-shadow 0.25s ease, background 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 24px ${project.color}30`;
                e.currentTarget.style.background = `${project.color}15`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = `${project.color}0a`;
              }}
              aria-label={`View ${project.name} on GitHub (opens in new tab)`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
          marginTop: '80px', paddingTop: '40px',
          borderTop: '1px solid var(--color-border)',
        }}>
          {prev ? (
            <Link
              to={`/projects/${prev.id}`}
              style={{
                padding: '20px', background: 'var(--color-card)',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                textDecoration: 'none', transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${prev.color}44`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              aria-label={`Previous project: ${prev.name}`}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-muted)', marginBottom: '6px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>← Previous</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>{prev.name}</p>
            </Link>
          ) : <div />}

          {next && (
            <Link
              to={`/projects/${next.id}`}
              style={{
                padding: '20px', background: 'var(--color-card)',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                textDecoration: 'none', textAlign: 'right', transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${next.color}44`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              aria-label={`Next project: ${next.name}`}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--color-muted)', marginBottom: '6px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next →</p>
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>{next.name}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
