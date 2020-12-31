/*
|--------------------------------------------------------------------------
| Auth store.
|--------------------------------------------------------------------------
|
| Here you can find the store for the authentication part of the application
| It manages all authentication data like the current user, auth status and errors.
|
*/

import * as types from "../actionTypes";

// The initial state.
const initState = {
    isAuthenticated: false,
    loading: true,
    user: {},
    loginError: "",
    registerError: "",
    authError: "",
    userLoadedError: "",
};

/**
 * The auth store.
 *
 * @param {object} state
 *   The inital state.
 * @param {object} action
 *   The dispatched action.
 */
const auth = (state = initState, action: { type: string; payload: any }) => {
    switch (action.type) {
        case types.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                loginError: "",
                registerError: "",
            };
        case types.USER_LOADED:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                loginError: "",
                registerError: "",
                user: action.payload,
            };
        case types.USER_LOADED_ERROR:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                userLoadedError: action.payload,
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: {},
                loginError: action.payload,
            };
        case types.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: {},
                registerError: action.payload,
            };
    }
    return state;
};

export default auth;
