---
name: polish-ui
description: Passe de finition sur une page ou un composant avant de le montrer ou de le mettre en ligne (états, responsive, mode sombre, accessibilité, détails visuels). À utiliser quand on demande de « peaufiner », « finaliser », « rendre plus pro », ou après avoir construit une interface.
---

# Peaufiner une interface

Une interface « presque finie » se reconnaît aux détails qui manquent. Parcourir cette liste dans l'ordre, corriger, puis résumer à l'utilisateur ce qui a changé.

## 1. Hiérarchie et rythme

- Un seul élément dominant par écran (titre ou action principale). Si tout est gras, rien ne ressort.
- Espacements cohérents : mêmes écarts entre éléments de même niveau, plus d'air entre les sections qu'à l'intérieur.
- Longueur de ligne lisible : paragraphes limités à `max-w-xl` / `max-w-2xl`.
- Titres avec `text-balance`, paragraphes avec `text-pretty` pour éviter les mots orphelins.

## 2. Tous les états

Pour chaque élément interactif, vérifier qu'il existe et qu'il se voit :

- **survol** (`hover:`) et **focus clavier** (`focus-visible:` ; les composants `ui/` l'ont déjà) ;
- **désactivé** (`disabled`) et **chargement** (texte « Envoi… », bouton désactivé) ;
- **erreur** (message sous le champ, `aria-invalid`) ;
- **vide** : une liste sans éléments affiche une phrase utile, pas un trou ;
- **succès** : confirmer qu'une action a marché.

## 3. Responsive

- Tester à 375 px, 768 px et 1440 px. Aucun défilement horizontal à 375 px.
- Zones cliquables d'au moins 40 px de haut sur mobile.
- Les grilles passent en une colonne, les textes longs ne débordent pas (`min-w-0`, `truncate` ou retour à la ligne).

## 4. Mode sombre

- Basculer le thème et relire toute la page : contrastes suffisants, pas de fond blanc oublié, images et logos lisibles.
- Aucune couleur codée en dur : uniquement les tokens (skill `design-system`).

## 5. Accessibilité de base

- Contraste du texte suffisant (le gris `muted-foreground` seulement pour le texte secondaire).
- Chaque image a un `alt` ; chaque bouton icône a un `aria-label`.
- Ordre des titres logique (`h1` unique, puis `h2`, `h3`).
- Tout est utilisable au clavier (Tab, Entrée, Échap pour fermer une fenêtre).

## 6. Détails qui font la différence

- Bons caractères typographiques : apostrophe ’, guillemets « », espace avant `:` `?` `!` en français.
- Icônes alignées sur le texte et de taille cohérente.
- Une animation d'apparition discrète sur l'élément principal, pas partout (skill `add-motion`).
- Titre de l'onglet et description de la page renseignés.

Finir avec `npm run lint && npm run build`.
