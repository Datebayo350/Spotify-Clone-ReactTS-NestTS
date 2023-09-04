import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// https://rollupjs.org/configuration-options/#watch
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    hmr: {
      clientPort: 3000,
    },
    //  watch property options and their descriptions : https://github.com/paulmillr/chokidar#api
    watch: {
      usePolling: true,
      interval: 0,
    },
  },
});
