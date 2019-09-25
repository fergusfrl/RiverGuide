import React from "react";
import ReactDOM from "react-dom";
import FilterPanel from "./FilterPanel";

it("renders filter panel without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
