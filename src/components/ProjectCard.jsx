// Props: the parent passes one project object in.
export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tags" aria-label="Technologies used">
        {project.tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <a href={project.github} target="_blank" rel="noreferrer">View code on GitHub</a>
    </article>
  );
}
