import { connect } from 'react-redux';
import { requestExercises } from "../../actions/exercise_actions";
import { requestPerformances } from "../../actions/performance_actions";
import { selectPerformancesWithExercise } from '../../reducers/selectors';
import PerformanceIndex from "./performance_index";

const mapStateToProps = (state) => {

    const performances = selectPerformancesWithExercise(state)
    debugger
    return {
        performances
    }

};

const mapDispatchToProps = dispatch => ({
    requestPerformances: () => dispatch(requestPerformances()), 
    // requestExercises: () => dispatch(requestExercises()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerformanceIndex);
