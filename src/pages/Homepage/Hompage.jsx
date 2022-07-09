import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_LIST_PHIM } from "../../redux/Constant/ConstantReducer";
import { GET_ALL_PHIM_API } from "../../redux/Constant/ConstSaga";
import CarouselHomepage from "./CarouselHomepage";
import PhimSlide from "./PhimSlide";
import TabHeTHongRapChieu from "./TabHeTHongRapChieu";

export default function Hompage() {
  const dispatch = useDispatch();
  const { listPhim } = useSelector((state) => state.PhimReducer);

  const listPhimDangChieu = () => {
    return listPhim?.filter((phim) => phim.dangChieu);
  };

  const listPhimSapChieu = () => {
    return listPhim?.filter((phim) => phim.sapChieu)
  }

  useEffect(() => {
    dispatch({ type: GET_ALL_PHIM_API });
    return () => { };
  }, []);

  return (
    <div>
      <CarouselHomepage />

      <div className="text-base w-4/5 m-auto py-4 pl-4">
        <button className="bg-gray-600 text-white px-3 py-2 rounded-lg mr-3" onClick={() => {
          dispatch({
            type: SET_LIST_PHIM,
            listPhimHienThi: listPhim
          });
        }}
        >
          Tất cả phim
        </button>
        <button className="bg-gray-600 text-white px-3 py-2 rounded-lg mr-3" onClick={() => {
          dispatch({
            type: SET_LIST_PHIM,
            listPhimHienThi: listPhimDangChieu()
          })
        }}>
          Đang chiếu
        </button>
        <button className="bg-gray-600 text-white px-3 py-2 rounded-lg" onClick={() => {
          dispatch({
            type: SET_LIST_PHIM,
            listPhimHienThi: listPhimSapChieu()
          })
        }}>
          Sắp chiếu
        </button>
      </div>
      <div className="pb-4">
        <PhimSlide />
      </div>

      <h3 className="text-center text-3xl font-bold py-4">Lịch chiếu</h3>
      <TabHeTHongRapChieu />

    </div>
  );
}
