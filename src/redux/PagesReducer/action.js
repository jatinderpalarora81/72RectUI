import * as types from "./actionType";
import axios from "axios";
import {restURL} from "../../common";

const getLehengaData = (params) => (dispatch) => {
  dispatch({ type: types.GET_LEHENGA_DATA_R });

  return axios
    .get(
      restURL+"/products/all",
      params
    )
    .then((res) => {
      dispatch({ type: types.GET_LEHENGA_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_LEHENGA_DATA_F });
    });
};

const getSuitsData = (params) => (dispatch) => {
  dispatch({ type: types.GET_LEHENGA_DATA_R });

  return axios
    .get(
      restURL+"/products/all",
      params
    )
    .then((res) => {
      dispatch({ type: types.GET_SUITS_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_LEHENGA_DATA_F });
    });
};
const getGownsData = (params) => (dispatch) => {
  dispatch({ type: types.GET_LEHENGA_DATA_R });
  return axios
    .get(restURL+"/products/all", params)
    .then((res) => {
      dispatch({ type: types.GET_GOWN_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_LEHENGA_DATA_F });
    });
};

const getHomeData = () => (dispatch) => {
  dispatch({ type: types.GET_LEHENGA_DATA_R });

  return axios
    .get(restURL+"/products/all")
    .then((res) => {
      dispatch({ type: types.GET_HOMEDATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_LEHENGA_DATA_F });
    });
};

export { getSuitsData, getLehengaData, getGownsData, getHomeData };
