import React, { Component } from 'react';
import Cita from './Cita';

export default class ListaCitas extends Component {

    render() {

        const citas = this.props.citas;

        const message = citas.length === 0 ? 'No hay citas' : 'Administra tus  citas aquí';

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>

                    <div className="lista-citas">
                        {citas.map((cita, index) => (
                            <Cita key={index} cita={cita}
                                eliminarCita={this.props.eliminarCita} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
