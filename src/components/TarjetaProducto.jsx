import { Link } from 'react-router-dom';

export default function TarjetaProducto({ producto }) {
    const { id, nombre, categoria, precio } = producto;

    return (
        <article className="tarjeta">
            <h3>{nombre}</h3>
            <p className="tarjeta-categoria">{categoria}</p>
            <p className="tarjeta-precio">S/ {precio}</p>
            <Link to={`/producto/${id}`}>Ver detalle</Link>
        </article>
    );
}
