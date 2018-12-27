import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { mostrarError } from '../actions/errorActions';
import { addCita } from '../actions/citasActions';

class AgregarCita extends Component {

    componentWillMount() {
        this.props.mostrarError(false);
    }

    nombreMascota = React.createRef();
    propietario = React.createRef();
    fecha = React.createRef();
    hora = React.createRef();
    sintomas = React.createRef();

    crearNuevaCita = e => {
        e.preventDefault();

        if (this.nombreMascota.current.value === '' ||
            this.propietario.current.value === '' ||
            this.hora.current.value === '' ||
            this.fecha.current.value === '' ||
            this.sintomas.current.value === '') {
            this.props.mostrarError(true);
            return;
        }

        this.props.mostrarError(false);

        const nuevaCita = {
            id: uuid(),
            nombreMascota: this.nombreMascota.current.value,
            propietario: this.propietario.current.value,
            fecha: this.fecha.current.value,
            hora: this.hora.current.value,
            sintomas: this.sintomas.current.value
        };

        this.props.addCita(nuevaCita);

        e.currentTarget.reset();
        this.nombreMascota.current.focus();
    }

    render() {
        const hasError = this.props.error;

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las Citas Aquí</h2>

                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre Mascota</label>
                            <input ref={this.nombreMascota} type="text" className="form-control" id="name" placeholder="Nombre Mascota" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="owner">Nombre Dueño</label>
                            <input ref={this.propietario} type="text" className="form-control" id="owner" placeholder="Nombre Dueño de la Mascota" />
                        </div>

                        <div className="row">
                            <div className="form-group col-6">
                                <label htmlFor="date">Fecha</label>
                                <input ref={this.fecha} type="date" id="date" className="form-control" />
                            </div>

                            <div className="form-group col-6">
                                <label htmlFor="time">Hora</label>
                                <input ref={this.hora} type="time" className="form-control" id="time" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="sintoma">Sintomas</label>
                            <textarea ref={this.sintomas} className="form-control" id="sintoma" ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-success">Agregar</button>
                        </div>
                    </form>
                    {hasError ? <div className="alert alert-danger text-center mt-3">Todos los campos son obligatorios</div> : ''}
                </div>
            </div>

        );
    }
}

AgregarCita.propTypes = {
    addCita: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    citas: state.citas.citas,
    error: state.error.error
});

export default connect(mapStateToProps, { addCita, mostrarError })(AgregarCita);
