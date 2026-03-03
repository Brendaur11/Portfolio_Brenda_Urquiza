import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{
        borderColor: 'var(--border)',
        background: 'rgba(var(--bg-raw, 255,255,255), 0.85)',
        backgroundColor: dark
          ? 'rgba(10,15,30,0.85)'
          : 'rgba(255,255,255,0.85)',
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="font-mono font-medium text-sm tracking-wide"
          style={{ color: 'var(--text)' }}
        >
          <span style={{ color: 'var(--primary)' }}>{'>'}</span>
          {' brenda.dev'}
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `nav-link font-mono text-xs tracking-widest uppercase ${
                  isActive ? 'active' : ''
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right side (theme + hamburger) */}
        <div className="flex items-center gap-3">

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

          {/* Hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-9 h-9 flex items-center justify-center"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
              style={{ color: 'var(--text)' }}
            >
              {isOpen ? '✕' : '☰'}
            </motion.span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.07 },
                },
              }}
              className="flex flex-col px-6 py-4 gap-4"
            >
              {links.map(({ to, label, exact }) => (
                <motion.div
                  key={to}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink
                    to={to}
                    end={exact}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `nav-link font-mono text-xs tracking-widest uppercase ${
                        isActive ? 'active' : ''
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}