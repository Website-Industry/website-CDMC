import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Permet les routes API
  adapter: vercel(), // Adaptateur pour Vercel
  site: 'https://cdmc-toulouse.fr',
});

