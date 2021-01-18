import { connect } from 'react-redux';
import { updateUser } from "../../actions/session_actions";
import { requestUser, requestUsers } from "../../actions/session_actions";

import Profile from './profile'
const mapStateToProps = (state, ownProps) => {
    const userId = parseInt((ownProps.match.params.userId))

    const profileUser = state.entities.users[userId]; 
    const currentUser = state.entities.users[state.session.id]
    return {
        currentUser,
        profileUser
    }
};

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    requestUsers: () => dispatch(requestUsers()), 
    requestUser: (id) => dispatch(requestUser(id)), 

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
