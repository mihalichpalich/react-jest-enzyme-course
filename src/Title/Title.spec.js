import React from "react";

import Title from "./Title";

describe("Title component", () => {
  it('should render Title component with props', () => {
    const component = shallow(<Title title="test title"/>);

    expect(component).toMatchSnapshot();
  });

  it('should render Title component with props', () => {
    const component = shallow(<Title/>);

    expect(component).toMatchSnapshot();
  });
});
