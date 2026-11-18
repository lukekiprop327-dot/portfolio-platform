import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Portfolio App", () => {
  test("renders the header and initial projects", () => {
    render(<App />);
    expect(
      screen.getByText("Personal Project Showcase App")
    ).toBeInTheDocument();
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Project 3")).toBeInTheDocument();
  });

  test("adds a new project through the form", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Title"), "My New App");
    await user.type(screen.getByLabelText("Description"), "A cool thing");
    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(screen.getByText("My New App")).toBeInTheDocument();
    expect(screen.getByText("A cool thing")).toBeInTheDocument();
  });

  test("clears the form after submitting", async () => {
    const user = userEvent.setup();
    render(<App />);

    const titleInput = screen.getByLabelText("Title");
    await user.type(titleInput, "Temp");
    await user.type(screen.getByLabelText("Description"), "Temp desc");
    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(titleInput).toHaveValue("");
  });

  test("does not add a project when fields are empty", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Add" }));

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  test("filters projects by search term", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByPlaceholderText("Search Projects"),
      "Project 2"
    );

    expect(screen.queryByText("Project 1")).not.toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.queryByText("Project 3")).not.toBeInTheDocument();
  });

  test("search is case-insensitive", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByPlaceholderText("Search Projects"),
      "project 1"
    );

    expect(screen.getByText("Project 1")).toBeInTheDocument();
  });

  test("shows empty message when nothing matches", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByPlaceholderText("Search Projects"), "zzz");

    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });
});