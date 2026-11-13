---
name: add-form
description: Créer un formulaire avec validation (contact, inscription, newsletter, paramètres). À utiliser dès qu'un formulaire a plus d'un champ ou des règles de validation.
---

# Ajouter un formulaire

Pour un champ unique sans règle (une recherche), un simple `useState` suffit. Au-delà, utiliser **react-hook-form** et **zod**.

## 1. Installer (la première fois)

```bash
npm install react-hook-form zod @hookform/resolvers
npx shadcn@latest add label
```

## 2. Modèle

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const schema = z.object({
  email: z.email('Adresse e-mail invalide'),
  message: z.string().min(10, 'Au moins 10 caractères'),
})

type Values = z.infer<typeof schema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Values>({ resolver: zodResolver(schema) })

  async function onSubmit(values: Values) {
    // Envoyer les données ici (API, service de formulaires…)
    console.log(values)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="justify-self-start"
      >
        {isSubmitting ? 'Envoi…' : 'Envoyer'}
      </Button>
      {isSubmitSuccessful && (
        <p className="text-sm text-muted-foreground">Merci, message envoyé !</p>
      )}
    </form>
  )
}
```

## Règles

- Chaque champ a un `<Label>` relié par `htmlFor` / `id`.
- `aria-invalid` sur un champ en erreur : les composants `ui/` affichent alors la bordure rouge tout seuls.
- Messages d'erreur courts, en français, sous le champ.
- Le site est statique : pour recevoir les messages sans serveur, utiliser un service de formulaires (Formspree, Web3Forms…) ou une fonction serverless.
- Ajouter un test (skill `add-test`) qui vérifie l'affichage d'une erreur et l'envoi valide.
