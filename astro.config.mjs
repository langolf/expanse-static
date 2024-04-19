import path from 'path';

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
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
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
