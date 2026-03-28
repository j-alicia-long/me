import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://j-alicia-long.github.io',
  integrations: [tailwind(), react(), compress()],
  experimental: {
    assets: true,
  },
});
