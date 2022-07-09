import { GET_LIST_CUMRAP, GET_LIST_HETHONGRAP, GET_LIST_RAP } from "../Constant/ConstantReducer"

const initialState = {
    listHeThongRap: [],
    listCumRap: [],
    listRap: []
}

export const HeThongRapReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_HETHONGRAP: {
            return { ...state, listHeThongRap: action.listHeThongRap }
        }

        case GET_LIST_CUMRAP: {
            return { ...state, listCumRap: action.listCumRap }
        }

        case GET_LIST_RAP: {
            return { ...state, listRap: action.listRap }
        }

        default:
            return { ...state }
    }
}
