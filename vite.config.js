import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/myLibrary.js'),
      name: 'myLibrary',
      fileName: 'myLibrary'
    }
  },

  test: {
    testFiles: ['tests/**/*.spec.js']
  }
})