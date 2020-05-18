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

export function checkUser() {
    let action = {
        type: CHECK_USER,
        payload: axios.get('/api/check')
    }
    return action
}

export function register() {
    let action = {
        type: REGISTER,
        payload: axios.get('/api/register')
    }
    return action
}

export function login() {
    let action = {
        type: LOGIN,
        payload: axios.get('/api/login')
    }
    return action
}

export function logout() {
    let action = {
        type: LOGOUT,
        payload: axios.get('/api/logout')
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
            return { ...state, loading: false, error: true, errorMessage: 'CHECK_USER rejected' }

        case REGISTER + '_PENDING':
            return { ...state, loading: true, error: false }
        case REGISTER + '_FULFILLED':
            return { ...state, loading: false, user: action.payload.data }
        case REGISTER + '_REJECTED':
            return { ...state, loading: false, error: true, errorMessage: 'REGISTER rejected' }

        case LOGIN + '_PENDING':
            return { ...state, loading: true, error: false }
        case LOGIN + '_FULFILLED':
            return { ...state, loading: false, error: false, user: action.payload.data.user, foodItems: action.payload.data.foodItems }
        case LOGIN + '_REJECTED':
            return { ...state, loading: false, error: true, errorMessage: 'LOGIN rejected' }

        case LOGOUT + '_PENDING':
            return { ...state, loading: true, error: false }
        case LOGOUT + '_FULFILLED':
            return { ...state, ...initialState }
        case LOGOUT + '_REJECTED':
            return { ...state, loading: false, error: true }
        default: 
            return state
    }
}