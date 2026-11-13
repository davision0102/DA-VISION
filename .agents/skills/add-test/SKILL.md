---
name: add-test
description: Écrire ou corriger un test (Vitest + Testing Library). À utiliser quand on ajoute de la logique, qu'on corrige un bug, ou qu'on demande des tests.
---

# Écrire un test

Les tests utilisent **Vitest** (même configuration que Vite, dans `vite.config.ts`), **jsdom** et **Testing Library**. Les matchers `toBeInTheDocument`, `toHaveClass`… sont chargés par `src/test/setup.ts`.

## Où et comment

- Le fichier de test se place à côté du fichier testé : `pricing-card.tsx` → `pricing-card.test.tsx`.
- Tester ce que voit et fait l'utilisateur, pas l'implémentation : chercher les éléments par rôle et par texte (`getByRole('button', { name: 'Envoyer' })`), interagir avec `userEvent`.
- Un test = un comportement, avec un nom en français qui le décrit.

## Modèle

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Counter } from './counter'

describe('Counter', () => {
  it('augmente la valeur au clic', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByRole('button', { name: 'Ajouter' }))

    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
```

Exemples réels dans le projet : `src/components/theme-toggle.test.tsx`, `src/components/copy-command.test.tsx`.

## Lancer

- `npm test` : une fois (c'est ce que lance la CI).
- `npm run test:watch` : en continu pendant le développement.

## Pour une correction de bug

Écrire d'abord le test qui reproduit le bug et vérifier qu'il échoue, puis corriger : le test garantit que le bug ne reviendra pas.
