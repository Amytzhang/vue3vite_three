import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import{resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    //extensions: [".ts", ".js", ".vue", ".json", ".mjs"],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    port: 8080 // 你想要的端口号
  }


})
