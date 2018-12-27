import React, { Component } from 'react';
import './css/App.css';
import AgregarCita from './components/AgregarCita';
import Header from './components/Header';
import ListaCitas from './components/ListaCitas';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

    // componentDidMount() {
    //     const citas = JSON.parse(localStorage.getItem('citas'));
    //     if (citas) {
    //         this.setState({ citas });
    //     }
    // }

    // componentDidUpdate() {
    //     localStorage.setItem('citas', JSON.stringify(this.state.citas));
    // }

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Header title="Administrador de Pacientes de Veterinaria" />
                    <div className="row">
                        <div className="col-md-6">
                            <AgregarCita />
                        </div>
                        <div className="col-md-6">
                            <ListaCitas />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
