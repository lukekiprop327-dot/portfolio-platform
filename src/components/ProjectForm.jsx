import { useState } from "react";

export default function ProjectForm({ onAddProject }) {
  // Local form state: only this component needs it
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: ignore empty submissions
    if (!title.trim() || !description.trim()) return;

    onAddProject({ title: title.trim(), description: description.trim() });

    // Reset the form after adding
    setTitle("");
    setDescription("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}