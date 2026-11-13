---
name: add-component
description: Installer un composant shadcn/ui (bouton, select, tabs, toast, tableau…) ou créer un composant réutilisable. À utiliser dès qu'il faut un élément d'interface qui n'existe pas encore dans src/components.
---

# Ajouter un composant

## Composant shadcn/ui

1. **Vérifier s'il existe déjà** dans `src/components/ui/`.
2. **L'installer** :

   ```bash
   npx shadcn@latest add select
   ```

   Le style du projet est `base-luma` (basé sur Base UI, pas Radix) : la CLI installe la bonne variante grâce à `components.json`. Le serveur MCP shadcn (`.mcp.json`) permet aussi de chercher les composants disponibles.

3. **L'exposer sur la page `/ui`** (`src/routes/ui.tsx`) dans un nouveau bloc `<Showcase title="Select">`, pour le voir en clair et en sombre.
4. **Vérifier** : `npm run lint && npm run build`.

Les fichiers de `src/components/ui/` appartiennent au projet : on peut les modifier, mais garder leur API (props, variantes) cohérente avec shadcn.

## Composant maison

- Le placer dans `src/components/` (pas dans `ui/`, réservé à shadcn), un fichier par composant, nom en kebab-case : `pricing-card.tsx`.
- Exporter une fonction nommée (`export function PricingCard`), accepter `className` et le fusionner avec `cn()` de `@/lib/utils`.
- Construire à partir des composants `ui/` existants plutôt que repartir de zéro.
- Si le composant a de la logique (état, calcul), ajouter un test `*.test.tsx` à côté.

## Composition Base UI

Pour qu'un composant en rende un autre, Base UI utilise la prop `render` (et non `asChild`) :

```tsx
<DialogTrigger render={<Button variant="outline" />}>Ouvrir</DialogTrigger>
```

Pour un lien stylé comme un bouton : `className={buttonVariants({ variant: 'outline' })}`.
