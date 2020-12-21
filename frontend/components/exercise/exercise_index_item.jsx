import React from 'react'; 

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
                    {this.props.exercise.repititions}
                </li>
                <li>
                    {this.props.exercise.rest_time}
                </li>
            </div>
        )
    }
}

export default ExerciseIndexItem;