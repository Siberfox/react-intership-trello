import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commentsReducer from './slices/commentsSlice';
import columnsReducer from './slices/columnsSlice';
import userReducer from './slices/userSlice';
import cardsReducer from './slices/cardsSlice';

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
