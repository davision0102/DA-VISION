import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { GithubIcon } from '@/components/github-icon'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/config/site'

export const Route = createRootRoute({
  component: RootLayout,
})

const navLinkClass =
  'rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-secondary [&.active]:text-foreground'

function RootLayout() {
  return (
    <div className="flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" aria-label={`${site.name} — accueil`}>
            <Logo />
          </Link>

          <nav className="flex items-center gap-1">
            <Link
              to="/"
              className={`${navLinkClass} max-sm:hidden`}
              activeOptions={{ exact: true }}
            >
              Accueil
            </Link>
            <Link to="/ui" className={navLinkClass}>
              Composants
            </Link>
            <span className="mx-1 h-5 w-px bg-border" aria-hidden="true" />
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Code source sur GitHub"
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <GithubIcon className="size-4" />
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <p>{site.name} · open source sous licence MIT</p>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Voir le code sur GitHub →
          </a>
        </div>
      </footer>
    </div>
  )
}
