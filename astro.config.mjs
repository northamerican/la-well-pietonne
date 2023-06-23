import i18n from 'astro-i18n'
import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'
import remarkToc from 'remark-toc'

// https://astro.build/config
export default defineConfig({
  integrations: [i18n()],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  }),
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
  },
})
