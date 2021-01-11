import { connect } from "react-redux"
import { deleteDay, requestDays } from "../../actions/day_actions";
import { requestDayExercises } from "../../actions/day_exercise_actions";
import { requestDayPerformances } from "../../actions/day_performance_actions";
import { requestExercises } from "../../actions/exercise_actions";
import { requestPerformances } from "../../actions/performance_actions";
import { selectDatedPerformancesWithExercise, selectPerformancesWithExercise, selectDays, selectExercisePerformances, selectDayExercisesThroughDay, selectExerciseIdsFromDayExerciseThroughDay, selectDayPerformances, selectExercises } from "../../reducers/selectors";
import DayIndex from './day_index'

const msp = (state) => {
    const days = selectDays(state)
    const daysObject = state.entities.days;
    const dayPerformances = days.map( day => {
        return selectDayPerformances(state, day.id)
    })
    // const exercises = selectExercises(state);
    const performancesObject = state.entities.performances;
    const exercisesObject = state.entities.exercises;
    
    return {
        days,
        daysObject,
        dayPerformances,
        exercisesObject,
        performancesObject
    }
}

const mdp = dispatch => ({
    requestDays: () => dispatch(requestDays()), 
    removeDay: id => dispatch(deleteDay(id)),
    requestDayExercises: () => dispatch(requestDayExercises()),
    requestDayPerformances: () => dispatch(requestDayPerformances()),
    requestExercises: () => dispatch(requestExercises()),
    requestPerformances: () => dispatch(requestPerformances())
})

export default connect(msp,mdp)(DayIndex);