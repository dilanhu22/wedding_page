import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { wedding } from "../data";
import useLang from "../i18n/useLang";

const links = [
  { to: "/", key: "home" },
  { to: "/story", key: "story" },
  { to: "/dress-code", key: "dressCode" },
  { to: "/gifts", key: "gifts" },
  { to: "/location", key: "location" },
  { to: "/travel", key: "travel" },
  { to: "/activities", key: "activities" },
];

export default function Layout() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell">
      <header
        className={`site-header ${location.pathname !== "/" ? "is-internal" : ""} ${scrolled ? "is-scrolled" : ""}`}
      >
        <NavLink to="/" className="brand" aria-label={t.aria.goHome}>
          <span>{wedding.firstName}</span>
          <Heart size={13} fill="currentColor" strokeWidth={1.5} />
          <span>{wedding.secondName}</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t.aria.closeNav : t.aria.openNav}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label={t.aria.mainNav}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t.nav[link.key]}
            </NavLink>
          ))}
          <div className="lang-slot">
            <LanguageToggle />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-mark">S <span>&</span> C</div>
        <p>{t.footer.made}</p>
        <small>{t.shortDate} · {t.city}</small>
      </footer>
    </div>
  );
}
