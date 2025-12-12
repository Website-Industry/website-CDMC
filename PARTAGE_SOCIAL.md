# Configuration du partage social

## Métadonnées configurées

Le site est maintenant configuré avec toutes les métadonnées nécessaires pour un partage propre sur les réseaux sociaux :

- ✅ Open Graph (Facebook, LinkedIn, etc.)
- ✅ Twitter Cards
- ✅ Image de partage (`/og-image.svg`)
- ✅ Description et titre pour chaque page

## Image de partage

L'image de partage actuelle est en SVG (`/og-image.svg`). Pour une meilleure compatibilité avec tous les réseaux sociaux, il est recommandé de :

1. **Convertir en PNG** : Les réseaux sociaux préfèrent généralement les PNG/JPG pour les images de partage
2. **Dimensions recommandées** : 1200x630px (ratio 1.91:1)
3. **Taille** : Maximum 8MB, idéalement < 1MB

### Outils pour convertir

- Utiliser un outil en ligne (CloudConvert, Convertio)
- Ou créer directement un PNG avec les mêmes dimensions

### Contenu de l'image

L'image actuelle contient :
- Logo CDMC avec forme d'onde
- Texte "Les cours de musique les plus chill de Toulouse"
- Description "Apprendre la musique autrement • Sans pression • Avec plaisir"
- Palette de couleurs du site (beiges, terracotta)

## Test du partage

Pour tester le partage :

1. **Facebook** : https://developers.facebook.com/tools/debug/
2. **Twitter** : https://cards-dev.twitter.com/validator
3. **LinkedIn** : https://www.linkedin.com/post-inspector/

Colle l'URL de ton site dans ces outils pour voir comment elle apparaîtra lors du partage.

## Personnalisation par page

Si tu veux des images différentes par page, tu peux passer une prop `image` au layout :

```astro
<BaseLayout
  title="..."
  description="..."
  image="/custom-og-image.svg"
>
```

