import React from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function HeroTerminal() {
  const [copied, setCopied] = React.useState(false);

  const codeSnippet = `const developer = {
  name: "Yash Arora",
  role: "Software Development Engineer (SDE)",
  education: "B.Tech CSE @ PSIT Kanpur",
  cgpa: 7.9,
  dsaSolved: "500+ LeetCode & HackerRank",
  primaryTech: ["Java", "Spring Boot", "React", "Node.js", "MySQL", "C++"],
  status: "Ready for New Engineering Challenges 🚀"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="glass-card"
      style={{
        maxWidth: '680px',
        margin: '2rem auto 0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 30px var(--color-glow)'
      }}
    >
      {/* Terminal Top Window Bar */}
      <div
        style={{
          background: 'rgba(15, 23, 42, 0.95)',
          padding: '0.75rem 1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginLeft: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Terminal size={14} /> yash-arora-sde.js
          </span>
        </div>

        <button
          onClick={copyCode}
          title="Copy snippet"
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Editor Body */}
      <div
        style={{
          padding: '1.5rem',
          background: 'rgba(9, 13, 22, 0.92)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.88rem',
          lineHeight: 1.7,
          textAlign: 'left',
          overflowX: 'auto'
        }}
      >
        <div>
          <span style={{ color: '#a855f7', fontWeight: 600 }}>const</span>{' '}
          <span style={{ color: '#3b82f6', fontWeight: 600 }}>developer</span> = &#123;
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>name:</span>{' '}
          <span style={{ color: '#10b981' }}>"Yash Arora"</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>role:</span>{' '}
          <span style={{ color: 'var(--color-primary)' }}>"Software Development Engineer (SDE)"</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>education:</span>{' '}
          <span style={{ color: '#10b981' }}>"B.Tech CSE @ PSIT Kanpur"</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>cgpa:</span>{' '}
          <span style={{ color: '#f59e0b' }}>7.9</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>dsaSolved:</span>{' '}
          <span style={{ color: '#10b981' }}>"500+ LeetCode & HackerRank"</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>primaryTech:</span> [
          <span style={{ color: '#06b6d4' }}>"Java"</span>,{' '}
          <span style={{ color: '#06b6d4' }}>"Spring Boot"</span>,{' '}
          <span style={{ color: '#06b6d4' }}>"React"</span>,{' '}
          <span style={{ color: '#06b6d4' }}>"Node.js"</span>,{' '}
          <span style={{ color: '#06b6d4' }}>"MySQL"</span>,{' '}
          <span style={{ color: '#06b6d4' }}>"C++"</span>],
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>status:</span>{' '}
          <span style={{ color: '#10b981' }}>"Ready for Engineering Roles 🚀"</span>
        </div>
        <div>&#125;;</div>
      </div>
    </div>
  );
}
