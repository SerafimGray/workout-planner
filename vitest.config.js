import path from 'path'

import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  root: '.', //Define the root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
