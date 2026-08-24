import React, { useState } from 'react';
import { User, Compass, Heart, MapPin, CheckCircle, Code, Cpu, Award, Zap, BookOpen, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const bio = PORTFOLIO_DATA.personal.bio;

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">&lt;about-me /&gt;</span>
          <h2 className="section-title">Aspiring Software Development Engineer</h2>
          <p className="section-subtitle">
            A CS undergraduate passionate about web development, software engineering, and problem solving.
          </p>
        </div>

        {/* Fresher Quick Highlight Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.2rem',
            maxWidth: '1000px',
            margin: '0 auto 3rem auto'
          }}
        >
          <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--color-primary)' }}>
              <GraduationCap size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Education</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>B.Tech CSE (PSIT Kanpur)</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--color-primary)' }}>
              <Zap size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Problem Solving</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>500+ LeetCode & HackerRank</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--color-primary)' }}>
              <Cpu size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Core Focus</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Full-Stack & Web Dev</div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.12)', color: 'var(--color-primary)' }}>
              <Code size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Status</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#10b981' }}>Open for SDE Roles</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation & Content Container */}
        <div
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          {/* Navigation Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '1.2rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={() => setActiveTab('story')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: activeTab === 'story' ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
                border: activeTab === 'story' ? '1px solid var(--color-primary)' : '1px solid transparent',
                color: activeTab === 'story' ? 'var(--color-primary)' : 'var(--text-muted)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <User size={18} />
              CS Background & Story
            </button>

            <button
              onClick={() => setActiveTab('strengths')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: activeTab === 'strengths' ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
                border: activeTab === 'strengths' ? '1px solid var(--color-primary)' : '1px solid transparent',
                color: activeTab === 'strengths' ? 'var(--color-primary)' : 'var(--text-muted)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Zap size={18} />
              Key Technical Skills
            </button>

            <button
              onClick={() => setActiveTab('values')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: activeTab === 'values' ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
                border: activeTab === 'values' ? '1px solid var(--color-primary)' : '1px solid transparent',
                color: activeTab === 'values' ? 'var(--color-primary)' : 'var(--text-muted)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <Heart size={18} />
              Core Principles
            </button>
          </div>

          {/* Tab Content Display */}
          <div style={{ minHeight: '180px' }}>
            {activeTab === 'story' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--text-main)' }}>
                  {bio.story}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}
                >
                  <MapPin size={18} />
                  <span>Based in {PORTFOLIO_DATA.personal.location}</span>
                </div>
              </div>
            )}

            {activeTab === 'strengths' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.2rem'
                }}
              >
                {bio.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.2rem',
                      background: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '0.4rem' }}>
                      {comp.title}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {comp.desc}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h4 style={{ marginBottom: '1.2rem', color: 'var(--text-main)', fontSize: '1.1rem' }}>
                  What I Bring to a Team as a Fresh Graduate:
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}
                >
                  {bio.values.map((val, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '0.9rem 1.2rem',
                        background: 'var(--bg-tertiary)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <CheckCircle size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                      <span style={{ fontWeight: 500, color: 'var(--text-main)', fontSize: '0.95rem' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
