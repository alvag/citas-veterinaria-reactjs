import React, { Component } from 'react';

export default class AgregarCita extends Component {

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agrega las Citas Aquí</h2>

                    <form >
                        <div className="form-group">
                            <label htmlFor="name">Nombre Mascota</label>
                            <input type="text" className="form-control" id="name" placeholder="Nombre Mascota" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="owner">Nombre Dueño</label>
                            <input type="text" className="form-control" id="owner" placeholder="Nombre Dueño de la Mascota" />
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label" htmlFor="date">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" id="date" className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label" htmlFor="time">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" id="time" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="sintoma">Sintomas</label>
                            <textarea className="form-control" id="sintoma"></textarea>
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
