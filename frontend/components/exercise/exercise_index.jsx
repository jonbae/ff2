import React from 'react'; 
import ExerciseIndexItem from './exercise_index_item'

class ExerciseIndex extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.requestExercises(); 
    }

    renderExercises(exercises) {
        let exerciseItem = exercises.map (exercise => (
            <ExerciseIndexItem 
                key={exercise.id}exerciseItem
                exercise={exercise}    
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
                {this.renderExercises(this.props.exercises)}
            </div>
        )
    }
}


export default ExerciseIndex; 