import React from "react";
import { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Login from "./Login";
import { configure } from "enzyme";
import { renderer } from "react-test-renderer";
import ReactDOM from 'react-dom'

configure({ adapter: new Adapter() });




it("calls onSubmit prop function when form is submitted", () => {
  const loginButton = jest.fn();
  const wrapper = mount(<button onClick={loginButton}></button>);
  const button = wrapper.find("button");
  button.simulate("click");
  expect(loginButton).toHaveBeenCalledTimes(1);
});


it("emailfield", () => {
  const wrapper = mount(<input type="email" name="email" />);
  const input = wrapper.find("input");
  expect("input").toHaveLength(5);
  expect(input.prop("type")).toEqual("email");
  expect(input.prop("name")).toEqual("email");
});
it("passwordfield", () => {
  const wrapper = mount(<input type="password" name="password" />);
  const input = wrapper.find("input");
  expect("input").toHaveLength(5);
  expect(input.prop("type")).toEqual("password");
  expect(input.prop("name")).toEqual("password");
});
