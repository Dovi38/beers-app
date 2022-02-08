import React from "react";
import FilterItem from "./FilterItem";
import { shallow } from "enzyme";

describe("cardList component test", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterItem />);
  });
  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
