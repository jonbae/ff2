import React from 'react';
import { Link } from 'react-router-dom';



export default class PerformanceItem extends React.Component {
    constructor(props){
        super(props)
        this.state= {}
    }

    render(){
        
        return (
            <div>
                <li>
                    trainee username: 
                    {this.props.trainee.username}
                </li>
                <li>
                    weight: 
                    {this.props.performance.weight}
                </li>
                <li>
                    rest time: 
                    {this.props.performance.rest_time}
                </li>
                <li>
                    sets: 
                    {this.props.performance.sets}
                </li>
                <li>
                    repetitions: 
                    {this.props.performance.repetitions}
                </li>
                <li>
                    duration
                    {this.props.performance.duration}
                </li>
            </div>
        )
    }
}
