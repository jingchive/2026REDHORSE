import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      // 2026년 1월 1일 00:00:00까지의 카운트다운
      const targetDate = new Date('2026-01-01T00:00:00');
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  const formatCountdown = () => {
    const { days, hours, minutes, seconds } = countdown;
    return `D-${days}, ${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <footer className="p-[15px] border-t border-[#E5D5D0] px-[5px] py-[15px]">
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-[#D4B8B3] text-[18px]">
          {formatTime(currentTime)}
        </span>
        <span className="text-[#E57373] underline underline-offset-4 text-[18px] font-bold">
          {formatCountdown()}
        </span>
      </div>
    </footer>
  );
}
