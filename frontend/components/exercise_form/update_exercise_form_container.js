import { connect } from 'react-redux'; 
import { createExercise, updateExercise } from '../../actions/exercise_actions';

import ExerciseForm from './exercise_form'; 

const msp = (state, ownProps) => {
    const exercise = state.entities.exercises[ownProps.match.params.exerciseId]
    return {
        exercise, 

        formType: "update", 
        title: "Edit exercise"
    }
    
}
const mdp = dispatch => ({
    processForm: exercise => dispatch(updateExercise(exercise)),
    // createBench: exercise => dispatch(createExercise(exercise)), 
    // updateBench: exercise => dispatch(updateExercise(exercise))
})

export default connect(msp,mdp)(ExerciseForm);