import { CalendarPlus } from "lucide-react";
import { wedding } from "../data";
import useLang from "../i18n/useLang";

export default function CalendarButton({ className = "button button-primary" }) {
  const { t } = useLang();

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: t.calendar.eventTitle,
    dates: `${wedding.calendar.start}/${wedding.calendar.end}`,
    details: t.home.welcome,
    location: `${wedding.venue}, ${wedding.address}`,
  });

  return (
    <a
      className={className}
      href={`https://calendar.google.com/calendar/render?${params}`}
      target="_blank"
      rel="noreferrer"
    >
      <CalendarPlus size={18} />
      {t.calendar.button}
    </a>
  );
}
