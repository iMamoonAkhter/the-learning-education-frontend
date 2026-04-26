import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    target: 'chrome69',
    minify: 'terser',
    cssMinify: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-mui': ['@mui/material', '@mui/icons-material'],
          'vendor-typed': ['typed.js'],
          'vendor-swiper': ['swiper'],
        },
      },
    },
  },
})
