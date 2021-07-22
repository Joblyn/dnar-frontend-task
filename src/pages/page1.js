import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../components";
import { AllCoins, Events, MarketLeaders } from "../containers";
import { coinsMarkets } from '../constants/apiConstants';
import { getCoinMarkets, getCoinMarketChart } from '../actions/actions';
import PageSpinner from "../components/pageSpinner";

export default function Page1() { 
  const dispatch = useDispatch();
  const coinMarkets = useSelector(state => state.getCoinMarkets);
  const coinMarketChart = useSelector(state => state.getCoinMarketChart);
  useEffect(() => {
    dispatch(getCoinMarkets(coinsMarkets));
  }, []);

  const [state, setState] = useState();

  useEffect(() => {
    if(coinMarkets.isSuccessful) {
      setState(state => ({
        ...state,
        coinMarkets: coinMarkets.data.slice(0, 50),
      }))
    }
  }, [coinMarkets]);

  useEffect(() => {
    if(state) {
      let ids = state.coinMarkets.slice(0,5).map(coin => coin.id);
      for(var i = 0; i<ids.length; i++ ) {
        dispatch(getCoinMarketChart(`/coins/${i}/market_chart`));
      }
    }
  }, [state]);

  useEffect(() => {
    if(coinMarketChart.isSuccessful) {
        setState(state => ({
          ...state,
          coinMarketChart: coinMarketChart.data 
        }))
    }
  
  }, [coinMarketChart]);

  useEffect(() => {
    state && console.log(state.coinMarkets);
    state && console.log(state.coinMarketChart);
  }, [state]);

  if(!state) {
   return <PageSpinner />
  }  

  return (
    <Container fluid>
      <Col>
        <Search />
        <Row className="mt-1">
          <Col className="col-lg-9 col-md-8 col-sm-12">
            <MarketLeaders coins={state.coinMarkets.slice(0,5)}/>
            <AllCoins coins={state.coinMarkets} />
          </Col>
          <Col className="col-lg-3 col-md-4 col-sm-12">
            <Events />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
