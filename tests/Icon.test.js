import React from "react";
import { Icon } from "../src/";

describe("Icon", () => {
  it("Should renders without problems", () => {
    const wrapper = shallow(<Icon type="search" />);

    expect(wrapper).toMatchSnapshot();
  });
});
