import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Bot,
  Layers,
  MoonStar,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { CopyCommand } from '@/components/copy-command'
import { GithubIcon } from '@/components/github-icon'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/config/site'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const features = [
  {
    icon: Bot,
    title: 'Pensé pour travailler avec une IA',
    text: 'Un fichier AGENTS.md explique le projet à ton assistant (Claude, Codex, Cursor…), et des fiches pratiques lui montrent comment ajouter une page ou un composant proprement.',
  },
  {
    icon: Layers,
    title: 'Des composants prêts à l’emploi',
    text: 'Boutons, champs, fenêtres, cartes… basés sur shadcn/ui. Le code est dans ton projet, tu le modifies comme tu veux, et tu en ajoutes d’autres en une commande.',
  },
  {
    icon: RouteIcon,
    title: 'Une page, un fichier',
    text: 'Pour créer une page, tu ajoutes un fichier dans src/routes. Si un lien pointe vers une page qui n’existe pas, le projet te le signale avant la mise en ligne.',
  },
  {
    icon: MoonStar,
    title: 'Mode clair et sombre',
    text: 'Les deux thèmes marchent dès le départ, et le site se souvient du choix du visiteur. Pour changer la couleur principale, tu modifies une seule ligne.',
  },
  {
    icon: ShieldCheck,
    title: 'Moins de bugs en ligne',
    text: 'Le code est vérifié et mis en forme à chaque commit, et les tests tournent sur GitHub à chaque envoi. Les erreurs se voient avant d’arriver sur le site.',
  },
  {
    icon: Sparkles,
    title: 'En ligne en un push',
    text: 'Le site se publie tout seul sur GitHub Pages dès que tu envoies ton code. Vercel ou Netlify marchent aussi sans réglage particulier.',
  },
]

const stack = [
  'React 19',
  'TypeScript',
  'Vite 8',
  'Tailwind CSS 4',
  'shadcn/ui',
  'TanStack Router',
  'Vitest',
]

const steps = [
  {
    title: 'Copie le template',
    text: 'Clique sur « Utiliser ce template » sur GitHub, ou lance la commande degit ci-dessus.',
  },
  {
    title: 'Lance le site',
    text: 'npm install, puis npm run dev. Ton site s’ouvre sur ton ordinateur et se met à jour à chaque sauvegarde.',
  },
  {
    title: 'Construis ton projet',
    text: 'Modifie les pages toi-même ou demande à ton assistant IA : il suit les règles du projet.',
  },
]

function HomePage() {
  return (
    <>
      <Hero />
      <Stack />
      <Features />
      <Steps />
      <FinalCta />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] [background-size:22px_22px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 md:pt-24 lg:grid-cols-[1.1fr_1fr]">
        <div className="min-w-0 animate-in duration-700 fade-in slide-in-from-bottom-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" />
            {site.tagline}
          </span>

          <h1 className="mt-6 text-5xl leading-[1.02] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Démarre ton projet React{' '}
            <span className="text-brand">sans rien configurer.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.templateUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5')}
            >
              Utiliser ce template
              <ArrowRight data-icon="inline-end" />
            </a>
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-11 px-5',
              )}
            >
              <GithubIcon data-icon="inline-start" className="size-4" />
              Voir sur GitHub
            </a>
          </div>

          <CopyCommand
            command={`npx degit ${site.repo} mon-projet`}
            className="mt-6 max-w-lg"
          />
        </div>

        <TerminalPreview />
      </div>
    </section>
  )
}

function TerminalPreview() {
  return (
    <div className="min-w-0 animate-in delay-150 duration-700 fill-mode-both fade-in slide-in-from-bottom-6">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl ring-1 shadow-foreground/10 ring-foreground/5">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="size-3 rounded-full bg-foreground/15" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            mon-projet · zsh
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
          <code>
            <Line prompt>npm install</Line>
            <Line muted>added 312 packages in 4s</Line>
            <Line prompt>npm run dev</Line>
            <Line>
              <span className="text-brand">VITE v8</span>{' '}
              <span className="text-muted-foreground">ready in 380 ms</span>
            </Line>
            <Line muted>➜ Local: http://localhost:5173/</Line>
            <Line>&nbsp;</Line>
            <Line prompt>claude "ajoute une page tarifs"</Line>
            <Line muted>Lecture de AGENTS.md et des skills…</Line>
            <Line>
              <span className="text-brand">✓</span> src/routes/pricing.tsx créé
            </Line>
            <Line>
              <span className="text-brand">✓</span> lien ajouté dans la
              navigation
            </Line>
          </code>
        </pre>
      </div>
    </div>
  )
}

function Line({
  children,
  prompt,
  muted,
}: {
  children: React.ReactNode
  prompt?: boolean
  muted?: boolean
}) {
  return (
    <span className={cn('block', muted && 'text-muted-foreground')}>
      {prompt && (
        <span className="text-brand select-none" aria-hidden="true">
          ${' '}
        </span>
      )}
      {children}
    </span>
  )
}

function Stack() {
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-6 sm:px-6">
        {stack.map((item) => (
          <span
            key={item}
            className="font-heading text-sm font-medium text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Ce qu’il y a dedans"
        title="Tout ce qu’on règle d’habitude au début d’un projet."
        text="Fabrik s’occupe de la configuration pour que tu commences directement par ce qui compte : ton site."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group bg-card p-7 transition-colors hover:bg-secondary/40"
          >
            <div className="grid size-10 place-items-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover:-rotate-6">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Steps() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <SectionHeading eyebrow="Démarrage" title="Comment ça marche" />
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-border p-7"
          >
            <span className="font-heading text-5xl font-semibold text-brand/30">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-16 text-center text-background sm:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl"
        />
        <h2 className="relative text-3xl font-semibold tracking-tight sm:text-5xl">
          Prêt à commencer ?
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-background/70">
          C’est gratuit et open source. Utilise-le pour un site perso, un
          prototype ou un vrai produit, et adapte-le à ta façon.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.templateUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-11 bg-brand px-5 text-brand-foreground hover:bg-brand/90',
            )}
          >
            Utiliser ce template
            <ArrowRight data-icon="inline-end" />
          </a>
          <Link
            to="/ui"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'lg' }),
              'h-11 px-5 text-background hover:bg-background/10 hover:text-background',
            )}
          >
            Voir les composants
          </Link>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-brand">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  )
}
