import { bindActionCreators } from "redux";
import { RECEIVE_DAYS, REMOVE_DAY } from "../actions/day_actions";
import { RECEIVE_DAY_EXERCISES, RECEIVE_DAY_EXERCISE, REMOVE_DAY_EXERCISE } from "../actions/day_exercise_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";



const dayExerciseReducer = (state={}, action) => {
    Object.freeze(state); 
    let newState; 
    switch(action.type) {
        
        case RECEIVE_DAY_EXERCISES: 
            return Object.assign({}, state, action.day_exercises)
        case REMOVE_DAY_EXERCISE: 
            newState = Object.assign({}, state); 
            delete newState[action.dayExerciseId];
            return newState; 
        case RECEIVE_DAYS: 
            return Object.assign({}, state, action.dayExercises)


        case LOGOUT_CURRENT_USER: 
            return {}; 
        default: 
            return state;
    }
}


export default dayExerciseReducer;