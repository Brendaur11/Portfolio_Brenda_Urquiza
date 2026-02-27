import SectionContainer from '../components/SectionContainer'
import ProjectCard from '../components/ProjectCard'
import { useProjects } from '../hooks/useProjects'

export default function Proyectos() {
  const { data, loading } = useProjects()

  return (
    <SectionContainer>
      <div className="max-w-2xl mb-12">
        <span className="section-label">{'// proyectos'}</span>
        <h1 className="font-display text-5xl mt-3 mb-4" style={{ color: 'var(--text)' }}>
          Sistemas construidos.
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          No landing pages. No demos cosméticos. Proyectos con lógica real,
          decisiones técnicas documentadas y arquitectura pensada para crecer.
        </p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="card h-52 animate-pulse"
              style={{ background: 'var(--bg-subtle)' }}
            />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {data.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      )}

      {/* Note */}
      <p
        className="font-mono text-xs mt-10 border-l-2 pl-4"
        style={{ color: 'var(--text-muted)', borderColor: 'var(--primary)' }}
      >
        {'// Cada proyecto incluye: problema, solución, arquitectura, decisiones técnicas y próximos pasos.'}
      </p>
    </SectionContainer>
  )
}
