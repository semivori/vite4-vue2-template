import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// see https://github.com/lstoeferle/vite-vue2-windicss-starter/blob/main/vite.config.js

const config = defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
  },

  build: {
    minify: true,
  },

  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
    }),
    AutoImport({
      imports: [
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
})

export default config
