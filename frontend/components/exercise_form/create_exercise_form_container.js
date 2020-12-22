// import { connect } from 'react-redux'; 
// import { createExercise, updateExercise } from '../../util/exercise_api_util';

// import ExerciseForm from './exercise_form'; 

// const msp = (state) => ({
//     formType: "create", 
//     title: "New exercise"
// })

// const mdp = dispatch => ({
//     processForm: exercise => dispatch(createExercise(exercise)),
//     // createBench: exercise => dispatch(createExercise(exercise)), 
//     // updateBench: exercise => dispatch(updateExercise(exercise))
// })

// export default connect(msp,mdp)(ExerciseForm)

import { connect } from "react-redux"
import { createExercise } from "../../util/exercise_api_util"

import ExerciseForm from './exercise_form'

const msp = state => {
    return {
        formType: "create",
        title: "New exercise" 
    }
}

const mdp = dispatch => ({
    processForm: exercise => dispatch(createExercise(exercise))
})

export default connect(msp, mdp)(ExerciseForm); 
