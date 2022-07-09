import { GET_LIST_LICH_CHIEU } from "../Constant/ConstantReducer"

const initialState = {
    listLichChieu: []
}

export const LichChieuReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_LICH_CHIEU: {
            return { ...state, listLichChieu: action.listLichChieu }
        }

        default:
            return { ...state }
    }
}
