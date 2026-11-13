---
name: add-page
description: Créer une nouvelle page (route) dans l'app et l'ajouter à la navigation. À utiliser quand on demande une page, un écran, une route ou une section accessible par URL.
---

# Ajouter une page

Le routing est fait par TanStack Router à partir des fichiers de `src/routes/`.

## Étapes

1. **Créer le fichier** dans `src/routes/`. Le nom du fichier donne l'URL :
   - `src/routes/pricing.tsx` → `/pricing`
   - `src/routes/blog/index.tsx` → `/blog`
   - `src/routes/blog/$slug.tsx` → `/blog/:slug` (paramètre)

2. **Partir de ce modèle** :

   ```tsx
   import { createFileRoute } from '@tanstack/react-router'

   export const Route = createFileRoute('/pricing')({
     component: PricingPage,
   })

   function PricingPage() {
     return (
       <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
         <p className="text-sm font-medium text-brand">Tarifs</p>
         <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
           Titre de la page
         </h1>
         <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
           Phrase d'introduction.
         </p>
       </section>
     )
   }
   ```

   Le chemin passé à `createFileRoute` doit correspondre au fichier. Le serveur de dev régénère `src/routeTree.gen.ts` tout seul : ne pas l'éditer à la main.

3. **Ajouter le lien** dans la navigation de `src/routes/__root.tsx`, à côté des autres `<Link>`, avec la même classe `navLinkClass`.

4. **Vérifier** : `npm run build` (les liens vers une route inexistante cassent le build, c'est voulu), puis ouvrir la page en clair et en sombre.

## À respecter

- Garder la largeur `max-w-6xl` et les marges `px-4 sm:px-6` pour aligner avec le reste du site.
- Couleurs uniquement via les tokens du thème (voir le skill `design-system`).
