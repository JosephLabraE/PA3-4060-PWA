import { useState, useEffect } from 'react';
import { productos } from '../data/productos';
import ListaProductos from '../components/ListaProductos';
import FormularioContacto from '../components/FormularioContacto';

const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];

export default function Catalogo() {
    const [lista, setLista] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [busqueda, setBusqueda] = useState('');
    const [textoFiltro, setTextoFiltro] = useState('');
    const [categoria, setCategoria] = useState('Todas');

    // Arreglo vacío: simula la carga de productos una sola vez
    useEffect(() => {
        const timer = setTimeout(() => {
            setLista(productos);
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
            p.nombre.toLowerCase().includes(textoFiltro.toLowerCase()) &&
            (categoria === 'Todas' || p.categoria === categoria)
    );

    return (
        <div>
            <h2>Catálogo</h2>

            <div className="filtros">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    {categorias.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            {cargando ? <p>Cargando productos...</p> : <ListaProductos productos={filtrados} />}

            <FormularioContacto />
        </div>
    );
}
