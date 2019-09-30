import React from "react";
import ReactDOM from "react-dom";
import FilterItem from "./FilterItem";

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterItem name="Test" values={["1", "2", "3"]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
