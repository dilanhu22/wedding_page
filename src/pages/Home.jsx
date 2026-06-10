import { ArrowDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import CalendarButton from "../components/CalendarButton";
import Countdown from "../components/Countdown";
import { wedding } from "../data";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-tint" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="hero-kicker">We are getting married</p>
          <h1>
            <span>{wedding.firstName}</span>
            <i>&</i>
            <span>{wedding.secondName}</span>
          </h1>
          <p className="hero-date">{wedding.date} · {wedding.city}</p>
          <a className="scroll-cue" href="#invitation" aria-label="View invitation">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section id="invitation" className="invitation section">
        <div className="shell narrow center">
          <p className="eyebrow">Together with our families</p>
          <h2>Meet us where the sky touches the sea</h2>
          <p className="lead">{wedding.welcome}</p>
          <div className="date-lockup">
            <span>Sunday</span>
            <strong>21</strong>
            <span>March · 2027</span>
          </div>
          <Countdown />
          <div className="button-row">
            <CalendarButton />
            <Link className="button button-ghost" to="/location">
              <MapPin size={18} />
              View location
            </Link>
          </div>
        </div>
      </section>

      <section className="home-story-preview section">
        <div className="shell split">
          <div className="organic-image preview-image">
            <img
              src="https://images.unsplash.com/photo-1760669346066-cdcc36756c8c?auto=format&fit=crop&q=85&w=1400"
              alt="A couple walking toward a seaside ceremony"
            />
          </div>
          <div className="split-copy">
            <p className="eyebrow">A little about us</p>
            <h2>One love, many adventures</h2>
            <p>
              From our first conversation to the promise of forever, every
              chapter has brought us closer to this sunlit celebration.
            </p>
            <Link className="text-link" to="/story">
              Read our story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-banner">
        <div className="shell center">
          <p className="script-line">Save the date</p>
          <h2>We cannot wait to celebrate with you</h2>
          <p>{wedding.date} · {wedding.time}</p>
        </div>
      </section>
    </>
  );
}
