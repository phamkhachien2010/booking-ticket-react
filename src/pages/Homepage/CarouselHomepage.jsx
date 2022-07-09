import React from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_ALL_BANNER_API } from "../../redux/Constant/ConstSaga";


export default function CarouselHomepage() {
  const dispatch = useDispatch();
  const { listBanner } = useSelector((state) => state.BannerReducer);

  useEffect(() => {
    dispatch({
      type: GET_ALL_BANNER_API,
    });

    return () => {};
  }, []);

  const renderListBanner = () => {
    return listBanner?.map((banner, index) => {
      return (
        <div key={index}>
          <div style={{backgroundImage:`url(${banner.hinhAnh})`, height:'500px', backgroundSize:'cover', backgroundPosition:'top'}}>
            {/* <img src={banner.hinhAnh} alt="" /> */}
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel effect="fade" autoplay >
      {renderListBanner()}
    </Carousel>
  );
}
