import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ["src/**/*.jsx"],
      exclude: ["node_modules"],
    }),
    tailwindcss(),
  ],
  test: {
    include: ['src/**/*.test.{js,jsx,ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
