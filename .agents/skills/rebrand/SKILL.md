---
name: rebrand
description: Renommer le projet et changer son identité (nom, description, logo, favicon, couleur, dépôt GitHub). À utiliser quand on démarre un nouveau projet à partir de ce template.
---

# Renommer le projet

Quand le template sert de base à un nouveau projet, voici tout ce qui porte l'identité.

## Fichiers à modifier

1. **`src/config/site.ts`** — `name`, `tagline`, `description`, `repo` (`utilisateur/depot` sur GitHub), `demoUrl`. Tout le site lit ces valeurs.
2. **`package.json`** — le champ `name` (minuscules, tirets).
3. **`index.html`** — `<title>`, `<meta name="description">`, `theme-color` et les balises `og:*` (titre, description, URL de la démo).
4. **`public/og-image.png`** — l'aperçu affiché lors d'un partage (1200 × 630). À refaire avec le nouveau nom.
5. **`public/favicon.svg`** et **`src/components/logo.tsx`** — la marque. Le logo utilise `fill-foreground` et `fill-brand` : il suit le thème automatiquement.
6. **Couleur signature** — `--brand` dans `src/index.css` (voir le skill `design-system`).
7. **`README.md`** et **`AGENTS.md`** — le nom et la description du projet.
8. **`LICENSE`** — le nom du titulaire des droits.

## Ensuite

- Remplacer le contenu de `src/routes/index.tsx` (la page de présentation du template) par la vraie page d'accueil du projet.
- Garder ou supprimer `src/routes/ui.tsx` (vitrine des composants) selon le besoin.
- Chercher les restes : `grep -ri "fabrik" --exclude-dir=node_modules .`
- Vérifier : `npm run lint && npm test && npm run build`.
