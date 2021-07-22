import * as ActionTypes from '../actions/types';
import { coinMarkets } from "./initialState";

const getCoinMarketsReducer = (state = coinMarkets, action) => {
  switch(action.type) {
    case ActionTypes.GET_COIN_MARKETS:
      return {
        isSuccessful: true,
        data: action.payload
      }
    default: 
      return state;
  }
}
export default getCoinMarketsReducer;