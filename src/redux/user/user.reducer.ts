import { createReducer } from '@reduxjs/toolkit';

import { setCurrentUser } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = createReducer(INITIAL_STATE, {
  [setCurrentUser.type]: (state, action) => {
    return {
      ...state,
      currentUser: action.payload,
    };
  },
});
