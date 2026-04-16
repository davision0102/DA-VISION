import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-neutral-500">
        Accueil
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Mon espace personnel de projets
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-600">
        Ce site me sert à organiser mes idées, présenter mes projets et créer
        une base réutilisable.
      </p>
    </section>
  )
}