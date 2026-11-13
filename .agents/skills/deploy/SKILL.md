---
name: deploy
description: Mettre le site en ligne (GitHub Pages, Vercel, Netlify, Cloudflare Pages) et dépanner un déploiement. À utiliser quand on demande de publier, héberger, déployer ou partager le site par un lien.
---

# Déployer le site

Le build produit un site statique dans `dist/` (`npm run build`). Toutes les pages sont gérées côté navigateur par TanStack Router : l'hébergeur doit donc renvoyer `index.html` pour toute adresse inconnue, sinon un lien direct vers `/ui` donne une erreur 404.

## GitHub Pages (déjà configuré)

Le workflow `.github/workflows/deploy.yml` publie le site à chaque push sur `main`.

1. Une seule fois, sur GitHub : **Settings → Pages → Source : GitHub Actions**.
2. Pousser sur `main`. L'adresse sera `https://<utilisateur>.github.io/<depot>/`.

Le site vit dans un sous-dossier : le workflow passe `BASE_PATH=/<depot>/` au build, Vite préfixe les fichiers et le routeur utilise `import.meta.env.BASE_URL`. Le workflow copie aussi `index.html` en `404.html` pour les liens directs.

Après un renommage du dépôt : mettre à jour les URL `og:url` et `og:image` dans `index.html`, et `demoUrl` dans `src/config/site.ts`.

## Vercel, Netlify ou Cloudflare Pages

Importer le dépôt depuis leur interface : ils détectent Vite tout seuls (commande `npm run build`, dossier `dist`). Le site est servi à la racine, il n'y a pas de `BASE_PATH` à définir.

Pour les liens directs :

- **Vercel** : créer `vercel.json` avec `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`.
- **Netlify** : créer `public/_redirects` contenant `/*  /index.html  200`.
- **Cloudflare Pages** : rien à faire, le mode SPA est automatique.

## Vérifier avant de publier

```bash
npm run build && npx vite preview
```

Pour simuler GitHub Pages : `BASE_PATH=/mon-depot/ npm run build && BASE_PATH=/mon-depot/ npx vite preview`, puis ouvrir `http://localhost:4173/mon-depot/`.
