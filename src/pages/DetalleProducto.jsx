import { useParams, Link } from 'react-router-dom';
import { productos } from '../data/productos';

export default function DetalleProducto() {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === Number(id));

    if (!producto) {
        return (
        <div>
            <h2>Producto no encontrado</h2>
            <Link to="/catalogo">Volver al catálogo</Link>
        </div>
        );
    }

    return (
        <div>
        <h2>{producto.nombre}</h2>
        <p>Categoría: {producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <p>Precio: S/ {producto.precio}</p>
        <Link to="/catalogo">Volver al catálogo</Link>
        </div>
    );
}