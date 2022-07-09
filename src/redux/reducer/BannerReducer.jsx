import { GET_LIST_BANNER } from "../Constant/ConstantReducer";

const initialState = {
  listBanner: [],
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_BANNER: {
      return { ...state, listBanner: action.listBanner };
    }

    default:
      return { ...state };
  }
};
