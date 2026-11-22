import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base: the built site works at any URL path, so the GitHub repo
  // can have any name (e.g. username.github.io/portofolio-lala/).
  base: './',
})
