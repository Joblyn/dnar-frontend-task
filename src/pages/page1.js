import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "../components";
import { AllCoins, Events, MarketLeaders } from "../containers";
import { coinsMarkets } from "../constants/apiConstants";
import { getCoinMarkets, getCoinMarketChart } from "../actions/actions";
import PageSpinner from "../components/pageSpinner";

export default function Page1() {
  const dispatch = useDispatch();
  const coinMarkets = useSelector((state) => state.getCoinMarkets);
  const coinMarketCharts = useSelector((state) => state.getCoinMarketChart);
  useEffect(() => {
    dispatch(getCoinMarkets(coinsMarkets));
  }, [dispatch]);

  const [state, setState] = useState({});

  useEffect(() => {
    if (coinMarkets.isSuccessful) {
      setState((state) => ({
        ...state,
        coinMarkets: coinMarkets.data.slice(0, 30)
      }));
    }
  }, [coinMarkets]);

  useEffect(() => {
    if (coinMarkets.isSuccessful) {
      const ids = coinMarkets.data.slice(0, 5).map((coin) => coin.id);
      for (let i = 0; i < ids.length; i++) {
        async function fetchMarketChart() {
          await dispatch(
            getCoinMarketChart(
              `/coins/${ids[i]}/market_chart/?vs_currency=usd&days=1`,
              ids[i]
            )
          );
        }
        fetchMarketChart();
      }
    }
  }, [coinMarkets, dispatch]);

  useEffect(() => {
    if (coinMarketCharts.isSuccessful) {
      setState((state) => ({
        ...state,
        coinMarketCharts: coinMarketCharts.data
      }));
    }
  }, [coinMarketCharts]);

  useEffect(() => {
    state && console.log(state);
  }, [state]);

  let pageReady = state.coinMarkets && state.coinMarketCharts && (Object.keys(state.coinMarketCharts).length === 5);

  if (!pageReady) {
    return <PageSpinner />;
  }

  return (
    <Container fluid>
      <Col>
        <Search />
        <Row className="mt-1">
          <Col className="col-lg-9 col-md-8 col-sm-12">
            <MarketLeaders coins={state.coinMarkets.slice(0, 5)} coinCharts={state.coinMarketCharts}/>
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
