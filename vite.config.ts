import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // server: {
  //   host: 'localhost',
  //   port: 5654
  // },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'Guld',
      fileName: (format) => `guld.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})