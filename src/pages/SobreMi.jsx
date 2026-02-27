import SectionContainer from '../components/SectionContainer'
import CTAButton from '../components/CTAButton'

const principles = [
  {
    icon: '🏗️',
    title: 'Arquitectura antes que velocidad',
    desc: 'Prefiero pensar la estructura antes de escribir código. Un sistema bien diseñado escala; uno apresurado se reescribe.',
  },
  {
    icon: '🔍',
    title: 'Lógica de negocio como prioridad',
    desc: 'Entiendo que el software existe para resolver problemas reales. La lógica de dominio es el corazón del sistema, no un detalle de implementación.',
  },
  {
    icon: '📦',
    title: 'Separación de responsabilidades',
    desc: 'Cada módulo, función y componente tiene un único propósito. La separación no es dogma; es lo que hace el código mantenible.',
  },
  {
    icon: '🔄',
    title: 'Backend y frontend como un sistema',
    desc: 'No pienso en capas aisladas. Diseño el contrato entre frontend y backend desde el principio para evitar fricciones en la integración.',
  },
]

export default function SobreMi() {
  return (
    <SectionContainer>
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <span className="section-label">{'// sobre_mi'}</span>
        <h1 className="font-display text-5xl mt-3 mb-5" style={{ color: 'var(--text)' }}>
          Cómo pienso.<br />Cómo construyo.
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Soy desarrolladora Full Stack Jr. con interés genuino en arquitectura de software,
          diseño de sistemas y lógica de negocio. Me importa más entender un problema a fondo
          que llegar rápido a una solución incompleta.
        </p>
      </div>

      {/* Principles */}
      <div className="grid md:grid-cols-2 gap-4 mb-14">
        {principles.map(({ icon, title, desc }) => (
          <div key={title} className="card p-6">
            <span className="text-2xl">{icon}</span>
            <h3 className="font-mono text-sm font-medium mt-3 mb-2" style={{ color: 'var(--text)' }}>
              {title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Tech focus */}
      <div
        className="rounded-xl p-8 border mb-14"
        style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
      >
        <span className="section-label">{'// enfoque_técnico'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Dónde pongo la energía.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              area: 'Backend',
              detail:
                'Diseño de APIs REST, autenticación, lógica de negocio en capa de servicios, modelado relacional.',
            },
            {
              area: 'Frontend',
              detail:
                'React con arquitectura modular. Componentes reutilizables, custom hooks, separación UI/lógica.',
            },
            {
              area: 'Sistemas',
              detail:
                'Diseño de flujos, modelado de entidades, decisiones de arquitectura documentadas y justificadas.',
            },
          ].map(({ area, detail }) => (
            <div key={area}>
              <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--primary)' }}>
                {area}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Personal */}
      <div className="max-w-2xl mb-10">
        <span className="section-label">{'// más_allá_del_código'}</span>
        <p className="text-base leading-relaxed mt-3" style={{ color: 'var(--text-muted)' }}>
          Me interesan los sistemas como metáfora. La forma en que piezas simples forman
          estructuras complejas me parece igual de fascinante en software que en otros dominios.
          Eso guía cómo aprendo, cómo diseño y cómo trabajo en equipo.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <CTAButton to="/proyectos" variant="primary">
          Ver mis proyectos →
        </CTAButton>
        <CTAButton to="/stack" variant="secondary">
          Mi stack técnico
        </CTAButton>
      </div>
    </SectionContainer>
  )
}
