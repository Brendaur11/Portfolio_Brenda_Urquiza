import { motion } from 'framer-motion'
import SectionContainer from '../components/SectionContainer'
import ProjectCard from '../components/ProjectCard'
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
      staggerChildren: 0.2,
    },
  },
}

export default function Proyectos() {
  const { data, loading } = useProjects()

  return (
    <SectionContainer>
      {/* Header */}
      <motion.div
        className="max-w-2xl mb-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className="section-label">{'// proyectos'}</span>
        <h1
          className="font-display text-5xl mt-3 mb-4"
          style={{ color: 'var(--text)' }}
        >
          Sistemas construidos.
        </h1>
        <p
          className="text-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Proyectos con lógica real,
          decisiones técnicas documentadas y arquitectura pensada para crecer.
        </p>
      </motion.div>

      {loading ? (
        <motion.div
          className="grid md:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card h-52 animate-pulse"
              style={{ background: 'var(--bg-subtle)' }}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="grid md:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {data.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Note */}
      <motion.p
        className="font-mono text-xs mt-10 border-l-2 pl-4"
        style={{ color: 'var(--text-muted)', borderColor: 'var(--primary)' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {'// Cada proyecto incluye: problema, solución, arquitectura, decisiones técnicas y próximos pasos.'}
      </motion.p>
    </SectionContainer>
  )
}