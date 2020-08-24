import React from "react";
import { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignUp from "./Signup";
import { configure } from "enzyme";
import { renderer } from "react-test-renderer";

configure({ adapter: new Adapter() });

it("Render", () => {
  const wrapper = shallow(<SignUp />);
  const h = wrapper.find("h2");
  const res = h.text();
  expect(res).toBe("Sign Up to Explore");
});

it("calls onSubmit prop function when form is submitted", () => {
  const signUpfun = jest.fn();
  const wrapper = mount(<button onClick={signUpfun}></button>);
  const button = wrapper.find("button");
  button.simulate("click");
  expect(signUpfun).toHaveBeenCalledTimes(1);
});

it("firstnamefield", () => {
  const wrapper = mount(<input type="text" name="firstname" />);
  const input = wrapper.find("input");
  expect("input").toHaveLength(5);
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("name")).toEqual("firstname");
});
it("lastnamefield", () => {
  const wrapper = mount(<input type="text" name="lastname" />);
  const input = wrapper.find("input");
  expect("input").toHaveLength(5);
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("name")).toEqual("lastname");
});
it("usernamefield", () => {
  const wrapper = mount(<input type="text" name="username" />);
  const input = wrapper.find("input");
  expect("input").toHaveLength(5);
  expect(input.prop("type")).toEqual("text");
  expect(input.prop("name")).toEqual("username");
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
