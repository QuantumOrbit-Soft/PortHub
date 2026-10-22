import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  // Relative asset paths support GitHub Pages project repositories.
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        about: resolve(projectRoot, 'about.html'),
        form: resolve(projectRoot, 'form.html'),
      },
    },
  },
})
