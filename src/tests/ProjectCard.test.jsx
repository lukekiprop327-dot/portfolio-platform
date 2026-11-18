import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

test("ProjectCard displays title and description", () => {
  render(
    <ul>
      <ProjectCard title="Test Title" description="Test Description" />
    </ul>
  );
  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});