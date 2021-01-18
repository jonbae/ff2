import { RECEIVE_CURRENT_USER, RECEIVE_TRAINEES, RECEIVE_TRAINER, RECEIVE_USER } from '../actions/session_actions';

import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';
import { RECEIVE_EXERCISE } from '../actions/exercise_actions';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.author.id]: action.author });
    case RECEIVE_BENCH:
      return Object.assign({}, state, action.authors);
    case RECEIVE_EXERCISE: 
      return Object.assign({}, state)
    case RECEIVE_TRAINEES: 
      return Object.assign({}, state, action.users )       
    case RECEIVE_TRAINER: 
      newState = { [action.user.id]: action.user }
      return Object.assign({}, state, newState)
    case RECEIVE_USER: 
      newState = { [action.user.id]: action.user }
      return Object.assign({}, state, newState)
    



    case LOGOUT_CURRENT_USER: 
      return {}; 
    default:
      return state;
  }
};

export default usersReducer;
