/**
 * CodeBlockPreview – muestra un fragmento de código o estructura de datos
 * con estilo de terminal/editor.
 */
export default function CodeBlockPreview({ title, code, language = 'text' }) {
  return (
    <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
      {title && (
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b"
          style={{
            background: 'var(--bg-subtle)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
          </div>
          <span
            className="font-mono text-xs ml-2"
            style={{ color: 'var(--text-muted)' }}
          >
            {title}
          </span>
        </div>
      )}
      <pre
        className="p-5 text-xs leading-relaxed overflow-x-auto font-mono"
        style={{ background: '#0a0f1e', color: '#e2e8f0' }}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
