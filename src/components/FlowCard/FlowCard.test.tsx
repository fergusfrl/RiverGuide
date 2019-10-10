import React from "react";
import ReactDOM from "react-dom";
import FlowCard from "./FlowCard";

it("renders flow card without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(<FlowCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
