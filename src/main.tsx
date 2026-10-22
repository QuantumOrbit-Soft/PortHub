import React from 'react'
import { createRoot } from 'react-dom/client'
import { House, Info, Link2, Moon, Sun } from 'lucide-react'
import './styles.css'

type PageKey = 'home' | 'about' | 'form'

const pages: Record<PageKey, { title: string; label: string; href: string; icon: typeof House }> = {
  home: { title: 'HOME', label: 'Home', href: './index.html', icon: House },
  about: { title: 'ABOUT', label: 'About', href: './about.html', icon: Info },
  form: { title: 'SEND LINK', label: 'Send Link', href: './form.html', icon: Link2 },
}

function getCurrentPage(): PageKey {
  const path = window.location.pathname.toLowerCase()
  if (path.endsWith('/about.html') || path.endsWith('/about')) return 'about'
  if (path.endsWith('/form.html') || path.endsWith('/form')) return 'form'
  return 'home'
}

function getInitialTheme(): 'light' | 'dark' {
  try {
    const saved = window.localStorage.getItem('porthub-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // Storage can be unavailable in restrictive browser contexts.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const currentPage = getCurrentPage()
  const [theme, setTheme] = React.useState<'light' | 'dark'>(getInitialTheme)
  const page = pages[currentPage]

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#09090b' : '#ffffff')
    try {
      window.localStorage.setItem('porthub-theme', theme)
    } catch {
      // Theme still works for this page when storage is unavailable.
    }
  }, [theme])

  return (
    <div className="app-shell">
      <header className="topbar">
        <nav className="navigation" aria-label="Navegação principal">
          {(Object.entries(pages) as [PageKey, (typeof pages)[PageKey]][]).map(([key, item]) => {
            const Icon = item.icon
            return (
              <a className={`nav-link${currentPage === key ? ' is-active' : ''}`} href={item.href}
                aria-label={item.label} aria-current={currentPage === key ? 'page' : undefined} key={key}>
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            )
          })}
        </nav>
        <div className="toolbar">
          <button className="theme-toggle" type="button"
            onClick={() => setTheme((value) => value === 'light' ? 'dark' : 'light')}
            aria-label={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`}
            title={`Ativar modo ${theme === 'light' ? 'escuro' : 'claro'}`}>
            {theme === 'light' ? <Moon size={17} strokeWidth={1.8} aria-hidden="true" /> : <Sun size={17} strokeWidth={1.8} aria-hidden="true" />}
            <span className="theme-label">{theme === 'light' ? 'Modo escuro' : 'Modo claro'}</span>
          </button>
        </div>
      </header>

      <main className="main-content">
        <section className="content-card" aria-labelledby="page-title">
          <div className="page-icon" aria-hidden="true"><page.icon size={22} strokeWidth={1.7} /></div>
          <p className="eyebrow">PORTHUB</p>
          <h1 id="page-title">{page.title}</h1>
          <p className="page-description">
            {currentPage === 'home' && 'Welcome to your space on the web.'}
            {currentPage === 'about' && 'A little space to tell your story.'}
            {currentPage === 'form' && 'Share a link with your community.'}
          </p>
        </section>
      </main>
      <footer className="site-footer">PortHub <span aria-hidden="true">·</span> Simple by design</footer>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
