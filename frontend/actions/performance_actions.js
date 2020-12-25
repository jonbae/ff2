import * as APIUtil from '../util/performance_api_util'; 


// export const RECEIVE_PERFORMANCES = "RECEIVE_PERFORMANCES"; 
export const RECEIVE_PERFORMANCE = "RECEIVE_PERFORMANCE"; 
export const REMOVE_PERFORMANCE = "REMOVE_PERFORMANCE"; 


// export const receivePerformances = performances => {
//     return {
//         type: RECEIVE_PERFORMANCES, 
//         performances
//     }
// }

export const receivePerformance = payload => {
    return {
        type: REMOVE_PERFORMANCE, 
        performance: payload.performance
    }
}

export const removePerformance = payload => {
    return {
        type: REMOVE_PERFORMANCE, 
        performance: payload.performance
    }
}

export const createPerformance = performance => dispatch => {
    return APIUtil.createPerformance(performance).then(performance => {
        return dispatch(receivePerformance(performance))
    })
}

export const deletePerformance = performance => dispatch => {
    return APIUtil.deletePerformance(performance.id).then(id => {
        return dispatch(removePerformance(id))
    })
}