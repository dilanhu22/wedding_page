import { ExternalLink, Gift, Heart, MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import { externalLinks, media } from "../data";
import useLang from "../i18n/useLang";

export default function Gifts() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t.gifts.eyebrow}
        title={t.gifts.title}
        text={t.gifts.text}
      />
      <section className="section gift-section">
        <div className="shell gift-layout">
          <div className="gift-message">
            <div className="round-icon"><Gift /></div>
            <h2>{t.gifts.messageTitle}</h2>
            <p>{t.gifts.messageText}</p>
            <div className="gift-mailing-note">
              <MapPin aria-hidden="true" />
              <div>
                <p>{t.gifts.mailingText}</p>
                <address>
                  1319 Barkley Road<br />
                  McKeesport, PA 15133
                </address>
              </div>
            </div>
            <div className="gift-signoff">
              <Heart size={17} fill="currentColor" />
              {t.gifts.signoff}
            </div>
          </div>

          <div className="honeymoon-card">
            <p className="eyebrow">{t.gifts.fundsEyebrow}</p>
            <h2>{t.gifts.fundsTitle}</h2>
            <p>{t.gifts.fundsText}</p>
            <img
              className="gift-qr"
              src={media.giftQr}
              alt={t.gifts.qrAlt}
              width="325"
              height="377"
            />
            <a
              className="button button-primary"
              href={externalLinks.venmo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.gifts.cta} <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
