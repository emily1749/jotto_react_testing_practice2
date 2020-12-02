import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

//what did we do?
//created a storeFactory utility that creats a testing store
//with app reducers
//added the store from the store factory
//as a prop to our connected component]
//we used shallow to create a virtualDOM of the connect component
//used .dive() to get the child of the connect component (input)
//use actual store not mock store.
//there's redux-mock-store that can tell u the store...
//actual store is closer to the app.
//we used connected comoponent and then dive to get it inside.
//we could also export input.....

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
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  describe('word has not been guessed', () => {
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    test('renders component without error', () => {});
    test('does not render input box', () => {});
    test('does not render submit button', () => {});
  });
});
