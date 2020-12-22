import React from 'react'; 
import ExerciseIndexItem from './exercise_index_item'

class ExerciseIndex extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {

        }
        this.createNewExercise = this.createNewExercise.bind(this)
    }

    componentDidMount() {
        this.props.requestExercises(); 
    }

    createNewExercise(e) {
         
        const blankExercise = {
            name: "testdummy",
            description: "it's a test",
            repetitions: 0, 
            sets: 0, 
            rest_time: 0,
            user_id: this.props.currentUser.id
        }

        this.props.createExercise(blankExercise); 
    }

    renderExercises(exercises) {
        let exerciseItem = exercises.map(exercise => (
            <ExerciseIndexItem 
                key={exercise.id} 
                exercise={exercise}   
                deleteExercise={this.props.deleteExercise} 
            />
        ))
        return (
            <ul>
                {exerciseItem}
            </ul>
        )
    }

    render() {
        return (
            
            
            <div>
                <header>
                    this is the exercise index page
                </header>
                <div>
                    <button onClick={this.createNewExercise}>
                        create exercise
                    </button>
                </div>
                {this.renderExercises(this.props.exercises)}
            </div>
        )
    }
}


export default ExerciseIndex; 