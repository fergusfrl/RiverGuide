import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import GlobalMap from "./GlobalMap";

it("renders the global map without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<GlobalMap />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
