import { useParams, Link } from 'react-router-dom'
import SectionContainer from '../components/SectionContainer'
import CTAButton from '../components/CTAButton'
import CodeBlockPreview from '../components/CodeBlockPreview'
import { useProjects } from '../hooks/useProjects'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const { getBySlug, loading } = useProjects()

  if (loading) {
    return (
      <SectionContainer>
        <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          Cargando...
        </p>
      </SectionContainer>
    )
  }

  const project = getBySlug(slug)

  if (!project) {
    return (
      <SectionContainer>
        <span className="section-label">{'// 404'}</span>
        <h1 className="font-display text-4xl mt-3 mb-4" style={{ color: 'var(--text)' }}>
          Proyecto no encontrado.
        </h1>
        <CTAButton to="/proyectos" variant="secondary">
          ← Volver a proyectos
        </CTAButton>
      </SectionContainer>
    )
  }

  const dataModelCode = project.dataModel
    .map(({ entity, fields }) => `${entity}:\n  ${fields}`)
    .join('\n\n')

  const flowCode = project.flow.map((step, i) => `${i + 1}. ${step}`).join('\n')

  return (
    <SectionContainer>
      {/* Breadcrumb */}
      <Link
        to="/proyectos"
        className="font-mono text-xs mb-8 inline-flex items-center gap-2 hover:text-primary transition-colors"
        style={{ color: 'var(--text-muted)' }}
      >
        ← proyectos
      </Link>

      {/* Header */}
      <div className="max-w-3xl mb-10 mt-4">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="section-label">{project.type}</span>
          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full border"
            style={{
              color: 'var(--text-muted)',
              borderColor: 'var(--border)',
              background: 'var(--bg-subtle)',
            }}
          >
            {project.status}
          </span>
          {project.featured && (
            <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary text-white">
              Destacado
            </span>
          )}
        </div>
        <h1 className="font-display text-4xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
          {project.title}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {project.tagline}
        </p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 mb-12">
        {project.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Problem */}
        <div
          className="rounded-xl p-6 border"
          style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
        >
          <span className="section-label">{'// problema'}</span>
          <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-muted)' }}>
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div
          className="rounded-xl p-6 border"
          style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
        >
          <span className="section-label">{'// solución'}</span>
          <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-muted)' }}>
            {project.solution}
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div className="mb-12">
        <span className="section-label">{'// arquitectura'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Decisiones de diseño.
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
          {project.architecture}
        </p>
        <div className="space-y-3">
          {project.decisions.map((d, i) => (
            <div
              key={i}
              className="flex gap-3 items-start border-l-2 pl-4 py-1"
              style={{ borderColor: 'var(--primary)' }}
            >
              <span className="font-mono text-xs mt-0.5" style={{ color: 'var(--primary)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Data model */}
      <div className="mb-12">
        <span className="section-label">{'// modelo_de_datos'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Entidades principales.
        </h2>
        <CodeBlockPreview
          title={`${project.slug}.schema`}
          code={dataModelCode}
        />
      </div>

      {/* Flow */}
      <div className="mb-12">
        <span className="section-label">{'// flujo_principal'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Cómo funciona.
        </h2>
        <CodeBlockPreview
          title={`${project.slug}.flow`}
          code={flowCode}
        />
      </div>

      {/* Next steps */}
      <div className="mb-12">
        <span className="section-label">{'// próximos_pasos'}</span>
        <h2 className="font-display text-2xl mt-2 mb-5" style={{ color: 'var(--text)' }}>
          Roadmap.
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {project.nextSteps.map((step, i) => (
            <div
              key={i}
              className="card flex items-start gap-3 p-4"
            >
              <span className="font-mono text-xs text-primary mt-0.5 shrink-0">
                {'>'}
              </span>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3 flex-wrap pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
        {project.github && (
          <CTAButton href={project.github} variant="secondary">
            GitHub →
          </CTAButton>
        )}
        {project.demo && (
          <CTAButton href={project.demo} variant="primary">
            Ver demo →
          </CTAButton>
        )}
        <CTAButton to="/proyectos" variant="outline">
          ← Volver
        </CTAButton>
      </div>
    </SectionContainer>
  )
}
