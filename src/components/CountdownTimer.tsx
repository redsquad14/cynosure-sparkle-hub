import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-26T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-1 sm:gap-2 md:gap-4 justify-center font-times flex-wrap">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="countdown-box p-1 sm:p-2 md:p-4 text-center min-w-[40px] sm:min-w-[60px] md:min-w-[80px] flex-shrink-0">
          <div className="text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-gradient mb-0.5 sm:mb-1">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-[8px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;