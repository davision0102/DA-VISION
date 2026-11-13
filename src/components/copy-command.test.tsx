import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CopyCommand } from './copy-command'

describe('CopyCommand', () => {
  it('copie la commande dans le presse-papiers', async () => {
    const user = userEvent.setup()
    render(<CopyCommand command="npm run dev" />)

    await user.click(screen.getByRole('button', { name: 'Copier la commande' }))

    expect(await navigator.clipboard.readText()).toBe('npm run dev')
    expect(
      screen.getByRole('button', { name: 'Commande copiée' }),
    ).toBeInTheDocument()
  })
})
