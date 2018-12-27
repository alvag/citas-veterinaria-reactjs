import { MOSTRAR_CITAS, BORRAR_CITAS, AGREGAR_CITA } from './types';

export const getCitas = () => {
    return {
        type: MOSTRAR_CITAS
    };
};

export const addCita = (cita) => {
    return {
        type: AGREGAR_CITA,
        payload: cita
    };
};

export const deleteCita = id => {
    return {
        type: BORRAR_CITAS,
        payload: id
    };
};
