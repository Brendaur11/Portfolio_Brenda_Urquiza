import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

/**
 * Hook para acceder a los proyectos.
 * Simula un fetch asíncrono preparado para conectarse a una API real.
 */
export function useProjects() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulación de latencia de API
    const timer = setTimeout(() => {
      try {
        setData(projects)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const getBySlug = (slug) => data.find((p) => p.slug === slug) ?? null
  const getFeatured = () => data.filter((p) => p.featured)

  return { data, loading, error, getBySlug, getFeatured }
}
