import TarjetaProducto from './TarjetaProducto';

export default function ListaProductos({ productos }) {
    if (productos.length === 0) {
        return <p>No se encontraron productos.</p>;
    }

    return (
        <div className="lista-productos">
            {productos.map((p) => (
                <TarjetaProducto key={p.id} producto={p} />
            ))}
        </div>
    );
}
