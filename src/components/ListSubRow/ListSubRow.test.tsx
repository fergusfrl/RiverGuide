import React from "react";
import ReactDOM from "react-dom";
import ListSubRow from "./ListSubRow";

import { subData } from "../../constants";

it("renders list sub row without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListSubRow values={subData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
