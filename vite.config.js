import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: '/', // asegúrate de que esté en raíz
  esbuild: {
    target: 'es2020',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: true,
      mangle: false,
      format: {
        comments: false,
      },
    },
  },
  server: {
    fs: {
      strict: true,
    },
    // Este fallback asegura que rutas como /es funcionen en desarrollo
    middlewareMode: false,
  },
  preview: {
    // Esto permite a `vite preview` servir rutas SPA como /es
    port: 5000,
    strictPort: true,
  },
})
