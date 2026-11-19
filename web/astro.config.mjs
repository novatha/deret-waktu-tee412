import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ndaratha.my.id',
  base: '/deret-waktu',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});
