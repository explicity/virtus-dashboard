import { userConstants } from './../constants';

export const direction = (state = {}, action) => {
  switch (action.type) {
    case userConstants.CURRENT_PAGE:
      return {
        page: action.page
      };
    default:
      return state;
  }
};