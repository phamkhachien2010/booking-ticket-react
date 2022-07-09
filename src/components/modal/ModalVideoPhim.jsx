import {  Modal } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL_VIDEO_PHIM } from '../../redux/Constant/ConstantReducer';

export default function ModalVideoPhim(props) {


    const { displayModalVideoPhim, phimModal } = useSelector(state => state.ModalReducer);
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch({ type: HIDE_MODAL_VIDEO_PHIM })
    };

    return (
        <div className='trailer_modal'>            
            <Modal 
            title={`Trailer ${phimModal.tenPhim}`}
            visible={displayModalVideoPhim} 
            onOk={handleOk} 
            onCancel={handleOk}
            cancelText='Đóng'
            okType='none'
            style={{width:'1000px', height:'800px'}}
            >
                <iframe className='h-100 w-100' src={phimModal.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </Modal>
        </div>
    )
}
