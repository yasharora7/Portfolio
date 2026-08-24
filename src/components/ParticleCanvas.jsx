import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas({ accentColor }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle pool setup
    const particleCount = Math.min(Math.floor(window.innerWidth / 16), 85);
    const particles = [];
    const glyphs = ['0', '1', '{ }', '</>', '=>', ';', 'Java', 'SDE', 'API'];
    const floatingGlyphs = [];

    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle Object
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 1;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.density = Math.random() * 22 + 6;
      }

      draw() {
        ctx.fillStyle = accentColor || 'rgba(6, 182, 212, 0.75)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density * 0.25;
            const directionY = forceDirectionY * force * this.density * 0.25;

            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    // Floating Code Glyph Object
    class CodeGlyph {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.text = glyphs[Math.floor(Math.random() * glyphs.length)];
        this.size = Math.floor(Math.random() * 6) + 11;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      draw() {
        ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
        ctx.font = `${this.size}px 'Fira Code', monospace`;
        ctx.fillText(this.text, this.x, this.y);
      }

      update() {
        this.y -= this.speedY;
        if (this.y < -20) {
          this.y = canvas.height + 20;
          this.x = Math.random() * canvas.width;
        }
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 22; i++) {
      floatingGlyphs.push(new CodeGlyph());
    }

    const connectParticles = () => {
      const maxDist = 120;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.25})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating background glyphs
      for (let i = 0; i < floatingGlyphs.length; i++) {
        floatingGlyphs[i].draw();
        floatingGlyphs[i].update();
      }

      // Draw particle constellation
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [accentColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75
      }}
    />
  );
}
