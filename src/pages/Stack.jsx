import { motion } from 'framer-motion'
import SectionContainer from '../components/SectionContainer'
import SkillBadge from '../components/SkillBadge'
import { stackData, levelColor } from '../data/stack'

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '⚛️' },
  { key: 'backend', label: 'Backend', icon: '🖥️' },
  { key: 'database', label: 'Base de datos', icon: '🗄️' },
  { key: 'tools', label: 'Herramientas', icon: '🔧' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export default function Stack() {
  return (
    <SectionContainer>
      {/* Header */}
      <motion.div
        className="max-w-2xl mb-12"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <span className="section-label">{'// stack'}</span>
        <h1
          className="font-display text-5xl mt-3 mb-4"
          style={{ color: 'var(--text)' }}
        >
          Tecnologías.
        </h1>
        <p
          className="text-lg"
          style={{ color: 'var(--text-muted)' }}
        >
          Las herramientas que uso para construir sistemas reales. Organizado por categoría y nivel de dominio.
        </p>
      </motion.div>

      {/* Legend */}
      <motion.div
        className="flex flex-wrap gap-3 mb-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {['Avanzado', 'Intermedio', 'Básico'].map((level) => (
          <motion.span
            key={level}
            variants={fadeUp}
            className={`font-mono text-xs px-3 py-1 rounded-full border ${levelColor[level]}`}
          >
            {level}
          </motion.span>
        ))}
      </motion.div>

      {/* Categories */}
      <div className="space-y-12">
        {categories.map(({ key, label, icon }) => (
          <motion.div
            key={key}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                className="text-xl"
                whileHover={{ rotate: 8 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.span>

              <h2
                className="font-mono text-sm font-medium uppercase tracking-widest"
                style={{ color: 'var(--text)' }}
              >
                {label}
              </h2>
            </div>

            {/* Skills grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
              variants={staggerContainer}
            >
              {stackData[key].map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <SkillBadge
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    levelClass={levelColor[skill.level]}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Learning now */}
      <motion.div
        className="mt-12 rounded-xl p-6 border"
        style={{ background: 'var(--bg-subtle)', borderColor: 'var(--border)' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="section-label">{'// aprendiendo_ahora'}</span>
        <p
          className="text-sm mt-2 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          TypeScript · Testing (Jest, Vitest) · Docker · CI/CD básico · Patrones de diseño (Repository, Service Layer, Factory).
        </p>
      </motion.div>
    </SectionContainer>
  )
}