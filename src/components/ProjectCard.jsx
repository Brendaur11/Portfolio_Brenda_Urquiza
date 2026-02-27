import { Link } from 'react-router-dom'

/**
 * ProjectCard – tarjeta de proyecto con preview de info principal.
 */
export default function ProjectCard({ project }) {
  const { slug, title, tagline, type, status, stack, featured } = project

  return (
    <Link
      to={`/proyectos/${slug}`}
      className="card block p-6 group relative overflow-hidden"
    >
      {featured && (
        <span className="absolute top-4 right-4 font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary text-white">
          Destacado
        </span>
      )}

      <div className="mb-4">
        <span className="section-label">{type}</span>
        <h3
          className="font-display text-xl mt-1 group-hover:text-primary transition-colors duration-200"
          style={{ color: 'var(--text)' }}
        >
          {title}
        </h3>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {tagline}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {stack.slice(0, 4).map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
        {stack.length > 4 && (
          <span className="tag">+{stack.length - 4}</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span
          className="font-mono text-xs"
          style={{ color: 'var(--text-muted)' }}
        >
          {status}
        </span>
        <span className="font-mono text-xs text-primary group-hover:translate-x-1 transition-transform duration-200">
          Ver caso →
        </span>
      </div>
    </Link>
  )
}
