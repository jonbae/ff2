import { connect } from 'react-redux';
import { selectPerformancesByDayId } from '../../reducers/selectors';
import DayShow from './day_show'
import { requestTraineeDayPerformances } from "../../actions/day_performance_actions";

const mapStateToProps = (state, ownProps) => {
    const dayId = parseInt(ownProps.match.params.dayId); 
    const traineeId = parseInt(ownProps.match.params.userId)

    const performances = selectPerformancesByDayId(state,dayId);
    const performancesWithExercise = performances.map( performance => {
        const exercise = state.entities.exercises[performance.exerciseId]
        //ordering matters because of id field
        return {...exercise, ...performance}; 
    })

    const day = state.entities.days[dayId]; 
    return {
        performancesWithExercise, 
        day, 
        traineeId
    }
};

const mapDispatchToProps = dispatch => ({
    requestTraineeDayPerformances: (id) => dispatch(requestTraineeDayPerformances(id))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DayShow);
