import React from "react";
import FilterList from "./FilterList";
import { shallow } from "enzyme";

describe("cardList component test", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterList />);
  });
  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
