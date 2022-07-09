import {applyMiddleware, combineReducers, createStore} from 'redux'


import createMiddleWareSaga from 'redux-saga'
import { BannerReducer } from './reducer/BannerReducer';
import { HeThongRapReducer } from './reducer/HeThongRapReducer';
import { LichChieuReducer } from './reducer/LichChieuReducer';
import { LoadingReducer } from './reducer/LoadingReducer';
import { ModalReducer } from './reducer/ModalReducer';
import { PhimReducer } from './reducer/PhimReducer';
import { rootSaga } from './saga/rootSaga';

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    LoadingReducer,
    BannerReducer,
    PhimReducer,
    ModalReducer,
    HeThongRapReducer,
    LichChieuReducer
})

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga)

export default store;