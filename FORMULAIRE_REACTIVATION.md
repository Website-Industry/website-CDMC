# Réactivation des formulaires Notion

## État actuel

Les fichiers liés à Notion ont été temporairement supprimés pour permettre le déploiement en mode static. 
Ils seront recréés quand tu seras prêt à activer les formulaires.

## Pour réactiver les formulaires

### 1. Installer les dépendances

```bash
npm install @notionhq/client
```

### 2. Créer le fichier `src/lib/notion.ts`

Voir le fichier `NOTION_SETUP.md` pour la structure complète, ou recréer le fichier avec :
- Fonction `getNotionClient()`
- Fonction `createContactPage()`
- Fonction `createInscriptionPage()`

### 3. Créer les routes API

Créer le dossier `src/pages/api/` avec :
- `contact.ts` : Route API pour le formulaire de contact
- `inscription.ts` : Route API pour le formulaire de pré-inscription

### 4. Installer l'adaptateur Vercel

```bash
npm install @astrojs/vercel
```

### 5. Modifier `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // Permet les routes API
  adapter: vercel(), // Adaptateur pour Vercel
  site: 'https://cdmc-toulouse.fr',
});
```

### 6. Réactiver les formulaires

Dans `src/components/ContactForm.astro`, changer :
```typescript
const FORM_DISABLED = false; // Au lieu de true
```

### 7. Configurer Notion

Voir `NOTION_SETUP.md` pour les détails complets.

### 8. Configurer les variables d'environnement sur Vercel

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`

## Note

Le code Notion était fonctionnel avant la suppression. Tu peux retrouver la structure dans les commits Git 
ou recréer les fichiers en suivant la documentation `NOTION_SETUP.md`.

