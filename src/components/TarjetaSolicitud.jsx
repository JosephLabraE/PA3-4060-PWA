import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { agregarSeguimiento, quitarSeguimiento } from '../redux/seguimiento';

export default function TarjetaSolicitud({ solicitud }) {
    const { id, titulo, estado, fecha } = solicitud;
    const enSeguimiento = useSelector((state) => state.solicitudes.some((s) => s.id === id));
    const dispatch = useDispatch();

    return (
        <article className="tarjeta">
            <h3>{titulo}</h3>
            <p className="tarjeta-fecha">{fecha}</p>
            <p className="tarjeta-estado">{estado}</p>
            <Link to={`/solicitud/${id}`}>Ver detalle</Link>
            <br />
            {enSeguimiento ? (
                <button className="btn-visita" onClick={() => dispatch(quitarSeguimiento(id))}>Quitar seguimiento</button>
            ) : (
                <button className="btn-visita" onClick={() => dispatch(agregarSeguimiento(solicitud))}>Seguir</button>
            )}
        </article>
    );
}
