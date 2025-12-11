# Structure du projet CDMC

## 📁 Architecture des fichiers

```
website-CDMC/
├── public/                 # Fichiers statiques
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SkipLink.astro
│   │   ├── ModuleCard.astro
│   │   ├── Section.astro
│   │   ├── CTA.astro
│   │   └── ContactForm.astro
│   ├── data/              # Données structurées
│   │   ├── modules.ts     # Définition des modules
│   │   └── pricing.ts    # Tarifs et informations pratiques
│   ├── layouts/           # Layouts globaux
│   │   └── BaseLayout.astro
│   └── pages/             # Pages du site
│       ├── index.astro           # Page d'accueil
│       ├── modules/
│       │   ├── index.astro       # Liste des modules
│       │   └── [slug].astro      # Page d'un module
│       ├── pedagogie.astro
│       ├── a-propos.astro
│       └── contact.astro
├── astro.config.mjs       # Configuration Astro
├── tailwind.config.mjs    # Configuration Tailwind
├── tsconfig.json          # Configuration TypeScript
├── package.json
└── vercel.json            # Configuration Vercel
```

## 🎨 Choix techniques

### Framework & Build
- **Astro** : Framework SSG moderne, performant, avec support TypeScript natif
- **Tailwind CSS** : Utilitaire CSS pour un développement rapide et cohérent
- **TypeScript** : Typage statique pour une meilleure maintenabilité

### Accessibilité (WCAG 2.1 / RGAA)
- Structure sémantique HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Lien d'évitement (skip link) en haut de chaque page
- Labels associés à tous les champs de formulaire
- Attributs ARIA appropriés (`aria-label`, `aria-required`, `aria-current`)
- Focus visible et stylé pour la navigation au clavier
- Contraste suffisant (palette de couleurs testée pour AA)
- Respect de `prefers-reduced-motion` pour les animations
- Textes de liens explicites (pas de "Clique ici")
- Meta `lang="fr"` sur toutes les pages

### Design System
- **Palette de couleurs** : Tons chauds (beiges, ocres, terracotta) pour une ambiance conviviale
- **Typographie** : Inter (sans-serif moderne, lisible)
- **Taille de base** : 18px pour un confort de lecture optimal
- **Mobile-first** : Design responsive, pensé d'abord pour mobile

### Structure des données
- **modules.ts** : Définition centralisée des modules avec toutes leurs informations
- **pricing.ts** : Tarifs et informations pratiques (lieu, capacité, etc.)
- Facilite la maintenance et l'ajout de nouveaux modules

## 📄 Pages créées

1. **Page d'accueil** (`/`)
   - Hero section avec CTA
   - Présentation du concept
   - Liste des modules
   - Planning & fonctionnement
   - Tarifs & engagement
   - Esprit & pédagogie
   - À propos (résumé)
   - FAQ courte
   - CTA final

2. **Pages modules** (`/modules/`)
   - Page de listing (`/modules`)
   - Pages individuelles (`/modules/[slug]`)
     - Présentation du module
     - À qui s'adresse
     - Ce qu'on y fait
     - Points forts
     - Planning et dates 2026
     - Tarifs
     - CTA inscription

3. **Page Pédagogie** (`/pedagogie`)
   - Approche globale
   - Apprendre sans pression
   - Comprendre la musique
   - Pédagogie humaine
   - Pourquoi on papote
   - Ce qu'on peut attendre

4. **Page À propos** (`/a-propos`)
   - Présentation personnelle
   - Envie de transmettre
   - Proposer une alternative
   - Autres activités

5. **Page Contact** (`/contact`)
   - Formulaire de contact général
   - Formulaire de pré-inscription
   - Support de pré-sélection de module via query param

## 🔧 Composants réutilisables

- **Header** : Navigation principale avec indication de page active
- **Footer** : Informations de base et lien de contact
- **SkipLink** : Lien d'évitement pour l'accessibilité
- **ModuleCard** : Carte de présentation d'un module
- **Section** : Wrapper de section avec titre optionnel
- **CTA** : Bouton d'appel à l'action (variantes primary/secondary)
- **ContactForm** : Formulaire accessible (contact ou inscription)

## 📅 Données intégrées

### Dates 2026 (janvier à juin)
- Toutes les dates des séances intégrées dans les pages de modules
- Format lisible et structuré

### Tarifs
- Tableau dégressif selon le nombre de modules
- Affiché sur la page d'accueil et les pages de modules

## 🚀 Déploiement

Le site est configuré pour être déployé sur **Vercel** :
- Configuration dans `vercel.json`
- Build automatique depuis le dossier `dist/`
- Site statique (SSG)

## ♿ Points d'attention accessibilité

- ✅ Skip link présent sur toutes les pages
- ✅ Navigation au clavier fonctionnelle
- ✅ Labels de formulaires associés
- ✅ Contraste de couleurs suffisant
- ✅ Structure sémantique respectée
- ✅ Focus visible
- ✅ Textes alternatifs pour les éléments visuels
- ✅ Respect de `prefers-reduced-motion`

## 📝 Notes pour la suite

- **Formulaires** : Actuellement en mode démo (`action="#"`). Pour une mise en production, intégrer :
  - Formspree
  - Netlify Forms
  - Ou un backend personnalisé
- **SEO** : Ajouter un sitemap.xml généré automatiquement (Astro peut le faire)
- **Analytics** : Ajouter si besoin (Plausible, Google Analytics, etc.)
- **Images** : Remplacer les placeholders par de vraies images optimisées
- **Dark mode** : Optionnel, peut être ajouté avec un toggle (déjà préparé dans le design system)

