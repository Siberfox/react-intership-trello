import { createReducer } from '@reduxjs/toolkit';

import { addComment, editComment, deleteComment } from './comments.actions';

import { Comments } from '../data';

export const commentsReducer = createReducer(Comments, {
  [addComment.type]: (state, action) => {
    const [id, value, username] = action.payload;
    return [
      ...state,
      {
        name: username,
        text: value,
        id: state[state.length - 1].id + 1,
        cardId: id,
      },
    ];
  },

  [editComment.type]: (state, action) => {
    const [id, value] = action.payload;
    return state.map((item) => {
      if (item.id === id) {
        return { ...item, text: value };
      }
      return item;
    });
  },

  [deleteComment.type]: (state, action) => {
    return state.filter((item) => item.id !== action.payload);
  },
});
