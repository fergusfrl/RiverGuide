import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ListHeader from "./ListHeader";

// TODO: Mocke store

it("renders list header without crashing", async () => {
  const div = document.createElement("div");
  await ReactDOM.render(
    <Provider store={store}>
      <ListHeader openFilter={() => console.log("test")} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
