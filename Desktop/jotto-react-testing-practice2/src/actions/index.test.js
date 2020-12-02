import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an actions with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    //toEqual is a deep equal
  });
});
