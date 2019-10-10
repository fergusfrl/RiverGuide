import React from "react";
import ReactDOM from "react-dom";
import HistoricalFlow from "./HistoricalFlow";

it("renders historical flow without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(<HistoricalFlow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
