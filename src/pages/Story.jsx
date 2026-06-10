import PageHero from "../components/PageHero";
import { storyMoments } from "../data";

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="Every chapter led us here"
        title="Our Story"
        text="A few favorite memories from the beautiful journey we share."
      />
      <section className="section story-section">
        <div className="shell story-list">
          {storyMoments.map((moment, index) => (
            <article className={`story-moment ${index % 2 ? "reverse" : ""}`} key={moment.title}>
              <div className="story-photo-wrap">
                <span className="story-number">0{index + 1}</span>
                <img
                  className="story-photo"
                  src={moment.image}
                  alt={moment.title}
                  style={{ objectPosition: moment.position }}
                />
              </div>
              <div className="story-copy">
                <p className="eyebrow">{moment.year}</p>
                <h2>{moment.title}</h2>
                <p>{moment.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
