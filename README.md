<div align="center">

<img src="public/favicon.svg" width="56" height="56" alt="" />

# Fabrik

Un template React gratuit pour créer un vrai site, même si tu n'es pas développeur.

[![CI](https://github.com/davision0102/fabrik/actions/workflows/ci.yml/badge.svg)](https://github.com/davision0102/fabrik/actions/workflows/ci.yml)
[![Deploy](https://github.com/davision0102/fabrik/actions/workflows/deploy.yml/badge.svg)](https://davision0102.github.io/fabrik/)
![Licence MIT](https://img.shields.io/badge/licence-MIT-ff5a1f)

[Voir la démo](https://davision0102.github.io/fabrik/) · [Utiliser ce template](https://github.com/davision0102/fabrik/generate) · [Guide pas à pas](#premiers-pas-pas-à-pas)

<img src="docs/screenshot.png" alt="Page d'accueil de Fabrik" width="860" />

</div>

## Pourquoi j'ai fait ça

Je suis designer à la base. Pendant longtemps, passer de la maquette au vrai site voulait dire galérer : installer des outils dont je ne comprenais pas le nom, suivre des tutos qui ne marchaient plus, casser quelque chose sans savoir quoi.

Avec les assistants IA, c'est devenu beaucoup plus accessible. Mais il manquait une bonne base de départ : un projet propre, déjà configuré, que l'IA comprend et ne transforme pas en chantier.

Fabrik, c'est cette base. Je l'utilise pour mes propres projets et je la partage pour ceux qui sont dans la même situation que moi.

## Pour qui ?

- **Les designers** qui veulent mettre leurs maquettes en ligne eux-mêmes
- **Les débutants** qui veulent un projet qui marche dès le départ, sans tout configurer
- **Les développeurs** qui veulent juste gagner une heure au début de chaque projet

## Ce qui est déjà prêt

- **Une bibliothèque de composants** : boutons, champs, fenêtres, cartes… Tu les vois tous sur la page `/ui` du site, comme une librairie Figma.
- **Un design system en variables** : couleurs, polices et arrondis sont réglés dans un seul fichier. Tu changes la couleur principale, tout le site suit.
- **Le mode clair et le mode sombre**, sans rien faire.
- **Un mode d'emploi pour ton assistant IA** : il sait comment ajouter une page ou un composant sans casser le reste.
- **Des garde-fous** : si quelque chose ne va pas dans le code, tu es prévenu avant que ce soit en ligne.
- **La mise en ligne gratuite** sur GitHub Pages, avec une vraie adresse à partager.

## Premiers pas, pas à pas

Si tu n'as jamais lancé un projet de code, suis ces étapes dans l'ordre. Compte une vingtaine de minutes la première fois.

### Ce qu'il te faut

1. **Un compte GitHub**, gratuit, sur [github.com](https://github.com). C'est là que ton projet sera stocké.
2. **Node.js**, à télécharger sur [nodejs.org](https://nodejs.org). Prends la version « LTS » et installe-la comme une application normale. C'est le moteur qui fait tourner le projet sur ton ordinateur.
3. **Un éditeur avec un assistant IA.** Au choix :
   - [Cursor](https://cursor.com), le plus simple pour commencer
   - [VS Code](https://code.visualstudio.com) avec [Claude Code](https://claude.com/claude-code)
   - l'application [Claude](https://claude.ai/download), onglet Code

### 1. Crée ton propre projet

En haut de cette page, clique sur le bouton vert **Use this template**, puis **Create a new repository**. Donne-lui un nom (par exemple `mon-portfolio`) et valide.

Tu as maintenant ta propre copie de Fabrik sur GitHub. Elle t'appartient, tu peux tout modifier.

### 2. Récupère-le sur ton ordinateur

Dans Cursor ou VS Code, choisis **Clone Git Repository** sur l'écran d'accueil, colle l'adresse de ton nouveau dépôt (celle de la page GitHub) et choisis un dossier.

### 3. Lance le site

Ouvre le terminal intégré à l'éditeur (menu **Terminal › New Terminal**), puis tape ces deux commandes, l'une après l'autre :

```bash
npm install
npm run dev
```

La première télécharge ce dont le projet a besoin (une seule fois). La deuxième lance le site. Ouvre [localhost:5173](http://localhost:5173) dans ton navigateur : c'est ton site, sur ton ordinateur. Il se met à jour tout seul à chaque modification.

### 4. Demande ce que tu veux à ton assistant

Ouvre le chat de l'assistant dans l'éditeur et écris comme tu parlerais à un développeur. Par exemple :

- « Renomme le projet en Studio Lumen et change la couleur principale en vert sapin »
- « Remplace la page d'accueil par mon portfolio : une intro, puis mes projets en grille »
- « Ajoute une page contact avec un formulaire nom, e-mail et message »
- « Utilise la police Fraunces pour les titres »

Il lit le mode d'emploi du projet et suit ses règles. Regarde le résultat dans ton navigateur et ajuste au fur et à mesure.

### 5. Mets ton site en ligne

Une seule fois : sur la page GitHub de ton projet, va dans **Settings › Pages** et choisis **GitHub Actions** comme source.

Ensuite, chaque fois que tu veux publier : demande à ton assistant « enregistre et envoie mes changements sur GitHub », ou utilise le bouton **Commit** puis **Sync** dans l'éditeur. Quelques minutes plus tard, ton site est en ligne à l'adresse `https://ton-pseudo.github.io/nom-du-projet/`.

### Si ça bloque

- **Copie le message d'erreur et colle-le à ton assistant.** C'est souvent la solution la plus rapide.
- Si le site ne s'affiche plus, vérifie que `npm run dev` tourne toujours dans le terminal.
- Toujours bloqué ? [Ouvre une issue](https://github.com/davision0102/fabrik/issues) en expliquant ce que tu as fait, je t'aiderai.

### Petit lexique

| Mot                | Ce que ça veut dire                                             |
| ------------------ | --------------------------------------------------------------- |
| Terminal           | la fenêtre où l'on tape des commandes au lieu de cliquer        |
| `npm`              | l'outil qui installe et lance le projet (il vient avec Node.js) |
| Dépôt (repository) | le dossier de ton projet, stocké sur GitHub                     |
| Commit             | une sauvegarde de tes modifications, avec un petit message      |
| Push / Sync        | envoyer tes sauvegardes sur GitHub                              |
| Composant          | un élément réutilisable, comme un symbole dans Figma            |
| `localhost`        | l'adresse de ton site quand il tourne sur ton ordinateur        |
| Déployer           | mettre le site en ligne                                         |

## Travailler avec une IA

Les assistants (Claude Code, Cursor, Codex, Copilot…) lisent le fichier `AGENTS.md` à la racine du projet. Il leur explique comment le projet est rangé et les règles à suivre, par exemple utiliser les couleurs du thème plutôt que d'en inventer.

Pour les tâches courantes, il y a aussi des fiches pas à pas dans `.agents/skills/`. L'assistant choisit tout seul la bonne :

| Fiche           | Pour…                                                  |
| --------------- | ------------------------------------------------------ |
| `add-page`      | créer une page et l'ajouter au menu                    |
| `add-component` | installer un composant ou en créer un                  |
| `add-form`      | faire un formulaire avec vérification des champs       |
| `fetch-data`    | afficher des données venant d'une API                  |
| `add-test`      | écrire un test                                         |
| `design-system` | respecter les couleurs, les polices et les espacements |
| `deploy`        | mettre le site en ligne                                |
| `rebrand`       | renommer le projet et changer son identité             |

## Personnaliser à la main

Si tu préfères mettre les mains dans le code :

- **Le nom et les textes** sont dans `src/config/site.ts`.
- **La couleur principale** est la variable `--brand` dans `src/index.css`. Il y en a une pour le mode clair et une pour le mode sombre.
- **Les polices** se règlent avec `--font-heading` et `--font-sans`, dans le même fichier.
- **Les pages** sont dans `src/routes/` : un fichier égale une page.

## Pour les développeurs

Stack : React 19, TypeScript, Vite 8, Tailwind CSS 4, shadcn/ui (Base UI), TanStack Router, Vitest.

```bash
npx degit davision0102/fabrik mon-projet
cd mon-projet && npm install && npm run dev
```

| Commande          | Ce qu'elle fait                                |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | serveur de développement                       |
| `npm run build`   | vérification TypeScript et build de production |
| `npm run preview` | prévisualise le build                          |
| `npm run lint`    | ESLint                                         |
| `npm run format`  | Prettier, avec le tri des classes Tailwind     |
| `npm test`        | Vitest                                         |

Les hooks Lefthook formatent et lintent à chaque commit, et la CI GitHub relance lint, format, tests et build. Le déploiement GitHub Pages passe par `.github/workflows/deploy.yml` ; la fiche `deploy` couvre aussi Vercel, Netlify et Cloudflare Pages. Le fichier `.mcp.json` branche le serveur MCP de shadcn.

```
src/
  config/site.ts      nom, textes et liens du projet
  routes/             les pages (un fichier = une page)
  components/         les composants du site
  components/ui/      les composants shadcn/ui
  hooks/              la logique réutilisable
  index.css           le thème : couleurs, polices, arrondis
.agents/skills/       les fiches pour les assistants IA
```

## Contribuer

Une idée, un bug, une fiche qui manque, une étape du guide pas claire ? Ouvre une issue ou une pull request, je regarde tout. Les retours de designers et de débutants m'intéressent particulièrement.

La branche `main` est protégée : les modifications passent par une pull request, et les vérifications automatiques doivent être au vert avant la fusion.

## Licence

MIT. Tu peux l'utiliser pour ce que tu veux, y compris pour des projets clients.
