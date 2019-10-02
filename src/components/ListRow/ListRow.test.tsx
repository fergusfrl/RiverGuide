import React from "react";
import ReactDOM from "react-dom";
import ListRow from "./ListRow";

it("renders list row without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ListRow
      region="test"
      rivers={[
        { river_name: "test name", section_name: "test section" },
        { river_name: "test name", section_name: "test section 2" }
      ]}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
