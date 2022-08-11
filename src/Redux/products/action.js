import axios from "axios";
import { PRODUCT } from "../action";

export const getAllProduct = () => (dispatch) => {
  dispatch({
    type: PRODUCT.LOAD,
  });

  axios
    .get(`https://fakestoreapi.com/products`)
    .then((response) => {
      dispatch({
        type: PRODUCT.SUCCESS,
        payload: response.data,
      });
      dispatch({
        type: PRODUCT.DISPLAY,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: PRODUCT.ERROR,
        payload: error.message,
      });
    });
};

export const setFilter = (category) => (dispatch, getState) => {
  const state = getState();
  const data = state.product.data;
  const filter = data.filter((x) => x.category === category);
  dispatch({
    type: PRODUCT.DISPLAY,
    payload: filter,
  });
};

export const resetFilter = () => (dispatch, getState) => {
  const state = getState();
  const data = state.product.data;
  dispatch({
    type: PRODUCT.DISPLAY,
    payload: data,
  });
};

export const setDetail = (id) => (dispatch, getState) => {
  const state = getState();
  const data = state.product.data;
  const detail = data.filter((product) => product.id === Number(id))[0];
  dispatch({
    type: PRODUCT.DETAIL,
    payload: detail,
  });
};
