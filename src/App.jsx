import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import ProyectoDetalle from './pages/ProyectoDetalle'
import Stack from './pages/Stack'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}
