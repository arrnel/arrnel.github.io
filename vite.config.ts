import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    // base: `https://${process.env.VITE_REPO_OWNER}.github.io/${process.env.VITE_REPO_RESUME}/` || '/',
    plugins: [
        react(),
    ],
    build: {
        chunkSizeWarningLimit: 1600,
    }
})
