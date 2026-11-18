import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import { initialProjects } from "./data/initialProjects";
import "./styles/App.css";

export default function App() {
  // Shared state lives here, the nearest common parent
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  // Derived value (not state): projects matching the search term
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Adds a new project to the end of the list
  const handleAddProject = ({ title, description }) => {
    setProjects((prev) => [...prev, { id: Date.now(), title, description }]);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <ProjectForm onAddProject={handleAddProject} />
        <section className="card">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}