import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Container } from "reactstrap";
import { SideNav } from "./containers";
import { Page1, Page2 } from "./pages";

function App() {
  return (
    <Container fluid className="p-3 d-flex flex-row app">
      <Router>
        <SideNav />
        <div className="info">
          <Switch>
            <Route exact path={ROUTES.PAGE1} component={Page1} />
            <Route path={ROUTES.PAGE2} component={Page2} />
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
