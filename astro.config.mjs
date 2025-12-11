import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Permet les routes API tout en gardant le SSG pour les pages
  site: 'https://cdmc.fr', // À remplacer par votre domaine réel
});

