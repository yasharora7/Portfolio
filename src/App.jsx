import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('cyan');
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync theme and accent attributes on <html> tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  // Scroll section observer
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Background Particles */}
      <ParticleCanvas />

      {/* Navigation Floating Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        accent={accent}
        setAccent={setAccent}
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {resumeOpen && (
        <ResumeModal
          onClose={() => setResumeOpen(false)}
        />
      )}
    </div>
  );
}
