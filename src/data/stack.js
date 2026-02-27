export const stackData = {
  frontend: [
    { name: 'React', level: 'Avanzado', icon: '⚛️' },
    { name: 'Vite', level: 'Avanzado', icon: '⚡' },
    { name: 'Tailwind CSS', level: 'Avanzado', icon: '🎨' },
    { name: 'React Router', level: 'Avanzado', icon: '🗺️' },
    { name: 'JavaScript (ES6+)', level: 'Avanzado', icon: '🟨' },
    { name: 'HTML5 / CSS3', level: 'Avanzado', icon: '🌐' },
  ],
  backend: [
    { name: 'Node.js', level: 'Intermedio', icon: '🟢' },
    { name: 'Express.js', level: 'Intermedio', icon: '🚂' },
    { name: 'JWT / Auth', level: 'Intermedio', icon: '🔐' },
    { name: 'REST API Design', level: 'Intermedio', icon: '🔌' },
  ],
  database: [
    { name: 'PostgreSQL', level: 'Intermedio', icon: '🐘' },
    { name: 'SQL', level: 'Intermedio', icon: '🗄️' },
    { name: 'Diseño relacional', level: 'Intermedio', icon: '📊' },
  ],
  tools: [
    { name: 'Git / GitHub', level: 'Avanzado', icon: '🐙' },
    { name: 'VS Code', level: 'Avanzado', icon: '💻' },
    { name: 'Postman', level: 'Intermedio', icon: '📮' },
    { name: 'Linux CLI', level: 'Básico', icon: '🐧' },
  ],
}

export const levelColor = {
  Avanzado: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Intermedio: 'bg-primary/10 text-primary border-primary/20',
  Básico: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
}
