import { userConstants } from './../constants';

const user = JSON.parse(localStorage.getItem('userData'));
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state = {}, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGOUT:
      return {};
    case userConstants.DELETE:
      return {};
    case userConstants.UPDATE_DATA:
      return {
        updated: true
      };
    default:
      return state;
  }
};
