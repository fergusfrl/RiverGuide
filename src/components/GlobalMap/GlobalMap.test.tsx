import React from "react";
import ReactDOM from "react-dom";
import GlobalMap from "./GlobalMap";

it("renders the global map without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GlobalMap />, div);
  ReactDOM.unmountComponentAtNode(div);
});
