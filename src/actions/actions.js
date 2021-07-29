import * as ActionTypes from "./types";
import { getData } from "./services";

export const getCoinPrices = (url) => {
  return getData(url, onGetCoinPrices);
};
const onGetCoinPrices = (payload) => {
  return {
    type: ActionTypes.GET_COIN_PRICES,
    payload
  };
};

export const getCoinMarkets = (url) => {
  return getData(url, onGetCoinMarkets);
};

const onGetCoinMarkets = (payload) => {
  return {
    type: ActionTypes.GET_COIN_MARKETS,
    payload
  };
};

export const getCoinMarketChart = (url, id) => {
  return getData(url, onGetCoinMarketChart, id);
};
const onGetCoinMarketChart = (payload, id) => {
  return {
    type: ActionTypes.GET_COIN_MARKET_CHART,
    payload,
    id
  };
};
