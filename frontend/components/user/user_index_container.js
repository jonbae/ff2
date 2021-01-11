import { connect } from "react-redux"
import UserIndex from "./user_index";
import { requestUser, requestUsers } from "../../actions/session_actions";

import { selectTrainees, selectTrainer } from "../../reducers/selectors"


const msp = (state) => {
    const currentUser = state.entities.users[state.session.id];
    const trainerId = currentUser.trainerId; 
    let trainer; 
    let traineeIds; 
    let trainees; 
    if(trainerId){ 
        status = "trainer"
        trainer = selectTrainer(state, trainerId); 
    } else {
        status = "trainee"
        traineeIds = currentUser.traineeIds
        trainees = selectTrainees(state); 
    }
    return {    
        currentUser,
        trainerId, 
        traineeIds,
        users: trainer ? trainer : trainees , 
        status

    }

}


const mdp = dispatch => ({

    requestUsers: () => dispatch(requestUsers()), 
    requestUser: (id) => dispatch(requestUser(id)), 

})


export default connect(msp, mdp)(UserIndex); 
