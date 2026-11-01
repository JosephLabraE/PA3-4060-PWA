import TarjetaSolicitud from './TarjetaSolicitud';

export default function ListaSolicitudes({ solicitudes }) {
    if (solicitudes.length === 0) {
        return <p>No se encontraron solicitudes.</p>;
    }

    return (
        <div className="lista-solicitudes">
            {solicitudes.map((s) => (
                <TarjetaSolicitud key={s.id} solicitud={s} />
            ))}
        </div>
    );
}
