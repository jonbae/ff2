import * as APIUtil from '../util/day_performance_api_util'; 

export const RECEIVE_DAY_PERFORMANCES = 'RECEIVE_DAY_PERFORMANCES'; 
export const RECEIVE_DAY_PERFORMANCE = 'RECEIVE_DAY_PERFORMANCE'; 
export const REMOVE_DAY_PERFORMANCE = 'REMOVE_DAY_PERFORMANCE'

export const receiveDayPerformances = dayPerformances => {
    return {
        type: RECEIVE_DAY_PERFORMANCES,
        dayPerformances

    }
}

export const receiveDayPerformance = dayPerformance => {
    return {
        type: RECEIVE_DAY_performance,
        dayPerformance
    }
}

export const removeDayPerformance = dayPerformance => {
    return {
        type: REMOVE_DAY_PERFORMANCE,
        dayPerformanceId: dayPerformance.id
    }
}

export const requestDayPerformances = () => dispatch => {
    return APIUtil.fetchDayPerformances().then(dayPerformances => dispatch(receiveDayPerformances(dayPerformances)))
}

export const createDayPerformance = (dayPerformance) => {
    return APIUtil.fetchDayperformance(dayPerformance).then(dayPerformance => dispatch(receiveDayPerformances(dayPerformance)))
}

export const deleteDayPerformance = (id) => dispatch => {
    return APIUtil.deleteDayperformance(id).then(id => dispatch(removeDayperformance(id)))
}