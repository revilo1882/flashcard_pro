import React from 'react';
import { configure, shallow } from 'enzyme';
import { StackForm } from './StackForm'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />);

  it('renders the form title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('renders a link home', () => {
    expect(stackForm.find('h4').at(0).text()).toEqual('Home');
  });

  it('renders a Form component', () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });

  it('renders a button to add a new card', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a button to submit the form', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
  });

  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: 'change title' } });
    });

    it('updates the title in state', () => {
      expect(stackForm.state().title).toEqual('change title');
    });
  });
});
