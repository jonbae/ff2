import React from 'react'; 

export default class DayShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
        this.startExercise = this.startExercise.bind(this);
    }

    componentDidMount(){
        this.props.requestTraineeDayPerformances(this.props.traineeId); 
    }

    startExercise(){
        if ('speechSynthesis' in window) {
            var synthesis = window.speechSynthesis;

        } else {
            console.log('tts is not supported')
        }

        let utterances = ["Starting Workout"];
        this.props.performancesWithExercise.map( performanceWithExercise => 

            utterances = utterances.concat( [`starting ${performanceWithExercise.name}`, `resting for ${performanceWithExercise.rest_time} seconds`] )
        )
        debugger
        utterances.map( utterance => {
            const x = new SpeechSynthesisUtterance(utterance);
            synthesis.speak(x);
        })
        
    }

    render() {
        const { day, performancesWithExercise } = this.props;
        const performances = performancesWithExercise.map( performanceWithExercise => {
            return (
                <div key={performanceWithExercise.id}>
                    <h2>{performanceWithExercise.name}</h2>
                    <li>weight: {performanceWithExercise.weight}</li>
                    <li>duration: {performanceWithExercise.duration}</li>
                    <li>sets: {performanceWithExercise.sets}</li>
                    <li>rest: {performanceWithExercise.rest_time}</li>

                </div>
            )
        })
        return (
        
            <div>
                <h1>
                    {day?.name}
                </h1>
                <button onClick={this.startExercise}>
                    Start day exercises
                </button>
                
                {performances}
                
            </div>
        
        )
    }
}