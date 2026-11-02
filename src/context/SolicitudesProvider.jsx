import { useState } from 'react';
import { SolicitudesContexto } from './SolicitudesContexto';
import { solicitudes as solicitudesIniciales } from '../data/solicitudes';

export const SolicitudesProvider = ({ children }) => {
    const [solicitudes, setSolicitudes] = useState(solicitudesIniciales);

    const agregarSolicitud = (nuevaSolicitud) => {
        const nueva = {
            ...nuevaSolicitud,
            id: Math.max(0, ...solicitudes.map((s) => s.id)) + 1,
            estado: 'Pendiente',
            fecha: new Date().toISOString().split('T')[0],
        };

        setSolicitudes((actuales) => [...actuales, nueva]);
    };

    return (
        <SolicitudesContexto.Provider value={{ solicitudes, agregarSolicitud }}>
            {children}
        </SolicitudesContexto.Provider>
    );
};