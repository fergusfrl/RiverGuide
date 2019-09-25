import React from "react";
import ReactDOM from "react-dom";
import FilterItem from "./FilterItem";

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
