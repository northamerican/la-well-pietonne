import i18n from 'astro-i18n'
import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default defineConfig({
  integrations: [i18n()],
  output: 'server',
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  })
})
