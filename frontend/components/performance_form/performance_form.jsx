import React from 'react';
import { useHistory, Link, withRouter} from "react-router-dom";
import PerformanceItem from './performance_item'



export default class PerformanceForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            id: this.props.performance === undefined ? "" : this.props.performance.id,
            sets: this.props.performance === undefined ? 0 : this.props.performance.sets, 
            repetitions: this.props.performance === undefined ? 0 : this.props.performance.repetitions, 
            rest_time: this.props.performance === undefined ? 0 : this.props.performance.rest_time,
            weight: this.props.performance === undefined ? 0 : this.props.performance.weight, 
            duration: this.props.performance === undefined ? 0 : this.props.performance.duration,
            exercise_id: this.props.exerciseId,
            user_id: this.props.performance === undefined ? "" : this.props.performance.user_id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderExercisePerformances = this.renderExercisePerformances.bind(this)
    }

    componentDidMount(){
        this.props.requestUsers(); 
        this.props.requestExercisePerformances({id: this.props.exerciseId})
    }


    renderTraineeSelect(trainees) {
        
        let traineeSelect =  trainees.map(trainee => (
            <option key={trainee.id} value={trainee.id}>{trainee.username}</option>
        ))

        

        return (
            <select onChange={this.update('user_id')}>
                <option key={0} >--Select--</option>
                {traineeSelect}
            </select>
        )
    }

    renderExercisePerformances(performances){
        let trainees = this.props.trainees; 

        let performanceItems = performances.map( performance => {
            let trainee = trainees.find(trainee => trainee.id === performance.userId)
            return <PerformanceItem key={performance.id} performance={performance} trainee={trainee}/>
        })

        return performanceItems;
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const performance = Object.assign( {}, this.state);         
        this.props.processForm(performance)
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })

    }

    render() {
        const {sets, repetitions, rest_time, weight, duration} = this.state; 
        const mode = this.props.formType;
        return (
            <div className="new-performance-frame">
                <div className="new-performance-container">
                    <div className="new-performance-form">
                        <h3> {mode} performance</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label className="performance-field">Number of Sets</label>
                            <input type="number" value={sets} onChange={this.update('sets')}/>
                            
                            <label className="performance-field">Number of Reps</label>
                            <input type="number" value={repetitions} onChange={this.update('repetitions')}/>

                            <label className="performance-field">Rest time</label>
                            <input type="number" value={rest_time} onChange={this.update('rest_time')}/>

                            <label className="performance-field">Weight</label>
                            <input type="number" value={weight} onChange={this.update('weight')}/>

                            <label className="performance-field">Duration</label>
                            <input type="number" value={duration} onChange={this.update('duration')}/>

                            
                            {this.renderTraineeSelect(this.props.trainees)}
                            
                            <input type="submit" value={`${mode} performance`}/>
                        </form>
                    </div>


                    <div>
                        {this.renderExercisePerformances(this.props.performances)}
                    </div>
                </div>
            </div>
        )
    }
    
}
