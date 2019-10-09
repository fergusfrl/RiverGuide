import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ListSubRow from "./ListSubRow";

it("renders list sub row without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ListSubRow
        rivers={[
          { river_name: "test name", section_name: "test section" },
          { river_name: "test name", section_name: "test section 2" }
        ]}
      />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
