import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { wedding } from "../data";

const links = [
  { to: "/", label: "Welcome" },
  { to: "/story", label: "Our Story" },
  { to: "/dress-code", label: "Dress Code" },
  { to: "/gifts", label: "Gifts" },
  { to: "/location", label: "Location" },
];

export default function Layout() {
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
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <NavLink to="/" className="brand" aria-label="Go to welcome page">
          <span>{wedding.firstName}</span>
          <Heart size={13} fill="currentColor" strokeWidth={1.5} />
          <span>{wedding.secondName}</span>
        </NavLink>

        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-mark">S <span>&</span> C</div>
        <p>Made with love for a beautiful day by the sea.</p>
        <small>{wedding.shortDate} · {wedding.city}</small>
      </footer>
    </div>
  );
}
