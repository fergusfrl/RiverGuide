import React from "react";
import ReactDOM from "react-dom";
import FilterRange from "./FilterRange";

it("renders filter range without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FilterRange />, div);
  ReactDOM.unmountComponentAtNode(div);
});
