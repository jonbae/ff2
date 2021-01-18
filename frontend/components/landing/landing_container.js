import { connect } from 'react-redux';

import { login, signup, logout } from '../../actions/session_actions';
import Landing from './landing';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login()),
    signup: () => dispatch(signup()),
    logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
