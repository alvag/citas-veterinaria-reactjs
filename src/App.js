import React, { Component } from 'react';
import './css/App.css';
import AgregarCita from './components/AgregarCita';
import Header from './components/Header';
import ListaCitas from './components/ListaCitas';

class App extends Component {

    state = {
        citas: []
    }

    componentDidMount() {
        const citas = JSON.parse(localStorage.getItem('citas'));
        if (citas) {
            this.setState({ citas });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('citas', JSON.stringify(this.state.citas));
    }

    crearCita = (nuevaCita) => {
        const citas = [...this.state.citas, nuevaCita];
        this.setState({ citas });
    }

    eliminarCita = id => {
        const citas = this.state.citas.filter(cita => cita.id !== id);
        this.setState({ citas });
    }

    render() {
        return (
            <div className="container">
                <Header title="Administrador de Pacientes de Veterinaria" />
                <div className="row">
                    <div className="col-md-6">
                        <AgregarCita crearCita={this.crearCita} />
                    </div>
                    <div className="col-md-6">
                        <ListaCitas
                            citas={this.state.citas}
                            eliminarCita={this.eliminarCita} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
