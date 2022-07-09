import { all } from "redux-saga/effects";
import * as BannerSaga from "./fileSaga/BannerSaga";
import * as PhimSaga from "./fileSaga/PhimSaga";
import * as HeThongRapSaga from "./fileSaga/HeThongRapSaga";
import * as LichChieuSaga from './fileSaga/LichChieuSaga'

export function* rootSaga() {
  yield all([
    BannerSaga.theoDoiGetAllBannerSaga(),

    PhimSaga.theoDoiGetAllPhimSaga(),

    HeThongRapSaga.theoDoiGetAllHeThongRapSaga(),
    HeThongRapSaga.theoDoiGetAllCumRamSaga(),
    HeThongRapSaga.theoDoiGetAllRapSaga(),

    LichChieuSaga.theoDoiGetAllLichChieuSaga(),
  ]);
}
