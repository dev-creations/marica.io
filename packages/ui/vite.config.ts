import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.production.json' }), tailwindcss()],
  build: {
    lib: {
      entry: "./src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "./src",
        entryFileNames: '[name].js',
      },
      external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client']
    },
  },
})
