import React, { Component } from 'react';
import './css/App.css';
import AgregarCita from './components/AgregarCita';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AgregarCita />
            </div>
        );
    }
}

export default App;
