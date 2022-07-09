import { DISPLAY_MODAL_VIDEO_PHIM, HIDE_MODAL_VIDEO_PHIM } from "../Constant/ConstantReducer"

const initialState = {
    displayModalVideoPhim: false,
    phimModal : {}
}

export const ModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case DISPLAY_MODAL_VIDEO_PHIM: {
            return { ...state, displayModalVideoPhim: true, phimModal: action.phimModal }
        }

        case HIDE_MODAL_VIDEO_PHIM: {
            return { ...state, displayModalVideoPhim: false }
        }


        default:
            return { ...state }
    }
}
