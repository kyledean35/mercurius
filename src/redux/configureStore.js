import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Symbol } from './symbol';
import { Crypto } from './crypto';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers ({
            symbol: Symbol,
            crypto: Crypto
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};