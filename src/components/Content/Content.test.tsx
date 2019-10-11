import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Content from "./Content";

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Content river={{ title: "test" }} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
