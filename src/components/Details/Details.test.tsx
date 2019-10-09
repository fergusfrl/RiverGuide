import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Details />, div);
  ReactDOM.unmountComponentAtNode(div);
});
