import React from "react";
import Card from "./Card";
import { shallow } from "enzyme";

//testing if component is rendered
describe("card component test", () => {
  let component;

  //jest test lines
  beforeEach(() => {
    component = shallow(<Card />);
  });
  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
