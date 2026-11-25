import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="wrap section">
      <h1 className="page-title">Projects</h1>
      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} className={c === filter ? "chip on" : "chip"} aria-pressed={c === filter} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {shown.map((p) => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
}
