import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, onToggle }) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <NavLink to="/" className="brand">Rudra Ankur</NavLink>
        <nav aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <button className="theme-btn" onClick={onToggle} aria-label={`Switch to ${next} mode`}>
            {next === "dark" ? "Dark mode" : "Light mode"}
          </button>
        </nav>
      </div>
    </header>
  );
}
