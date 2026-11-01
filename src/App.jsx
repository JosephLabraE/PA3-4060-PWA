import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import DetalleProducto from './pages/DetalleProducto';
import NoEncontrado from './pages/NoEncontrado';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';

export default function App() {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <div className={`app-container theme-${theme}`}>
            <header className="header-nav">
                <h1>{t('store')}</h1>
                <nav className="nav-links">
                    <Link to="/">{t('home')}</Link>
                    <Link to="/catalogo">{t('catalog')}</Link>
                    <button type="button" className="context-button" onClick={toggleTheme}>
                        {theme === 'light' ? t('themeDark') : t('themeLight')}
                    </button>
                    <button type="button" className="context-button" onClick={toggleLanguage}>
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/catalogo" element={<Catalogo />} />
                    <Route path="/producto/:id" element={<DetalleProducto />} />
                    <Route path="*" element={<NoEncontrado />} />
                </Routes>
            </main>
        </div>
    );
}
