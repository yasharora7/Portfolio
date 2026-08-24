import React, { useEffect } from 'react';
import { X, Download, Briefcase, GraduationCap, FileText, Award, Code, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const triggerDownload = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    const element = document.createElement('a');
    const textContent =
      `RESUME - ${PORTFOLIO_DATA.personal.name}\n` +
      `Email: ${PORTFOLIO_DATA.personal.email} | Phone: ${PORTFOLIO_DATA.personal.phone}\n` +
      `GitHub: ${PORTFOLIO_DATA.personal.github} | LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}\n\n` +
      `CAREER OBJECTIVE:\n${PORTFOLIO_DATA.personal.bio.story}\n\n` +
      `EDUCATION:\n` +
      PORTFOLIO_DATA.experience.map(e => `${e.role} — ${e.company} (${e.period})\n- ${e.description}\n`).join('\n') +
      `PROJECTS:\n` +
      PORTFOLIO_DATA.projects.map(p => `${p.title} (${p.tags.join(', ')})\n- ${p.summary}\n`).join('\n') +
      `CERTIFICATIONS & ACHIEVEMENTS:\n` +
      PORTFOLIO_DATA.certifications.map(c => `- ${c.title} (${c.issuer}): ${c.description}\n`).join('');

    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${PORTFOLIO_DATA.personal.name.replace(' ', '_')}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
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
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2.5rem'
        }}
      >
        {/* Close Button */}
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

        {/* Modal Header Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={24} style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Resume Preview</h3>
          </div>

          <button onClick={triggerDownload} className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            <Download size={16} />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Resume Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {/* Header Banner */}
          <div style={{ borderBottom: '1px dashed var(--border-medium)', paddingBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              {PORTFOLIO_DATA.personal.name}
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {PORTFOLIO_DATA.personal.roles[0]} • {PORTFOLIO_DATA.personal.location}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '0.3rem' }}>
              📧 {PORTFOLIO_DATA.personal.email} | 📞 {PORTFOLIO_DATA.personal.phone}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
              🔗 GitHub: {PORTFOLIO_DATA.personal.github} | LinkedIn: {PORTFOLIO_DATA.personal.linkedin}
            </p>
          </div>

          {/* Career Objective */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Career Objective
            </h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {PORTFOLIO_DATA.personal.bio.story}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={18} style={{ color: 'var(--color-primary)' }} />
              Education
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.id} style={{ background: 'var(--bg-tertiary)', padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-main)' }}>
                    <span>{exp.role}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '0.85rem' }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{exp.company} • {exp.location}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>{exp.achievements[0]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code size={18} style={{ color: 'var(--color-primary)' }} />
              Key Projects
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} style={{ background: 'var(--bg-tertiary)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                    {proj.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
                    {proj.tags.join(' • ')}
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} style={{ color: 'var(--color-primary)' }} />
              Certifications & Achievements
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
              {PORTFOLIO_DATA.certifications.map((c, idx) => (
                <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.92rem' }}>{c.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>{c.issuer}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{c.description}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
