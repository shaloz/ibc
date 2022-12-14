import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


const create = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

export default create