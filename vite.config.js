import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({ remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'metadata' }]] }) },
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: process.env.LOCAL_API_URL || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
