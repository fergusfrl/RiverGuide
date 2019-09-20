import React from "react";
import ReactDOM from "react-dom";
import ListRow from "./ListRow";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListRow rowTitle="test" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
