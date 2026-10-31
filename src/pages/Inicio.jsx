import React from 'react';
import { Link } from 'react-router-dom';
import { productos } from '../data/productos';

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        saludo: 'Hola',
        visitas: 0
        };
    }

    componentDidMount() {
        const hora = new Date().getHours();
        let saludo = 'Buenas noches';
        if (hora < 12) saludo = 'Buenos días';
        else if (hora < 19) saludo = 'Buenas tardes';

        this.setState({ saludo: saludo });
    }

    sumarVisita = () => {
        this.setState({ visitas: this.state.visitas + 1 });
    };

    render() {
        return (
        <div>
            <h2>{this.state.saludo}, bienvenido</h2>
            <p>Visitas: {this.state.visitas}</p>
            <button className="btn-visita" onClick={this.sumarVisita}>Sumar visita</button>

            <h3>Productos destacados</h3>
            <ul className="productos-lista">
            {productos.slice(0, 3).map((p) => (
                <li key={p.id}>
                {p.nombre} - S/ {p.precio}{' '}
                <Link to={`/producto/${p.id}`}>Ver detalle</Link>
                </li>
            ))}
            </ul>
        </div>
        );
    }
}