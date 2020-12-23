import React, {useState} from 'react'; 
import { useHistory, Link, withRouter} from "react-router-dom";
import ExerciseIndexItem from './exercise_index_item'
import { importSpreadsheet } from "../../util/import_spreadsheet_util";

class ExerciseIndex extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.currentUser.id,
            selectedFile: null,

        }
        this.createNewExercise = this.createNewExercise.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onUploadHandler = this.onUploadHandler.bind(this);
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

    onFileChange(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          this.setState({ selectedFile: file });
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
    }

    onUploadHandler() {
        // const formData = new FormData();
        // data.append('exercise[selectedFile]', this.state.selectedFile);
        // console.log(data)

        let formData = new FormData(); 
        formData.append('id', this.state.id)
        formData.append('file', this.state.selectedFile)
        console.log(formData.getAll('id'));
        
        debugger
        
        // formData.append('number', 3)
        // console.log(formData.values())
        
        // let file = this.state.selectedFile
        importSpreadsheet(formData); 
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
                        create dummy exercise
                    </button>

                    <Link to="/exercises/new">create new exercise form</Link>
                    <input type="file" accept=".csv" onChange={this.onFileChange.bind(this)}/>
                    <button type="button" onClick={this.onUploadHandler}>Upload</button>
                </div>
                {this.renderExercises(this.props.exercises)}
            </div>
        )
    }
}


export default withRouter(ExerciseIndex); 