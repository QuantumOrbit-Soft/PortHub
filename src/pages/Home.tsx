import { ArrowUpRight } from 'lucide-react'
import contentItems from '../data/content.json'

type ContentItem = {
  id: string
  title: string
  description: string
  image: string
  linkText: string
  href: string
}

const items = contentItems as ContentItem[]

export default function Home() {
  return (
    <section className="home-content" aria-labelledby="home-title">
      <header className="home-heading">
        <p className="eyebrow">PORTHUB</p>
        <h1 id="home-title">Discover and explore</h1>
        <p className="page-description">A collection of ideas, guides, and useful resources.</p>
      </header>

      <div className="content-grid">
        {items.map((item) => (
          <article className="content-item" key={item.id}>
            <div className="content-item-image-link">
              <img className="content-item-image" src={item.image} alt="" loading="lazy" />
            </div>
            <div className="content-item-body">
              <h2 className="content-item-title">{item.title}</h2>
              <p className="content-item-description">{item.description}</p>
              <a className="content-item-link" href={item.href}>
                {item.linkText}
                <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
