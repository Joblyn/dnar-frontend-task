import React from "react";
import { Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Equalizer, DragHandle } from "@material-ui/icons";

export default function SideNav() {
  return (
    <Col className="side-nav m-2 px-1 py-0">
      <div className="mb-3 bd-radius-lg cl-blue bg-light-dark d-flex justify-content-center align-items-center">
        <DragHandle fontSize="large"/>
      </div>
      <div className="px-2 py-3 d-flex flex-column bg-light-dark bd-radius-lg">
        <NavLink
          to={ROUTES.PAGE1}
          className="nav-link bd-radius-lg mt-1 d-flex justify-content-center align-items-center bd-radius-sm"
          activeClassName="active"
          exact
        >
          <DragHandle fontSize="large"/>
        </NavLink>
        <NavLink
          to={ROUTES.PAGE2}
          className="nav-link bd-radius-lg mt-1 d-flex justify-content-center align-items-center bd-radius-sm"
          activeClassName="active"
        >
          <Equalizer />
        </NavLink>
      </div>
    </Col>
  );
}
