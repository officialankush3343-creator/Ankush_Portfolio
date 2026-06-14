'use client';

import { useEffect, useRef } from 'react';

export default function Particles({ count = 60, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let raf;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };

    const COLORS = ['#7c5cff', '#00e0ff', '#ff5ec4', '#ffffff'];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        a: Math.random() * 0.5 + 0.3,
      }));
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const clearMouse = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Lines between near particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 110 * 110) {
            const a = (1 - d2 / (110 * 110)) * 0.18;
            ctx.strokeStyle = `rgba(180, 180, 255, ${a})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        // mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 110 * 110) {
          const f = (1 - dist2 / (110 * 110)) * 0.6;
          p.vx += (dx / Math.sqrt(dist2 + 0.01)) * f * 0.06;
          p.vy += (dy / Math.sqrt(dist2 + 0.01)) * f * 0.06;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        p.vx += (Math.random() - 0.5) * 0.015;
        p.vy += (Math.random() - 0.5) * 0.015;

        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      init();
    };

    resize();
    init();
    draw();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);
    window.addEventListener('mouseleave', clearMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', clearMouse);
    };
  }, [count]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
