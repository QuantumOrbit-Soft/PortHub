# PortHub

A multipage React and TypeScript application with a shadcn/ui-inspired design, built for static hosting on GitHub Pages.

## Development

```sh
npm install
npm run dev
```

## Build and deployment

```sh
npm run build
npm run preview
```

The build generates `dist/` with `index.html`, `about.html`, and `form.html`. The GitHub Actions workflow builds the site and publishes the contents of `dist/` to GitHub Pages. Vite uses relative asset paths to support both custom domains and project repositories.

The light/dark theme preference is shared between pages through `localStorage`. If browser storage is unavailable, theme switching still works on the current page.

## Project structure

- `src/components/` — shared header, footer, and page-card components.
- `src/pages/` — Home, About, and Send Link page components.
- `src/App.tsx` — page selection and theme state.
- `src/main.tsx` — application entry point.
- `index.html`, `about.html`, `form.html` — Vite entry points for the three published pages.
