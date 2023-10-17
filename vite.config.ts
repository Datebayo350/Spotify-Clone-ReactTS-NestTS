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
      // host: '0.0.0.0', <- doesn't work on dev mode
      host: 'localhost',
      clientPort: 3000,
    },
    //  watch property options and their descriptions : https://github.com/paulmillr/chokidar#api
    watch: {
      usePolling: true,
      interval: 0,
    },
  },
});
