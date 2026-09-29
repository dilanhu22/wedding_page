import { Car, ExternalLink, Hotel, Plane, ShieldCheck, TriangleAlert } from "lucide-react";
import PageHero from "../components/PageHero";
import { externalLinks } from "../data";
import useLang from "../i18n/useLang";

export default function Travel() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.travel.eyebrow} title={t.travel.title} text={t.travel.text} />
      <section className="section travel-section">
        <div className="shell travel-grid">
          <article className="travel-card">
            <div className="round-icon"><Plane /></div>
            <p className="eyebrow">{t.travel.airportEyebrow}</p><h2>{t.travel.airportTitle}</h2>
            <ul>{t.travel.airportTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
            <a className="button button-primary" href={externalLinks.transportation} target="_blank" rel="noopener noreferrer">{t.travel.transportCta} <ExternalLink size={17} /></a>
            <div className="travel-callout"><Hotel /><span>{t.travel.hotelPickup}</span></div>
          </article>
          <article className="travel-card">
            <div className="round-icon"><Car /></div>
            <p className="eyebrow">{t.travel.rentalEyebrow}</p><h2>{t.travel.rentalTitle}</h2>
            <ul>{t.travel.rentalTips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
            <div className="company-box trusted"><ShieldCheck aria-hidden="true" /><div><h3>{t.travel.trustedTitle}</h3><p><strong>{t.travel.trustedUs}</strong></p><p>{t.travel.trustedLocal}</p></div></div>
            <div className="company-box avoid-companies"><TriangleAlert aria-hidden="true" /><div><h3>{t.travel.avoidTitle}</h3><p>{t.travel.avoidCompanies}</p></div></div>
          </article>
        </div>
      </section>
    </>
  );
}
