import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";


export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  esbuild: {
    target: 'es2020'
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: true,
      mangle: false,
      format: {
        comments: false
      }
    }
  }
})
