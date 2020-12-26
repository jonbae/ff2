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
            <ul>
                <li>
                    {this.props.exercise.name}
                </li>
                <li>
                    {this.props.exercise.description}
                </li>

                <li>
                    <Link to={`/exercises/${this.props.exercise.id}/update`}>Modify Exercise</Link>
                </li>
                <li>
                    <button onClick={() => this.props.deleteExercise(this.props.exercise.id)}>Delete Exercise</button>
                </li>
                <li>
                    <Link to={`/exercises/${this.props.exercise.id}/performances/new`}>Assign exercise to trainee</Link>
                </li>

            </ul>
        )
    }
}

export default ExerciseIndexItem;