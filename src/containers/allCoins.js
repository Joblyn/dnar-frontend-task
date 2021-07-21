import React from "react";
import { Card } from "../components";

export default function AllCoins() {
  const arr = Array.from(new Array(20));

  return (
    <Card className="bd-radius-lg">
      <Card.Header>All Coins</Card.Header>
      <Card.Body>
        <div className="coin-row">
          {arr.map((val, id) => (
            <div className="small-card p-3 my-2 bd-radius-lg" key={id} style={{width: '150px', height: '70px'}}>
              <p>
                name <span>(symbol)</span>
              </p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
