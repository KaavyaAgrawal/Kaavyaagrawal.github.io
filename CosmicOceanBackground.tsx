import React, { useEffect, useRef } from 'react';

const CosmicOceanBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cosmic particles (stars)
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
    }> = [];

    // Ocean particles (bioluminescent plankton)
    const plankton: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    // Floating jellyfish-like orbs
    const jellyfish: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulsePhase: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Create bioluminescent plankton
    for (let i = 0; i < 80; i++) {
      plankton.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        hue: Math.random() * 60 + 160, // Blue-green range
      });
    }

    // Create jellyfish orbs
    for (let i = 0; i < 12; i++) {
      jellyfish.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 150 + 50,
        opacity: Math.random() * 0.15 + 0.05,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const animate = () => {
      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000011');
      gradient.addColorStop(0.3, '#001122');
      gradient.addColorStop(0.7, '#002244');
      gradient.addColorStop(1, '#000011');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 100) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${star.opacity * twinkle})`;
        ctx.fill();
        
        // Add star glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00d4ff';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw and animate bioluminescent plankton
      plankton.forEach((particle) => {
        // Update position with gentle drift
        particle.x += particle.vx + Math.sin(time + particle.x * 0.01) * 0.1;
        particle.y += particle.vy + Math.cos(time + particle.y * 0.01) * 0.1;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        const glowIntensity = Math.sin(time * 2 + particle.x * 0.01) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity * glowIntensity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw jellyfish orbs with pulsing effect
      jellyfish.forEach((jelly) => {
        // Update position with floating motion
        jelly.x += jelly.vx + Math.sin(time + jelly.pulsePhase) * 0.2;
        jelly.y += jelly.vy + Math.cos(time + jelly.pulsePhase * 0.7) * 0.15;

        // Wrap around edges
        if (jelly.x < -jelly.size) jelly.x = canvas.width + jelly.size;
        if (jelly.x > canvas.width + jelly.size) jelly.x = -jelly.size;
        if (jelly.y < -jelly.size) jelly.y = canvas.height + jelly.size;
        if (jelly.y > canvas.height + jelly.size) jelly.y = -jelly.size;

        // Create pulsing gradient
        const pulse = Math.sin(time * 2 + jelly.pulsePhase) * 0.5 + 0.5;
        const gradient = ctx.createRadialGradient(
          jelly.x, jelly.y, 0,
          jelly.x, jelly.y, jelly.size * (0.8 + pulse * 0.4)
        );
        
        gradient.addColorStop(0, `rgba(0, 255, 170, ${jelly.opacity * (0.8 + pulse * 0.4)})`);
        gradient.addColorStop(0.3, `rgba(0, 212, 255, ${jelly.opacity * 0.6})`);
        gradient.addColorStop(0.7, `rgba(99, 102, 241, ${jelly.opacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(jelly.x, jelly.y, jelly.size * (0.8 + pulse * 0.4), 0, Math.PI * 2);
        ctx.fill();
      });

      // Add flowing light rays
      ctx.save();
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 3; i++) {
        const rayX = (time * 50 + i * canvas.width / 3) % (canvas.width + 200) - 100;
        const gradient = ctx.createLinearGradient(rayX, 0, rayX + 100, canvas.height);
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 255, 170, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(rayX, 0, 100, canvas.height);
      }
      ctx.restore();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CosmicOceanBackground;