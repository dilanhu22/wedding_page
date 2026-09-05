import useLang from "../i18n/useLang";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div className="lang-toggle" role="group" aria-label={t.aria.language}>
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          className={lang === code ? "is-active" : ""}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
