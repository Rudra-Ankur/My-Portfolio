import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="wrap section">
      <h1 className="page-title">Skills</h1>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
