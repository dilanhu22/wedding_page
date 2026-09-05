import { useEffect, useMemo, useState } from "react";
import { wedding } from "../data";
import useLang from "../i18n/useLang";

const weddingDate = new Date(wedding.isoStart);

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
  const { t } = useLang();
  const initial = useMemo(getTimeLeft, []);
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label={t.aria.countdown}>
      {Object.entries(time).map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{t.countdown[label]}</span>
        </div>
      ))}
    </div>
  );
}
