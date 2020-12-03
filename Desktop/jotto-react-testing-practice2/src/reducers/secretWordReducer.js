import { actionTypes } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
  //this will be called anytime called... do not
  //want to null out.... return existing state
};
