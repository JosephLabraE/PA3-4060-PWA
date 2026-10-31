import { Link } from 'react-router-dom';

export default function NoEncontrado() {
    return (
        <div>
        <h2>Error 404</h2>
        <p>La página que buscas no existe.</p>
        <br />
        <Link to="/">Volver al inicio</Link>
        </div>
    );
}