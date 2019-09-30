import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import List from "./List";

// TODO: mock store

it("renders list without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(
    <Provider store={store}>
      <List />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
