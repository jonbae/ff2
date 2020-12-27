import { RECEIVE_CURRENT_USER, RECEIVE_TRAINEES, RECEIVE_TRAINER } from '../actions/session_actions';

import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';
import { RECEIVE_EXERCISE } from '../actions/exercise_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.author.id]: action.author });
    case RECEIVE_BENCH:
      return Object.assign({}, state, action.authors);
    case RECEIVE_EXERCISE: 
      return Object.assign({}, state)
    case RECEIVE_TRAINEES: 
      return action.users 
    case RECEIVE_TRAINER: 
      newState = { [action.user.id]: action.user }
      return Object.assign({}, state, newState)
    default:
      return state;
  }
};

export default usersReducer;
