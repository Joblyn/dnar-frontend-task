import React from 'react';
import { Card } from '../components';

export default function MarketLeaders() {
  return (
    <Card className="bd-radius-lg">
      <Card.Header>Market Leaders</Card.Header>
      <Card.Body>
        <div className="small-card p-3 my-3 d-flex flex-row align-items-center justify-content-between bd-radius-lg">
          <span className="before"></span>
          <span>Bitcoin (BTC)</span>
          <span className="d-flex flex-row align-items-center">
            <span>------------------------</span>
            <span className="text-xsm cl-green">+192.89</span>
          </span>
          <span className="text-md">$1,793.89</span>
        </div>
        <div className="small-card p-3 my-3 d-flex flex-row align-items-center justify-content-between bd-radius-lg">
          <span className="before"></span>
          <span>Bitcoin (BTC)</span>
          <span className="d-flex flex-row align-items-center">
            <span>------------------------</span>
            <span className="text-xsm cl-green">+192.89</span>
          </span>
          <span className="text-md">$1,793.89</span>
        </div>
        <div className="small-card p-3 my-3 d-flex flex-row align-items-center justify-content-between bd-radius-lg">
          <span className="before"></span>
          <span>Bitcoin (BTC)</span>
          <span className="d-flex flex-row align-items-center">
            <span>------------------------</span>
            <span className="text-xsm cl-green">+192.89</span>
          </span>
          <span className="text-md">$1,793.89</span>
        </div>
      </Card.Body>
    </Card>
  )
}