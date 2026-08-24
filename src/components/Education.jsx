import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  const educationList = PORTFOLIO_DATA.education;
  const certificationsList = PORTFOLIO_DATA.certifications;

  return (
    <section id="education" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">&lt;academic-foundation /&gt;</span>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Academic qualifications, university achievements, and verified technical problem-solving certifications.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div style={{ maxWidth: '980px', margin: '0 auto 4.5rem auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {educationList.map((edu) => (
              <div
                key={edu.id}
                className="glass-card"
                style={{
                  padding: '2.2rem',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '5px solid var(--color-primary)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.9rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(6, 182, 212, 0.12)',
                        border: '1px solid var(--border-medium)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)',
                        boxShadow: '0 0 15px var(--color-glow)'
                      }}
                    >
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        {edu.degree}
                      </h3>
                      <div style={{ fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 600, marginTop: '0.2rem' }}>
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#10b981',
                        background: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        padding: '0.35rem 0.9rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 700
                      }}
                    >
                      {edu.score}
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.84rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        background: 'var(--bg-tertiary)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)'
                      }}
                    >
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  {edu.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {edu.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.92rem', color: 'var(--text-main)' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, textAlign: 'center', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
            <Award size={24} style={{ color: 'var(--color-primary)' }} />
            <span>Certifications & Problem Solving Achievements</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.6rem'
            }}
          >
            {certificationsList.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Award size={20} style={{ color: 'var(--color-primary)' }} />
                  <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-main)' }}>{cert.title}</h4>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>
                  Issued by {cert.issuer}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
