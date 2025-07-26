// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/to-do-list/', // Must match your GitHub repo name exactly
  plugins: [react()],
});
