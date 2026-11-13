/**
 * Identité du projet. C'est le seul endroit à modifier pour renommer le site.
 * Le nom, les textes principaux et les liens sont lus d'ici partout dans l'app.
 */
export const site = {
  name: 'Fabrik',
  tagline: 'Template React gratuit, pensé pour les designers',
  description:
    'Fabrik te donne une base déjà prête : la mise en page, les composants, le mode sombre et la mise en ligne sont réglés. Tu décris ce que tu veux à ton assistant IA, il écrit le code en respectant le projet.',
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
