import * as ActionTypes from '../actions/types';
import { coinMarketChart } from "./initialState";

const getCoinMarketChartReducer = (state = coinMarketChart, action) => {
  switch(action.type) {
    case ActionTypes.GET_COIN_MARKET_CHART:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
}
export default getCoinMarketChartReducer;