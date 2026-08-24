import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Menu, X, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar({
  theme,
  toggleTheme,
  accent,
  setAccent,
  onOpenResume,
  activeSection
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accentDropdownOpen, setAccentDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-nav shadow-lg' : 'py-5 bg-transparent'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1.2rem',
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 4px 15px var(--color-glow)'
            }}
          >
            {PORTFOLIO_DATA.personal.initials}
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.72rem',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-mono)',
                lineHeight: 1
              }}
            >
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav
          className="desktop-nav"
          style={{
            alignItems: 'center',
            gap: '1.8rem'
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--color-primary)' : 'var(--text-muted)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions (Theme Picker, Dark/Light, Resume CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Accent Color Theme Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setAccentDropdownOpen(!accentDropdownOpen)}
              title="Change Accent Theme"
              style={{
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
                transition: 'all var(--transition-fast)'
              }}
            >
              <Palette size={18} style={{ color: 'var(--color-primary)' }} />
            </button>

            {accentDropdownOpen && (
              <div
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '180px',
                  padding: '0.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  zIndex: 200
                }}
              >
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', padding: '0.2rem 0.4rem' }}>
                  Accent Color
                </div>
                {PORTFOLIO_DATA.themeAccents.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setAccent(a.id);
                      setAccentDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      background: accent === a.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      border: 'none',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      color: 'var(--text-main)',
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    <span
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: a.primary,
                        boxShadow: `0 0 8px ${a.glow}`
                      }}
                    />
                    {a.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
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
              transition: 'all var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} style={{ color: '#f59e0b' }} /> : <Moon size={18} style={{ color: '#6366f1' }} />}
          </button>

          {/* Resume Modal Trigger Button */}
          <button
            onClick={onOpenResume}
            className="btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem'
            }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              color: 'var(--text-main)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="glass-card"
          style={{
            margin: '0.8rem 1.5rem 0 1.5rem',
            padding: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? 'var(--color-primary)' : 'var(--text-main)',
                fontSize: '1.05rem',
                fontWeight: 600,
                textAlign: 'left',
                padding: '0.5rem 0',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
