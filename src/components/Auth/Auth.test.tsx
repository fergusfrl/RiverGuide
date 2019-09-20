import React from "react";
import ReactDOM from "react-dom";
import Auth from "./Auth";

it("renders authentication without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Auth />, div);
  ReactDOM.unmountComponentAtNode(div);
});
