import * as APIUtil from '../util/performance_api_util'; 


export const RECEIVE_PERFORMANCES = "RECEIVE_PERFORMANCES"; 
export const RECEIVE_PERFORMANCE = "RECEIVE_PERFORMANCE"; 
export const REMOVE_PERFORMANCE = "REMOVE_PERFORMANCE"; 


export const receiveExercisePerformances = payload => {
    return {
        type: RECEIVE_PERFORMANCES, 
        performances: payload.performances, 
        exercises: payload.exercises
    }
}

export const receivePerformances = payload => {
    
    return {
        type: RECEIVE_PERFORMANCES,
        performances: payload.performances, 
        exercises: payload.exercises
    }
}

export const receivePerformance = payload => {
    return {
        type: RECEIVE_PERFORMANCE, 
        performance: payload.performance
    }
}

export const removePerformance = payload => {
    return {
        type: REMOVE_PERFORMANCE, 
        performance: payload.performance
    }
}

export const requestExercisePerformances = exercise => dispatch => {
    return APIUtil.fetchExercisePerformances(exercise).then( performances => {
        return dispatch(receiveExercisePerformances(performances))
    })
} 

export const requestPerformances = () => dispatch => {
    return APIUtil.fetchPerformances().then( performances => {
        return dispatch(receivePerformances(performances))
    })
}

export const requestPerformance = id => dispatch => {
    return APIUtil.fetchPerformance(id).then( performance => {
        return dispatch(receivePerformance(performance))
    })
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