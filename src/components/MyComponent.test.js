import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

describe("MyComponent", () => {
  it("should render correctly", () => {
    const component = shallow(<MyComponent />);
  });
  

    expect(component.getElements()).toMatchSnapshot();
  });
  it("should create an entry in component state", () =>{
    
    const component = shallow(<MyComponent />);
    const form = component.find('input');
    // when
    form.props().onChange({target:{
      name:'myName',
      value:"myValue"
    }});
    // then
    expect(component.state('input')).toBeDefined();
});

it("should create an entry in component state with the event value", () =>{
    
  const component = shallow(<MyComponent />);
  const form = component.find('input');
  // when
  form.props().onChange({target:{
    name:'myName',
    value:"myValue"
  }});
  // then
  expect(component.state('input')).toBeDefined();
});