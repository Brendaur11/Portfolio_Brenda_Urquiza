import SectionContainer from '../components/SectionContainer'
import SkillBadge from '../components/SkillBadge'
import { stackData, levelColor } from '../data/stack'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '⚛️' },
  { key: 'backend', label: 'Backend', icon: '🖥️' },
  { key: 'database', label: 'Base de datos', icon: '🗄️' },
  { key: 'tools', label: 'Herramientas', icon: '🔧' },
]

export default function Stack() {
  return (
    <SectionContainer>
      <div className="max-w-2xl mb-12">
        <span className="section-label">{'// stack'}</span>
        <h1 className="font-display text-5xl mt-3 mb-4" style={{ color: 'var(--text)' }}>
          Tecnologías.
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          Las herramientas que uso para construir sistemas reales. Organizado por categoría y nivel de dominio.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-10">
        {['Avanzado', 'Intermedio', 'Básico'].map((level) => (
          <span key={level} className={`font-mono text-xs px-3 py-1 rounded-full border ${levelColor[level]}`}>
            {level}
          </span>
        ))}
      </div>

      {/* Grid of categories */}
      <div className="space-y-10">
        {categories.map(({ key, label, icon }) => (
          <div key={key}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">{icon}</span>
              <h2 className="font-mono text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--text)' }}>
                {label}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {stackData[key].map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  levelClass={levelColor[skill.level]}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div
        className="mt-12 rounded-xl p-6 border"
        style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
      >
        <span className="section-label">{'// aprendiendo_ahora'}</span>
        <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          TypeScript · Testing (Jest, Vitest) · Docker · CI/CD básico · Patrones de diseño (Repository, Service Layer, Factory).
        </p>
      </div>
    </SectionContainer>
  )
}
