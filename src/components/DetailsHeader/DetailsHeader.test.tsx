import React from "react";
import ReactDOM from "react-dom";
import DetailsHeader from "./DetailsHeader";

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <DetailsHeader attr={[{ label: "test", value: "12345" }]} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
