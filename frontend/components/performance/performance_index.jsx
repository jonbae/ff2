import React from 'react' 
import PerformanceIndexItem from './performance_index_item'

export default class PerformanceIndex extends React.Component {
    constructor(props){
        super(props) 
        this.state = {

        } 
    }

    componentDidMount(){
        this.props.requestPerformances();
        // this.props.requestExercises();
    }

    renderPerformances(performances){
        let performanceItem = performances.map( performance => (
            <PerformanceIndexItem 
                key={performance.id}
                performance={performance}
            />
        ))
        return performanceItem;
    }

    render() {
        
        return (
            <div>
                <header>
                    this is the performance index page
                </header>
                {this.renderPerformances(this.props.performances)}
            </div>
        )
    }
}

