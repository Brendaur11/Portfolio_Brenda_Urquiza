import { useState } from 'react'
import SectionContainer from '../components/SectionContainer'
import CTAButton from '../components/CTAButton'

const INITIAL_FORM = { nombre: '', email: '', mensaje: '' }

export default function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulación de envío — conectar con servicio real (Resend, EmailJS, etc.)
    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL_FORM)
    }, 1200)
  }

  return (
    <SectionContainer>
      <div className="max-w-2xl mb-12">
        <span className="section-label">{'// contacto'}</span>
        <h1 className="font-display text-5xl mt-3 mb-4" style={{ color: 'var(--text)' }}>
          Hablemos.
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
          Disponible para posiciones junior, pasantías técnicas o colaboraciones.
          Respondeo en 24–48 horas hábiles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          {status === 'sent' ? (
            <div
              className="rounded-xl p-8 border text-center"
              style={{ background: 'var(--bg-subtle)', borderColor: 'var(--primary)' }}
            >
              <span className="text-3xl">✅</span>
              <h3 className="font-display text-xl mt-4 mb-2" style={{ color: 'var(--text)' }}>
                Mensaje enviado.
              </h3>
              <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                Te respondo a la brevedad.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-5 font-mono text-xs text-primary hover:underline"
              >
                Enviar otro mensaje →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="font-mono text-xs block mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="input-field"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs block mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                  className="input-field"
                />
              </div>
              <div>
                <label
                  className="font-mono text-xs block mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  mensaje
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Contame sobre la posición o el proyecto..."
                  className="input-field resize-none"
                />
              </div>
              <CTAButton
                as="button"
                type="submit"
                variant="primary"
                className="w-full justify-center"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
              </CTAButton>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div
            className="rounded-xl p-6 border"
            style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
          >
            <span className="section-label">{'// canales'}</span>
            <div className="space-y-4 mt-4">
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  email
                </p>
                <a
                  href="mailto:brendaurquiza23@gmail.com"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  brendaurquiza23@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  linkedin
                </p>
                <a
                  href="https://www.linkedin.com/in/brenda-urquiza-331200251?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  linkedin.com/in/brenda-urquiza
                </a>
              </div>
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  github
                </p>
                <a
                  href="https://github.com/Brendaur11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  style={{ color: 'var(--text)' }}
                >
                  github.com/Brendaur11
                </a>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl p-6 border"
            style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
          >
            <span className="section-label">{'// disponibilidad'}</span>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Abierta a posiciones <strong style={{ color: 'var(--text)' }}>junior</strong> en
              equipos que valoren arquitectura limpia, buenas prácticas y mentalidad de producto.
              Preferencia por trabajo <strong style={{ color: 'var(--text)' }}>remoto</strong>.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
