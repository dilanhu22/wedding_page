import { Clock, ExternalLink, Hotel, MapPin, Navigation } from "lucide-react";
import CalendarButton from "../components/CalendarButton";
import PageHero from "../components/PageHero";
import { featuredPhotos, wedding } from "../data";
import useLang from "../i18n/useLang";

export default function Location() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t.location.eyebrow}
        title={t.location.title}
        text={t.location.text}
      />
      <section className="section location-section">
        <div className="shell location-grid">
          <div className="location-photo">
            <img src={featuredPhotos.location} alt={t.location.photoAlt} />
            <span className="location-pin"><MapPin /></span>
          </div>
          <div className="location-copy">
            <p className="eyebrow">{t.location.sectionEyebrow}</p>
            <h2>{wedding.venue}</h2>
            <p className="location-address">{wedding.address}</p>
            <div className="location-details">
              <div>
                <Clock />
                <span><small>{t.location.arrivalLabel}</small>{t.timeRange}</span>
              </div>
              <div>
                <Navigation />
                <span><small>{t.location.areaLabel}</small>{t.city}</span>
              </div>
            </div>
            <p>{t.location.body}</p>
            <div className="button-row left">
              <a className="button button-primary" href={wedding.mapUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                {t.location.openMaps}
              </a>
              <a className="button button-ghost" href={wedding.hotelUrl} target="_blank" rel="noreferrer">
                <Hotel size={18} />
                {t.location.hotelSite}
              </a>
            </div>
            <div className="button-row left">
              <CalendarButton className="button button-ghost" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
