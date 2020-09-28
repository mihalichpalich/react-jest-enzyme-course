import React from 'react';

import Posts from "./Posts";

describe("Posts component", () => {
  it('should render Post component', () => {
    // const component = shallow(<Posts/>);
    const component = render(<Posts/>); //снимок будет содержать разметку корневого и дочернего компонентов

    expect(component).toMatchSnapshot() //получить снимок
  });
});
