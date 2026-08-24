import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import HeroTerminal from './HeroTerminal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PORTFOLIO_DATA.personal.roles;

  // Typewriter logic
  useEffect(() => {
    const fullRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullRole.length) {
        timer = setTimeout(() => {
          setCurrentText(fullRole.substring(0, currentText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullRole.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="section-padding"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '7.5rem'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Glowing Status Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              padding: '0.45rem 1.2rem',
              borderRadius: '9999px',
              color: '#10b981',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1.8rem',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981',
                animation: 'pulseGlow 2s infinite'
              }}
            />
            {PORTFOLIO_DATA.personal.status}
          </div>

          {/* Heading with Name & Typewriter */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              fontWeight: 800
            }}
          >
            Hi, I'm <span className="gradient-text">{PORTFOLIO_DATA.personal.name}</span>
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <span>I am a</span>
            <span
              style={{
                color: 'var(--color-primary)',
                borderRight: '2px solid var(--color-primary)',
                paddingRight: '4px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {currentText}
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted)',
              maxWidth: '700px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.7
            }}
          >
            {PORTFOLIO_DATA.personal.tagline}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={() => scrollTo('contact')} className="btn-secondary">
              <Mail size={18} />
              <span>Contact Me</span>
            </button>

            <button onClick={onOpenResume} className="btn-secondary">
              <Download size={18} />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.2rem',
              marginBottom: '2.5rem'
            }}
          >
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              style={{
                color: 'var(--text-muted)',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <GithubIcon size={20} />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn Profile"
              style={{
                color: 'var(--text-muted)',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.twitter}
              target="_blank"
              rel="noreferrer"
              title="Twitter Profile"
              style={{
                color: 'var(--text-muted)',
                transition: 'all var(--transition-fast)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <TwitterIcon size={20} />
            </a>
          </div>

          {/* Code Window Simulation Terminal */}
          <HeroTerminal />

          {/* Quick Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.2rem',
              marginTop: '3rem'
            }}
          >
            {PORTFOLIO_DATA.personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.2rem',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary)',
                    marginBottom: '0.2rem'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
