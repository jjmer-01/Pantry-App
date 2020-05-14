import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    userReducer,
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))