import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchSymbol = () => dispatch => {   
    dispatch(symbolLoading());

    return fetch(baseUrl + 'symbol')
    .then(response => response.json())
    .then(symbols => {
        dispatch(addSymbols(symbols));
    })
    .catch(error => dispatch(symbolsFailed(error.message)));
};

export const symbolsFailed = errMess => ({
    type: ActionTypes.SYMBOLS_FAILED,
    payload: errMess
});

export const symbolLoading = () => ({
    type: ActionTypes.SYMBOL_LOADING
});

export const addSymbols = symbols => ({
    type: ActionTypes.ADD_SYMBOLS,
    payload: symbols
});

export const addSymbol = symbol => ({
    type: ActionTypes.ADD_SYMBOL,
    payload: symbol
});

export const postSymbol = (symbol) => dispatch => {
    dispatch(symbolLoading());

    const newSymbol = {
        symbol: symbol
    };

    return fetch(baseUrl + 'symbol',{
        method: "POST",
        body: JSON.stringify(newSymbol),
        headers: {
            "Content-Type": "application/json"
            }
      })
      .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response =>  setTimeout(() => {
        dispatch(addSymbol(response));
    }, 50))
}

//Action creators for Crypto
export const fetchCrypto = () => dispatch => {   
    dispatch(cryptoLoading());

    return fetch(baseUrl + 'crypto')
    .then(response => response.json())
    .then(cryptos => {
        dispatch(addCryptos(cryptos));
    })
    .catch(error => dispatch(cryptosFailed(error.message)));
};

export const cryptosFailed = errMess => ({
    type: ActionTypes.CRYPTOS_FAILED,
    payload: errMess
});

export const addCryptos = cryptos => ({
    type: ActionTypes.ADD_CRYPTOS,
    payload: cryptos
});

export const addCrypto = crypto => ({
    type: ActionTypes.ADD_CRYPTO,
    payload: crypto
});

export const cryptoLoading = () => ({
    type: ActionTypes.CRYPTO_LOADING
});

export const postCrypto = (crypto) => dispatch => {
    dispatch(cryptoLoading());

    const newCrypto = {
        crypto: crypto
    };

    return fetch(baseUrl + 'crypto',{
        method: "POST",
        body: JSON.stringify(newCrypto),
        headers: {
            "Content-Type": "application/json"
            }
      })
      .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response =>  setTimeout(() => {
        dispatch(addCrypto(response));
    }, 50))
}
