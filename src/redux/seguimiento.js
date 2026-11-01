export const AGREGAR_SEGUIMIENTO = 'AGREGAR_SEGUIMIENTO';
export const QUITAR_SEGUIMIENTO = 'QUITAR_SEGUIMIENTO';

export const agregarSeguimiento = (solicitud) => ({ type: AGREGAR_SEGUIMIENTO, payload: solicitud });
export const quitarSeguimiento = (id) => ({ type: QUITAR_SEGUIMIENTO, payload: id });

const estadoInicial = { solicitudes: [] };

export default function seguimientoReducer(state = estadoInicial, action) {
    switch (action.type) {
        case AGREGAR_SEGUIMIENTO:
            if (state.solicitudes.some((s) => s.id === action.payload.id)) return state;
            return { ...state, solicitudes: [...state.solicitudes, action.payload] };
        case QUITAR_SEGUIMIENTO:
            return { ...state, solicitudes: state.solicitudes.filter((s) => s.id !== action.payload) };
        default:
            return state;
    }
}
