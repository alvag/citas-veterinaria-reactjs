import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteCita } from '../actions/citasActions';

class Cita extends Component {

    eliminarCita = () => {
        this.props.deleteCita(this.props.cita.id);
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
    deleteCita: PropTypes.func.isRequired,
    cita: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nombreMascota: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = state => ({
    citas: state.citas.citas
});

export default connect(mapStateToProps, { deleteCita })(Cita);
