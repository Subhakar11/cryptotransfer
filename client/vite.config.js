import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ important for correct relative asset paths
  server: {
    host: '0.0.0.0',
    port: 10000 // optional, used in dev or dynamic env like Render
  }
})
