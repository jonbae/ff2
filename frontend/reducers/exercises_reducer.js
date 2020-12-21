import { RECEIVE_EXERCISE,RECEIVE_EXERCISES, REMOVE_EXERCISE } from "../actions/exercise_actions";


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
        default: 
            return state;
    }
}

export default exercisesReducer;