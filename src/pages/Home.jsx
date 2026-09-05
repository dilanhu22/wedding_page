import { ArrowDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import CalendarButton from "../components/CalendarButton";
import Countdown from "../components/Countdown";
import { featuredPhotos, wedding } from "../data";
import useLang from "../i18n/useLang";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <section className="home-hero">
        <div
          className="hero-photo"
          style={{ backgroundImage: `url(${featuredPhotos.hero})` }}
          role="img"
          aria-label={t.home.heroAlt}
        />
        <div className="hero-tint" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="hero-kicker">{t.home.kicker}</p>
          <h1>
            <span>{wedding.firstName}</span>
            <i>&</i>
            <span>{wedding.secondName}</span>
          </h1>
          <p className="hero-date">{t.dateLong} · {t.city}</p>
          <a className="scroll-cue" href="#invitation" aria-label={t.aria.viewInvitation}>
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section id="invitation" className="invitation section">
        <div className="shell narrow center">
          <p className="eyebrow">{t.home.invitationEyebrow}</p>
          <h2>{t.home.invitationTitle}</h2>
          <p className="lead">{t.home.welcome}</p>
          <div className="date-lockup">
            <span>{t.lockup.weekday}</span>
            <strong>{t.lockup.day}</strong>
            <span>{t.lockup.monthYear}</span>
          </div>
          <Countdown />
          <div className="button-row">
            <CalendarButton />
            <Link className="button button-ghost" to="/location">
              <MapPin size={18} />
              {t.home.viewLocation}
            </Link>
          </div>
        </div>
      </section>

      <section className="home-story-preview section">
        <div className="shell split">
          <div className="organic-image preview-image">
            <img src={featuredPhotos.storyPreview} alt={t.home.previewAlt} />
          </div>
          <div className="split-copy">
            <p className="eyebrow">{t.home.previewEyebrow}</p>
            <h2>{t.home.previewTitle}</h2>
            <p>{t.home.previewText}</p>
            <Link className="text-link" to="/story">
              {t.home.previewLink} <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="closing-banner"
        style={{ "--closing-photo": `url(${featuredPhotos.closing})` }}
      >
        <div className="shell center">
          <p className="script-line">{t.home.closingScript}</p>
          <h2>{t.home.closingTitle}</h2>
          <p>{t.dateLong} · {t.timeRange}</p>
        </div>
      </section>
    </>
  );
}
