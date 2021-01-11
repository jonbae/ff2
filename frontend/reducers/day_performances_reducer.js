import { RECEIVE_DAYS, REMOVE_DAY } from "../actions/day_actions";
// import { RECEIVE_DAY_EXERCISES, RECEIVE_DAY_EXERCISE, REMOVE_DAY_EXERCISE } from "../actions/day_exercise_actions";
import { RECEIVE_DAY_PERFORMANCE, RECEIVE_DAY_PERFORMANCES, REMOVE_DAY_PERFORMANCE } from "../actions/day_performance_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";



const dayPerformanceReducer = (state={}, action) => {
    Object.freeze(state); 
    let newState; 
    switch(action.type) {
        
        case RECEIVE_DAY_PERFORMANCES: 
            return Object.assign({}, state, action.dayPerformances)
        case REMOVE_DAY_PERFORMANCE: 
            newState = Object.assign({}, state); 
            delete newState[action.dayPerformanceId];
            return newState; 
        case RECEIVE_DAYS: 
            return Object.assign({}, state, action.dayPerformances)


        case LOGOUT_CURRENT_USER: 
            return {}; 
        default: 
            return state;
    }
}


export default dayPerformanceReducer;