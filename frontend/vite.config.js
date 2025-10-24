import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Cambia 'tu-repo' por el nombre de tu repositorio en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/AlanEp-sys/proyect-cv/'
})
