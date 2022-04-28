import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import {viteSingleFile} from "vite-plugin-singlefile"
import WindiCSS from 'vite-plugin-windicss'
import * as path from 'path'
export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(),
    WindiCSS(),
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