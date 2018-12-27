import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducerPrincipal from './reducers';

// const initialState = {};

const middleware = [thunk];

let storageState = JSON.parse(localStorage.getItem('citas'));
storageState = storageState ? storageState : [];

const store = createStore(reducerPrincipal, storageState, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
