import React from "react";
import ReactDOM from "react-dom";
import ListSubRow from "./ListSubRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListSubRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
