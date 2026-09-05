import { Check, Copy, Gift, Heart } from "lucide-react";
import { useState } from "react";
import PageHero from "../components/PageHero";
import { bankDetails } from "../data";
import useLang from "../i18n/useLang";

const fieldOrder = [
  "accountName",
  "bankName",
  "accountType",
  "accountNumber",
  "iban",
  "swift",
  "currency",
  "reference",
];

export default function Gifts() {
  const { t } = useLang();
  const [copied, setCopied] = useState("");

  async function copyValue(field, value) {
    await navigator.clipboard.writeText(value);
    setCopied(field);
    window.setTimeout(() => setCopied(""), 1800);
  }

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
            <div className="gift-signoff">
              <Heart size={17} fill="currentColor" />
              {t.gifts.signoff}
            </div>
          </div>

          <div className="bank-card">
            <div className="bank-card-heading">
              <div>
                <p className="eyebrow">{t.gifts.transferEyebrow}</p>
                <h2>{t.gifts.bankTitle}</h2>
              </div>
              <span className="secure-pill">{t.gifts.temporaryPill}</span>
            </div>
            <p className="bank-pending">{t.gifts.pending}</p>
            <div className="bank-rows">
              {fieldOrder.map((field) => (
                <div className="bank-row" key={field}>
                  <div>
                    <span>{t.gifts.fields[field]}</span>
                    <strong>{bankDetails[field]}</strong>
                  </div>
                  <button
                    onClick={() => copyValue(field, bankDetails[field])}
                    aria-label={`${t.gifts.copyAria} ${t.gifts.fields[field]}`}
                  >
                    {copied === field ? <Check /> : <Copy />}
                    <span>{copied === field ? t.gifts.copied : t.gifts.copy}</span>
                  </button>
                </div>
              ))}
            </div>
            <p className="bank-note">{t.gifts.note}</p>
          </div>
        </div>
      </section>
    </>
  );
}
