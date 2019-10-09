import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Content river={{ title: "test" }} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
