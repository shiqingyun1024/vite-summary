import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// const resolve = (dir: string) => path.join(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find:'@',
        replacement:resolve(__dirname,'src')
      },
    ]
  },
  plugins: [vue()]
})
function __dirname(__dirname: any, arg1: string): string {
  throw new Error('Function not implemented.')
}

