import { useState } from 'react';

const inicial = { nombre: '', correo: '', mensaje: '' };

export default function FormularioContacto() {
    const [form, setForm] = useState(inicial);
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
        setForm(inicial);
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <h3>Contáctanos</h3>
            <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
            <input name="correo" type="email" placeholder="Correo" value={form.correo} onChange={handleChange} required />
            <textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} required />
            <button type="submit" className="btn-visita">Enviar</button>
            {enviado && <p>¡Gracias! Tu mensaje fue enviado.</p>}
        </form>
    );
}
