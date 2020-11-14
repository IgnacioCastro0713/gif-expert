import React from "react";
import { shallow } from "enzyme";
import GifCard from "../../components/GifCard";

describe('Test in <GifCard>', () => {
  test("should display component successful", () => {
    const wrapper = shallow(<GifCard image={ { image: "", title: "" } }/>);
    expect(wrapper).toMatchSnapshot();
  });
});