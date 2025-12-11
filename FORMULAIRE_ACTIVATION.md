# Activation des formulaires

## État actuel

Les formulaires sont **temporairement désactivés** en attendant la configuration Notion.

## Pour réactiver les formulaires

Une fois la configuration Notion terminée :

1. **Installe l'adaptateur Vercel** :
   ```bash
   npm install @astrojs/vercel
   ```

2. **Modifie `astro.config.mjs`** :
   - Importe l'adaptateur : `import vercel from '@astrojs/vercel/serverless';`
   - Change `output: 'static'` en `output: 'hybrid'`
   - Ajoute l'adaptateur : `adapter: vercel()`

3. **Ouvre le fichier** `src/components/ContactForm.astro`

4. **Trouve la constante** en haut du fichier :
   ```typescript
   const FORM_DISABLED = true;
   ```

5. **Change la valeur** à `false` :
   ```typescript
   const FORM_DISABLED = false;
   ```

6. **Vérifie que les variables d'environnement** sont bien configurées :
   - `NOTION_TOKEN` dans `.env` (local) et dans Vercel (production)
   - `NOTION_DATABASE_ID` dans `.env` (local) et dans Vercel (production)

7. **Teste les formulaires** :
   - Formulaire de contact sur `/contact`
   - Formulaire de pré-inscription sur `/contact`
   - Vérifie que les données apparaissent bien dans Notion

8. **Déploie** sur Vercel si tout fonctionne

## Note

Le code Notion est déjà en place et fonctionnel. Il suffit de :
- Configurer Notion (voir `NOTION_SETUP.md`)
- Changer `FORM_DISABLED` à `false`
- Ajouter les variables d'environnement

