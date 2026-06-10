import { Clock, ExternalLink, MapPin, Navigation } from "lucide-react";
import CalendarButton from "../components/CalendarButton";
import PageHero from "../components/PageHero";
import { wedding } from "../data";

export default function Location() {
  return (
    <>
      <PageHero
        eyebrow="Where we will say I do"
        title="The Location"
        text="A warm sunset, the sound of the waves, and all our favorite people in one place."
      />
      <section className="section location-section">
        <div className="shell location-grid">
          <div className="location-photo">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=1600"
              alt="Romantic outdoor wedding by the coast"
            />
            <span className="location-pin"><MapPin /></span>
          </div>
          <div className="location-copy">
            <p className="eyebrow">Ceremony & reception</p>
            <h2>{wedding.venue}</h2>
            <p className="location-address">{wedding.address}</p>
            <div className="location-details">
              <div>
                <Clock />
                <span><small>Guest arrival</small>{wedding.time}</span>
              </div>
              <div>
                <Navigation />
                <span><small>Area</small>{wedding.city}</span>
              </div>
            </div>
            <p>
              The ceremony and reception will take place at the same venue.
              More details about transport and accommodation will be added
              here soon.
            </p>
            <div className="button-row left">
              <a className="button button-primary" href={wedding.mapUrl} target="_blank" rel="noreferrer">
                <ExternalLink size={18} />
                Open in Maps
              </a>
              <CalendarButton className="button button-ghost" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
