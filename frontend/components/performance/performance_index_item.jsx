import React from 'react'; 

class PerformanceIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
        const {weight, duration, rest_time, sets, repetitions, exercise} = this.props.performance
        return (
            <ul>
                <li>
                    name: {exercise.name}
                </li>
                <li>
                    description: {exercise.description}
                </li>
                <li>
                    weight: {weight}
                </li>
                <li>
                    duration: {duration}
                </li>
                <li>
                    rest time: {rest_time}
                </li>
                <li>
                    sets: {sets}
                </li>
                <li>
                    reps: {repetitions}
                </li>

            </ul>
        )
    }
}

export default PerformanceIndexItem;