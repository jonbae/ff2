import React from 'react';
import { useHistory, Link, withRouter} from "react-router-dom";

class ExerciseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            id: this.props.exercise === undefined ? "" : this.props.exercise.id,
            name: this.props.exercise === undefined ? "" : this.props.exercise.name, 
            description: this.props.exercise === undefined ? "" : this.props.exercise.description,
            sets: this.props.exercise === undefined ? 0 : this.props.exercise.sets, 
            repetitions: this.props.exercise === undefined ? 0 : this.props.exercise.repetitions, 
            rest_time: this.props.exercise === undefined ? 0 : this.props.exercise.rest_time,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
         
        const exercise = Object.assign( {}, this.state); 
        
        this.props.processForm(exercise).then(this.props.history.push(`/exercises`))
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })

    }

    render() {
        const {name, description, sets, repetitions, rest_time} = this.state; 
        const mode = this.props.formType
        return (
            <div className="new-exercise-frame">
                <div className="new-exercise-container">
                    <div className="new-exercise-form">
                        <h3> {mode} Exercise</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label className="exercise-field">Name</label>
                            <input type="text" value={name} onChange={this.update('name')}/>
                            
                            <label className="exercise-field">Description</label>
                            <input type="text" value={description} onChange={this.update('description')}/>

                            <label className="exercise-field">Number of Sets</label>
                            <input type="number" value={sets} onChange={this.update('sets')}/>
                            
                            <label className="exercise-field">Number of Reps</label>
                            <input type="number" value={repetitions} onChange={this.update('repetitions')}/>

                            <label className="exercise-field">Rest time</label>
                            <input type="number" value={rest_time} onChange={this.update('rest_time')}/>

                            <input type="submit" value={`${mode} Exercise`}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ExerciseForm; 