import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://jfdoc.xingying.us.kg',
  integrations: [
    sitemap(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    compress({ css: true, html: true, js: true, img: false, svg: true }),
  ],
  // 预取策略：链接进入视口时预取
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  // 客户端路由（SPA 模式），配合 View Transitions 动画
  experimental: {
    clientPrerender: true,
  },
  vite: {
    build: {
      target: 'esnext',
      cssMinify: 'lightningcss',
    },
  },
});
