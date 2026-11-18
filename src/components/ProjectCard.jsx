export default function ProjectCard({ title, description }) {
  return (
    <li className="project-card">
      <div className="thumb" aria-hidden="true">✕</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}