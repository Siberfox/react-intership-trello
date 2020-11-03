import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cardsReducer } from './cards/cards.reducer';
import { commentsReducer } from './comments/comments.reducer';
import { columnsReducer } from './columns/columns.reducer';
import { userReducer } from './user/user.reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cards: cardsReducer,
  comments: commentsReducer,
  columns: columnsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
