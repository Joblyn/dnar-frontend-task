import React from "react";
import { Card } from "../components";

export default function MarketLeaders({ coins }) {
  return (
    <Card className="bd-radius-lg">
      <Card.Header>Market Leaders</Card.Header>
      <Card.Body className="inner">
        {coins &&
          coins.map((coin, id) => {
            let current_price = coin.current_price.toString().includes('.') ? coin.current_price : coin.current_price + '.00';
            let price_change_24h = coin.price_change_24h.toString().includes('-') ? coin.price_change_24h : '+'+coin.price_change_24h;  
            return (
              <div
                className="small-card p-3 my-3 d-flex flex-row align-items-center justify-content-between bd-radius-lg"
                key={id}
              >
                <span className="before"></span>
                <span style={{fontSize: '1.3rem', fontWeight: 600}}>{`${coin.name} (${coin.symbol})`}</span>
                <span className="d-flex flex-row align-items-center">
                  <span className="cl-green">------------------------</span>
                  <span className="text-xsm cl-green">{price_change_24h}</span>
                </span>
                <span className="text-md">${`${current_price}`}</span>
              </div>
            );
          })}
      </Card.Body>
    </Card>
  );
}
