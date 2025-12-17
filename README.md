# CDMC - Site vitrine



[![Vercel](https://img.shields.io/github/deployments/Website-Industry/website-CDMC/production?label=vercel&logo=vercel)](https://vercel.com/marcchartons-projects/cdmc)

Site vitrine statique pour les cours de musique CDMC à Toulouse.

## 🚀 Développement

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

### Configuration Notion (pour les formulaires)

Les formulaires sont connectés à Notion. Pour les activer :

1. Suis le guide dans `NOTION_SETUP.md` pour configurer Notion
2. Crée un fichier `.env` à la racine avec tes identifiants Notion :
   ```env
   NOTION_TOKEN=secret_xxx...
   NOTION_DATABASE_ID=xxx...
   ```
3. Redémarre le serveur de développement

## 📦 Build

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `dist/`.

## 🌐 Déploiement

Le site est configuré pour être déployé sur Vercel. Le fichier `vercel.json` contient la configuration nécessaire.

## ♿ Accessibilité

Le site respecte les standards WCAG 2.1 niveau AA et RGAA. Tous les composants sont conçus pour être accessibles au clavier et aux lecteurs d'écran.

## 📝 Structure

- `src/pages/` - Pages du site
- `src/components/` - Composants réutilisables
- `src/layouts/` - Layouts globaux
- `src/data/` - Données (modules, dates, tarifs)

