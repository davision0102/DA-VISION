import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const Route = createFileRoute('/ui')({
  component: UiPage,
})

/**
 * Vitrine des composants installés. Sert d'aide-mémoire visuel :
 * ajoute ici chaque nouveau composant shadcn pour le voir en clair et en sombre.
 */
function UiPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-brand">Composants</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        La boîte à outils
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Les composants déjà installés, dans {`src/components/ui`}. Pour en
        ajouter un :{' '}
        <code className="font-mono text-foreground">
          npx shadcn add &lt;nom&gt;
        </code>
        .
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Showcase title="Button">
          <div className="flex flex-wrap gap-3">
            <Button>Par défaut</Button>
            <Button variant="secondary">Secondaire</Button>
            <Button variant="outline">Contour</Button>
            <Button variant="ghost">Fantôme</Button>
            <Button variant="destructive">Supprimer</Button>
            <Button variant="link">Lien</Button>
          </div>
        </Showcase>

        <Showcase title="Badge">
          <div className="flex flex-wrap gap-2">
            <Badge>Nouveau</Badge>
            <Badge variant="secondary">Brouillon</Badge>
            <Badge variant="outline">v1.0</Badge>
            <Badge variant="destructive">Erreur</Badge>
          </div>
        </Showcase>

        <Showcase title="Input & Textarea">
          <div className="grid gap-3">
            <Input placeholder="ton@email.com" type="email" />
            <Textarea placeholder="Décris ton idée…" />
          </div>
        </Showcase>

        <Showcase title="Dialog">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" />}>
              Ouvrir la fenêtre
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nouveau projet</DialogTitle>
                <DialogDescription>
                  Donne un nom à ton projet pour commencer.
                </DialogDescription>
              </DialogHeader>
              <Input placeholder="mon-super-projet" />
              <DialogFooter>
                <DialogClose render={<Button variant="ghost" />}>
                  Annuler
                </DialogClose>
                <DialogClose render={<Button />}>Créer</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Showcase>

        <Showcase title="Card" className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-3">
            {['Starter', 'Pro', 'Équipe'].map((plan, i) => (
              <Card key={plan} size="sm">
                <CardHeader>
                  <CardTitle>{plan}</CardTitle>
                  <CardDescription>
                    Exemple de carte de contenu.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-heading text-3xl font-semibold">
                    {i * 9}€
                    <span className="text-sm text-muted-foreground">/mois</span>
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant={i === 1 ? 'default' : 'outline'}>
                    Choisir
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Showcase>
      </div>
    </section>
  )
}

function Showcase({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`rounded-3xl border border-border bg-card p-6 ${className ?? ''}`}
    >
      <h2 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </div>
  )
}
