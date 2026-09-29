import {
  Ban,
  BriefcaseBusiness,
  CircleOff,
  Footprints,
  Shirt,
  Sparkles,
  Sun,
  Waves,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { media } from "../data";
import useLang from "../i18n/useLang";

const palette = [
  { name: "White Blush", color: "#FAF2F1" },
  { name: "Bright Pink", color: "#E95A91" },
  { name: "Soft Pink", color: "#EFA5C2" },
  { name: "Dusty Pink", color: "#CFA29E" },
  { name: "Light Grey", color: "#C9CBC8" },
  { name: "Medium Grey", color: "#777876" },
];

const attireIcons = [BriefcaseBusiness, Sparkles];
const avoidIcons = [CircleOff, Shirt, BriefcaseBusiness, Footprints, Footprints, Waves, Sun];

export default function DressCode() {
  const { t } = useLang();

  return (
    <>
      <PageHero eyebrow={t.dressCode.eyebrow} title={t.dressCode.title} text={t.dressCode.text} />
      <section className="section attire-section">
        <div className="shell">
          <div className="section-heading center narrow">
            <p className="eyebrow">{t.dressCode.lookEyebrow}</p>
            <h2>{t.dressCode.lookTitle}</h2>
            <p className="lead">{t.dressCode.lookText}</p>
          </div>
          <div className="attire-grid">
            {t.dressCode.attire.map((item, index) => {
              const Icon = attireIcons[index];
              return (
                <article className="attire-card" key={item.title}>
                  <div className={`attire-image attire-image-${index + 1}`}>
                    <img src={media.attire[index]} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="attire-copy">
                    <Icon aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="palette-section section">
        <div className="shell center">
          <p className="eyebrow">{t.dressCode.paletteEyebrow}</p>
          <h2>{t.dressCode.paletteTitle}</h2>
          <p className="lead">{t.dressCode.paletteText}</p>
          <div className="color-palette" role="list" aria-label={t.dressCode.paletteAria}>
            {palette.map(({ name, color }) => (
              <div className="color-swatch" key={name} role="listitem">
                <span className="swatch-circle" style={{ backgroundColor: color }} aria-hidden="true" />
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section avoid-section">
        <div className="shell center">
          <div className="avoid-heading">
            <Ban aria-hidden="true" />
            <p className="eyebrow">{t.dressCode.avoidEyebrow}</p>
            <h2>{t.dressCode.avoidTitle}</h2>
            <p>{t.dressCode.avoidText}</p>
          </div>
          <div className="avoid-grid">
            {t.dressCode.avoidItems.map((item, index) => {
              const Icon = avoidIcons[index];
              return <div className="avoid-card" key={item}><Icon aria-hidden="true" /><span>{item}</span></div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
