import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import LocalMapPopup from "./LocalMapPopup";

it("renders the local map popup without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<LocalMapPopup />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
