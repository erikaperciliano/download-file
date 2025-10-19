import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
   optimizeDeps: {
    exclude: ['react-native']
  },
    server: {
    fs: {
      strict: true,
    },
  },
})
