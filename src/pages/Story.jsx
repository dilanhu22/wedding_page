import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { storyPhotos } from "../data";
import useLang from "../i18n/useLang";

export default function Story() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta) =>
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + storyPhotos.length) % storyPhotos.length,
      ),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  return (
    <>
      <PageHero
        eyebrow={t.story.eyebrow}
        title={t.story.title}
        text={t.story.text}
      />
      <section className="section story-section">
        <div className="shell">
          <div className="photo-grid">
            {storyPhotos.map((photo, index) => (
              <button
                type="button"
                className={`photo-tile ${photo.wide ? "wide" : ""}`}
                key={photo.src}
                onClick={() => setOpenIndex(index)}
                aria-label={t.story.openPhoto}
              >
                <img
                  src={photo.src}
                  alt={t.story.photoAlt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label={t.story.closePhoto}>
            <X />
          </button>
          <button
            className="lightbox-nav prev"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label={t.story.prevPhoto}
          >
            <ChevronLeft />
          </button>
          <img
            src={storyPhotos[openIndex].src}
            alt={t.story.photoAlt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lightbox-nav next"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label={t.story.nextPhoto}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
