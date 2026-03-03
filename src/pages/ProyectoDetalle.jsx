import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import SectionContainer from '../components/SectionContainer'
import CTAButton from '../components/CTAButton'
import CodeBlockPreview from '../components/CodeBlockPreview'
import { useProjects } from '../hooks/useProjects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const { getBySlug, loading } = useProjects()

  if (loading) {
    return (
      <SectionContainer>
        <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
          Cargando...
        </p>
      </SectionContainer>
    )
  }

  const project = getBySlug(slug)

  if (!project) {
    return (
      <SectionContainer>
        <span className="section-label">{'// 404'}</span>
        <h1 className="font-display text-4xl mt-3 mb-4" style={{ color: 'var(--text)' }}>
          Proyecto no encontrado.
        </h1>
        <CTAButton to="/proyectos" variant="secondary">
          ← Volver a proyectos
        </CTAButton>
      </SectionContainer>
    )
  }

  const dataModelCode = project.dataModel
    .map(({ entity, fields }) => `${entity}:\n  ${fields}`)
    .join('\n\n')

  const flowCode = project.flow.map((step, i) => `${i + 1}. ${step}`).join('\n')

  return (
    <SectionContainer>
      {/* Breadcrumb */}
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <Link
          to="/proyectos"
          className="font-mono text-xs mb-8 inline-flex items-center gap-2 hover:text-primary transition-colors"
          style={{ color: 'var(--text-muted)' }}
        >
          ← proyectos
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        className="max-w-3xl mb-10 mt-4"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="section-label">{project.type}</span>

          <span
            className="font-mono text-xs px-2.5 py-1 rounded-full border"
            style={{
              color: 'var(--text-muted)',
              borderColor: 'var(--border)',
              background: 'var(--bg-subtle)',
            }}
          >
            {project.status}
          </span>

          {project.featured && (
            <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary text-white">
              Destacado
            </span>
          )}
        </div>

        <h1 className="font-display text-4xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
          {project.title}
        </h1>

        <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {project.tagline}
        </p>
      </motion.div>

      {/* Stack */}
      <motion.div
        className="flex flex-wrap gap-2 mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {project.stack.map((s) => (
          <motion.span key={s} variants={fadeUp} className="tag">
            {s}
          </motion.span>
        ))}
      </motion.div>

      {/* Problem & Solution */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[{ label: '// problema', text: project.problem },
          { label: '// solución', text: project.solution }
        ].map((block, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-xl p-6 border"
            style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
          >
            <span className="section-label">{block.label}</span>
            <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--text-muted)' }}>
              {block.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Architecture */}
      <motion.div
        className="mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">{'// arquitectura'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Decisiones de diseño.
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
          {project.architecture}
        </p>

        <motion.div
          className="space-y-3"
          variants={staggerContainer}
        >
          {project.decisions.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-3 items-start border-l-2 pl-4 py-1"
              style={{ borderColor: 'var(--primary)' }}
            >
              <span className="font-mono text-xs mt-0.5" style={{ color: 'var(--primary)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {d}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Data model */}
      <motion.div
        className="mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">{'// modelo_de_datos'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Entidades principales.
        </h2>

        <motion.div variants={fadeUp}>
          <CodeBlockPreview
            title={`${project.slug}.schema`}
            code={dataModelCode}
          />
        </motion.div>
      </motion.div>

      {/* Flow */}
      <motion.div
        className="mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">{'// flujo_principal'}</span>
        <h2 className="font-display text-2xl mt-2 mb-4" style={{ color: 'var(--text)' }}>
          Cómo funciona.
        </h2>

        <motion.div variants={fadeUp}>
          <CodeBlockPreview
            title={`${project.slug}.flow`}
            code={flowCode}
          />
        </motion.div>
      </motion.div>

      {/* Roadmap */}
      <motion.div
        className="mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">{'// próximos_pasos'}</span>
        <h2 className="font-display text-2xl mt-2 mb-5" style={{ color: 'var(--text)' }}>
          Roadmap.
        </h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {project.nextSteps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="card flex items-start gap-3 p-4"
            >
              <span className="font-mono text-xs text-primary mt-0.5 shrink-0">
                {'>'}
              </span>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Links */}
      <motion.div
        className="flex gap-3 flex-wrap pt-4 border-t"
        style={{ borderColor: 'var(--border)' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {project.demo && (
          <CTAButton href={project.demo} variant="primary">
            Ver demo →
          </CTAButton>
        )}
        {project.github && (
          <CTAButton href={project.github} variant="secondary">
            GitHub →
          </CTAButton>
        )}
        <CTAButton to="/proyectos" variant="outline">
          ← Volver
        </CTAButton>
      </motion.div>
    </SectionContainer>
  )
}