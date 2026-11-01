
import { useState } from 'react';

const formularioInicial = {
    titulo: '',
    descripcion: '',
};

export default function NuevaSolicitud({ onAgregarSolicitud }) {
    const [formulario, setFormulario] = useState(formularioInicial);
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormulario((actual) => ({
            ...actual,
            [name]: value,
        }));

        setEnviado(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAgregarSolicitud(formulario);

        setFormulario(formularioInicial);
        setEnviado(true);
    };

    return (
        <div>
            <h2>Nueva solicitud</h2>

            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="titulo">
                    Título de la solicitud
                </label>

                <input
                    id="titulo"
                    type="text"
                    name="titulo"
                    placeholder="Ej. Constancia de estudios"
                    value={formulario.titulo}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="descripcion">
                    Descripción
                </label>

                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Describe el motivo de tu solicitud..."
                    value={formulario.descripcion}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="btn-visita">
                    Registrar solicitud
                </button>

                {enviado && (
                    <p>¡Solicitud registrada correctamente!</p>
                )}
            </form>
        </div>
    );
}
