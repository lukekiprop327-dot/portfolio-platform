# Personal Project Showcase App

A single page application built with React that lets users showcase their projects, add new ones dynamically, and search through them.

## Features

- View a list of projects on the landing page
- Add a new project using a form (title and description)
- Search projects by title with live filtering (case-insensitive)
- Form validation: empty submissions are ignored
- "No projects found" message when a search has no matches
- Responsive layout for desktop and mobile

## Tech Stack

- React (Vite)
- Plain CSS
- Vitest and React Testing Library for testing

## Component Tree

```
App                      (state: projects, searchTerm)
├── Header
├── ProjectForm          (props: onAddProject | local state: title, description)
└── section
    ├── SearchBar        (props: searchTerm, onSearchChange)
    └── ProjectList      (props: projects)
        └── ProjectCard  (props: title, description)
```

## State Management

- `projects` and `searchTerm` live in `App`, the nearest common parent of the components that use them.
- `filteredProjects` is derived from them on each render (it is not stored in state).
- The form fields (`title`, `description`) are local state inside `ProjectForm`.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/lukekiprop327-dot/portfolio-platform.git
cd portfolio-platform
npm install
```

### Run the app

```bash
npm run dev
```

Open the local URL printed in the terminal (usually http://localhost:5173).

### Run the tests

```bash
npm test
```

## Project Structure

```
src/
├── components/   # UI components
├── data/         # Initial sample projects
├── hooks/        # Custom hooks (reserved for future use)
├── styles/       # CSS
├── tests/        # Unit and integration tests
├── App.jsx
└── main.jsx
```

## Known Limitations

- Projects are stored in memory only, so they reset when the page is refreshed (there is no backend or local storage).
- Projects cannot be edited or deleted yet.
- No image upload: each project shows a placeholder thumbnail.

## Future Improvements

- Persist projects with localStorage or a backend API
- Edit and delete projects
- Image upload for project thumbnails

## Author

Luke Kiprop