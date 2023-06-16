import * as data from "./actionType";

const init = {
  lehengasD: [],
  suitsD: [],
  gownsD: [],
  homeD: [],
  isLoading: false,
  isError: false,
};

const pagesReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_LEHENGA_DATA_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_LEHENGA_DATA_S: {
      return {
        ...state,
        isLoading: false,
        lehengasD: payload,
      };
    }
    case data.GET_HOMEDATA_S: {
      return {
        ...state,
        isLoading: false,
        homeD: payload,
      };
    }
    case data.GET_SUITS_DATA_S: {
      return {
        ...state,
        isLoading: false,
        suitsD: payload,
      };
    }
    case data.GET_GOWN_DATA_S: {
      return {
        ...state,
        isLoading: false,
        gownsD: payload,
      };
    }
    case data.GET_LEHENGA_DATA_F: {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
export { pagesReducer };
