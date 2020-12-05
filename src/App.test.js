import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (state = {}) => {
  const store = storeFactory(store);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

test("'getSecretWord' runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  //this is a jest function that jest now
  //watches to see when it's called and how.
  //jest.fn()

  //set up app component with getSeretWordMock as prop
  //our real one gets it from redux
  //but our one here will be prop passed in
  //not setup function bc that uses app
  //we're creating a shallow of unconnected

  //getSecretWord = getSecretWordMock now will use mock funciton
  //whenever getsecretword is called
  //now will know when it calls getsecretword prop. bc feature of mock funciotn

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    gussedWords: [],
  };
  //set up app w getsecretmock as the getsecretword prop
  const wrapper = shallow(<UnconnectedApp getSecretWord={...props} />);

  //run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see if mock ran
  //mock gets mock properties
  //calls is an array shows how many times called
  //take the legnth of calls
  const getSecretWordCallCOunt = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
