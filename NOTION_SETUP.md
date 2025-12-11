# Configuration Notion pour les formulaires CDMC

Ce guide explique comment configurer Notion pour recevoir les données des formulaires de contact et d'inscription.

## 📋 Prérequis

- Un compte Notion
- Une base de données Notion (à créer)

## 🔧 Étapes de configuration

### 1. Créer une intégration Notion

1. Va sur [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Clique sur **"+ New integration"**
3. Donne un nom à ton intégration (ex: "CDMC Forms")
4. Sélectionne l'espace de travail où se trouve ta base de données
5. Clique sur **"Submit"**
6. **Copie le "Internal Integration Token"** (commence par `secret_`) - tu en auras besoin pour `NOTION_TOKEN`

### 2. Créer la base de données Notion

1. Dans Notion, crée une nouvelle page ou ouvre une page existante
2. Tape `/database` et sélectionne **"Table - Inline"** ou **"Table - Full page"**
3. Configure les colonnes suivantes (les noms doivent correspondre exactement) :

#### Colonnes requises :

| Nom de la colonne | Type | Options |
|-------------------|------|---------|
| **Nom** | `Title` | - |
| **Email** | `Email` | - |
| **Type** | `Select` | Options : `Contact`, `Inscription` |
| **Message** | `Text` | - |
| **Modules** | `Multi-select` | Options : `theorie-debutant`, `theorie-intermediaire`, `mao`, `piano`, `rythmique` |
| **Commentaire** | `Text` | - |
| **Date** | `Date` | - |

#### Détails des colonnes :

- **Nom** : Type `Title` (colonne principale)
- **Email** : Type `Email`
- **Type** : Type `Select` avec deux options :
  - `Contact`
  - `Inscription`
- **Message** : Type `Text` (utilisé pour le formulaire de contact)
- **Modules** : Type `Multi-select` avec les options :
  - `theorie-debutant`
  - `theorie-intermediaire`
  - `mao`
  - `piano`
  - `rythmique`
- **Commentaire** : Type `Text` (optionnel, pour les inscriptions)
- **Date** : Type `Date`

### 3. Partager la base avec l'intégration

1. Dans ta base de données Notion, clique sur **"..."** (trois points) en haut à droite
2. Sélectionne **"Connections"** ou **"Add connections"**
3. Recherche et sélectionne ton intégration (ex: "CDMC Forms")
4. Clique sur **"Confirm"**

### 4. Récupérer l'ID de la base de données

1. Ouvre ta base de données dans Notion
2. Regarde l'URL dans ton navigateur
3. L'ID est la partie après le dernier `/` et avant le `?`
   - Exemple : `https://www.notion.so/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=...`
   - L'ID est : `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
4. **Copie cet ID** - tu en auras besoin pour `NOTION_DATABASE_ID`

### 5. Configurer les variables d'environnement

1. Crée un fichier `.env` à la racine du projet (copie `.env.example`)
2. Ajoute tes valeurs :

```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. **Pour Vercel** (en production) :
   - Va dans les paramètres de ton projet Vercel
   - Section **"Environment Variables"**
   - Ajoute les deux variables :
     - `NOTION_TOKEN` = ton token d'intégration
     - `NOTION_DATABASE_ID` = l'ID de ta base de données

## ✅ Vérification

Une fois configuré :

1. Lance le serveur de développement : `npm run dev`
2. Va sur la page `/contact`
3. Remplis le formulaire de contact
4. Soumets le formulaire
5. Vérifie dans ta base Notion qu'une nouvelle page a été créée

## 🔍 Dépannage

### Erreur "NOTION_TOKEN n'est pas défini"
- Vérifie que le fichier `.env` existe et contient `NOTION_TOKEN`
- En production, vérifie que la variable est bien définie dans Vercel

### Erreur "NOTION_DATABASE_ID n'est pas défini"
- Vérifie que le fichier `.env` existe et contient `NOTION_DATABASE_ID`
- En production, vérifie que la variable est bien définie dans Vercel

### Erreur "Object not found" ou "Database not found"
- Vérifie que l'intégration a bien accès à la base de données (étape 3)
- Vérifie que l'ID de la base de données est correct

### Erreur "Property not found"
- Vérifie que les noms des colonnes dans Notion correspondent exactement à ceux dans le code
- Les noms sont sensibles à la casse : `Nom` et `nom` sont différents

### Les données ne s'affichent pas correctement
- Vérifie que les types de colonnes sont corrects (voir tableau ci-dessus)
- Pour les modules, vérifie que les valeurs correspondent exactement (ex: `theorie-debutant` et non `Théorie Débutant`)

## 📝 Notes importantes

- Les noms des colonnes dans Notion doivent correspondre **exactement** à ceux dans le code
- L'intégration doit avoir accès à la base de données
- Les variables d'environnement ne doivent **jamais** être commitées dans Git (le fichier `.env` est dans `.gitignore`)
- En production, utilise les variables d'environnement de Vercel

