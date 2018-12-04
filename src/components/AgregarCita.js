import React, { Component } from 'react';
import uuid from 'uuid';

export default class AgregarCita extends Component {

    nombreMascota = React.createRef();
    propietario = React.createRef();
    fecha = React.createRef();
    hora = React.createRef();
    sintomas = React.createRef();

    state = {

    }

    crearNuevaCita = e => {
        e.preventDefault();

        const nuevaCita = {
            id: uuid(),
            nombreMascota: this.nombreMascota.current.value,
            propietario: this.propietario.current.value,
            fecha: this.fecha.current.value,
            hora: this.hora.current.value,
            sintomas: this.sintomas.current.value
        };

        this.props.crearCita(nuevaCita);

        e.currentTarget.reset();
        this.nombreMascota.current.focus();
    }

    render() {
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
                            <textarea ref={this.sintomas} className="form-control" id="sintoma"></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-success">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}
