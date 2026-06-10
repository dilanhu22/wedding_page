import { CalendarPlus } from "lucide-react";
import { wedding } from "../data";

export default function CalendarButton({ className = "button button-primary" }) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${wedding.couple}'s Wedding`,
    dates: `${wedding.calendar.start}/${wedding.calendar.end}`,
    details: wedding.welcome,
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
      Add to calendar
    </a>
  );
}
