
import { useState, useEffect } from 'react';
import ListaSolicitudes from '../components/ListaSolicitudes';
import FormularioContacto from '../components/FormularioContacto';

export default function Solicitudes({ solicitudes }) {
    const [cargando, setCargando] = useState(true);
    const [busqueda, setBusqueda] = useState('');
    const [textoFiltro, setTextoFiltro] = useState('');
    const [categoria, setCategoria] = useState('Todas');

    // Obtener los estados disponibles
    const estados = [
        'Todas',
        ...new Set(solicitudes.map((s) => s.estado)),
    ];

    // Simular la carga inicial
    useEffect(() => {
        const timer = setTimeout(() => {
            setCargando(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Buscar después de 300 milisegundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setTextoFiltro(busqueda);
        }, 300);

        return () => clearTimeout(timer);
    }, [busqueda]);

    // Aplicar búsqueda y filtro por estado
    const filtrados = solicitudes.filter(
        (p) =>
            p.titulo.toLowerCase().includes(textoFiltro.toLowerCase()) &&
            (categoria === 'Todas' || p.estado === categoria)
    );

    return (
        <div>
            <h2>Solicitudes</h2>

            <div className="filtros">
                <input
                    type="text"
                    placeholder="Buscar solicitud..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />

                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    {estados.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            {cargando ? (
                <p>Cargando solicitudes...</p>
            ) : (
                <ListaSolicitudes solicitudes={filtrados} />
            )}

            <FormularioContacto />
        </div>
    );
}
