import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://sinpatrones.github.io/gh-react-vite-action/',
  plugins: [react()]
})
