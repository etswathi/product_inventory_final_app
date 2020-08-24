import React from "react";
import { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pdpcomponent from "./Pdpcomponent";
import ReactDOM from 'react-dom'
import { configure } from "enzyme";
import { renderer } from "react-test-renderer";

configure({ adapter: new Adapter() });



it("calls update prop function when form is submitted", () => {
  const productUpdate = jest.fn();
  const wrapper = mount(<button onClick={productUpdate}></button>);
  const button = wrapper.find("button");
  button.simulate("click");
  expect(productUpdate).toHaveBeenCalledTimes(1);
});
it("calls delete prop function when form is submitted", () => {
    const productDelete = jest.fn();
    const wrapper = mount(<button onClick={productDelete}></button>);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(productDelete).toHaveBeenCalledTimes(1);
  });