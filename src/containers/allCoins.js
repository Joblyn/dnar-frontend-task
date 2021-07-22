import React from "react";
import { Card } from "../components";

export default function AllCoins({ coins }) {
  return (
    <Card className="bd-radius-lg">
      <Card.Header>All Coins</Card.Header>
      <Card.Body className="inner">
        <div className="coin-row">
          {coins &&
            coins.map((coin, id) => (
              <div
                className="small-card p-3 my-2 mx-2 bd-radius-lg"
                key={id}
                style={{ height: "70px" }}
              >
                <p style={{fontSize: '1rem'}} className="m-0">
                  {coin.name.slice(0,20)} <span>{`(${coin.symbol})`}</span>
                </p>
              </div>
            ))}
        </div>
      </Card.Body>
    </Card>
  );
}
