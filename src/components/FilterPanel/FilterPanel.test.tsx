import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import FilterPanel from "./FilterPanel";

// TODO: Mock store

it("renders filter panel without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(
    <Provider store={store}>
      <FilterPanel open closeFilters={() => console.log("test")} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
