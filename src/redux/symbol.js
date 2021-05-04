import * as ActionTypes from './ActionTypes';

export const Symbol = (state = {isLoading: true, symbol: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SYMBOLS:
            return {...state, isLoading: false, symbol: action.payload[action.payload.length-1].symbol};

        case ActionTypes.SYMBOLS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_SYMBOL:
            const symbol = action.payload;
            return {...state, isLoading: false, symbol: symbol.symbol};

        case ActionTypes.SYMBOL_LOADING:
            return {...state, isLoading:true, symbol:[]}

        default:
            return state;
    }
};