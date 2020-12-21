import * as APIUtil from '../util/exercise_api_util'; 


export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES'; 
export const RECEIVE_EXERCISE = 'RECEIVE_EXERCISE'; 
export const REMOVE_EXERCISE = 'REMOVE_EXERCISE';


export const receieveExercises = exercises => ({
    type: RECEIVE_EXERCISES, 
    exercises
})

export const receieveExercise = exercise => ({
    type: RECEIVE_EXERCISE, 
    exercise
})

export const removeExercise = id => ({
    type: REMOVE_NOTE, 
    exerciseId: id
})


export const requestExercises = () => dispatch => {
    return APIUtil.fetchExercises().then(exercises => 
        dispatch(receieveExercises(exercises))
    )
};

export const requestExercise = id => dispatch => {
    return APIUtil.fetchExercise(id).then(exercise => dispatch(receieveExercise(exercise)))
}

export const createExercise = exercise => dispatch => {
    return APIUtil.fetchExercise(exercise).then(exercise => dispatch(receieveExercise(exercise)))
}

export const updateExercise = exercise => dispatch => {
    return APIUtil.fetchExercise(exercise).then(exercise => dispatch(receieveExercise(exercise)))
}

export const deleteExercise = id => dispatch => {
    return APIUtil.deleteExercise(id).then(id => dispatch(removeExercise(id)))
}

