import React from 'react';

import Post from "./Post";

const setUp = props => shallow(<Post {...props}/>);

describe("should render Post component", () => { //describe - обертка для нескольких однотипных тестов
  let component;

  beforeEach(() => {
    component = setUp() //присваивание переменной component перед каждым тестом
  });

  it("should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1) //проверка наличия только одного элемента с классом post в компоненте Post
    // console.log(component.debug()); //отобразить вестку компонента
  });

  it("should contain link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1)
  });

  it("should render created date", () => {
    const created_at = "01-03-2020";

    component = setUp({created_at});

    const date = component.find(".date");

    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
  });
});


