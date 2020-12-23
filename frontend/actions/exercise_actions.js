import * as APIUtil from '../util/exercise_api_util'; 


export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES'; 
export const RECEIVE_EXERCISE = 'RECEIVE_EXERCISE'; 
export const REMOVE_EXERCISE = 'REMOVE_EXERCISE';


export const receieveExercises = exercises => {
     
    return {
    type: RECEIVE_EXERCISES, 
    exercises
}}

 // or payload
export const receieveExercise = ( {exercise} ) => {
       
    return {
    type: RECEIVE_EXERCISE, 
    exercise
}}

export const removeExercise = exercise => {
     
    return {
        type: REMOVE_EXERCISE, 
        exerciseId: exercise.id
    }
}


export const requestExercises = () => dispatch => {
    return APIUtil.fetchExercises().then(exercises => dispatch(receieveExercises(exercises)))
};

export const requestExercise = id => dispatch => {
     
    return APIUtil.fetchExercise(id).then(exercise => dispatch(receieveExercise(exercise)))
}

export const createExercise = exercise => dispatch => {
      
    return APIUtil.createExercise(exercise).then(exercise => dispatch(receieveExercise(exercise)))
}

export const updateExercise = exercise => dispatch => {
    return APIUtil.updateExercise(exercise).then(exercise => dispatch(receieveExercise(exercise)))
}

export const deleteExercise = id => dispatch => {
     
    return APIUtil.deleteExercise(id).then(id => dispatch(removeExercise(id)))
}

