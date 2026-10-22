import { House, Info, Link2, Moon, Sun } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { PageKey, Theme } from '../App'

type HeaderProps = {
  currentPage: PageKey
  theme: Theme
  onToggleTheme: () => void
}

const navigationItems: { key: PageKey; label: string; href: string; icon: LucideIcon }[] = [
  { key: 'home', label: 'Home', href: './index.html', icon: House },
  { key: 'about', label: 'About', href: './about.html', icon: Info },
  { key: 'form', label: 'Send Link', href: './form.html', icon: Link2 },
]

export default function Header({ currentPage, theme, onToggleTheme }: HeaderProps) {
  const themeAction = theme === 'light' ? 'dark' : 'light'
  const ThemeIcon = theme === 'light' ? Moon : Sun

  return (
    <header className="topbar">
      <nav className="navigation" aria-label="Main navigation">
        {navigationItems.map(({ key, label, href, icon: Icon }) => (
          <a
            className={`nav-link${currentPage === key ? ' is-active' : ''}`}
            href={href}
            aria-label={label}
            aria-current={currentPage === key ? 'page' : undefined}
            key={key}
          >
            <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <div className="toolbar">
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${themeAction} mode`}
          title={`Switch to ${themeAction} mode`}
        >
          <ThemeIcon size={17} strokeWidth={1.8} aria-hidden="true" />
          <span className="theme-label">{`Switch to ${themeAction} mode`}</span>
        </button>
      </div>
    </header>
  )
}
