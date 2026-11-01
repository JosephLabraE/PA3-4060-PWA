import { useParams, Link } from 'react-router-dom';
import { solicitudes } from '../data/solicitudes';

export default function DetalleSolicitud() {
    const { id } = useParams();
    const solicitud = solicitudes.find((s) => s.id === Number(id));

    if (!solicitud) {
        return (
            <div>
                <h2>Solicitud no encontrada</h2>
                <Link to="/solicitudes">Volver a solicitudes</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>{solicitud.titulo}</h2>
            <p>Estado: {solicitud.estado}</p>
            <p>Fecha: {solicitud.fecha}</p>
            <p>{solicitud.descripcion}</p>
            <Link to="/solicitudes">Volver a solicitudes</Link>
        </div>
    );
}
