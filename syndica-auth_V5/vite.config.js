import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    configureServer: (server) => {
      server.middlewares.use(
        history({
          index: '/index.html',
        })
      );
    },
  },
});
