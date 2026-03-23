# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite HMR)
npm run build     # Production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** React 19 + Vite + Tailwind CSS + Framer Motion + React Router DOM 7

**Entry point:** `main.jsx` → `App.jsx` → `routes/AppRoutes.jsx`

**Layout wrapper** (`Layout/layout.jsx`) renders Navbar + Footer around all pages via `<Outlet>`.

**Routes:**
- `/` → `Pages/Homepage.jsx`
- `/about` → `Pages/About.jsx`
- `/projects` → `Pages/Projects.jsx`
- `/contact` → `Pages/Contact.jsx`

**State:** Local `useState` only — no global state management.

**Animations:** Framer Motion `whileInView` for scroll-based animations, `whileHover` for interactive cards.

**Contact form:** Integrates EmailJS (`emailjs-com`) — service/template IDs are hardcoded in `Contact.jsx`.

**Deployment:** Vercel SPA rewrite configured in `vercel.json` (all routes → `index.html`).

## Conventions

- Tailwind utility classes for all styling — no separate CSS files beyond `index.css` (Tailwind directives only).
- Reusable card components (`ProductBannerCard`, `ProjectCard`) use modal dialogs for expanded details via local state.
- Images live in `src/assets/` as PNG or WebP.
- Responsive breakpoints follow Tailwind defaults (`sm`, `md`, `lg`).
