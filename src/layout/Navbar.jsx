import { NavLink } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const links = [
  { to: '/', label: 'inicio', exact: true },
  { to: '/sobre-mi', label: 'sobre_mi' },
  { to: '/proyectos', label: 'proyectos' },
  { to: '/stack', label: 'stack' },
  { to: '/contacto', label: 'contacto' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: 'var(--border)',
        background: 'rgba(var(--bg-raw, 255,255,255), 0.85)',
        backgroundColor: dark ? 'rgba(10,15,30,0.85)' : 'rgba(255,255,255,0.85)',
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-mono font-medium text-sm tracking-wide"
          style={{ color: 'var(--text)' }}
        >
          <span style={{ color: 'var(--primary)' }}>{'>'}</span>
          {' brenda.dev'}
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `nav-link font-mono text-xs tracking-widest uppercase ${isActive ? 'active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 hover:border-primary"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          {dark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
