import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Une première idée de projet.',
    },
    {
      title: 'Projet 2',
      description: 'Un test d’interface ou de concept.',
    },
    {
      title: 'Projet 3',
      description: 'Une future réalisation à présenter.',
    },
  ]

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm uppercase tracking-wide text-neutral-500">
        Projets
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Mes projets
      </h1>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-neutral-600">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}