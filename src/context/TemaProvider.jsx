import { useState, useEffect } from 'react';
import { TemaContexto } from './TemaContexto';

export const TemaProvider = ({ children }) => {
    const [temaOscuro, setTemaOscuro] = useState(false);

    const alternarTema = () => setTemaOscuro(!temaOscuro);
    
    useEffect(() => {
        document.body.classList.toggle('oscuro', temaOscuro);
    }, [temaOscuro]);

    return (
        <TemaContexto.Provider value={{ temaOscuro, alternarTema }}>
            {children}
        </TemaContexto.Provider>
    );
};