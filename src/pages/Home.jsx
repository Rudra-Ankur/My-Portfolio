import { Link } from "react-router-dom";
import KMapDemo from "../components/KMapDemo.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";
import { profile } from "../data/profile.js";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <div>
          <h1>I'm Rudra Ankur. I build software that does one job well.</h1>
          <p className="lead">
            First-year B.Tech Computer Science student at DES Pune University. I work in Python and
            JavaScript, and I'm learning C and React.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/projects">See my projects</Link>
            <a className="btn" href={profile.resume} download>Download resume</a>
          </div>
        </div>
        <KMapDemo />
      </section>

      <section className="wrap section">
        <h2>Recent projects</h2>
        <div className="grid">
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>
    </>
  );
}
