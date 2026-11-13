import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/use-theme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'clair' : 'sombre'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Passer en thème ${next}`}
      title={`Passer en thème ${next}`}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
