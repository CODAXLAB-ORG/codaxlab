import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the directory name of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Include .JPG files as assets
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
