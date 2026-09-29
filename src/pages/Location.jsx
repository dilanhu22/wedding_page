import {
  Clock, Compass, Droplets, ExternalLink, Hotel, Luggage, MapPin,
  Navigation, ShieldCheck, Smartphone, UtensilsCrossed,
} from "lucide-react";
import CalendarButton from "../components/CalendarButton";
import PageHero from "../components/PageHero";
import { media, wedding } from "../data";
import useLang from "../i18n/useLang";

const infoIcons = [Smartphone, Compass, Droplets, ShieldCheck, Luggage];

export default function Location() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.location.eyebrow} title={t.location.title} text={t.location.text} />
      <section className="section venue-section">
        <div className="shell venue-intro">
          <div>
            <p className="eyebrow">{t.location.sectionEyebrow}</p>
            <h2>{wedding.venue}</h2>
            <p className="location-address">{wedding.address}</p>
          </div>
          <div className="venue-actions">
            <div className="location-details">
              <div><Clock /><span><small>{t.location.arrivalLabel}</small>{t.timeRange}</span></div>
              <div><Navigation /><span><small>{t.location.areaLabel}</small>{t.city}</span></div>
            </div>
            <p>{t.location.body}</p>
            <div className="button-row left">
              <a className="button button-primary" href={wedding.mapUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> {t.location.openMaps}</a>
              <a className="button button-ghost" href={wedding.hotelUrl} target="_blank" rel="noopener noreferrer"><Hotel size={18} /> {t.location.hotelSite} <ExternalLink size={15} /></a>
            </div>
            <div className="button-row left"><CalendarButton /></div>
          </div>
        </div>
      </section>
      <section className="hotel-media-section section">
        <div className="shell">
          <div className="section-heading center narrow">
            <p className="eyebrow">{t.location.galleryEyebrow}</p>
            <h2>{t.location.galleryTitle}</h2>
            <p className="lead">{t.location.galleryText}</p>
          </div>
          <div className="hotel-gallery">
            <figure className="hotel-gallery-main">
              <img src={media.hotelPhotos.aerial} alt={t.location.hotelPhotoAlts.aerial} loading="lazy" width="1200" height="800" />
              <figcaption>{t.location.hotelPhotoCaptions.aerial}</figcaption>
            </figure>
            <figure className="hotel-gallery-side hotel-gallery-side-top">
              <img src={media.hotelPhotos.terrace} alt={t.location.hotelPhotoAlts.terrace} loading="lazy" width="990" height="1161" />
              <figcaption>{t.location.hotelPhotoCaptions.terrace}</figcaption>
            </figure>
            <figure className="hotel-gallery-side hotel-gallery-side-bottom">
              <img src={media.hotelPhotos.room} alt={t.location.hotelPhotoAlts.room} loading="lazy" width="676" height="452" />
              <figcaption>{t.location.hotelPhotoCaptions.room}</figcaption>
            </figure>
          </div>
          <figure className="hotel-video">
            <video controls preload="metadata" aria-label={t.location.videoAlt}>
              <source src={media.hotelVideo} type="video/mp4" />{t.location.videoFallback}
            </video>
            <figcaption>{t.location.videoCaption}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section hotel-guide-section">
        <div className="shell">
          <div className="section-heading center narrow"><p className="eyebrow">{t.location.guideEyebrow}</p><h2>{t.location.guideTitle}</h2></div>
          <div className="info-card-grid">
            {t.location.infoGroups.map((group, index) => {
              const Icon = infoIcons[index];
              return <article className="info-card" key={group.title}><Icon aria-hidden="true" /><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>;
            })}
          </div>
          <div className="hotel-note"><UtensilsCrossed aria-hidden="true" /><p>{t.location.diningNote}</p></div>
        </div>
      </section>
    </>
  );
}
