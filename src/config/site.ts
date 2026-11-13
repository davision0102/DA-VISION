/**
 * Identité du projet — c'est le seul endroit à modifier pour renommer le site.
 * Le nom, les textes principaux et les liens sont lus d'ici partout dans l'app.
 */
export const site = {
  name: 'Fabrik',
  tagline: 'Le starter React prêt pour l’IA',
  description:
    'Une base moderne, propre et documentée pour lancer un site, une app ou un prototype en quelques minutes — avec ton assistant IA déjà briefé.',
  repo: 'davision0102/fabrik',
  /** Adresse de la démo en ligne (GitHub Pages, voir le skill `deploy`). */
  demoUrl: 'https://davision0102.github.io/fabrik/',
  get githubUrl() {
    return `https://github.com/${this.repo}`
  },
  get templateUrl() {
    return `https://github.com/${this.repo}/generate`
  },
} as const
