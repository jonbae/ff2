import React from "react"; 

export default class DayIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        // console.log(React.version)
        this.renderList = this.renderList.bind(this)
    }

    componentDidMount() {
        this.props.requestDays();
        this.props.requestExercises();
        this.props.requestPerformances();
        this.props.requestDayPerformances(); 
    }

    renderList(dailyDayPerformances) {
        const {daysObject, performancesObject,exercisesObject} = this.props; 
        return dailyDayPerformances.map( (dayPerformances,i) => {
            debugger
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

    render() {
        
        return (
            <div>
                <header>
                    this is the days index page
                </header>

                <div>
                    {this.renderList(this.props.dayPerformances)}
                </div>
                

            </div>
        )
    }


}