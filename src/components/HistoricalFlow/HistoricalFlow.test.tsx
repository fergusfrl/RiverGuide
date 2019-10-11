import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import HistoricalFlow from "./HistoricalFlow";

it("renders historical flow without crashing", async () => {
  const div = document.createElement("div");
  const el: any = shallow(<HistoricalFlow />);
  await ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
