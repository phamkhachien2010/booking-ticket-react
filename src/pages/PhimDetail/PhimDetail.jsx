import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Tabs } from 'antd';
import { GET_ALL_HETHONGRAP_API, GET_ALL_LICHCHIEU_API, GET_ALL_PHIM_API } from '../../redux/Constant/ConstSaga';
import dateFormat from 'dateformat'
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;

export default function PhimDetail(props) {

    const { listPhim } = useSelector(state => state.PhimReducer);
    const { listLichChieu } = useSelector(state => state.LichChieuReducer);
    const { listHeThongRap, listCumRap, listRap } = useSelector(state => state.HeThongRapReducer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: GET_ALL_PHIM_API
        })
        dispatch({
            type: GET_ALL_LICHCHIEU_API
        })
        dispatch({
            type: GET_ALL_HETHONGRAP_API
        })

        return () => {

        }
    }, [])

    const { id } = props.match.params;
    const phimCurrent = listPhim[id - 1];
    const lichChieuPhim = listLichChieu?.filter((lichChieu) => lichChieu.maPhim == id);


    const getRapTheoLichChieu = () => {
        const listRapTheoLichChieu = [];
        lichChieuPhim.forEach((lichChieu, index) => {
            listRap.forEach((rap, i) => {
                if (rap.id === lichChieu.maRap) {
                    listRapTheoLichChieu.push(rap)
                }
            })
        })
        return listRapTheoLichChieu
    }

    const getCumRapTheoLichChieu = () => {
        const cumRapTheoLichChieu = []
        const listRapTheoLichChieu = getRapTheoLichChieu();
        listRapTheoLichChieu.forEach((rap, index) => {
            listCumRap.forEach((cumRap, i) => {
                if (cumRap.id === rap.cumRapId) {
                    cumRapTheoLichChieu.push(cumRap)
                }
            })
        })
        return cumRapTheoLichChieu
    }

    const getHeThongRapTheoLichChieu = () => {
        const heThongRapTheoLichChieu = [];
        const listCumRapTheoLichChieu = getCumRapTheoLichChieu();
        listCumRapTheoLichChieu.forEach((cumRap, index) => {
            listHeThongRap.forEach((heThongRap, i) => {
                if (heThongRap.id === cumRap.heThongRapId) {
                    heThongRapTheoLichChieu.push(heThongRap)
                }
            })
        })
        return heThongRapTheoLichChieu
    }

    const renderLichChieuTheoCumRap = (heThongRapId) => {
        const listCumRapTheoLichChieu = getCumRapTheoLichChieu()
        const cumRapTheoLichChieu = listCumRapTheoLichChieu?.filter(cumRap => cumRap.heThongRapId === heThongRapId);
        const listRapTheoLichChieu = getRapTheoLichChieu();
        const rapTheoCumRap = []
        cumRapTheoLichChieu.forEach((cumRap, index) => {
            listRapTheoLichChieu.forEach((rap, i) => {
                if (cumRap.id === rap.cumRapId) {
                    rapTheoCumRap.push(rap)
                }
            })
        })
        const lichChieuTheoRap = [];
        lichChieuPhim.forEach((lichChieu, index) => {
            rapTheoCumRap.forEach((rap, i) => {
                if (rap.id === lichChieu.maRap) {
                    lichChieuTheoRap.push(lichChieu)
                }
            })
        })
        return lichChieuTheoRap.map((lichChieu, index) => {
            return <div className='flex items-center' key={index}>
                <p className='mr-3 mb-0'>Thời gian chiếu: {dateFormat(lichChieu.ngayChieuGioChieu, 'UTC:h:MM TT dd/mm/yyyy')}</p>
                <NavLink className='bg-slate-500 px-2 py-1 rounded-lg text-white flex items-center' to='dat-ve'>Đặt vé</NavLink>
            </div>
        })
    }

    const renderCumRapTheoHeThongRap = (heThongRapId) => {
        const listCumRapTheoLichChieu = getCumRapTheoLichChieu()
        const cumRapTheoLichChieu = listCumRapTheoLichChieu?.filter(cumRap => cumRap.heThongRapId === heThongRapId);
        return cumRapTheoLichChieu.map((cumRap, index) => {
            return <div className='flex mb-3' >
                <img style={{ width: '75px', marginRight: '10px' }} src={cumRap.hinhAnh} alt={cumRap.tenCumRap} />
                <div className='whitespace-pre-wrap'>
                    <p className='font-bold text-black text-center'>{cumRap.tenCumRap}</p>
                    <p>{cumRap.diaChi}</p>
                    {renderLichChieuTheoCumRap(heThongRapId)}
                </div>
            </div>
        })

    }

    const renderHeThongRapTheoLichChieu = () => {
        const listHeThongRapTheoLichChieu = getHeThongRapTheoLichChieu();
        return listHeThongRapTheoLichChieu.map((heThongRap, index) => {
            return <TabPane tab={<img style={{ width: '75px' }} src={heThongRap.logo} alt={heThongRap.tenHeThongRap} />} key={index} >
                {renderCumRapTheoHeThongRap(heThongRap.id)}
            </TabPane >
        })
    }



    return (
        <div style={{ backgroundImage: `url(${phimCurrent.hinhAnh})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-screen'>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} className='h-100'>
                <div className="container">
                    <div className='grid grid-cols-3' style={{ padding: '150px 50px 20px 50px' }}>
                        <div>
                            <img src={phimCurrent.hinhAnh} alt="" />
                        </div>
                        <div>
                            <p>Ngày khởi chiếu: {dateFormat(phimCurrent.ngayKhoiChieu, "dd/mm/yyyy")}</p>
                            <h2>Tên phim: {phimCurrent.tenPhim}</h2>
                            <p>{phimCurrent.moTa}</p>
                        </div>
                        <div className='ml-5'>
                            <h3>Đánh giá</h3>
                            <Rate allowHalf defaultValue={2.5} />
                        </div>
                    </div>
                    <h2 className='text-center text-2xl'>Lịch chiếu</h2>
                    <div className='bg-white p-5'>
                        <Tabs tabPosition={'left'}>
                            {renderHeThongRapTheoLichChieu()}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
