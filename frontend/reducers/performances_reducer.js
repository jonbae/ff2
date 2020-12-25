import { 
    RECEIVE_PERFORMANCE, 
    REMOVE_PERFORMANCE 
} from "../actions/performance_actions";

const performancesReducer = (state = {}, action) => {
    Object.freeze(state) 
    let newState;
    switch(action.type) {
        case RECEIVE_PERFORMANCE: 
            newState = { [action.performance.id]: action.performance };
            return Object.assign({}, state, newPerformance); 
        case REMOVE_PERFORMANCE: 
            newState = Object.assign({}, state); 
            delete newState[action.id]
            return newState;
        default: 
            return state; 
    }
}

export default performancesReducer; 
