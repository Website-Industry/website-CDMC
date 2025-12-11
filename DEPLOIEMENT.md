# Guide de déploiement CDMC

## État actuel

Le site est configuré en mode **static** car les formulaires sont temporairement désactivés. Cela permet un déploiement simple sur Vercel sans besoin d'adaptateur.

## Déploiement actuel (formulaires désactivés)

Le site peut être déployé tel quel sur Vercel :
- Mode : `static` (SSG)
- Pas besoin d'adaptateur
- Les routes API existent mais ne sont pas utilisées (formulaires désactivés)

## Quand réactiver les formulaires

Quand tu seras prêt à activer les formulaires Notion :

### 1. Installer l'adaptateur Vercel

```bash
npm install @astrojs/vercel
```

### 2. Modifier `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Permet les routes API
  adapter: vercel(), // Adaptateur pour Vercel
  site: 'https://cdmc.fr',
});
```

### 3. Réactiver les formulaires

Voir `FORMULAIRE_ACTIVATION.md` pour les détails.

### 4. Configurer les variables d'environnement sur Vercel

Dans les paramètres du projet Vercel :
- `NOTION_TOKEN` = ton token d'intégration Notion
- `NOTION_DATABASE_ID` = l'ID de ta base de données Notion

### 5. Redéployer

Le déploiement se fera automatiquement ou manuellement via :
```bash
vercel --prod
```

## Notes

- En mode `static`, toutes les pages sont pré-générées (plus rapide)
- En mode `hybrid`, les pages sont pré-générées mais les routes API fonctionnent côté serveur
- L'adaptateur Vercel est nécessaire uniquement pour le mode `hybrid` ou `server`

