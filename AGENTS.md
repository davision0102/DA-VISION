# AGENTS.md

Instructions pour les assistants IA (Claude Code, Codex, Cursor, Copilot…) qui travaillent dans ce projet.
Format ouvert : https://agents.md

## Le projet

Fabrik est un starter React : une base propre pour lancer un site, une app ou un prototype.
L'identité du projet (nom, textes, liens GitHub) est centralisée dans `src/config/site.ts`.

## Stack

- React 19 + TypeScript (strict)
- Vite 8
- Tailwind CSS 4 (configuration dans `src/index.css`, pas de `tailwind.config`)
- shadcn/ui sur Base UI (`@base-ui/react`), icônes `lucide-react`
- TanStack Router, routes générées depuis les fichiers
- Vitest + Testing Library

## Commandes

| Commande         | Rôle                                       |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | serveur de développement (localhost:5173)  |
| `npm run build`  | vérification TypeScript + build production |
| `npm run lint`   | ESLint                                     |
| `npm run format` | Prettier (trie aussi les classes Tailwind) |
| `npm test`       | tests Vitest                               |

Avant de dire qu'une tâche est finie : `npm run lint`, `npm test` et `npm run build` doivent passer.

## Structure

```
src/
  config/site.ts      identité du projet (nom, textes, liens)
  routes/             une page = un fichier (TanStack Router)
  components/         composants de l'app
  components/ui/      composants shadcn — générés, modifiables
  hooks/              hooks React réutilisables
  lib/utils.ts        cn() pour fusionner les classes
  index.css           thème : couleurs, polices, rayons
.agents/skills/       skills (recettes pas à pas) — .claude/skills pointe ici
```

## Conventions

- **Imports** : toujours via l'alias `@/` (`@/components/ui/button`).
- **Pages** : un fichier dans `src/routes/` ; ne jamais modifier `src/routeTree.gen.ts`, il est régénéré automatiquement.
- **Couleurs** : uniquement les tokens du thème (`bg-background`, `text-muted-foreground`, `text-brand`…), jamais de couleurs Tailwind brutes (`bg-blue-500`) ni d'hexadécimal. Le mode sombre en dépend.
- **Composants UI** : ajouter avec `npx shadcn@latest add <nom>`, puis l'exposer sur la page `/ui`.
- **Liens** : `<Link>` de TanStack Router pour la navigation interne, `<a>` pour l'externe.
- **Textes** : l'interface est en français ; le nom du projet vient de `site.name`, jamais écrit en dur.
- **Simplicité** : pas de nouvelle dépendance sans raison claire, pas de fichiers inutiles.

## Skills disponibles

Recettes dans `.agents/skills/` — lis la bonne avant de commencer :

- `add-page` — créer une nouvelle page et l'ajouter à la navigation
- `add-component` — installer un composant shadcn/ui
- `design-system` — couleurs, polices et règles visuelles du thème
- `rebrand` — renommer le projet et changer son identité

## Outils MCP

`.mcp.json` déclare le serveur MCP shadcn : il permet de chercher et d'installer des composants depuis le registre shadcn.
