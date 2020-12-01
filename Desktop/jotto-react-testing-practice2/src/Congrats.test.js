import React from 'react';
import { shallow } from 'enzyme';
// import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats';

//test renders wihtout error
//test doesnt render when success false
//renders non empty message when successs is true

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  //itll override it if there is
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when "success" prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

//npm install --save-dev check-prop-types
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
  //   const propError = checkPropTypes(
  //     Congrats.propTypes,
  //     expectedProps, //the props we want to test
  //     Congrats.name //the name of the component
  //   );
  //   expect(propError).toBeUndefined();
  //   //the error will be undefined if it passess all the tests
});
