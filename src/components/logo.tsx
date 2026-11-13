import { cn } from '@/lib/utils'
import { site } from '@/config/site'

/** Marque : un « F » fait de trois blocs empilés, comme une pièce qu'on assemble. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn('size-7 shrink-0', className)}
    >
      <rect width="32" height="32" rx="8" className="fill-foreground" />
      <rect x="8" y="7" width="16" height="5" rx="1.5" className="fill-brand" />
      <rect
        x="8"
        y="14"
        width="11"
        height="5"
        rx="1.5"
        className="fill-brand/75"
      />
      <rect
        x="8"
        y="21"
        width="5"
        height="5"
        rx="1.5"
        className="fill-brand/50"
      />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark />
      <span className="font-heading text-lg font-semibold tracking-tight">
        {site.name}
      </span>
    </span>
  )
}
