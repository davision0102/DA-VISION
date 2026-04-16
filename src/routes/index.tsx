import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Template</Badge>
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">Tailwind</Badge>
        <Badge variant="secondary">TanStack Router</Badge>
        <Badge variant="secondary">Conductor</Badge>
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Mon template personnel
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
        Cette base me permet de lancer rapidement un site, une app ou un
        prototype avec une structure claire et des composants réutilisables.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button>Créer un nouveau projet</Button>
        <Button variant="outline">Voir mes projets</Button>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Base technique</CardTitle>
          </CardHeader>
          <CardContent>
            React, TypeScript, Tailwind, TanStack Router et Conductor déjà prêts.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Base UI</CardTitle>
          </CardHeader>
          <CardContent>
            Des composants modernes et réutilisables pour démarrer plus vite.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Réutilisable</CardTitle>
          </CardHeader>
          <CardContent>
            Je peux copier ce template pour créer plusieurs projets différents.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}