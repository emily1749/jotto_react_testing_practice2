import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
    //this tells axios to use moxios for all requests instead of on the internet
    //if you have axios instance you put it in here
  });
  afterEach(() => {
    //after each uninstall moxios and return to state
    moxios.uninstall();
  });

  //testing here - adding the response word to the state
  //integration test - action creator to retrieve, and reducer will add to state
  test('adds response word to each state ', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
