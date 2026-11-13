import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <p className="font-heading text-8xl font-semibold tracking-tight text-brand/30 sm:text-9xl">
        404
      </p>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        Cette page n’a pas encore été fabriquée.
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        L’adresse est peut-être mal écrite, ou la page a été déplacée.
      </p>
      <Link
        to="/"
        className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-11 px-5')}
      >
        <ArrowLeft data-icon="inline-start" />
        Retour à l’accueil
      </Link>
    </section>
  )
}
