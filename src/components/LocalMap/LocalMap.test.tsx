import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import LocalMap from "./LocalMap";

it("renders the local map without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<LocalMap />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
