import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://j-alicia-long.github.io',
  base: '/me',
  integrations: [react()],
});
