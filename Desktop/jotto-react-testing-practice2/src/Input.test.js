import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';
//we want to create a store for testing that
// will match the configuration of our actual store

const setup = (initialState = {}) => {
  //this here will be different bc we need to connect the store here
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  //   console.log(wrapper.debug());
  //debug will show you whta is there
  return wrapper;
};

//dive method - returns the non dom, the react child component of the child wrapper
//enzyme dive - returns non dom, react child component of wrapper

setup();
describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {});
    test('renders input box', () => {});
    test('renders submit button', () => {});
  });

  describe('word has been guessed', () => {
    test('renders component without error', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});
