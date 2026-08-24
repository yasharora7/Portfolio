import React, { useState, useEffect } from 'react';
import { X, Download, Briefcase, GraduationCap, FileText, Award, Code, Copy, Check, Printer, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const generatePlainTextResume = () => {
    const p = PORTFOLIO_DATA.personal || {};
    const edu = PORTFOLIO_DATA.education || [];
    const exp = PORTFOLIO_DATA.experience || [];
    const proj = PORTFOLIO_DATA.projects || [];
    const certs = PORTFOLIO_DATA.certifications || [];
    const skills = PORTFOLIO_DATA.skillCategories || [];

    let text = `=================================================================\n`;
    text += `${p.name?.toUpperCase() || 'RESUME'}\n`;
    text += `${p.roles?.[0] || 'Software Development Engineer'} | ${p.location || ''}\n`;
    text += `Email: ${p.email || ''} | Phone: ${p.phone || ''}\n`;
    text += `GitHub: ${p.github || ''} | LinkedIn: ${p.linkedin || ''}\n`;
    text += `=================================================================\n\n`;

    if (p.bio?.story) {
      text += `SUMMARY / OBJECTIVE:\n${p.bio.story}\n\n`;
    }

    if (skills.length > 0) {
      text += `TECHNICAL SKILLS:\n`;
      skills.forEach(cat => {
        const skillNames = (cat.skills || []).map(s => s.name).join(', ');
        text += `- ${cat.title}: ${skillNames}\n`;
      });
      text += `\n`;
    }

    if (edu.length > 0) {
      text += `EDUCATION:\n`;
      edu.forEach(e => {
        text += `• ${e.degree} — ${e.institution} (${e.period})\n`;
        text += `  Score: ${e.score}\n`;
        if (e.description) text += `  ${e.description}\n`;
        if (e.highlights) e.highlights.forEach(h => text += `  - ${h}\n`);
      });
      text += `\n`;
    }

    if (exp.length > 0) {
      text += `EXPERIENCE / ROLES:\n`;
      exp.forEach(e => {
        text += `• ${e.role} — ${e.company} (${e.period})\n`;
        if (e.description) text += `  ${e.description}\n`;
        if (e.achievements) e.achievements.forEach(a => text += `  - ${a}\n`);
      });
      text += `\n`;
    }

    if (proj.length > 0) {
      text += `KEY PROJECTS:\n`;
      proj.forEach(pr => {
        text += `• ${pr.title} (${(pr.tags || []).join(', ')})\n`;
        text += `  ${pr.summary}\n`;
        if (pr.highlights) pr.highlights.forEach(h => text += `  - ${h}\n`);
      });
      text += `\n`;
    }

    if (certs.length > 0) {
      text += `CERTIFICATIONS & ACHIEVEMENTS:\n`;
      certs.forEach(c => {
        text += `• ${c.title} (${c.issuer}): ${c.description}\n`;
      });
    }

    return text;
  };

  const triggerDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    const textContent = generatePlainTextResume();
    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    const fileName = (PORTFOLIO_DATA.personal?.name || 'Resume').replace(/\s+/g, '_');
    element.download = `${fileName}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    const textContent = generatePlainTextResume();
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const personal = PORTFOLIO_DATA.personal || {};
  const education = PORTFOLIO_DATA.education || [];
  const experience = PORTFOLIO_DATA.experience || [];
  const projects = PORTFOLIO_DATA.projects || [];
  const certifications = PORTFOLIO_DATA.certifications || [];
  const skillCategories = PORTFOLIO_DATA.skillCategories || [];

  return (
    <div
      onClick={onClose}
      className="no-print-bg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
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
        className="glass-modal printable-resume"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2.5rem'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="no-print"
          title="Close (Esc)"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            color: 'var(--text-main)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all var(--transition-fast)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Header Actions */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1.2rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileText size={24} style={{ color: 'var(--color-primary)' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Resume Preview</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              title="Copy resume text to clipboard"
            >
              {copied ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              title="Print or save as PDF"
            >
              <Printer size={16} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={triggerDownload}
              className="btn-primary"
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}
              title="Download text resume"
            >
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Resume Body Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {/* Personal Banner */}
          <div style={{ borderBottom: '1px dashed var(--border-medium)', paddingBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              {personal.name}
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              {personal.roles?.[0]} • {personal.location}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '0.4rem' }}>
              📧 {personal.email} | 📞 {personal.phone}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
              🔗 GitHub: {personal.github} | LinkedIn: {personal.linkedin}
            </p>
          </div>

          {/* Career Objective */}
          {personal.bio?.story && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                Summary / Objective
              </h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {personal.bio.story}
              </p>
            </div>
          )}

          {/* Technical Skills Summary */}
          {skillCategories.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} style={{ color: 'var(--color-primary)' }} />
                Technical Skills
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
                {skillCategories.map((cat) => (
                  <div key={cat.id} style={{ background: 'var(--bg-tertiary)', padding: '0.9rem 1.1rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
                      {cat.title}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {(cat.skills || []).map(s => s.name).join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section (If present) */}
          {experience.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Briefcase size={18} style={{ color: 'var(--color-primary)' }} />
                Experience & Engineering Roles
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {experience.map((exp) => (
                  <div key={exp.id || exp.role} style={{ background: 'var(--bg-tertiary)', padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-main)', flexWrap: 'wrap' }}>
                      <span>{exp.role}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '0.85rem' }}>{exp.period}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{exp.company} • {exp.location}</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '0.4rem' }}>{exp.description}</p>
                    {exp.achievements && (
                      <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.84rem', marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        {exp.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={18} style={{ color: 'var(--color-primary)' }} />
                Education
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {education.map((edu) => (
                  <div key={edu.id || edu.degree} style={{ background: 'var(--bg-tertiary)', padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--text-main)', flexWrap: 'wrap' }}>
                      <span>{edu.degree}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontSize: '0.85rem' }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-primary)', fontWeight: 600 }}>{edu.institution}</div>
                    <div style={{ fontSize: '0.84rem', color: '#10b981', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>{edu.score}</div>
                    {edu.description && (
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{edu.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Code size={18} style={{ color: 'var(--color-primary)' }} />
                Key Software Projects
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {projects.map((proj) => (
                  <div key={proj.id || proj.title} style={{ background: 'var(--bg-tertiary)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                      {proj.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', marginBottom: '0.6rem' }}>
                      {(proj.tags || []).join(' • ')}
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{proj.summary}</p>
                    {proj.highlights && (
                      <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                        {proj.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications & Achievements */}
          {certifications.length > 0 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} style={{ color: 'var(--color-primary)' }} />
                Certifications & Achievements
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.8rem' }}>
                {certifications.map((c, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.92rem' }}>{c.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>{c.issuer}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>{c.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
