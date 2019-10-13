import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import GlobalMapPopup from "./GlobalMapPopup";

it("renders the global map popup without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<GlobalMapPopup />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
