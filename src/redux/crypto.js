import * as ActionTypes from './ActionTypes';

export const Crypto = (state = {isLoading: true, crypto: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CRYPTOS:
            return {...state, isLoading: false, crypto: action.payload[action.payload.length-1].crypto};

        case ActionTypes.CRYPTOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_CRYPTO:
            const crypto = action.payload;
            return {...state, isLoading: false, crypto: crypto.crypto};
    
        case ActionTypes.CRYPTO_LOADING:
            return {...state, isLoading:true, crypto:[]}
        default:
            return state;
    }
};