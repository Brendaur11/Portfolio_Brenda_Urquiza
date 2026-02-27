/**
 * SkillBadge – chip para mostrar una tecnología o habilidad.
 */
export default function SkillBadge({ name, icon, level, levelClass = '' }) {
  return (
    <div className="card flex items-center gap-3 px-4 py-3 group">
      {icon && <span className="text-xl">{icon}</span>}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>
          {name}
        </p>
        {level && (
          <span
            className={`inline-block font-mono text-[10px] px-2 py-0.5 rounded-full border mt-0.5 ${levelClass}`}
          >
            {level}
          </span>
        )}
      </div>
    </div>
  )
}
