import { createReducer } from '@reduxjs/toolkit';

import {
  addCard,
  deleteCard,
  editCardName,
  addDescription,
  deleteDescription,
} from './cards.actions';

import { Cards } from '../data';

export const cardsReducer = createReducer(Cards, {
  [addCard.type]: (state, action) => {
    const [id, value, username] = action.payload;
    return [
      ...state,
      {
        name: value,
        id: state[state.length - 1].id + 1,
        columnId: id,
        description: '',
        author: username,
      },
    ];
  },

  [deleteCard.type]: (state, action) => state.filter((item) => item.id !== action.payload),

  [editCardName.type]: (state, action) => {
    const [id, value] = action.payload;
    return state.map((item) => {
      if (item.id === id) {
        return { ...item, name: value };
      }
      return item;
    });
  },

  [addDescription.type]: (state, action) => {
    const [id, value] = action.payload;
    return state.map((item) => {
      if (item.id === id) {
        return { ...item, description: value };
      }
      return item;
    });
  },

  [deleteDescription.type]: (state, action) => {
    return state.map((item) => {
      if (item.id === action.payload) {
        return { ...item, description: '' };
      }
      return item;
    });
  },
});
