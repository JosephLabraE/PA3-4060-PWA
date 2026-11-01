import { useState, useEffect } from 'react';
import { solicitudes } from '../data/solicitudes';
import ListaSolicitudes from '../components/ListaSolicitudes';
import FormularioContacto from '../components/FormularioContacto';

const estados = ['Todas', ...new Set(solicitudes.map((s) => s.estado))];

export default function Solicitudes() {
    const [lista, setLista] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [busqueda, setBusqueda] = useState('');
    const [textoFiltro, setTextoFiltro] = useState('');
    const [categoria, setCategoria] = useState('Todas');

    // Arreglo vacío: simula la carga de solicitudes una sola vez
    useEffect(() => {
        const timer = setTimeout(() => {
            setLista(solicitudes);
            setCargando(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Con dependencia y limpieza: espera 300 ms después de escribir antes de filtrar
    useEffect(() => {
        const timer = setTimeout(() => setTextoFiltro(busqueda), 300);
        return () => clearTimeout(timer);
    }, [busqueda]);

    const filtrados = lista.filter(
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
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    {estados.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            {cargando ? <p>Cargando solicitudes...</p> : <ListaSolicitudes solicitudes={filtrados} />}

            <FormularioContacto />
        </div>
    );
}
