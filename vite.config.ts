import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
      react(),
      githubPagesSpa({
          // Options are optional
          verbose: false,
      }),
  ],
})
