import { 
    RECEIVE_PERFORMANCE, 
    RECEIVE_PERFORMANCES,
    REMOVE_PERFORMANCE
} from "../actions/performance_actions";
import { RECEIVE_DAYS } from "../actions/day_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";



const performancesReducer = (state = {}, action) => {
    Object.freeze(state) 
    let newState;

    switch(action.type) {
        case RECEIVE_PERFORMANCES: 
        
            return Object.assign({}, state, action.performances)
        case RECEIVE_PERFORMANCE: 
            newState = { [action.performance.id]: action.performance };
            return Object.assign({}, state, newState); 
        case REMOVE_PERFORMANCE: 
            newState = Object.assign({}, state); 
            delete newState[action.id]
            return newState;
        case RECEIVE_DAYS: 
            return Object.assign({}, state, action.performances)



        case LOGOUT_CURRENT_USER: 
            return {}; 
        default: 
            return state; 
    }
}

export default performancesReducer; 
