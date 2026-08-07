import { useEffect, useRef } from 'react';

export default function StarryBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; fillStyle: string; r: number; g: number; b: number }[] = [];

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        draw();
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

    let cachedGradient: CanvasGradient | null = null;
    const initStars = () => {
      cachedGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      cachedGradient.addColorStop(0, 'rgba(0, 255, 255, 0.03)');
      cachedGradient.addColorStop(0.5, 'rgba(128, 0, 128, 0.02)');
      cachedGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      stars = [];
      const isMobile = window.innerWidth < 768;
      const numStars = Math.min(isMobile ? 20 : 80, Math.floor((canvas.width * canvas.height) / 30000));
      
      for (let i = 0; i < numStars; i++) {
        const colorType = Math.random();
        let r, g, b;
        if (colorType > 0.8) {
          r = 0; g = 255; b = 255; // Cyan
        } else if (colorType > 0.7) {
          r = 255; g = 0; b = 255; // Magenta
        } else if (colorType > 0.6) {
          r = 100; g = 150; b = 255; // Blue-ish white
        } else {
          r = 255; g = 255; b = 255; // White
        }

        const alpha = Math.random() * 0.7 + 0.3;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          alpha,
          fillStyle: `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`,
          r, g, b
        });
      }
    };

    let lastFrameTime = 0;
    const isMobile = window.innerWidth < 768;
    const targetFps = isMobile ? 30 : 60;
    const fpsInterval = 1000 / targetFps;

    const draw = (nowTime = 0) => {
      if (!isVisible) return;

      animationFrameId = requestAnimationFrame(draw);

      const elapsed = nowTime - lastFrameTime;
      if (elapsed < fpsInterval) return;
      lastFrameTime = nowTime - (elapsed % fpsInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (cachedGradient) {
        ctx.fillStyle = cachedGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      const twinkle = Math.random() > 0.7;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        if (twinkle) {
          star.alpha += (Math.random() - 0.5) * 0.05;
          if (star.alpha < 0.2) star.alpha = 0.2;
          if (star.alpha > 0.9) star.alpha = 0.9;
          star.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${star.alpha.toFixed(2)})`;
        }

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

    window.addEventListener('resize', resize);
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
      className={className || "fixed inset-0 pointer-events-none z-0 opacity-60"}
    />
  );
}
