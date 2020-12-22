import { connect } from "react-redux"
import { requestExercises, requestExercise, createExercise, updateExercise, removeExercise, deleteExercise } from "../../actions/exercise_actions"
import { selectExercises } from "../../reducers/selectors"

import ExerciseIndex from './exercise_index'

const msp = (state) => {
    const exercises = selectExercises(state);
     
    return {    
        currentUser:  state.entities.users[state.session.id],
        exercises
    }

}


const mdp = dispatch => ({
    requestExercises: () => dispatch(requestExercises()),
    requestExercise: id => dispatch(requestExercise(id)), 
    createExercise: exercise => dispatch(createExercise(exercise)),
    updateExercise: exercise => dispatch(updateExercise(exercise)), 
    deleteExercise: id => dispatch(deleteExercise(id))
})


export default connect(msp, mdp)(ExerciseIndex); 
