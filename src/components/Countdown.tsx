import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('August 21, 2026 09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-10">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item) => (
        <div key={item.label} className="glass w-24 h-24 md:w-32 md:h-32 rounded-2xl flex flex-col items-center justify-center border-[rgba(0,240,255,0.18)] group hover:border-neon-cyan/50 transition-colors duration-500">
          <span className="text-3xl md:text-5xl font-display font-black text-neon-cyan text-glow group-hover:scale-110 transition-transform duration-500">
            {item.value.toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-ice-blue mt-2">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
