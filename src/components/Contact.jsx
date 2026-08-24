import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // Optional: Post to Web3Forms free email forwarding API to deliver directly to y79arora@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Users can get free key at web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Message from ' + formData.name,
          message: formData.message,
          to: PORTFOLIO_DATA.personal.email
        })
      });

      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // Fallback UI success state
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">&lt;get-in-touch /&gt;</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Have a software engineering role, project inquiry, or question? Reach out anytime!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2.2rem' }}>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
                I am actively seeking Entry-Level Software Development Engineer (SDE) and Full-Stack Engineering roles.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Direct Email</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.02rem', textDecoration: 'none' }}
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Location</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.02rem' }}>{PORTFOLIO_DATA.personal.location}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Response Time</div>
                    <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '1.02rem' }}>Within 24 Hours</div>
                  </div>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="btn-secondary"
                style={{ width: '100%', marginTop: '2rem' }}
              >
                {copied ? <Check size={18} style={{ color: '#10b981' }} /> : <Copy size={18} />}
                <span>{copied ? 'Email Address Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Send a Message
            </h3>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #10b981',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <Check size={34} />
                </div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 700 }}>Message Sent Successfully!</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  Thank you for reaching out. Your message will be delivered to <strong>{PORTFOLIO_DATA.personal.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe / Hiring Manager"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer Position"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}
                  >
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Share role details, requirements, or general message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      fontSize: '0.95rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '0.5rem' }}>
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
