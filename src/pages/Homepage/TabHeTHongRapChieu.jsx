import React, { useEffect } from 'react'
import { Table, Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_HETHONGRAP_API } from '../../redux/Constant/ConstSaga';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import dateFormat from 'dateformat'

const { TabPane } = Tabs;

export default function TabHeTHongRapChieu() {

    const { listHeThongRap, listCumRap, listRap } = useSelector(state => state.HeThongRapReducer);
    const { listLichChieu } = useSelector(state => state.LichChieuReducer);
    const { listPhim } = useSelector(state => state.PhimReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: GET_ALL_HETHONGRAP_API
        })

        return () => {

        }
    }, [])

    const layLichChieuTheoRap = (rapId) => {
        const listLichChieuTheoRap = listLichChieu?.filter(lichChieu => lichChieu.maRap === rapId)
        return listLichChieuTheoRap
    }

    const layLichChieuTheoCumRap = (cumRapId) => {
        const rapTheoCumRap = listRap?.filter(rap => rap.cumRapId === cumRapId)
        const listLichChieuTheoRap = rapTheoCumRap.map((rap, index) => {
            return layLichChieuTheoRap(rap.id)
        })
        const listLichChieuTheoRapFlatent = _.flatten(listLichChieuTheoRap)
        return listLichChieuTheoRapFlatent
    }



    const listPhimTheoCumRap = (cumRapId) => {
        const lichChieuTheoCumRap = layLichChieuTheoCumRap(cumRapId);
        let listPhimHienThi = []
        lichChieuTheoCumRap.forEach(lichChieu => {
            const phimHienThi = listPhim?.find(phim => phim.id === lichChieu.maPhim)
            listPhimHienThi.push(phimHienThi)
        });
        return listPhimHienThi
    }

    const renderLichChieuTheoPhim = (cumRapId, maPhim) => {
        const listLichChieuTheoCumRap = layLichChieuTheoCumRap(cumRapId);
        const listLichChieuTheoPhim = listLichChieuTheoCumRap.filter(lichChieu => lichChieu.maPhim === maPhim)
        return listLichChieuTheoPhim.map((lichChieu, index) => {
            return <NavLink className='mr-3' to='/' key={index}>{dateFormat(lichChieu.ngayChieuGioChieu, 'HH:MM')}</NavLink>
        })
    }

    const renderPhim_LichChieu = (cumRapId) => {
        const danhSachPhimTheoCumRap = listPhimTheoCumRap(cumRapId);
        return danhSachPhimTheoCumRap?.map((phim, index) => {
            return <div className='flex mb-2' key={index}>
                <img style={{ width: '100px' }} src={phim.hinhAnh} alt="" />
                <div className='ml-3'>
                    <p className='font-bold text-xl'>{phim.tenPhim}</p>
                    <div className='grid grid-cols-10'>
                        {renderLichChieuTheoPhim(cumRapId, phim.id)}
                    </div>
                </div>
            </div>
        })
    }

    const renderCumRap = (heThongRapId) => {
        const cumRapTheoHeThongRap = listCumRap?.filter(cumRap => cumRap.heThongRapId === heThongRapId);
        return cumRapTheoHeThongRap.map((cumRap, index) => {

            return <TabPane tab={<div className='flex' style={{ width: '300px' }}>
                <img style={{ width: '75px', marginRight: '10px' }} src={cumRap.hinhAnh} alt={cumRap.tenCumRap} />
                <div className='whitespace-pre-wrap'>
                    <p className='font-bold text-black text-center'>{cumRap.tenCumRap}</p>
                    <p>{cumRap.diaChi}</p>
                </div>
            </div>} key={index}>
                {renderPhim_LichChieu(cumRap.id)}

            </TabPane>
        })
    }


    const renderHeThongRapChieu = () => {
        return listHeThongRap?.map((heThongRap, index) => {
            return <TabPane tab={<img style={{ width: '75px' }} src={heThongRap.logo} alt={heThongRap.tenHeThongRap} />} key={index} >
                <Tabs tabPosition={'left'}>
                    {renderCumRap(heThongRap.id)}
                </Tabs>
            </TabPane >
        })
    }

    return (
        <div className='w-4/5 m-auto'>
            <Tabs tabPosition={'left'}>
                {renderHeThongRapChieu()}
            </Tabs>
        </div>
    )
}
