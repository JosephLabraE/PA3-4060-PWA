import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);

const translations = {
    es: {
        store: 'Tienda', home: 'Inicio', catalog: 'Catálogo',
        themeLight: '☀️ Tema claro', themeDark: '🌙 Tema oscuro',
        search: 'Buscar producto...', loading: 'Cargando productos...',
    },
    en: {
        store: 'Store', home: 'Home', catalog: 'Catalog',
        themeLight: '☀️ Light theme', themeDark: '🌙 Dark theme',
        search: 'Search products...', loading: 'Loading products...',
    },
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('es');
    const toggleLanguage = () => setLanguage((current) => current === 'es' ? 'en' : 'es');
    const t = (key) => translations[language][key] ?? key;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage debe utilizarse dentro de LanguageProvider');
    return context;
}
