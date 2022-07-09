import {takeLatest, call, put} from 'redux-saga/effects';
import Swal from 'sweetalert2';
import { lichChieuService } from '../../../services/LichChieuService';
import { STATUS_CODE } from '../../../util/Constant/settingSystem';
import { GET_LIST_LICH_CHIEU } from '../../Constant/ConstantReducer';
import { GET_ALL_LICHCHIEU_API } from '../../Constant/ConstSaga';

function* getAllLichChieuSaga (action){
    try {
        const { data, status } = yield call(() => lichChieuService.getAllLichChieu())
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_LIST_LICH_CHIEU,
                listLichChieu: data.content
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

export function* theoDoiGetAllLichChieuSaga(){
    yield takeLatest(GET_ALL_LICHCHIEU_API, getAllLichChieuSaga)
}