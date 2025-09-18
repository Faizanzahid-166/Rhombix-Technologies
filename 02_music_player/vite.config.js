import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// const projectName = path.basename(__dirname)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),    tailwindcss(),],
   base: `/Rhombix-Technologies/02_music_player/`, // ✅ works for any folder
})
