import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {viteSingleFile} from "vite-plugin-singlefile"
import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    WindiCSS(),
    Components({
      resolvers: [AntDesignVueResolver({})],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  css: {},
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        'entry': path.resolve(__dirname, 'index.html'),
        'figma': path.resolve(__dirname, 'src/figma.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
      }
    },
  }
})