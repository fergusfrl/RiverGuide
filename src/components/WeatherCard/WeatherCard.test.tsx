import React from "react";
import ReactDOM from "react-dom";
import WeatherCard from "./WeatherCard";

it("renders the weather card without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WeatherCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
