import { userConstants } from './../constants/user.constants';
import { alertActions } from './alert.actions';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function register(user) {
  return dispatch => {
    user.online = false;
    localStorage.setItem('userData', JSON.stringify(user));
    dispatch(alertActions.success('Registration successful'));
  };
}

function login(username, password) {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('userData')) || {};
    if (username === user.username && password === user.password) {
      user.online = true;
      localStorage.userData = JSON.stringify(user);
      dispatch(success(user));
    } else {
      dispatch(alertActions.error('Uncorrect username or password'));
    }
  };

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
}

function logout() {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('userData')) || {};
    user.online = false;
    localStorage.userData = JSON.stringify(user);
    dispatch(request());
  };

  function request() {
    return { type: userConstants.LOGOUT };
  }
}

function update(username, email) {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('userData'));
    user.email = email;
    user.username = username;
    localStorage.userData = JSON.stringify(user);
    dispatch(alertActions.success('Changes were saved'));
  };
}

function deleteUser() {
  return dispatch => {
    localStorage.removeItem('userData');
    dispatch(request());

    function request() {
      return { type: userConstants.DELETE };
    }
  };
}

export const userActions = {
  login,
  register,
  logout,
  deleteUser,
  update
};
