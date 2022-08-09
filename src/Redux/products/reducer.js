import { PRODUCT } from "../action";

const initialState = {
  loading: false,
  errorMessage: null,
  data: [],
  display: [],
  detail: null,
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT.LOAD:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT.DISPLAY:
      return {
        ...state,
        display: payload,
      };
    case PRODUCT.SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case PRODUCT.DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case PRODUCT.ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
}

export default productReducer;
