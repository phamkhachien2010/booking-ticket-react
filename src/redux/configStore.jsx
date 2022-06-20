import {applyMiddleware, combineReducers, createStore} from 'redux'


import createMiddleWareSaga from 'redux-saga'
import { LoadingReducer } from './reducer/LoadingReducer';
import { rootSaga } from './saga/rootSaga';

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga)

export default store;