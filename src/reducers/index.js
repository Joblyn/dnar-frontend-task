import { combineReducers } from 'redux';
import getCoinMarketChartReducer from './getCoinMarketChart';
import getCoinPricesReducer from './getCoins';
import getCoinMarketsReducer from './getCoinsMarkets';

export default combineReducers({
  getCoinPrices: getCoinPricesReducer,
  getCoinMarkets: getCoinMarketsReducer,
  getCoinMarketChart: getCoinMarketChartReducer,
})