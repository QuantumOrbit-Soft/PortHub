import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type PageCardProps = {
  title: string
  description: string
  icon: LucideIcon
  children?: ReactNode
}

export default function PageCard({ title, description, icon: Icon, children }: PageCardProps) {
  return (
    <section className="content-card" aria-labelledby="page-title">
      <div className="page-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.7} />
      </div>
      <p className="eyebrow">PORTHUB</p>
      <h1 id="page-title">{title}</h1>
      <p className="page-description">{description}</p>
      {children}
    </section>
  )
}
