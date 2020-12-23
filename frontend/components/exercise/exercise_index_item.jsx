import React from 'react'; 
import { deleteExercise } from '../../util/exercise_api_util';
import { Link } from "react-router-dom";
class ExerciseIndexItem extends React.Component {
    constructor(props){
        super(props) 
        this.state = {}; 
        
    }


    render() {
        return (
            <div>
                <li>
                    {this.props.exercise.name}
                </li>
                <li>
                    {this.props.exercise.description}
                </li>
                <li>
                    {this.props.exercise.sets}
                </li>
                <li>
                    {this.props.exercise.repetitions}
                </li>
                <li>
                    {this.props.exercise.rest_time}
                </li>
                <li>
                    <Link to={`/exercises/${this.props.exercise.id}/update`}>Modify Exercise</Link>
                </li>
                <li>
                    <button onClick={() => this.props.deleteExercise(this.props.exercise.id)}>Delete Exercise</button>
                </li>
            </div>
        )
    }
}

export default ExerciseIndexItem;