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
- `src/data/content.json` — home page content records (title, description, thumbnail, link text, and destination).
- `src/App.tsx` — page selection and theme state.
- `src/main.tsx` — application entry point.
- `index.html`, `about.html`, `form.html` — Vite entry points for the three published pages.

## Home page content

The home page reads `src/data/content.json`, a JSON file imported at build time by Vite. JSON is human-editable and works with GitHub Pages because the content is bundled into the static site; no server or API is required. Add or edit records using the existing fields: `id`, `title`, `description`, `image`, `linkText`, and `href`. Thumbnail images are displayed in a fixed 16:9 frame with `object-fit: cover`, so source images with different dimensions are cropped consistently.
