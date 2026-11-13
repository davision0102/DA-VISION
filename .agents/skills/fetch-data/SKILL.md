---
name: fetch-data
description: Charger des données depuis une API (liste, détail, recherche) avec chargement, erreurs et cache. À utiliser dès qu'une page affiche des données distantes.
---

# Charger des données

Deux options selon le besoin.

## Option A — loader de route (simple, sans dépendance)

Pour des données liées à une page, TanStack Router charge avant l'affichage :

```tsx
import { createFileRoute } from '@tanstack/react-router'

type Repo = { id: number; name: string; stargazers_count: number }

export const Route = createFileRoute('/repos')({
  loader: async () => {
    const res = await fetch('https://api.github.com/users/vitejs/repos')
    if (!res.ok) throw new Error('Impossible de charger les dépôts')
    return (await res.json()) as Repo[]
  },
  pendingComponent: () => (
    <p className="p-8 text-muted-foreground">Chargement…</p>
  ),
  errorComponent: ({ error }) => (
    <p className="p-8 text-destructive">{error.message}</p>
  ),
  component: ReposPage,
})

function ReposPage() {
  const repos = Route.useLoaderData()
  return (
    <ul className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {repos.map((r) => (
        <li key={r.id}>
          {r.name} · ★ {r.stargazers_count}
        </li>
      ))}
    </ul>
  )
}
```

## Option B — TanStack Query (cache, rafraîchissement, mutations)

Quand les données sont partagées entre pages, rafraîchies ou modifiées :

```bash
npm install @tanstack/react-query
```

Dans `src/main.tsx`, envelopper l'app :

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
// …
<QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
</QueryClientProvider>
```

Puis dans un composant :

```tsx
const { data, isPending, error } = useQuery({
  queryKey: ['repos', user],
  queryFn: () =>
    fetch(`https://api.github.com/users/${user}/repos`).then((r) => r.json()),
})
```

## Règles

- Toujours gérer les trois états : chargement, erreur, données (et liste vide).
- Typer la réponse (`type Repo = …`) ; pour une API externe peu fiable, valider avec zod.
- Les clés d'API secrètes ne vont **jamais** dans le code du site (il est public). Variables publiques uniquement via `import.meta.env.VITE_*` dans un fichier `.env.local` (ignoré par git).
