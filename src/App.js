import React, { Component } from 'react';
import './css/App.css';
import AgregarCita from './components/AgregarCita';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header title="Administrador de Pacientes de Veterinaria" />
                <div className="row">
                    <div className="col-md-6">
                        <AgregarCita />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
