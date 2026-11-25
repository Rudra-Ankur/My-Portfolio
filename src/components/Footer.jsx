import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>{new Date().getFullYear()} Rudra Ankur</span>
        <span>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
