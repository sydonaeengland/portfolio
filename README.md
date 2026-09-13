# Sydonae England — Portfolio

Personal portfolio site built with React and Vite, deployed to GitHub Pages.

## Live site

[sydonaeengland.github.io/portfolio](https://sydonaeengland.github.io/portfolio)

## Features

- **Hero, About, Tech Stack, Journey (experience timeline), Projects, Achievements & Certifications, Contact** — the full one-page portfolio flow
- **Project case studies** — a dedicated projects listing and detail page per project (`/projects`, `/projects/:id`)
- **Contact form** powered by EmailJS, no backend required
- **Light/dark theme toggle** with a flicker-free transition and a preference saved to `localStorage`
- **Terminal-style loading screen** on first load
- **Maintenance mode** — a `MAINTENANCE_MODE` flag in `App.jsx` swaps the whole site for a maintenance page while it's being worked on
- **Custom 404 page** for unknown routes
- Accessibility basics: skip link, `prefers-reduced-motion` support, keyboard-navigable nav and cards

## Stack

- React + Vite
- Framer Motion
- React Router (`HashRouter`, since GitHub Pages doesn't support server-side routing)
- EmailJS for the contact form
- Deployed via GitHub Actions → GitHub Pages

## Project structure

```
src/
├─ components/   # Reusable page sections (Hero, About, Projects, Navbar, Terminal, ...)
├─ pages/        # Routed pages (ProjectsPage, ProjectDetailPage, NotFoundPage)
├─ data/         # Static content (project data, etc.)
├─ hooks/        # Shared React hooks
├─ styles/       # Component-scoped stylesheets
└─ assets/       # Images and static files
```

## Running locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

The `dist/` folder is automatically deployed to GitHub Pages on every push to `main`.
