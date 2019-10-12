import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import MapPin from "./MapPin";

it("renders the map pin without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<MapPin />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
