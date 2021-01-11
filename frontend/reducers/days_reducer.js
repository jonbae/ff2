import { bindActionCreators } from "redux";
import { RECEIVE_DAYS, REMOVE_DAY } from "../actions/day_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";



const dayReducer = (state={}, action) => {
    Object.freeze(state); 
    let newState; 
    switch(action.type) {
        
        case RECEIVE_DAYS: 
            return Object.assign({}, state, action.days)
        case REMOVE_DAY: 
            newState = Object.assign({}, state); 
            delete newState[action.dayId];
            return newState; 



        case LOGOUT_CURRENT_USER: 
            return {}; 
        default: 
            return state;
    }
}


export default dayReducer;