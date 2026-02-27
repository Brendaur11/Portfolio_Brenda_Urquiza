import { Link } from 'react-router-dom'

/**
 * CTAButton – botón de llamada a la acción reutilizable.
 * Soporta variante primaria, secundaria y outline.
 * Puede renderizarse como <Link> o como <a> externo.
 */
export default function CTAButton({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center gap-2 font-mono text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-primary/30',
    secondary:
      'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20',
    outline:
      'border border-[var(--border)] text-[var(--text-muted)] hover:border-primary hover:text-primary',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  )
}
