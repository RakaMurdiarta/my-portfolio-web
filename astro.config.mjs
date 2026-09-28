// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // TODO: replace with the real domain once it's ready.
  site: 'https://rakamurdiarta.dev',
  build: {
    // The whole stylesheet is small; inlining it removes a render-blocking request.
    inlineStylesheets: 'always',
  },
  // Self-hosted at build time: no third-party font requests, plus metric-matched fallbacks.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Open Sans',
      cssVariable: '--font-open-sans',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Fira Code',
      cssVariable: '--font-fira-code',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
