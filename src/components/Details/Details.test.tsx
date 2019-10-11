import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Details from "./Details";

const mockStore = configureStore([]);

it("renders filter item without crashing", () => {
  const div = document.createElement("div");
  const store = mockStore({
    details: {
      river: { gauge_id: "12345" }
    },
    rivers: {
      telemetryData: []
    }
  });

  ReactDOM.render(
    <Provider store={store}>
      <Details />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
