import { createAction } from '@reduxjs/toolkit';

export const setCurrentUser = createAction<string>('SET_CURRENT_USER');
