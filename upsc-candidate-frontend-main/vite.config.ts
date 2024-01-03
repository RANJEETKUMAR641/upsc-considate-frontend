import { defineConfig, transformWithEsbuild } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import removeConsole from 'vite-plugin-remove-console'

// vitejs.dev/config
export default defineConfig({
  define: {
    'process.env': {},
  },
  resolve: {
    alias: [
      {
        find: /^jss-plugin-(.*)$/,
        replacement: '$1',
        customResolver: (id) => {
          if (id === '{}') {
            id = 'global'
          }
          return resolve(
            __dirname,
            `./node_modules/jss-plugin-${id}/src/index.js`,
          )
        },
      },
      {
        find: /^@mui\/icons-material\/(.*)/,
        replacement: '@mui/icons-material/esm/$1',
      },
      {
        find: /^@mui\/x-data-grid\/(.*)/,
        replacement: '@mui/x-data-grid/$1',
      },
    ],
  },
  plugins: [
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null

        // Use the exposed transform from vite, instead of directly
        // transforming with esbuild
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
    tsconfigPaths(),
    react(),
    reactRefresh(),
    removeConsole({ includes: ['errors'] }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      plugins: [
        {
          name: 'no-treeshake',
          transform(_, id) {
            if (id.includes('@mui')) {
              return { moduleSideEffects: 'no-treeshake' }
            }
          },
        },
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'lodash',
      'react-toastify',
      '@mui/icons-material',
      '@mui/joy',
      '@mui/lab',
      '@mui/material',
      'reactstrap',
    ],
    force: true,
    esbuildOptions: {
      define: { global: 'globalThis' },
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
