import path from 'path';
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import webmanifest from 'astro-webmanifest';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { fileURLToPath } from 'url';
import node from '@astrojs/node';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  image: {
    service: passthroughImageService(),
  },
  build: {
    format: 'file',
    assetsPrefix: '/',
    inlineStylesheets: 'never',
  },
  compressHTML: false,
  integrations: [
    icon({
      svgoOptions: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    webmanifest({
      name: 'expanse-astro',
      short_name: 'App',
      description: 'Here is your app description',
      start_url: '/',
      theme_color: '#3367D6',
      background_color: '#3367D6',
      display: 'standalone',
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  adapter: node({
    mode: 'standalone',
  }),
});
