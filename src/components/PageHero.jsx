export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="page-hero-copy">{text}</p>}
        <div className="wave-rule" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
