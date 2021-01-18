import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const RECEIVE_TRAINEES = 'RECEIVE_TRAINEES';
export const RECEIVE_TRAINER = 'RECEIVE_TRAINER'; 

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

//change to generic
export const receiveTrainees = users => {
  return {
  type: RECEIVE_TRAINEES, 
  users,
  }
}
//change to generic
export const receiveTrainer = user => {
  return {
    type: RECEIVE_TRAINER, 
    user
  }
}

export const receiveUser = user => {
  return {
    type: RECEIVE_USER , 
    user
  }
}


export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

//change to generic
export const requestUsers = () => dispatch => {
  return APIUtil.fetchUsers().then(users => 
    dispatch(receiveTrainees(users)
  ))
}
//change to generic
export const requestUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(user => {
    return dispatch(receiveUser(user))
  })
}

export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user).then(user => dispatch(receiveCurrentUser(user)))
}