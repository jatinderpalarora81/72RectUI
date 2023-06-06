import * as types from "./actionType";
import axios from "axios";

let add = 'ec2-43-205-203-67.ap-south-1.compute.amazonaws.com'
const getMensData = (params) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });

  return axios
    .get(
      "http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/products/all",
      params
    )
    .then((res) => {
      dispatch({ type: types.GET_MENS_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};

const getWomensData = (params) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });

  return axios
    .get(
      "http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/products/all",
      params
    )
    .then((res) => {
      dispatch({ type: types.GET_WOMENS_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};
const getShoesData = (params) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });
  return axios
    .get("http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/items/all", params)
    .then((res) => {
      dispatch({ type: types.GET_SHOES_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};

const getHomeData = () => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_R });

  return axios
    .get("http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/products/all")
    .then((res) => {
      dispatch({ type: types.GET_HOMEDATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_MENS_DATA_F });
    });
};

export { getWomensData, getMensData, getShoesData, getHomeData };
