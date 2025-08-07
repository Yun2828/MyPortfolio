import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'                // new line
export default defineConfig({
  plugins: [
      react(),                                          // new line
      tailwindcss(),
  ],
})

