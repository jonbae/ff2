import { RECEIVE_EXERCISE,RECEIVE_EXERCISES, REMOVE_EXERCISE } from "../actions/exercise_actions";
import { RECEIVE_PERFORMANCES } from "../actions/performance_actions";
import { RECEIVE_DAYS } from "../actions/day_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const exercisesReducer = (state={}, action) => {
    Object.freeze(state)
    let newState;
    switch(action.type) {
        case RECEIVE_EXERCISES: 
            // return action.exercises;
            return Object.assign({}, state, action.exercises)
        case RECEIVE_EXERCISE: 
             
            newState = { [action.exercise.id]: action.exercise }
            return Object.assign({}, state, newState)
        case REMOVE_EXERCISE: 
             
            newState = Object.assign({}, state); 
            delete newState[action.exerciseId]; 
            return newState; 

        case RECEIVE_PERFORMANCES: 
            return Object.assign({}, state, action.exercises)

        case RECEIVE_DAYS: 
            return Object.assign({}, state, action.exercises)

        case LOGOUT_CURRENT_USER: 
            return {}; 
        default: 
            return state;
    }
}

export default exercisesReducer;