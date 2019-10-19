import React from "react";
import ReactDOM from "react-dom";
import WeatherForcast from "./WeatherForcast";

it("renders the weather forcast without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WeatherForcast />, div);
  ReactDOM.unmountComponentAtNode(div);
});
