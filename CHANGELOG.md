# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2025-12-XX

### Added
- Système de flags de statut pour les modules :
  - Flag "Prochainement" pour les modules en pause (Théorie Avancée, Rythmique)
  - Flag "Bientôt complet" pour les modules presque complets (Théorie Débutant)
- Badges visuels avec styles atténués pour les modules en pause
- Messages d'invitation à la pré-inscription pour les modules en pause avec indication d'utilisation du champ commentaire
- Tableau récapitulatif complet des dates avec liens vers les pages des modules
- Tri automatique des modules (actifs en premier, puis modules en pause)
- Section détaillée "Rythme et durée" avec format des séances et engagement
- Section "Vue d'ensemble des dates" avec tableau chronologique complet
- Section "Lieu" avec informations pratiques

### Changed
- Fusion de la page planning dans la page modules pour une meilleure organisation et navigation
- Refactorisation de l'organisation des cours : suppression de la page planning dédiée, intégration dans la page modules
- Mise à jour de tous les liens pour pointer vers les sections appropriées dans la page modules (`/modules#organisation-mensuelle`, `/modules#dates-recap`)
- Amélioration de l'affichage des modules avec indicateurs de statut visuels
- Amélioration des messages "coming soon" avec détails sur la pré-inscription et utilisation du champ commentaire

### Removed
- Page `/planning` dédiée (fusionnée dans `/modules`)

## [0.1.0] - 2025-11-XX

### Added
- Structure initiale du site CDMC
- Pages principales : accueil, modules, pédagogie, à propos, contact
- Système de modules avec pages individuelles
- Formulaires de contact et pré-inscription intégrés à Notion
- Design responsive avec palette de couleurs warm/terracotta
- Accessibilité WCAG 2.1 niveau AA

