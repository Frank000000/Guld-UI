import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          // alias: { park: 'icon-park' }
          // enabledCollections: ['ep']
        }),
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3", // 'vue2', 'vue3', 'jsx'
      // scale: 1.2, // Scale of icons against 1em
      // defaultStyle: '', // Style apply to icons
      // defaultClass: '', // Class names apply to icons
      // jsx: 'react' // 'react' or 'preact'
    })
  ],
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