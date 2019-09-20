import React from "react";
import ReactDOM from "react-dom";
import ListRow from "./ListRow";

it("renders list row without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListRow rowTitle="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
