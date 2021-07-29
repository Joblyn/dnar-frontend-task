import React from "react";
import { Card, LineChart } from "../components";

export default function MarketLeaders({ coins, coinCharts }) {
  return (
    <Card className="bd-radius-lg">
      <Card.Header>Market Leaders</Card.Header>
      <Card.Body className="inner">
        {coins &&
          coins.map((coin, id) => {
            let currentPriceString = coin.current_price.toString();
            const current_price = () => {
              let res = [];
              let idx = currentPriceString.indexOf(".");
              let arr =
                idx === -1
                  ? currentPriceString.split("")
                  : currentPriceString.slice(0, idx).split("");
              arr = arr.reverse();
              for (let i = 1; i < arr.length; i + 2) {
                res.push(arr.slice(i, i + 2));
              }
              let newString = res.reverse().join(",");

              let price =
                idx === -1
                  ? newString + ".00"
                  : `${newString}.${currentPriceString.slice(idx, idx + 2)}`;
              return price;
            };

            let priceChange24hString = coin.price_change_24h.toString();
            let price_change_24h = priceChange24hString.includes("-")
              ? priceChange24hString.slice(
                  0,
                  priceChange24hString.indexOf(".") + 3
                )
              : "+" +
                priceChange24hString.slice(
                  0,
                  priceChange24hString.indexOf(".") + 3
                );
            let color = priceChange24hString.includes("-")
              ? "cl-red"
              : "cl-green";
            return (
              <div
                className="small-card p-3 my-3 d-flex flex-row align-items-center justify-content-between bd-radius-lg"
                key={id}
              >
                <span className="before"></span>
                <span>
                  <span
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      marginRight: ".5rem"
                    }}
                  >
                    {coin.name}
                  </span>
                  <span
                    style={{ textTransform: "uppercase", fontWeight: 600 }}
                  >{`(${coin.symbol})`}</span>
                </span>
                <span className="d-flex flex-row align-items-center">
                  <span className="cl-white dash">
                    {/* <LineChart prices={coinCharts[coin.id].prices.slice(0, 20)}/> */}
                  </span>
                  <span className={`text-xsm ${color}`}>
                    {price_change_24h}
                  </span>
                </span>
                <span className="text-md">${`${current_price()}`}</span>
              </div>
            );
          })}
      </Card.Body>
    </Card>
  );
}
