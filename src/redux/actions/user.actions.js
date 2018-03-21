import { userConstants } from './../constants/user.constants';
import { alertActions } from './alert.actions';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const register = user => {
  return dispatch => {
    localStorage.setItem('userData', JSON.stringify(user));
    dispatch(alertActions.success('Registration successful'));
  };
};

const login = (username, password) => {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (username === user.username && password === user.password) {
      user.online = true;
      history.push('/home');
    } else {
      dispatch(alertActions.error('Uncorrect username or password'));
    }
  };
};

export const userActions = {
  login,
  register
};
