<div align="center">

<img src="public/favicon.svg" width="56" height="56" alt="" />

# Fabrik

**Le starter React prêt pour l’IA.**
Une base moderne, propre et documentée pour lancer un site, une app ou un prototype en quelques minutes — avec ton assistant IA déjà briefé.

[![CI](https://github.com/davision0102/fabrik/actions/workflows/ci.yml/badge.svg)](https://github.com/davision0102/fabrik/actions/workflows/ci.yml)
[![Deploy](https://github.com/davision0102/fabrik/actions/workflows/deploy.yml/badge.svg)](https://davision0102.github.io/fabrik/)
![React 19](https://img.shields.io/badge/React-19-149eca)
![Vite 8](https://img.shields.io/badge/Vite-8-646cff)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)
![Licence MIT](https://img.shields.io/badge/licence-MIT-ff5a1f)

[**Voir la démo**](https://davision0102.github.io/fabrik/) · [**Utiliser ce template →**](https://github.com/davision0102/fabrik/generate)

<img src="docs/screenshot.png" alt="Page d'accueil de Fabrik" width="860" />

</div>

## Pourquoi Fabrik

Démarrer un projet, c'est souvent une heure de configuration avant d'écrire la première ligne utile. Fabrik fait les choix ennuyeux à ta place et prépare le terrain pour que ton assistant IA (Claude Code, Codex, Cursor…) travaille proprement dès le départ.

- **Prêt pour l’IA** — `AGENTS.md`, des skills pas à pas et le serveur MCP shadcn sont inclus.
- **Composants shadcn/ui** — accessibles, basés sur Base UI, et entièrement modifiables.
- **Routing typé** — un fichier dans `src/routes/`, une page ; les liens cassés ne compilent pas.
- **Mode sombre** — thème clair/sombre par variables CSS, sans flash au chargement.
- **Qualité intégrée** — ESLint, Prettier, Vitest, hooks de commit et CI GitHub.
- **Rapide** — Vite 8 et Tailwind CSS 4, rechargement instantané.

## Démarrer

```bash
npx degit davision0102/fabrik mon-projet
cd mon-projet
npm install
npm run dev
```

Le site tourne sur [localhost:5173](http://localhost:5173). Tu peux aussi cliquer sur **Use this template** en haut de la page GitHub.

Puis renomme le projet : modifie `src/config/site.ts`, ou demande simplement à ton assistant IA « renomme le projet en … » — il suivra le skill `rebrand`.

## Commandes

| Commande          | Rôle                                           |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | serveur de développement                       |
| `npm run build`   | vérification TypeScript + build production     |
| `npm run preview` | prévisualiser le build                         |
| `npm run lint`    | ESLint                                         |
| `npm run format`  | Prettier (trie aussi les classes Tailwind)     |
| `npm test`        | tests Vitest (`npm run test:watch` en continu) |

## Travailler avec une IA

Fabrik est pensé pour être utilisé avec un assistant de code.

| Fichier           | Rôle                                                                |
| ----------------- | ------------------------------------------------------------------- |
| `AGENTS.md`       | les règles du projet, lues par Claude Code, Codex, Cursor, Copilot… |
| `CLAUDE.md`       | renvoie vers `AGENTS.md` pour Claude Code                           |
| `.agents/skills/` | recettes pas à pas (`.claude/skills` pointe vers ce dossier)        |
| `.mcp.json`       | serveur MCP shadcn : l'IA cherche et installe les composants        |

Skills inclus :

- **add-page** — créer une page et l'ajouter à la navigation
- **add-component** — installer un composant shadcn/ui ou en créer un
- **design-system** — couleurs, polices et règles visuelles
- **rebrand** — renommer le projet et changer son identité
- **add-test** — écrire un test Vitest + Testing Library
- **add-form** — formulaire avec validation (react-hook-form + zod)
- **fetch-data** — charger des données d'une API
- **deploy** — mettre le site en ligne

Essaie par exemple : _« ajoute une page tarifs avec trois offres »_.

## Mettre en ligne

Le site se publie tout seul sur **GitHub Pages** à chaque push sur `main` (`.github/workflows/deploy.yml`). Une seule action à faire : **Settings → Pages → Source : GitHub Actions**.

Vercel, Netlify et Cloudflare Pages fonctionnent aussi sans configuration : le skill `deploy` détaille chaque option.

## Structure

```
src/
  config/site.ts      nom, textes et liens du projet
  routes/             une page = un fichier
  components/         composants de l'app
  components/ui/      composants shadcn/ui
  hooks/              hooks React
  index.css           thème : couleurs, polices, arrondis
.agents/skills/       skills pour l'IA
```

## Personnaliser

- **Nom et textes** : `src/config/site.ts`
- **Couleur signature** : `--brand` dans `src/index.css` (clair et sombre)
- **Polices** : `--font-heading` et `--font-sans` dans `src/index.css`
- **Nouveau composant** : `npx shadcn@latest add <nom>`, visible ensuite sur la page `/ui`

## Stack

[React 19](https://react.dev) · [TypeScript](https://www.typescriptlang.org) · [Vite 8](https://vite.dev) · [Tailwind CSS 4](https://tailwindcss.com) · [shadcn/ui](https://ui.shadcn.com) · [Base UI](https://base-ui.com) · [TanStack Router](https://tanstack.com/router) · [Vitest](https://vitest.dev) · [Lefthook](https://lefthook.dev)

## Licence

[MIT](LICENSE) — prends-le, modifie-le, fais-en le tien.
