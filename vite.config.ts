import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig((env) => ({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: env.mode === 'production' ? '$NGINX_VIRTUAL_DIRECTORY' : '/',
  server: {
    watch: {
      usePolling: true,
      ignored: ['!**/__mocks__/**', '**/*.test.*', '**/*.spec.*']
    },
    host: true,
    strictPort: true,
    port: 4500,
  },
}));
