import * as APIUtil from '../util/day_api_util'; 

export const RECEIVE_DAYS = 'RECEIEVE_DAYS'; 
export const REMOVE_DAY = 'REMOVE_DAY'; 


export const receiveDays = (payload) => {
    return {
        type: RECEIVE_DAYS, 
        days: payload.days, 
        exercises: payload.exercises, 
        performances: payload.performances,
        dayExercises: payload.dayExercises
    }
}

export const removeDay = day => {
    return {
        type: REMOVE_DAY, 
        dayId: day.id
    }
}

export const requestDays = () => dispatch => {
    return APIUtil.fetchDays().then(days => dispatch(receiveDays(days)))
}

export const deleteDay = id => dispatch => {
    return APIUtil.deleteDay(id).then(id => dispatch(removeDay(id)))
}