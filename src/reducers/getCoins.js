import * as ActionTypes from '../actions/types';
import { coinPrices } from "./initialState";

const getCoinPricesReducer = (state = coinPrices, action) => {
  switch(action.type) {
    case ActionTypes.GET_COIN_PRICES:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
}
export default getCoinPricesReducer;