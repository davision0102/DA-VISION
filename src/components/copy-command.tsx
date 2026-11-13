import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Une commande sur une ligne, avec un bouton pour la copier. */
export function CopyCommand({
  command,
  className,
}: {
  command: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // presse-papiers refusé : l'utilisateur peut toujours sélectionner le texte
    }
  }

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-full border border-border bg-card py-1.5 pr-1.5 pl-4 font-mono text-sm shadow-xs',
        className,
      )}
    >
      <span className="text-brand select-none" aria-hidden="true">
        $
      </span>
      <code className="min-w-0 flex-1 truncate">{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Commande copiée' : 'Copier la commande'}
        className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        {copied ? (
          <Check className="size-4 text-brand" />
        ) : (
          <Copy className="size-4" />
        )}
      </button>
    </div>
  )
}
