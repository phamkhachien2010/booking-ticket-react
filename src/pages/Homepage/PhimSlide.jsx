import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dateFormat from 'dateformat'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";

import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { DISPLAY_MODAL_VIDEO_PHIM, SET_LIST_PHIM } from "../../redux/Constant/ConstantReducer";

import stylePhimSlide from './phimSlide.module.css'
import ModalVideoPhim from "../../components/modal/ModalVideoPhim";
import { NavLink } from "react-router-dom";


export default function PhimSlide() {
  const { listPhim, listPhimHienThi } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SET_LIST_PHIM,
      listPhimHienThi: listPhim
    })

    return () => {

    }
  }, [])


  const renderSlidePhim = () => {
    return listPhimHienThi?.map((phim, index) => {
      return <SwiperSlide key={index}>
        <div>
          <div className={stylePhimSlide.slide_parent}>
            <img src={phim.hinhAnh} alt="phim.tenPhim" />
            <div className={stylePhimSlide.slide_child}>
              <h3 className="text-white text-2xl mb-5">{phim.tenPhim}</h3>
              <p className="text-4xl cursor-pointer" onClick={() => {
                dispatch({
                  type: DISPLAY_MODAL_VIDEO_PHIM,
                  phimModal: phim
                })
              }}><i className="fa fa-play-circle"></i></p>
              <h3 className="text-white">Khởi chiếu: {dateFormat(phim.ngayKhoiChieu, "dd-mm-yyyy")}</h3>
            </div>
          </div><br />
          <NavLink to={`/phim-detail/${phim.id}`} className="block bg-blue-300 px-3 py-2 rounded-lg w-100 hover:text-white hover:font-bold">Đặt vé</NavLink>
        </div>
      </SwiperSlide>;
    });
  };

  return (
    <div className="w-4/5 m-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {renderSlidePhim()}

      </Swiper>
      <ModalVideoPhim />
    </div>
  );
}
