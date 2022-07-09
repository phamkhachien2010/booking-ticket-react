import { call, takeLatest, put } from "redux-saga/effects";
import Swal from "sweetalert2";
import { phimService } from "../../../services/PhimService";
import { STATUS_CODE } from "../../../util/Constant/settingSystem";
import { GET_LIST_PHIM, SET_LIST_PHIM } from "../../Constant/ConstantReducer";
import { GET_ALL_PHIM_API } from "../../Constant/ConstSaga";

function* getAllPhimSaga(action) {
  try {
    const { data, status } = yield call(() => phimService.getAllPhim());
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_LIST_PHIM,
        listPhim: data.content,
      });

      yield put({
        type: SET_LIST_PHIM,
        listPhimHienThi: data.content
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

export function* theoDoiGetAllPhimSaga() {
  yield takeLatest(GET_ALL_PHIM_API, getAllPhimSaga);
}
