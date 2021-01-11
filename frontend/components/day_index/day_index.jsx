import React from "react"; 
import { importSpreadsheet } from "../../util/import_spreadsheet_util";

export default class DayIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trainerId: this.props.currentUserId, 
            traineeId: this.props.traineeId, 
            selectedFile: null
        }
        // console.log(React.version)
        this.renderList = this.renderList.bind(this)
        this.onFileChange = this.onFileChange.bind(this);
        this.onUploadHandler = this.onUploadHandler.bind(this);
    }

    componentDidMount() {
        // this.props.requestDays();
        // this.props.requestExercises();
        // this.props.requestPerformances();
        this.props.requestTraineeDayPerformances(this.props.userId); 

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
        let formData = new FormData(); 
        formData.append('trainer_id', this.state.trainerId)
        formData.append('trainee_id', this.state.traineeId)
        formData.append('file', this.state.selectedFile)
        
        importSpreadsheet(formData).then(() => {
            this.props.requestTraineeDayPerformances(this.props.userId)
        }); 
    }


    renderList(dailyDayPerformances) {
        const {daysObject, performancesObject,exercisesObject} = this.props; 
        
        return dailyDayPerformances.map( (dayPerformances,i) => {
            
            const performances = dayPerformances.map( dayPerformance => {
                return (
                    <div key={dayPerformance.id}>
                        <h2>
                            {exercisesObject[performancesObject[dayPerformance.performanceId]?.exerciseId]?.name}
                        </h2>
                        <li>weight: {performancesObject[dayPerformance.performanceId]?.weight}</li>
                        <li>duration: {performancesObject[dayPerformance.performanceId]?.duration}</li>
                        <li>sets: {performancesObject[dayPerformance.performanceId]?.sets}</li>

                    </div>
                )
            })
            return (
                <div key={i}>
                    <h1>
                        {daysObject[dayPerformances[0]?.dayId]?.name}
                    </h1>
                    
                    {performances}
                    
                </div>
            )
            
        })
    }

    renderImport(){
        let importItem; 
        if(this.props.userId !== this.props.currentUserId) {
             importItem = (
                <div>
                    <input type="file" accept=".csv" onChange={this.onFileChange.bind(this)}/>
                    <button type="button" onClick={this.onUploadHandler}>Upload</button>
                </div>
            )
        }
        return importItem;
    }

    render() {
        
        return (
            <div>
                <header>
                    Here is your schedule
                </header>

       
                {this.renderImport()}
       

                <div>
                    {this.renderList(this.props.dayPerformances)}
                </div>
                

            </div>
        )
    }


}