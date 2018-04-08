import { userConstants } from './../constants/user.constants';
import { alertActions } from './alert.actions';

function currentPage(page) {
  return { type: userConstants.CURRENT_PAGE, page };
}

function register(user) {
  return dispatch => {
    user.online = false;
    localStorage.setItem('userData', JSON.stringify(user));
    dispatch(alertActions.success('Registration successful'));
  };
}

function login(username, password) {
  return dispatch => {
    function success(user) {
      return { type: userConstants.LOGIN_SUCCESS, user };
    }

    const user = JSON.parse(localStorage.getItem('userData')) || {};
    if (username === user.username && password === user.password) {
      user.online = true;
      localStorage.userData = JSON.stringify(user);
      dispatch(success(user));
      dispatch(userActions.currentPage('1'));
    } else {
      dispatch(alertActions.error('Uncorrect username or password'));
    }
  };
}

function logout() {
  return dispatch => {
    function request() {
      return { type: userConstants.LOGOUT };
    }

    const user = JSON.parse(localStorage.getItem('userData')) || {};
    user.online = false;
    localStorage.userData = JSON.stringify(user);
    dispatch(request());
  };
}

function update(username, email) {
  return dispatch => {
    function success() {
      return { type: userConstants.UPDATE_DATA };
    }

    const user = JSON.parse(localStorage.getItem('userData'));
    user.email = email;
    user.username = username;
    localStorage.userData = JSON.stringify(user);
    dispatch(alertActions.success('Changes were saved'));
    dispatch(success());
  };
}

function deleteUser() {
  return dispatch => {
    function request() {
      return { type: userConstants.DELETE };
    }

    localStorage.removeItem('userData');
    dispatch(request());
  };
}

export const userActions = {
  login,
  register,
  logout,
  deleteUser,
  update,
  currentPage
};