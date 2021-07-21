import React from "react";
import { Input } from "reactstrap";
import { Search } from "@material-ui/icons";

export default function SearchInput() {
  return (
    <div className="bd bd-radius-lg search-cont px-4 py-2 mb-2 mt-0 mx-0 d-flex flex-row align-items-center">
      <span>
        <Search className="cl-blue" style={{ fontSize: "large" }} />
      </span>
      <Input type="text" name="search" placeholder="search"/>
    </div>
  );
}
