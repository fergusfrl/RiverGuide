import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import FlowCard from "./FlowCard";

it("renders the flow card without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<FlowCard />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
