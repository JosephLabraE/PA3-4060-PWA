import React from 'react';
import { Link } from 'react-router-dom';
import { solicitudes } from '../data/solicitudes';

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

                <h3>Solicitudes recientes</h3>
                <ul className="solicitudes-lista">
                    {solicitudes.slice(0, 3).map((s) => (
                        <li key={s.id}>
                            {s.titulo} - {s.estado}{' '}
                            <Link to={`/solicitud/${s.id}`}>Ver detalle</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
