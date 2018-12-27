import { MOSTRAR_CITAS, AGREGAR_CITA, BORRAR_CITAS } from '../actions/types';

const initialState = {
    citas: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MOSTRAR_CITAS:
            return {
                ...state
            };
        case AGREGAR_CITA:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            };
        case BORRAR_CITAS:
            return {
                ...state,
                citas: [...state.citas.filter(cita => cita.id !== action.payload)]
            };
        default:
            return state;
    }
};
