import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/S2S_WEB/',
  plugins: [react(), tailwindcss()],
})
