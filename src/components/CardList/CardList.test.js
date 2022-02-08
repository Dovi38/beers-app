import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";
import { getBeers } from "../../services/beers.service";
import apiBeers from "../../App";

describe("cardList component test", () => {
  let component;

  beforeEach(() => {
    const beers = getBeers[apiBeers];
    component = shallow(<CardList getBeers={beers} />);
  });
  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
