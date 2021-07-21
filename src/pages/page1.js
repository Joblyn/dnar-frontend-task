import React from "react";
import { Container, Col, Row } from "reactstrap";
import { Search } from "../components";
import { AllCoins, Events, MarketLeaders } from "../containers";

export default function Page1() {
  return (
    <Container fluid>
      <Col>
        <Search />
        <Row className="mt-1">
          <Col className="col-lg-8 col-md-8 col-sm-12">
            <MarketLeaders/>
            <AllCoins />
          </Col>
          <Col className="col-lg-4 col-md-4 col-sm-12">
            <Events />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
