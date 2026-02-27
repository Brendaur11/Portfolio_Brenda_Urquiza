/**
 * SectionContainer – wrapper de sección estándar.
 * Aplica padding y max-width consistentes en todas las páginas.
 */
export default function SectionContainer({ children, className = '' }) {
  return (
    <section className={`w-full max-w-5xl mx-auto px-6 py-16 ${className}`}>
      {children}
    </section>
  )
}
