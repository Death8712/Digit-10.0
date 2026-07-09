import { useState, useEffect } from 'react';

export default function CountdownHero() {
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
    <div className="flex items-center gap-4 font-mono">
      {[
        { label: 'D', value: timeLeft.days },
        { label: 'H', value: timeLeft.hours },
        { label: 'M', value: timeLeft.minutes },
        { label: 'S', value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="flex items-end gap-1">
            <span className="text-2xl font-black text-white tabular-nums">
              {item.value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] text-neon-cyan/60 font-bold mb-1">{item.label}</span>
            {i < 3 && <span className="text-neon-cyan/20 ml-2">:</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
