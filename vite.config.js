import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'module'
import path from 'path'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender')
const PuppeteerRenderer = vitePrerender.PuppeteerRenderer

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerender({
      staticDir: path.resolve('dist'),
      routes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/fee-structure',
        '/tutors',
        '/faq',
        '/terms',
        '/teaching-methods',
        '/resources',
        '/subjects/maths',
        '/subjects/english',
        '/subjects/science',
        '/subjects/science-subjects',
        '/test-prep',
        '/test-prep/sat-act',
      ],
      renderer: new PuppeteerRenderer({
        renderAfterTime: 3000,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      }),
    }),
  ],
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
