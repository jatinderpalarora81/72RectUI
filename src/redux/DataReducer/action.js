import * as types from "./actionType";
import axios from "axios";
const getData = (params) => (dispatch) => {
  dispatch({ type: types.GET_DATA_R });
  return axios
    .get("http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/products/all", params)
    .then((res) => {
      dispatch({ type: types.GET_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_DATA_F });
    });
};
const updateData = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_DATA_R });
  return axios
    .patch(`http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/items/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.UPDATE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_DATA_F });
    });
};
const deleteData = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_DATA_R });
  return axios
    .delete(`http://ec2-43-205-203-67.ap-south-1.compute.amazonaws.com:8000/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_DATA_S });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_DATA_F });
    });
};
export { getData, updateData, deleteData };
//https://desktime-tanner-redux.herokuapp.com/allproducts
