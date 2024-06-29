import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    outDir: 'build', // Direktori output build
    assetsDir: '.', // Direktori aset
    rollupOptions: {
      // Konfigurasi tambahan Rollup jika diperlukan
    },
  },
  server: {
    port: 8000, // Port lokal untuk development server
  },
});
