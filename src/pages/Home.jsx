import { useEffect, useState } from 'react'
import SectionContainer from '../components/SectionContainer'
import CTAButton from '../components/CTAButton'
import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../hooks/useProjects'

const ROLES = [
  'Full Stack Developer.',
  'Arquitecta de sistemas.',
  'Pensadora de backend.',
  'Constructora de productos.',
]

export default function Home() {
  const { getFeatured, loading } = useProjects()
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const featured = getFeatured()

  return (
    <>
      {/* Hero */}
      <SectionContainer className="min-h-[calc(100vh-4rem)] flex flex-col justify-center !py-0">
        <div className="max-w-3xl">
          <span className="section-label animate-fade-up opacity-0 delay-100">
            {'// disponible para oportunidades'}
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mt-4 animate-fade-up opacity-0 delay-200"
            style={{ color: 'var(--text)' }}>
            Desarrolladora<br />
            <span style={{ color: 'var(--primary)' }}>{ROLES[roleIndex]}</span>
          </h1>

          <p
            className="text-lg md:text-xl mt-6 leading-relaxed max-w-xl animate-fade-up opacity-0 delay-300"
            style={{ color: 'var(--text-muted)' }}
          >
            Enfocada en arquitectura y construcción de sistemas escalables.
            Backend sólido, frontend limpio, decisiones técnicas justificadas.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 animate-fade-up opacity-0 delay-400">
            <CTAButton to="/proyectos" variant="primary">
              Ver proyectos →
            </CTAButton>
            <CTAButton to="/sobre-mi" variant="secondary">
              Sobre mí
            </CTAButton>
            <CTAButton to="/contacto" variant="outline">
              Contacto
            </CTAButton>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-sm animate-fade-up opacity-0 delay-500">
            {[
              { value: '3+', label: 'proyectos reales' },
              { value: 'FS', label: 'full stack' },
              { value: 'Jr+', label: 'nivel actual' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl" style={{ color: 'var(--primary)' }}>
                  {value}
                </p>
                <p className="font-mono text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid background decoration */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </SectionContainer>

      {/* Featured projects */}
      <SectionContainer>
        <span className="section-label">{'// proyecto principal'}</span>
        <h2
          className="font-display text-3xl mt-2 mb-8"
          style={{ color: 'var(--text)' }}
        >
          Lo que construyo.
        </h2>
        {loading ? (
          <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
            Cargando...
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
        <div className="mt-8">
          <CTAButton to="/proyectos" variant="secondary">
            Ver todos los proyectos →
          </CTAButton>
        </div>
      </SectionContainer>

      {/* CTA strip */}
      <SectionContainer>
        <div
          className="rounded-2xl p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border"
          style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
        >
          <div>
            <h3 className="font-display text-2xl" style={{ color: 'var(--text)' }}>
              ¿Buscas una desarrolladora con criterio técnico?
            </h3>
            <p className="font-mono text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
              Disponible para posiciones junior o pasantías remotas.
            </p>
          </div>
          <CTAButton to="/contacto" variant="primary" className="shrink-0">
            Hablemos →
          </CTAButton>
        </div>
      </SectionContainer>
    </>
  )
}
