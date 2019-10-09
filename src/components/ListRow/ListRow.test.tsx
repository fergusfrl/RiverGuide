import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ListRow from "./ListRow";

it("renders list row without crashing", () => {
  const div = document.createElement("div");
  // should shallow render to remove need for Provider
  ReactDOM.render(
    <Provider store={store}>
      <ListRow
        region="test"
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
