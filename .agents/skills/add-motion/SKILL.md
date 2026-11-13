---
name: add-motion
description: Ajouter une animation ou une transition (apparition, survol, ouverture de fenêtre, défilement) avec goût et sans alourdir le site. À utiliser quand on demande d'animer, de rendre « plus vivant », ou d'ajouter des effets.
---

# Ajouter du mouvement

Une bonne animation explique ce qui se passe (d'où vient un élément, ce qui a changé). Une animation décorative qui ralentit l'utilisateur est à éviter.

## Faut-il animer ?

- **Oui** : apparition d'un élément important, ouverture/fermeture (fenêtre, menu), retour sur une action (bouton pressé, copie réussie), changement d'état.
- **Non** : éléments utilisés en boucle (navigation, saisie au clavier), texte long, tout ce qui retarde l'accès au contenu.

## Les outils du projet

Le projet inclut `tw-animate-css`, utilisable directement en classes Tailwind :

```tsx
<div className="animate-in duration-500 fade-in slide-in-from-bottom-3">…</div>
```

- Décaler plusieurs éléments : `delay-100`, `delay-200`… avec `fill-mode-both` pour éviter un flash.
- Les composants `ui/` (fenêtre, menus) ont déjà leurs animations d'ouverture et de fermeture.
- Survol : `transition-colors`, `transition-transform` avec un léger `hover:-translate-y-0.5` ou `group-hover:`.

Pour des animations plus poussées (gestes, ressorts, éléments qui se transforment), installer `motion` (`npm install motion`) et l'utiliser seulement là où c'est nécessaire.

## Les bonnes valeurs

| Cas                         | Durée      | Courbe                          |
| --------------------------- | ---------- | ------------------------------- |
| Survol, petit retour visuel | 150–200 ms | `ease-out`                      |
| Apparition d'un élément     | 300–500 ms | `ease-out`                      |
| Ouverture d'une fenêtre     | 200–250 ms | `ease-out` (sortie plus courte) |
| Grand déplacement           | 500–700 ms | `ease-in-out`                   |

- Animer `opacity` et `transform` (translate, scale), jamais `width`, `height` ou `top` : c'est ce qui reste fluide.
- Petits mouvements : 8 à 16 px de déplacement suffisent.

## Respecter les préférences

Certaines personnes désactivent les animations dans leur système. Ajouter `motion-reduce:animate-none` (ou `motion-safe:` devant les classes d'animation) sur les animations d'apparition et de défilement.

## Vérifier

Recharger la page plusieurs fois : l'animation doit être agréable la dixième fois, pas seulement la première. Si elle agace, la raccourcir ou la retirer.
