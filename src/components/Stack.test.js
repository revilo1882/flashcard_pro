import React from 'react';
import { configure, shallow } from 'enzyme';
import { Stack } from './Stack';
import Adapter from 'enzyme-adapter-react-16';
import { stack } from '../data/fixtures.js'

configure({ adapter: new Adapter() });

const props = { stack };

describe('Stack', () => {
  const stack = shallow(<Stack {...props} />);

  it('renders the title', () => {
    expect(stack.find('h3').text()).toEqual(props.stack.title)
  });

  it('renders the link home', () => {
    expect(stack.find('Link h4').text()).toEqual('Home');
  });

  it('renders the correct number of cards', () => {
    expect(stack.find('Card').length).toEqual(props.stack.cards.length)
  })
});
