export default function Footer() {
  return (
    <footer
      className="border-t mt-auto py-8"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} — Brenda. Construido con React + Vite.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Brendaur11"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors duration-200 hover:text-primary"
            style={{ color: 'var(--text-muted)' }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-urquiza-331200251"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors duration-200 hover:text-primary"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
