import React, { useState } from 'react';
import { Code2, Server, Cloud, Sparkles, Cpu, Layers, Terminal, Database, Box, Gauge, CheckCircle2, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(PORTFOLIO_DATA.skillCategories[0].id);

  const categories = PORTFOLIO_DATA.skillCategories;
  const currentGroup = categories.find((c) => c.id === activeCategory) || categories[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      default: return <Cpu size={20} />;
    }
  };

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">&lt;tech-stack-matrix /&gt;</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core programming languages, frameworks, databases, and computer science foundations.
          </p>
        </div>

        {/* Category Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.9rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: isSelected ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' : 'var(--bg-card)',
                  color: isSelected ? '#ffffff' : 'var(--text-muted)',
                  border: isSelected ? 'none' : '1px solid var(--border-medium)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 20px var(--color-glow-strong)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {getIcon(cat.icon)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.4rem',
            maxWidth: '1020px',
            margin: '0 auto'
          }}
        >
          {currentGroup.skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.4rem 1.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderLeft: '4px solid var(--color-primary)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid var(--border-medium)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)'
                  }}
                >
                  <Zap size={18} />
                </div>
                <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)' }}>
                  {skill.name}
                </span>
              </div>

              <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', opacity: 0.8 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
