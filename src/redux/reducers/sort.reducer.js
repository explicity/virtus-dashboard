import { sortConstants } from './../constants';

export const sort = (state = {}, action) => {
  switch (action.type) {
    case sortConstants.SORT_STATUS:
      return {
        status: action.payload.status
      };
    default:
      return state;
  }
};
