import { connect } from "react-redux"
import { createPerformance, requestExercisePerformances } from "../../actions/performance_actions"
import { selectTrainees,selectExercisePerformances } from "../../reducers/selectors";

import PerformanceForm from './performance_form'
import { requestUsers } from "../../actions/session_actions"


const msp = (state, ownProps) => {
    const trainees = selectTrainees(state); 
    const exerciseId = parseInt(ownProps.match.params.exerciseId)
    const performances = selectExercisePerformances(state, exerciseId)
    return {
        trainees, 
        performances, 
        exerciseId, 
        formType: "create",
        title: "New performance" 
    }
}

const mdp = dispatch => {
     
    return {
        processForm: exercise => dispatch(createPerformance(exercise)),
        requestUsers: () => dispatch(requestUsers()),
        requestExercisePerformances: (exercise) => dispatch(requestExercisePerformances(exercise))

    } 
}
export default connect(msp, mdp)(PerformanceForm); 
