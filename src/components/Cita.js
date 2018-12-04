import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cita extends Component {

    eliminarCita = () => {
        this.props.eliminarCita(this.props.cita.id);
    }

    render() {
        const { nombreMascota, propietario, fecha, hora, sintomas } = this.props.cita;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Nombre del dueño: {propietario}</span></p>
                    <p className="card-text"><span>Fecha: {fecha}</span></p>
                    <p className="card-text"><span>Hora: {hora}</span></p>
                    <p className="card-text"><span>Síntomas:</span></p>
                    <p className="card-text">{sintomas}</p>

                    <button className="btn btn-danger" onClick={this.eliminarCita}>Eliminar</button>
                </div>
            </div>
        );
    }
}

Cita.propTypes = {
    eliminarCita: PropTypes.func.isRequired,
    cita: PropTypes.object.isRequired
};
