import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty">No projects found.</p>;
  }

  return (
    <ul className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </ul>
  );
}