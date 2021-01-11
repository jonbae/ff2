import * as APIUtil from '../util/day_exercise_api_util'; 

export const RECEIVE_DAY_EXERCISES = 'RECEIVE_DAY_EXERCISES'; 
export const RECEIVE_DAY_EXERCISE = 'RECEIVE_DAY_EXERCISE'; 
export const REMOVE_DAY_EXERCISE = 'REMOVE_DAY_EXERCISE'

export const receiveDayExercises = dayExercises => {
    return {
        type: RECEIVE_DAY_EXERCISES,
        dayExercises

    }
}

export const receiveDayExercise = dayExercise => {
    return {
        type: RECEIVE_DAY_EXERCISE,
        dayExercise
    }
}

export const removeDayExercise = dayExercise => {
    return {
        type: REMOVE_DAY_EXERCISE,
        dayExerciseId: dayExercise.id
    }
}

export const requestDayExercises = () => dispatch => {
    return APIUtil.fetchDayExercises().then(dayExercises => dispatch(receiveDayExercises(dayExercises)))
}

export const createDayExercise = (dayExercise) => {
    return APIUtil.fetchDayExercise(dayExercise).then(dayExercise => dispatch(receiveDayExercises(dayExercise)))
}

export const deleteDayExercise = (id) => dispatch => {
    return APIUtil.deleteDayExercise(id).then(id => dispatch(removeDayExercise(id)))
}