import { connect } from "react-redux"
import { 
    requestExercises, 
    requestExercise, 
    createExercise, 
    updateExercise,  
    deleteExercise 
} from "../../actions/exercise_actions"
import { requestUsers } from "../../actions/session_actions"
import { selectExercises, selectTrainees } from "../../reducers/selectors"

import ExerciseIndex from './exercise_index'

const msp = (state) => {
    
    const exercises = selectExercises(state);
    const currentUser = state.entities.users[state.session.id]
    const traineeIds = state.entities.users[state.session.id].traineeIds
    const trainees = selectTrainees(state); 
    
    return {    
        currentUser,
        exercises,
        trainees,
        traineeIds
    }

}


const mdp = dispatch => ({
    requestExercises: () => dispatch(requestExercises()),
    requestExercise: id => dispatch(requestExercise(id)), 
    createExercise: exercise => dispatch(createExercise(exercise)),
    updateExercise: exercise => dispatch(updateExercise(exercise)), 
    deleteExercise: id => dispatch(deleteExercise(id)),

    requestUsers: () => dispatch(requestUsers())
})


export default connect(msp, mdp)(ExerciseIndex); 
