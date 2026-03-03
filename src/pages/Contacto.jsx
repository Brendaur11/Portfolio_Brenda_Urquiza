import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SectionContainer from '../components/SectionContainer'
import CTAButton from '../components/CTAButton'

const INITIAL_FORM = { nombre: '', email: '', mensaje: '' }

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      setStatus('sent')
      setForm(INITIAL_FORM)
    }, 1200)
  }

  return (
    <SectionContainer>
      {/* Header */}
      <motion.div
        className="max-w-2xl mb-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className="section-label">{'// contacto'}</span>
        <h1
          className="font-display text-5xl mt-3 mb-4"
          style={{ color: 'var(--text)' }}
        >
          Hablemos.
        </h1>
        <p
          className="text-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Disponible para posiciones junior, pasantías técnicas o colaboraciones.
          Respondeo en 24–48 horas hábiles.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {status === 'sent' ? (
              <motion.div
                key="success"
                variants={fade}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-xl p-8 border text-center"
                style={{
                  background: 'var(--bg-subtle)',
                  borderColor: 'var(--primary)',
                }}
              >
                <motion.span
                  className="text-3xl inline-block"
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ✅
                </motion.span>

                <h3
                  className="font-display text-xl mt-4 mb-2"
                  style={{ color: 'var(--text)' }}
                >
                  Mensaje enviado.
                </h3>

                <p
                  className="font-mono text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Te respondo a la brevedad.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="mt-5 font-mono text-xs text-primary hover:underline"
                >
                  Enviar otro mensaje →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                variants={fade}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                {['nombre', 'email', 'mensaje'].map((field) => (
                  <motion.div key={field} variants={fadeUp}>
                    <label
                      className="font-mono text-xs block mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {field}
                    </label>

                    {field !== 'mensaje' ? (
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.15 }}
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        required
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={
                          field === 'nombre'
                            ? 'Tu nombre'
                            : 'tu@empresa.com'
                        }
                        className="input-field"
                      />
                    ) : (
                      <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        transition={{ duration: 0.15 }}
                        name="mensaje"
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Contame sobre la posición o el proyecto..."
                        className="input-field resize-none"
                      />
                    )}
                  </motion.div>
                ))}

                <CTAButton
                  as="button"
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje →'}
                </CTAButton>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info */}
        <motion.div
          className="space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              label: '// canales',
              content: (
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
                      href="https://www.linkedin.com/in/brenda-urquiza-331200251"
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
              ),
            },
            {
              label: '// disponibilidad',
              content: (
                <p
                  className="text-sm mt-3 leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Abierta a posiciones <strong style={{ color: 'var(--text)' }}>junior</strong> en
                  equipos que valoren arquitectura limpia, buenas prácticas y mentalidad de producto.
                  Preferencia por trabajo <strong style={{ color: 'var(--text)' }}>remoto</strong>.
                </p>
              ),
            },
          ].map((block, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-xl p-6 border"
              style={{
                background: 'var(--bg-subtle)',
                borderColor: 'var(--border)',
              }}
            >
              <span className="section-label">{block.label}</span>
              {block.content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}