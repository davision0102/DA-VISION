---
name: design-system
description: Règles visuelles du projet — couleurs, polices, espacements, mode sombre. À lire avant de créer ou modifier une interface, ou pour changer le thème (couleur principale, police, arrondis).
---

# Design system

Tout le thème vit dans `src/index.css` (Tailwind CSS 4, sans fichier de config).

## Couleurs

Toujours utiliser les tokens, jamais de couleurs brutes : c'est ce qui fait marcher le mode sombre.

| Token                       | Usage                                       |
| --------------------------- | ------------------------------------------- |
| `background` / `foreground` | fond de page / texte principal              |
| `card`                      | surfaces surélevées (cartes, panneaux)      |
| `muted-foreground`          | texte secondaire                            |
| `secondary`                 | fonds discrets, survols                     |
| `border`                    | bordures et séparateurs                     |
| `primary`                   | bouton principal (encre)                    |
| `brand`                     | couleur signature : accents, liens, détails |
| `destructive`               | erreurs, suppressions                       |

Utiliser `brand` avec parcimonie : un accent par zone, pas de grands aplats. Les opacités (`bg-brand/10`, `text-brand/50`) servent pour les nuances.

**Changer la couleur signature** : modifier `--brand` dans `:root` et dans `.dark` (format `oklch`). Garder la même teinte (3ᵉ valeur) dans les deux, un peu plus claire en sombre.

## Typographie

- Titres (`h1`–`h3`) : Bricolage Grotesque, appliquée automatiquement (`font-heading`).
- Texte : Inter (`font-sans`).
- Code et commandes : `font-mono`.
- Grands titres : `font-semibold tracking-tight`, jamais `font-bold` + `uppercase` ensemble.

Pour changer de police : installer le paquet `@fontsource-variable/<police>`, l'importer en haut de `src/index.css` et modifier `--font-heading` ou `--font-sans`.

## Mise en page

- Conteneur : `mx-auto max-w-6xl px-4 sm:px-6`.
- Sections : `py-16` à `py-24`.
- Arrondis généreux : `rounded-3xl` pour les blocs, `rounded-full` pour boutons et pastilles.
- Toujours vérifier à 375 px de large : aucun défilement horizontal.

## Mode sombre

La classe `dark` est posée sur `<html>` (script dans `index.html` + hook `useTheme`). Si une interface a été construite avec les tokens, elle fonctionne en sombre sans rien ajouter. Éviter `dark:` sauf cas particulier.

## Mouvement

Animations courtes et utiles seulement (`tw-animate-css` : `animate-in fade-in slide-in-from-bottom-3`). Pas d'animation sur ce qui est utilisé en boucle.
