import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-modal"
        style={{
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2rem'
        }}
      >
        {/* Close X Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-main)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header & Image */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid var(--border-subtle)' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Content Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span className="section-tag" style={{ margin: 0 }}>
              {project.categoryLabel}
            </span>
            {project.featured && (
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.78rem',
                  color: '#f59e0b',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Sparkles size={14} /> Featured Project
              </span>
            )}
          </div>

          <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>{project.title}</h3>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            {project.fullDescription}
          </p>

          {/* Highlights Checklist */}
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--text-main)' }}>Key Achievements & Features:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>Technologies Used:</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <span>Live Demo</span>
              <ExternalLink size={18} />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon size={18} />
              <span>Source Code</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
