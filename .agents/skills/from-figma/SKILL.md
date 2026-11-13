---
name: from-figma
description: Transformer une maquette (lien Figma, capture d'écran ou export) en page ou composant du projet. À utiliser quand l'utilisateur partage un design à intégrer, un lien figma.com, ou dit « fais-moi cette page ».
---

# Intégrer une maquette

L'utilisateur est souvent designer : la maquette fait foi. Le but est un rendu fidèle, construit avec les briques du projet, pas une copie pixel par pixel en valeurs codées en dur.

## 1. Récupérer la maquette

- **Lien Figma** : si le serveur MCP Figma est disponible, l'utiliser pour lire le cadre (structure, textes, couleurs, espacements, captures). Sinon, demander une capture d'écran du cadre.
- **Capture ou export** : l'analyser directement.
- Demander si besoin la version mobile. S'il n'y en a pas, la déduire en empilant les colonnes.

## 2. Faire l'inventaire avant de coder

Lister, en quelques lignes, à montrer à l'utilisateur :

- les **sections** de la page, de haut en bas ;
- les **composants** reconnus et leur équivalent dans `src/components/ui/` (bouton, carte, champ, badge, fenêtre…). Ceux qui manquent : skill `add-component` ;
- les **couleurs** : les rapprocher des tokens du thème (`background`, `foreground`, `muted-foreground`, `brand`…). Si la maquette a une couleur principale différente, proposer de changer `--brand` plutôt que d'ajouter des couleurs en dur ;
- les **polices** : si elles diffèrent, proposer de changer `--font-heading` / `--font-sans` (skill `design-system`).

## 3. Construire

- Une page : skill `add-page`. Un bloc réutilisable : un composant dans `src/components/`.
- Mise en page avec Flexbox et Grid de Tailwind, conteneur `mx-auto max-w-6xl px-4 sm:px-6`.
- **Espacements** : arrondir à l'échelle Tailwind la plus proche (un 22 px de Figma devient `gap-5` ou `gap-6`), sauf si l'écart se voit vraiment.
- **Textes** : reprendre exactement ceux de la maquette. Lorem ipsum seulement s'il y en a dans la maquette.
- **Images** : les placer dans `public/` et demander les fichiers d'origine si on n'a que la capture. Toujours un `alt` utile.
- **Icônes** : `lucide-react`, en choisissant la plus proche.

## 4. Vérifier

- Comparer côte à côte avec la maquette, à la même largeur d'écran (1440 px puis 375 px), et corriger les écarts visibles : alignements, tailles de texte, espacements.
- Vérifier en mode sombre : les tokens doivent suffire, sinon signaler ce qui manque dans la maquette.
- Terminer par le skill `polish-ui`.
