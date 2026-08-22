import { useEffect, useRef } from 'react';

export default function StarryBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; fillStyle: string; r: number; g: number; b: number }[] = [];

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastFrameTime = performance.now();
        draw(lastFrameTime);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    }, { threshold: 0.01 });

    observer.observe(canvas);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const isMobile = window.innerWidth < 768;
      const numStars = isMobile ? 18 : 45;
      
      for (let i = 0; i < numStars; i++) {
        const colorType = Math.random();
        let r, g, b;
        if (colorType > 0.8) {
          r = 0; g = 240; b = 255; // Cyan
        } else if (colorType > 0.65) {
          r = 255; g = 0; b = 255; // Magenta
        } else if (colorType > 0.5) {
          r = 147; g = 197; b = 253; // Ice blue
        } else {
          r = 255; g = 255; b = 255; // White
        }

        const alpha = Math.random() * 0.6 + 0.2;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.4,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          alpha,
          fillStyle: `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`,
          r, g, b
        });
      }
    };

    let lastFrameTime = 0;
    const targetFps = 45;
    const fpsInterval = 1000 / targetFps;

    const draw = (nowTime = 0) => {
      if (!isVisible) return;

      animationFrameId = requestAnimationFrame(draw);

      const elapsed = nowTime - lastFrameTime;
      if (elapsed < fpsInterval) return;
      lastFrameTime = nowTime - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        ctx.fillStyle = star.fillStyle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      }
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();
    draw();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className || "fixed inset-0 pointer-events-none z-0 opacity-50 will-change-transform"}
    />
  );
}
