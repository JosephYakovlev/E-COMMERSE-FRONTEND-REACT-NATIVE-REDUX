import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import BasketReducer from './reducers'

const rootReducer = combineReducers({BasketReducer})

export const Store = createStore(rootReducer, applyMiddleware(thunk))