import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { quitarSeguimiento } from '../redux/seguimiento';

export default function Seguimiento() {
    const enSeguimiento = useSelector((state) => state.solicitudes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Solicitudes en seguimiento</h2>
            <p>Total: {enSeguimiento.length}</p>

            {enSeguimiento.length === 0 ? (
                <p>No tienes solicitudes en seguimiento.</p>
            ) : (
                <ul className="solicitudes-lista">
                    {enSeguimiento.map((s) => (
                        <li key={s.id}>
                            <Link to={`/solicitud/${s.id}`}>{s.titulo}</Link> - {s.estado}{' '}
                            <button className="btn-visita" onClick={() => dispatch(quitarSeguimiento(s.id))}>Quitar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
