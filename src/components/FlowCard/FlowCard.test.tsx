import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import FlowCard from "./FlowCard";

it("renders flow card without crashing", async () => {
  const div = document.createElement("div");
  const el: any = shallow(<FlowCard />);
  await ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
