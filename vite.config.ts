import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
    },
  },
})
