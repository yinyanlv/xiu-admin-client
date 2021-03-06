import * as actions from './actions';

const initialState = {
    isHandling: false,
    errorMessage: ''
};

export function loginState(state = initialState, action) {
    switch (action.type) {
        case actions.DO_LOGIN:
            return {
                isHandling: true,
                errorMessage: ''
            };
        case actions.LOGIN_FAILED:

            return {
                isHandling: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

