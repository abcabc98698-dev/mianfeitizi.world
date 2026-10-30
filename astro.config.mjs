// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://mianfeitizi.world';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: 'static',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter Tight',
      cssVariable: '--font-sans-primary',
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/studio-sans-variable.woff2'],
            weight: '100 900',
            style: 'normal',
            display: 'swap',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Instrument Serif',
      cssVariable: '--font-serif-display',
      fallbacks: ['Times New Roman', 'Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/editorial-serif-regular.woff2'],
            weight: 400,
            style: 'normal',
            display: 'swap',
          },
          {
            src: ['./src/assets/fonts/editorial-serif-italic.woff2'],
            weight: 400,
            style: 'italic',
            display: 'swap',
          },
        ],
      },
    },
  ],
});
