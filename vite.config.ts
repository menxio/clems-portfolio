import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative assets support both /clems-portfolio/ and a custom domain.
  base: './',
});
