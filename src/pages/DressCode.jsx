import { Check, Shirt, Sparkles, Sun } from "lucide-react";
import PageHero from "../components/PageHero";

const palette = ["#F7A8D0", "#F4D8D0", "#E9DFD0", "#C2C0C2", "#A9B8AE"];

export default function DressCode() {
  return (
    <>
      <PageHero
        eyebrow="Seaside elegance"
        title="Dress Code"
        text="Romantic, polished, and comfortable enough to dance under the stars."
      />
      <section className="section">
        <div className="shell dress-grid">
          <div className="dress-visual">
            <img
              src="https://images.unsplash.com/photo-1569976088853-abf1c2cb282a?auto=format&fit=crop&q=85&w=1400"
              alt="Pastel dress and tropical bouquet on the beach"
            />
            <div className="dress-tag">Beach formal</div>
          </div>
          <div className="dress-copy">
            <p className="eyebrow">The look</p>
            <h2>Soft colors, flowing fabrics</h2>
            <p>
              Think linen suits, lightweight dresses, elevated separates, and
              romantic silhouettes. The ceremony will take place near the
              sand, so choose shoes that let you move comfortably.
            </p>
            <div className="tip-list">
              <div><Sun /><span>Light, breathable fabrics</span></div>
              <div><Shirt /><span>Beach formal or cocktail attire</span></div>
              <div><Sparkles /><span>Pastels and soft coastal tones</span></div>
              <div><Check /><span>Block heels, sandals, or loafers</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="palette-section section">
        <div className="shell center narrow">
          <p className="eyebrow">Color inspiration</p>
          <h2>Our coastal palette</h2>
          <p>These colors are inspiration, not a strict requirement.</p>
          <div className="color-palette">
            {palette.map((color) => (
              <div key={color} style={{ backgroundColor: color }}>
                <span>{color}</span>
              </div>
            ))}
          </div>
          <p className="gentle-note">
            Kindly reserve white and ivory for the couple.
          </p>
        </div>
      </section>
    </>
  );
}
