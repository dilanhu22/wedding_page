import { Check, Shirt, Sparkles, Sun } from "lucide-react";
import PageHero from "../components/PageHero";
import { featuredPhotos } from "../data";
import useLang from "../i18n/useLang";

const palette = ["#F7A8D0", "#F4D8D0", "#E9DFD0", "#C2C0C2", "#A9B8AE"];
const tipIcons = [Sun, Shirt, Sparkles, Check];

export default function DressCode() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t.dressCode.eyebrow}
        title={t.dressCode.title}
        text={t.dressCode.text}
      />
      <section className="section">
        <div className="shell dress-grid">
          <div className="dress-visual">
            <img src={featuredPhotos.dressCode} alt={t.dressCode.imageAlt} />
            <div className="dress-tag">{t.dressCode.tag}</div>
          </div>
          <div className="dress-copy">
            <p className="eyebrow">{t.dressCode.lookEyebrow}</p>
            <h2>{t.dressCode.lookTitle}</h2>
            <p>{t.dressCode.lookText}</p>
            <div className="tip-list">
              {t.dressCode.tips.map((tip, index) => {
                const Icon = tipIcons[index];
                return (
                  <div key={tip}>
                    <Icon />
                    <span>{tip}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="palette-section section">
        <div className="shell center narrow">
          <p className="eyebrow">{t.dressCode.paletteEyebrow}</p>
          <h2>{t.dressCode.paletteTitle}</h2>
          <p>{t.dressCode.paletteText}</p>
          <div className="color-palette">
            {palette.map((color) => (
              <div key={color} style={{ backgroundColor: color }}>
                <span>{color}</span>
              </div>
            ))}
          </div>
          <p className="gentle-note">{t.dressCode.gentleNote}</p>
        </div>
      </section>
    </>
  );
}
