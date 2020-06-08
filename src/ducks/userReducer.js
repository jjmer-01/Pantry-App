import axios from 'axios'

const initialState = {
    user: {},
    loading: false,
    error: false,
    errorMessage: '',
    foodItems: [],
}

const CHECK_USER = "CHECK_USER"
const REGISTER = "REGISTER"
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const CLEAR_REDUCER = "CLEAR_REDUCER"

export function checkUser() {
    let action = {
        type: CHECK_USER,
        payload: axios.get('/api/user')
    }
    return action
}

export function register(first_name, last_name, email, username, password) {
    let action = {
        type: REGISTER,
        payload: axios.post('/api/register', { first_name, last_name, email, username, password })
    }
    return action
}

export function login(email, password) {
    let action = {
        type: LOGIN,
        payload: axios.post('/api/login', { email, password })
    }
    return action
}

export function logout() {
    let action = {
        type: LOGOUT,
        payload: axios.post('/api/logout')
    }
    return action
}

export function clearReducer() {
    let action = {
        type: CLEAR_REDUCER
    }
    return action
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHECK_USER + '_PENDING':
            return { ...state, loading: true, error: false }
        case CHECK_USER + '_FULFILLED':
            return { ...state, loading: false, error: false, user: action.payload.data }
        case CHECK_USER + '_REJECTED':
            return { ...state, ...initialState }

        case REGISTER + '_PENDING':
            return { ...state, loading: true, error: false }
        case REGISTER + '_FULFILLED':
            console.log('hit action.payload.data REGISTER FULFILLED, userReducer', action.payload.data)
            return { ...state, loading: false, user: action.payload.data }
        case REGISTER + '_REJECTED':
            return { ...state, loading: false, error: true, errorMessage: action.payload.response.data }

        case LOGIN + '_PENDING':
            return { ...state, loading: true, error: false }
        case LOGIN + '_FULFILLED':
            console.log('hit action.payload.data LOGIN FULFILLED, userReducer', action.payload.data)
            return { ...state, loading: false, error: false, user: action.payload.data
                // foodItems: action.payload.data.foodItems 
            }
            //? Check on this working?
        case LOGIN + '_REJECTED':
            return { ...state, loading: false, error: true, errorMessage: action.payload.response.data }

        case LOGOUT + '_PENDING':
            return { ...state, loading: true, error: false }
        case LOGOUT + '_FULFILLED':
            return { ...state, ...initialState }
        case LOGOUT + '_REJECTED':
            return { ...state, loading: false, error: true, errorMessage: action.payload.response.data }
        case CLEAR_REDUCER:
            return {...state, ...initialState}
        default: 
            return state
    }
}