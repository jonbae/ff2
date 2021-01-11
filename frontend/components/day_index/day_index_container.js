import { connect } from "react-redux"
import { deleteDay, requestDays } from "../../actions/day_actions";
import { requestDayExercises } from "../../actions/day_exercise_actions";
import { requestDayPerformances,requestTraineeDayPerformances } from "../../actions/day_performance_actions";
import { requestExercises } from "../../actions/exercise_actions";
import { requestPerformances } from "../../actions/performance_actions";
import { selectDayPerformances, selectDaysByUserId } from "../../reducers/selectors";
import DayIndex from './day_index'

const msp = (state, ownProps) => {
    const traineeId = parseInt(ownProps.match.params.userId)
    const currentUserId = state.session.id;
    const userId = !!traineeId ? traineeId : currentUserId;
    
    const days = selectDaysByUserId(state,userId)
    const dayPerformances = days.map( day => {
        return selectDayPerformances(state, day.id)
    })
    const daysObject = state.entities.days;
    const performancesObject = state.entities.performances;
    const exercisesObject = state.entities.exercises;
    
    return {
        userId, 
        traineeId, 
        currentUserId,
        days,
        daysObject,
        dayPerformances,
        exercisesObject,
        performancesObject
    }
}

const mdp = dispatch => ({
    requestDayPerformances: () => dispatch(requestDayPerformances()),
    requestTraineeDayPerformances: (id) => dispatch(requestTraineeDayPerformances(id))
})

export default connect(msp,mdp)(DayIndex);