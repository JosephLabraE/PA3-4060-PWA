import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import DetalleProducto from './pages/DetalleProducto';
import NoEncontrado from './pages/NoEncontrado';

export default function App() {
    return (
        <div className="app-container">
            <header className="header-nav">
                <h1>Tienda</h1>
                <nav className="nav-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/catalogo">Catálogo</Link>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/producto/:id" element={<DetalleProducto />} />
                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </main>
        </div>
    );
}