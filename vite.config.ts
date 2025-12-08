import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages usually serves from a subdirectory (e.g., /repo-name/)
  // Using './' ensures assets are resolved relatively, making it work on any path.
  base: './',
  build: {
    // Increase the chunk size warning limit to 1000 kbs (default is 500)
    // to accommodate Three.js and other large libraries without warning.
    chunkSizeWarningLimit: 1000,
  }
});