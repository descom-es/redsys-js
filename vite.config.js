import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/redsys.js'),
      name: 'redsys',
      fileName: 'redsys'
    }
  },

  test: {
    testFiles: ['tests/**/*.spec.js']
  }
})