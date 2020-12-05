import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of "false" when no action is passed', () => {
  //remember has to pass something the first time
  //whenever reducers do switch, make sure that the test
  //passes in an object for the action or else youll get an error
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns state of true upon receiving an action of type "CORRECT_GUESS"', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
