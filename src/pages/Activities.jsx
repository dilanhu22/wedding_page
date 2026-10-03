import { CalendarDays, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import { media } from "../data";
import useLang from "../i18n/useLang";

export default function Activities() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.activities.eyebrow} title={t.activities.title} text={t.activities.text} />
      <section className="section events-section">
        <div className="shell">
          <div className="section-heading center narrow"><p className="eyebrow">{t.activities.eventsEyebrow}</p><h2>{t.activities.eventsTitle}</h2></div>
          <div className="event-grid">
            {t.activities.events.map((event, index) => (
              <article className={`event-card event-card-${index + 1}`} key={event.day}>
                <div className="event-media">
                  <img src={media.activities[index]} alt={event.alt} loading="lazy" />
                </div>
                <div className="event-copy"><span className="event-day">{event.day}</span><h3>{event.name}</h3>{event.theme ? <p><Sparkles size={16} aria-hidden="true" /> {event.theme}</p> : null}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section coming-soon-section">
        <div className="shell narrow center coming-soon-card"><CalendarDays aria-hidden="true" /><p className="eyebrow">{t.activities.exploreEyebrow}</p><h2>{t.activities.exploreTitle}</h2><p className="lead">{t.activities.exploreText}</p><span className="coming-soon-pill">{t.activities.comingSoon}</span></div>
      </section>
    </>
  );
}
