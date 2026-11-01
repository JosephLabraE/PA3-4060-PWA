import { Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Inicio from './pages/Inicio';
import Solicitudes from './pages/Solicitudes';
import DetalleSolicitud from './pages/DetalleSolicitud';
import NuevaSolicitud from './pages/NuevaSolicitud';
import Seguimiento from './pages/Seguimiento';
import NoEncontrado from './pages/NoEncontrado';

export default function App() {
    const totalSeguimiento = useSelector((state) => state.solicitudes.length);

    return (
        <div className="app-container">
            <header className="header-nav">
                <h1>Solicitudes Académicas</h1>
                <nav className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/solicitudes">Solicitudes</Link>
                    <Link to="/nueva">Nueva solicitud</Link>
                    <Link to="/seguimiento">Seguimiento ({totalSeguimiento})</Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/solicitudes" element={<Solicitudes />} />
                    <Route path="/solicitud/:id" element={<DetalleSolicitud />} />
                    <Route path="/nueva" element={<NuevaSolicitud />} />
                    <Route path="/seguimiento" element={<Seguimiento />} />
                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </main>
        </div>
    );
}
