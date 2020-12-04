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

//ASYNC ACTION CREATOR TEST
//CREATE A STORE WITH INITIAL STATE
//dispatch the action creator using store.dispatch()
//bc our action creator was asynchronous store.dispatch returns promise
//check the sate in callback .then() callback
//used jest expect assertion
//careful to see tests taht fail
//if they dont likely did not return store.dispatch() promise

//MOXIOS
//we used moxios to test aios without actually going to the server
//moxios configures the moxios instead of http
//axios sends to moxios and not http
//then in test can write what we want moxios to respond
//this will mimic server response
