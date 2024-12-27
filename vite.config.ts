import react from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      tsconfigPaths(),
      react({
        babel: {
          plugins: [jotaiDebugLabel, jotaiReactRefresh],
        },
      }),
    ],
    build: {
      rollupOptions: {
        input: {
          main: './index.html', // Entry point for the web app
        },
      },
      outDir: 'dist',
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    server: {
      strictPort: true,
      port: 5173,
      hmr: {
        clientPort: 5173,
      },
    },
    root: './',
    resolve: {
      alias: {
        '@': path.resolve('.', './src')
      }
    }
  }
})
