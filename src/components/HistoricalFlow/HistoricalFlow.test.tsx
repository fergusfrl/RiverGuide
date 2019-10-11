import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import HistoricalFlow from "./HistoricalFlow";

it("renders historical flow information without crashing", () => {
  const div = document.createElement("div");
  const el: any = shallow(<HistoricalFlow />);
  ReactDOM.render(el, div);
  ReactDOM.unmountComponentAtNode(div);
});
