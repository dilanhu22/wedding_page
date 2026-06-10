import { Check, Copy, Gift, Heart } from "lucide-react";
import { useState } from "react";
import PageHero from "../components/PageHero";
import { bankDetails } from "../data";

const rows = [
  ["Account name", bankDetails.accountName],
  ["Bank", bankDetails.bankName],
  ["Account type", bankDetails.accountType],
  ["Account number", bankDetails.accountNumber],
  ["IBAN", bankDetails.iban],
  ["SWIFT / BIC", bankDetails.swift],
  ["Currency", bankDetails.currency],
  ["Reference", bankDetails.reference],
];

export default function Gifts() {
  const [copied, setCopied] = useState("");

  async function copyValue(label, value) {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(""), 1800);
  }

  return (
    <>
      <PageHero
        eyebrow="Your presence is the greatest gift"
        title="Gift & Bank Transfer"
        text="For those who have asked, here are the details for a contribution toward our next adventure."
      />
      <section className="section gift-section">
        <div className="shell gift-layout">
          <div className="gift-message">
            <div className="round-icon"><Gift /></div>
            <h2>Celebrating together is all we need</h2>
            <p>
              We feel incredibly lucky to share this day with you. If you would
              like to give a gift, a contribution to our future plans would be
              warmly appreciated, but never expected.
            </p>
            <div className="gift-signoff">
              <Heart size={17} fill="currentColor" />
              With love, Shanty & Chris
            </div>
          </div>

          <div className="bank-card">
            <div className="bank-card-heading">
              <div>
                <p className="eyebrow">Transfer details</p>
                <h2>Bank information</h2>
              </div>
              <span className="secure-pill">Temporary data</span>
            </div>
            <div className="bank-rows">
              {rows.map(([label, value]) => (
                <div className="bank-row" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                  <button onClick={() => copyValue(label, value)} aria-label={`Copy ${label}`}>
                    {copied === label ? <Check /> : <Copy />}
                    <span>{copied === label ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              ))}
            </div>
            <p className="bank-note">
              Please include your name in the transfer reference so we can
              thank you properly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
