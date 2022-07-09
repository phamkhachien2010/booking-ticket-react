import { GET_LIST_PHIM, SET_LIST_PHIM } from "../Constant/ConstantReducer";

const initialState = {
  listPhim: [],
  listPhimHienThi:[]
};

export const PhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PHIM: {
      return { ...state, listPhim: action.listPhim };
    }
    case SET_LIST_PHIM: {      
      return { ...state, listPhimHienThi: action.listPhimHienThi };
    }

    default:
      return { ...state };
  }
};
