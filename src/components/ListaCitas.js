import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Cita from './Cita';
import { getCitas } from '../actions/citasActions';
import store from '../store';

store.subscribe(() => {
    localStorage.setItem('citas', JSON.stringify(store.getState()));
});


class ListaCitas extends Component {

    componentDidMount() {
        this.props.getCitas();
    }

    render() {

        const citas = this.props.citas;

        const message = citas.length === 0 ? 'No hay citas' : 'Administra tus  citas aquí';

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{message}</h2>

                    <div className="lista-citas">
                        {citas.map((cita, index) => (
                            <Cita key={index} cita={cita} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    citas: state.citas.citas
});

export default connect(mapStateToProps, { getCitas })(ListaCitas);
