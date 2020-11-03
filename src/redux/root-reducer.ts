import { combineReducers } from '@reduxjs/toolkit';

import { cardsReducer } from './cards/cards.reducer';
import { commentsReducer } from './comments/comments.reducer';
import { columnsReducer } from './columns/columns.reducer';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({
  cards: cardsReducer,
  comments: commentsReducer,
  columns: columnsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
