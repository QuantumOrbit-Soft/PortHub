import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import LinkForm from './pages/LinkForm'

export type PageKey = 'home' | 'about' | 'form'
export type Theme = 'light' | 'dark'

function getCurrentPage(): PageKey {
  const path = window.location.pathname.toLowerCase()
  if (path.endsWith('/about.html') || path.endsWith('/about')) return 'about'
  if (path.endsWith('/form.html') || path.endsWith('/form')) return 'form'
  return 'home'
}

function getInitialTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem('porthub-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Browser storage may be unavailable in restrictive contexts.
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const currentPage = getCurrentPage()
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#09090b' : '#ffffff',
    )

    try {
      window.localStorage.setItem('porthub-theme', theme)
    } catch {
      // The theme remains active for the current page without storage.
    }
  }, [theme])

  return (
    <div className="app-shell">
      <Header
        currentPage={currentPage}
        theme={theme}
        onToggleTheme={() => setTheme((value) => value === 'light' ? 'dark' : 'light')}
      />
      <main className="main-content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'form' && <LinkForm />}
      </main>
      <Footer />
    </div>
  )
}
