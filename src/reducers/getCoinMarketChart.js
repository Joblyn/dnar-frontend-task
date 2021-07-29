import * as ActionTypes from "../actions/types";
import { coinMarketChart } from "./initialState";

const getCoinMarketChartReducer = (state = coinMarketChart, action) => {
  switch (action.type) {
    case ActionTypes.GET_COIN_MARKET_CHART:
      console.log(action);
      return {
        isSuccessful: true,
        data: {
          ...state.data,
          [action.id]: action.payload
        }
      };
    default:
      return state;
  }
};
export default getCoinMarketChartReducer;
