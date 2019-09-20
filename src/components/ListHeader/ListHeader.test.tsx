import React from "react";
import ReactDOM from "react-dom";
import ListHeader from "./ListHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
