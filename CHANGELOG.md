# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-01-XX

### Added
- Section témoignages sur la page d'accueil avec 3 témoignages du groupe CDMC 2025 - Théorie Débutant
- Badges/tags visuels pour identifier le groupe et le module dans les témoignages
- Design de badges arrondis avec bordures et ombres pour un rendu plus physique
- FAQ sur la possibilité de rejoindre un module en cours de route

### Changed
- Inversion de l'ordre des sections : "Esprit & pédagogie" avant "Tarifs & engagement"
- Refonte du concept de "pré-inscription" vers "demande d'informations" sur toutes les pages
- Remplacement de tous les libellés "Je me pré-inscris" par "Demander des informations"
- Adaptation des messages et formulaires pour un ton moins engageant, plus informatif
- Refonte du message sur l'engagement : mise en avant de la possibilité de rejoindre en cours de route
- Remplacement des mentions d'engagement obligatoire par un message de flexibilité
- Adaptation des sections "Engagement" en "Rejoindre le groupe" sur toutes les pages
- Mise à jour de la FAQ paiement pour mentionner l'adaptation du paiement si on rejoint en cours de route
- Correction de l'attribution des témoignages (Raf et Flo)

### Fixed
- Correction de l'assignation des noms aux bons témoignages

## [0.3.0] - 2026-01-XX

### Added
- Contenu détaillé des séances pour le module Théorie Débutant avec 5 séances complètes
- Section détaillée affichant le programme de chaque séance avec objectifs et contenu
- Indicateurs visuels pour les séances passées (opacité réduite, badge "Passée")
- Indicateurs visuels pour les dates passées dans la section "Planning et dates 2026"
- Logique de détection automatique des dates passées basée sur la date actuelle
- Affichage de la date pour chaque séance dans le contenu détaillé

### Changed
- Amélioration de l'affichage des séances avec distinction visuelle entre passées et à venir
- Conservation de l'ordre chronologique tout en atténuant visuellement les éléments passés

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

