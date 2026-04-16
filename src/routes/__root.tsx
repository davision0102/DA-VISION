import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold">LDDAB Studio</p>

          <nav className="flex gap-4 text-sm">
            <Link
              to="/"
              className="[&.active]:font-semibold [&.active]:text-blue-600"
            >
              Accueil
            </Link>
            <Link
              to="/projects"
              className="[&.active]:font-semibold [&.active]:text-blue-600"
            >
              Projets
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}