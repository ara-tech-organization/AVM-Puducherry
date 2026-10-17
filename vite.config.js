/* global process */
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// GitHub Pages serves the project under /AVM-Puducherry/. Override with VITE_BASE for a custom domain.
export default defineConfig({
  base: process.env.VITE_BASE || '/AVM-Puducherry/',
  plugins: [react(), tailwindcss()],
})
