import { useEffect, useMemo, useState } from "react";

const weddingDate = new Date("2027-03-21T16:30:00-06:00");

function getTimeLeft() {
  const difference = Math.max(0, weddingDate.getTime() - Date.now());
  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const initial = useMemo(getTimeLeft, []);
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to our wedding">
      {Object.entries(time).map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
