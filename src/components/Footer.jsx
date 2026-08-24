import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 2rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            textAlign: 'center'
          }}
        >
          {/* Brand Logo & Name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '1rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              {PORTFOLIO_DATA.personal.initials}
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem' }}>
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', maxWidth: '450px', fontSize: '0.92rem' }}>
            {PORTFOLIO_DATA.personal.tagline}
          </p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              style={{ color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }}
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              style={{ color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }}
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.twitter}
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              style={{ color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }}
            >
              <TwitterIcon size={20} />
            </a>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)', margin: '1rem 0' }} />

          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.85rem',
              color: 'var(--text-dim)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div>
              © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built with React & Modern Web Standards.
            </div>

            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                color: 'var(--color-primary)',
                padding: '0.4rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
