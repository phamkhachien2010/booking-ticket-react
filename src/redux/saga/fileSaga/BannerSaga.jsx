import { takeLatest, call, put, delay } from "redux-saga/effects";
import Swal from "sweetalert2";
import { bannerService } from "../../../services/BannerService";
import { STATUS_CODE } from "../../../util/Constant/settingSystem";
import { DISPLAY_LOADING, GET_LIST_BANNER, HIDE_LOADING } from "../../Constant/ConstantReducer";
import { GET_ALL_BANNER_API } from "../../Constant/ConstSaga";

function* getAllBannerSaga(action) {
  yield put({
    type: DISPLAY_LOADING
  })
  yield delay(500)
  try {
    const { data, status } = yield call(() => bannerService.getAllBanner());
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_LIST_BANNER,
        listBanner: data.content,
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: data.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
    yield put({
      type: HIDE_LOADING
    })
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: error.response.data.message,
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
}

export function* theoDoiGetAllBannerSaga() {
  yield takeLatest(GET_ALL_BANNER_API, getAllBannerSaga);
}
