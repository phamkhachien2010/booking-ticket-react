import { takeLatest, call, put } from 'redux-saga/effects'
import Swal from 'sweetalert2';
import { heThongRapService } from '../../../services/HeThongRapSevice';
import { STATUS_CODE } from '../../../util/Constant/settingSystem';
import { GET_LIST_CUMRAP, GET_LIST_HETHONGRAP, GET_LIST_RAP } from '../../Constant/ConstantReducer';
import { GET_ALL_CUMRAP_API, GET_ALL_HETHONGRAP_API, GET_ALL_LICHCHIEU_API, GET_ALL_PHIM_API, GET_ALL_RAP_API } from '../../Constant/ConstSaga'

function* getAllHeThongRapSaga(action) {
    try {
        const { data, status } = yield call(() => heThongRapService.getAllHeThongRap())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_LIST_HETHONGRAP,
                listHeThongRap: data.content
            })
            yield put({
                type: GET_ALL_CUMRAP_API
            })
            yield put({
                type: GET_ALL_RAP_API
            })
            yield put({
                type: GET_ALL_LICHCHIEU_API
            })
            yield put({
                type: GET_ALL_PHIM_API
            })
        } else {
            Swal.fire({
                title: "Error!",
                text: data.message,
                icon: "error",
                confirmButtonText: "Cool",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
        });
    }
}

export function* theoDoiGetAllHeThongRapSaga() {
    yield takeLatest(GET_ALL_HETHONGRAP_API, getAllHeThongRapSaga)
}

function* getAllCumRapSaga(action) {
    try {
        const { data, status } = yield call(() => heThongRapService.getAllCumRap())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_LIST_CUMRAP,
                listCumRap: data.content
            })
        } else {
            Swal.fire({
                title: "Error!",
                text: data.message,
                icon: "error",
                confirmButtonText: "Cool",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
        });
    }
}

export function* theoDoiGetAllCumRamSaga() {
    yield takeLatest(GET_ALL_CUMRAP_API, getAllCumRapSaga)
}

function* getAllRapSaga(action) {
    try {
        const { data, status } = yield call(() => heThongRapService.getAllRap())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_LIST_RAP,
                listRap: data.listRap
            })
        } else {
            Swal.fire({
                title: "Error!",
                text: data.message,
                icon: "error",
                confirmButtonText: "Cool",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error!",
            text: error.response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
        });
    }
}

export function* theoDoiGetAllRapSaga() {
    yield takeLatest(GET_ALL_RAP_API, getAllRapSaga)
}