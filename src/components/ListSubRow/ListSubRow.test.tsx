import React from "react";
import ReactDOM from "react-dom";
import ListSubRow from "./ListSubRow";

it("renders list sub row without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ListSubRow
      rivers={[
        { river_name: "test name", section_name: "test section" },
        { river_name: "test name", section_name: "test section 2" }
      ]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
