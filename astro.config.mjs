import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // Temporairement en mode static car les formulaires sont désactivés
  // Quand les formulaires seront réactivés, passer en 'hybrid' et installer @astrojs/vercel
  output: 'static',
  site: 'https://cdmc-toulouse.fr', // À remplacer par votre domaine réel
});

