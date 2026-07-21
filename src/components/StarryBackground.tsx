import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function StarryBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; r: number; g: number; b: number }[] = [];

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
      const numStars = Math.floor((canvas.width * canvas.height) / 20000); // Adjust density here
      
      for (let i = 0; i < numStars; i++) {
        // Randomly pick a color index: 0=cyan, 1=magenta, 2=white
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

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.1, // Star size
          vx: (Math.random() - 0.5) * 0.2, // Very slow movement
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random(),
          r, g, b
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Use cached gradient
      if (cachedGradient) {
        ctx.fillStyle = cachedGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Twinkle occasionally, not every frame to save computation
      const twinkle = Math.random() > 0.5;

      stars.forEach(star => {
        if (twinkle) {
            star.alpha += (Math.random() - 0.5) * 0.05;
            if (star.alpha < 0.1) star.alpha = 0.1;
            if (star.alpha > 1) star.alpha = 1;
        }

        ctx.fillStyle = `rgba(${star.r}, ${star.g}, ${star.b}, ${star.alpha.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move stars
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize(); // Initial setup
    draw();   // Start animation loop

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className || "fixed inset-0 pointer-events-none z-0 opacity-60"}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
