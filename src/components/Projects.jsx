import React from 'react';
import { ExternalLink, Eye, ArrowUpRight, Code, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">&lt;software-projects /&gt;</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Software builds, full-stack web applications, Spring Boot backend systems, and mobile tools from my GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.2rem',
            marginBottom: '4rem'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              {/* Project Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '230px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(9, 13, 22, 0.88)',
                      backdropFilter: 'blur(10px)',
                      color: 'var(--color-primary)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-medium)',
                      fontWeight: 600
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', gap: '1.2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.6rem', color: 'var(--text-main)', fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.2rem' }}>
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--color-primary)',
                          background: 'rgba(6, 182, 212, 0.08)',
                          padding: '0.28rem 0.65rem',
                          borderRadius: '8px',
                          border: '1px solid rgba(6, 182, 212, 0.2)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center', fontFamily: 'var(--font-mono)' }}>
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.1rem',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={16} />
                    <span>View Project Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="View Source Code on GitHub"
                    style={{
                      color: 'var(--text-muted)',
                      padding: '0.45rem',
                      borderRadius: '50%',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* GitHub Profile Banner CTA */}
        <div
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '2.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            background: 'linear-gradient(135deg, rgba(13,19,34,0.9), rgba(22,32,53,0.95))'
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-primary)',
              boxShadow: '0 0 20px var(--color-glow)'
            }}
          >
            <GithubIcon size={28} />
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>
            Explore More Code Repositories on GitHub
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Visit my official GitHub profile <strong>github.com/yasharora7</strong> for 14+ open-source repositories, algorithms, and full-stack projects.
          </p>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: '0.4rem' }}
          >
            <GithubIcon size={18} />
            <span>Visit github.com/yasharora7</span>
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
